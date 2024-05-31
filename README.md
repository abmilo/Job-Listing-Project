# Job-Listing-Project

Ibrahim's Job Listing Project is a dynamic and responsive web application built with React.js. This project showcases a job listing website that fetches and displays job listings from an API.

## Features

- **Responsive Design:** The application is fully responsive and works seamlessly on desktops, tablets, and mobile devices.
- **API Integration:** Fetches job listings from a built-in API to display up-to-date job opportunities.
- **Modern Frontend:** Utilizes the latest React.js features and tools, including hooks and context API.

## Installation

To run this project locally, follow these steps:

### 1. Clone the Repository

```bash
git clone https://github.com/abmilo/Job-Listings-Web-App.git
cd Job-Listings-Web-App
```

### 2. Navigate to the Frontend Directory

```bash
cd frontend
```

### 3. Install Dependencies

Make sure you have Node.js and npm installed. Then, install the project dependencies:

```bash
npm install
```

### 4. Run the Development Server

Start the development server to run the application locally:

```bash
npm run dev
```

### 5. Run the API Server

In a separate terminal, start the API server to fetch job listings:

```bash
npm run server
```

## Usage

After completing the installation steps, you can access the application in your web browser at `http://localhost:3000`. The API server will be running at `http://localhost:8000`.

## Project Structure

```
Job-Listings-Web-App/
├── frontend/
│   ├── src/
│   │   ├── pages/
│   │   │   ├── JobPage.jsx
│   │   │   ├── JobsPage.jsx
│   │   │   ├── NotFoundPage.jsx
│   │   ├── components/
│   │   ├── layouts/
│   │   ├── assets/
│   │   ├── index.css
│   │   ├── main.jsx
│   ├── public/
│   ├── tailwind.config.js
│   ├── vite.config.js
│   ├── package.json
│   ├── ...
├── README.md
└── ...
```
## Technology used 

- [React.js](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Vite](https://vitejs.dev/)
