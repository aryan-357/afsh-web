const express = require('express');
const cors = require('cors');
const fs = require('fs').promises;
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Data storage (in production, use a proper database)
const DATA_FILE = path.join(__dirname, 'data', 'alumni.json');

// Ensure data directory exists
async function ensureDataDir() {
  const dataDir = path.dirname(DATA_FILE);
  try {
    await fs.access(dataDir);
  } catch {
    await fs.mkdir(dataDir, { recursive: true });
  }
}

// Read alumni data
async function readAlumniData() {
  try {
    const data = await fs.readFile(DATA_FILE, 'utf8');
    return JSON.parse(data);
  } catch {
    return [];
  }
}

// Write alumni data
async function writeAlumniData(data) {
  await ensureDataDir();
  await fs.writeFile(DATA_FILE, JSON.stringify(data, null, 2));
}

// Routes
app.post('/api/alumni/register', async (req, res) => {
  try {
    const alumniData = await readAlumniData();
    
    // Check if email already exists
    const existingAlumni = alumniData.find(alumni => alumni.email === req.body.email);
    if (existingAlumni) {
      return res.status(400).json({
        success: false,
        message: 'Email already registered'
      });
    }
    
    // Add new alumni
    const newAlumni = {
      id: Date.now().toString(),
      ...req.body,
      registrationDate: new Date().toISOString(),
      status: 'pending'
    };
    
    alumniData.push(newAlumni);
    await writeAlumniData(alumniData);
    
    res.json({
      success: true,
      message: 'Registration successful',
      data: newAlumni
    });
  } catch (error) {
    console.error('Registration error:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error'
    });
  }
});

app.get('/api/alumni/check-email', async (req, res) => {
  try {
    const { email } = req.query;
    const alumniData = await readAlumniData();
    const exists = alumniData.some(alumni => alumni.email === email);
    
    res.json({ exists });
  } catch (error) {
    console.error('Email check error:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error'
    });
  }
});

app.get('/api/alumni/directory', async (req, res) => {
  try {
    const alumniData = await readAlumniData();
    
    // Only return approved alumni for public directory
    const approvedAlumni = alumniData.filter(alumni => alumni.status === 'approved');
    
    // Remove sensitive information
    const publicData = approvedAlumni.map(alumni => ({
      id: alumni.id,
      firstName: alumni.firstName,
      lastName: alumni.lastName,
      batchYear: alumni.batchYear,
      passingYear: alumni.passingYear,
      currentOccupation: alumni.currentOccupation,
      company: alumni.company,
      designation: alumni.designation,
      achievements: alumni.achievements
    }));
    
    res.json({
      success: true,
      message: 'Directory fetched successfully',
      data: publicData
    });
  } catch (error) {
    console.error('Directory fetch error:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error'
    });
  }
});

// Admin route to get all registrations (for admin panel)
app.get('/api/alumni/all', async (req, res) => {
  try {
    const alumniData = await readAlumniData();
    
    res.json({
      success: true,
      message: 'All registrations fetched successfully',
      data: alumniData
    });
  } catch (error) {
    console.error('Fetch all error:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error'
    });
  }
});

// Admin route to update alumni status
app.put('/api/alumni/:id/status', async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    
    const alumniData = await readAlumniData();
    const alumniIndex = alumniData.findIndex(alumni => alumni.id === id);
    
    if (alumniIndex === -1) {
      return res.status(404).json({
        success: false,
        message: 'Alumni not found'
      });
    }
    
    alumniData[alumniIndex].status = status;
    await writeAlumniData(alumniData);
    
    res.json({
      success: true,
      message: 'Status updated successfully',
      data: alumniData[alumniIndex]
    });
  } catch (error) {
    console.error('Status update error:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error'
    });
  }
});

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

app.listen(PORT, () => {
  console.log(`Alumni API server running on port ${PORT}`);
  console.log(`Health check: http://localhost:${PORT}/health`);
});
