const express = require('express');
const path = require('path');
const app = express();

// Serve static files from the Angular app's dist folder
app.use(express.static(path.join(__dirname, 'dist/login-registration/browser')));

// Handle Angular routing: Return index.html for all unmatched routes
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/login-registration/browser/index.html'));
});

// Start the app by listening on the default Heroku port or port 8080
const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
