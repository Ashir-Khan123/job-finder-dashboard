# Job Finder Portal

A modern, responsive job portal built with React and Tailwind CSS. Users can browse jobs, search by job title and location, filter by job type, view detailed job information, save/remove jobs, and submit job applications.

# Features

Responsive job portal UI
Browse available jobs
Search jobs by title
Search jobs by location
Filter jobs by job type
Job details page
Save and remove saved jobs
Saved Jobs page
Apply Now interaction with success message
No Jobs Found state for unsuccessful searches
Job Not Found state for invalid job details
Responsive layout for desktop, tablet, and mobile
Reusable React components
React Router navigation
Local storage based saved jobs functionality

# Tech Stack

React.js
React Router
Tailwind CSS
Ant Design
React Icons
Vite
JavaScript (ES6+)

# Setup Instructions

1. Clone the repository

git clone https://github.com/Ashir-Khan123/job-finder-dashboard.git

2. Open the project

cd <project-folder>

3. Install dependencies

npm install

4. Start the development server

npm run dev

The application will be available at the local URL shown in the terminal, usually:

http://localhost:5173

Build for Production

npm run build

To preview the production build:

npm run preview

Project Structure

src/
├── components/
├── data/
├── pages/
├── routes/
├── utils/
├── assets/
└── App.jsx

Notes

This project currently uses local/static job data and browser local storage for saved jobs. It does not require a backend database to run.

Author

Ashir Khan