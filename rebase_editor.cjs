const fs = require('fs');
const filePath = process.argv[2];
let content = fs.readFileSync(filePath, 'utf8');

// Replace 'pick' with 'drop' for lines containing 'Delete' or 'deleting'
const lines = content.split('\n');
const updatedLines = lines.map(line => {
    if (line.match(/^(pick|edit|reword|squash|fixup|exec|break|drop|label|reset|merge) [a-f0-9]+ /) &&
        (line.toLowerCase().includes('delete') || line.toLowerCase().includes('deleting'))) {
        return line.replace(/^pick/, 'drop');
    }
    return line;
});

fs.writeFileSync(filePath, updatedLines.join('\n'));
