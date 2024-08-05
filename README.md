# Weatherly

Weatherly is a basic weather app that retrieves local forecast information.

Deployed URL [Weatherly](https://weatherly2.netlify.app/)

## Installation

Follow these steps to set up the project on your local machine:

### 1. Fork the Repository

Click on the "Fork" button at the top right of the page to create a copy of the repository in your GitHub account.

### 2. Clone the Repository

```bash
git clone https://github.com/admclamb/weatherly.git
cd weatherly
```

### 3. Install Dependencies

Ensure you have [Node.js](https://nodejs.org/) installed. Then, run the following command to install the necessary packages:

```bash
npm install
```

### 4. Get Your OpenWeather API Key

1. Go to the [OpenWeather API documentation](https://openweathermap.org/api).
2. Sign up or log in to your account.
3. Generate an API key.

### 5. Configure the API

Create a `.env` file in the root directory of the project and add your API key:

```env
VITE_API_SERVER_URL=
VITE_API_KEY=
```

A base sample of env file is in `.env.sample`

## Usage

To start the application, run:

```bash
npm run dev
```

Open your browser and go to `http://localhost:5173` to view the app.

## Features

- Retrieves local weather forecast information.
- Simple and user-friendly interface.
