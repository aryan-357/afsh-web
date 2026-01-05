// API service for alumni registration
export interface AlumniRegistrationData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  batchYear: string;
  passingYear: string;
  currentOccupation: string;
  company: string;
  designation: string;
  address: string;
  city: string;
  state: string;
  country: string;
  achievements: string;
  message: string;
}

export interface ApiResponse {
  success: boolean;
  message: string;
  data?: any;
  error?: string;
}

class AlumniApiService {
  private baseUrl: string;

  constructor() {
    // In production, this would be your actual backend URL
    this.baseUrl = process.env.NODE_ENV === 'production' 
      ? 'https://api.afshindan.com' 
      : 'http://localhost:3001';
  }

  async registerAlumni(data: AlumniRegistrationData): Promise<ApiResponse> {
    try {
      const response = await fetch(`${this.baseUrl}/api/alumni/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...data,
          registrationDate: new Date().toISOString(),
          status: 'pending'
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || 'Registration failed');
      }

      return {
        success: true,
        message: 'Registration successful! Your application has been submitted for review.',
        data: result.data
      };
    } catch (error) {
      console.error('Alumni registration error:', error);
      return {
        success: false,
        message: error instanceof Error ? error.message : 'Registration failed. Please try again.',
        error: error instanceof Error ? error.message : 'Unknown error'
      };
    }
  }

  async validateEmail(email: string): Promise<boolean> {
    try {
      const response = await fetch(`${this.baseUrl}/api/alumni/check-email?email=${encodeURIComponent(email)}`);
      const result = await response.json();
      return !result.exists; // Return true if email doesn't exist (valid for registration)
    } catch (error) {
      console.error('Email validation error:', error);
      return true; // Allow registration if validation fails
    }
  }

  async getAlumniDirectory(): Promise<ApiResponse> {
    try {
      const response = await fetch(`${this.baseUrl}/api/alumni/directory`);
      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || 'Failed to fetch alumni directory');
      }

      return {
        success: true,
        message: 'Alumni directory fetched successfully',
        data: result.data
      };
    } catch (error) {
      console.error('Fetch alumni directory error:', error);
      return {
        success: false,
        message: error instanceof Error ? error.message : 'Failed to fetch alumni directory',
        error: error instanceof Error ? error.message : 'Unknown error'
      };
    }
  }
}

export const alumniApi = new AlumniApiService();
