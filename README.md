# Weather Dashboard - Professional Edition

A modern, professional weather dashboard application built with React, Vite, and TailwindCSS. Designed for working professionals who need quick, accurate weather insights.

## Features

- 🌤️ **Real-time Weather Data** - Powered by OpenMeteo API (free, no API key required)
- 🔍 **City Search** - Search for weather in any city worldwide
- 📊 **7-Day Forecast** - Detailed weekly weather predictions
- 🌡️ **Temperature Toggle** - Switch between Fahrenheit and Celsius
- 💼 **Professional Design** - Clean, modern light theme with purple accents
- 📱 **Responsive** - Works seamlessly on desktop, tablet, and mobile
- ⚡ **Fast & Lightweight** - Built with Vite for optimal performance

## Tech Stack

- **React 18** - Modern React with hooks
- **Vite** - Next-generation frontend tooling
- **TailwindCSS** - Utility-first CSS framework
- **Lucide React** - Beautiful, consistent icons
- **Axios** - Promise-based HTTP client
- **OpenMeteo API** - Free weather data API

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:3000`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Deployment

### Netlify

This app is ready for Netlify deployment:

1. Push your code to GitHub
2. Connect your repository to Netlify
3. Netlify will automatically detect the build settings from `netlify.toml`
4. Deploy!

The `netlify.toml` file is already configured with:
- Build command: `npm run build`
- Publish directory: `dist`
- SPA redirect rules for client-side routing

## Usage

1. **Search for a City**: Use the search bar at the top to find weather for any city
2. **Toggle Temperature**: Click the °F/°C button to switch between Fahrenheit and Celsius
3. **View Current Weather**: See real-time temperature, humidity, wind speed, and more
4. **Check Forecast**: Scroll down to view the 7-day weather forecast

## API Information

This application uses the free OpenMeteo API:
- No API key required
- No rate limits for personal use
- Accurate weather data from multiple sources

## License

MIT License - feel free to use this project for personal or commercial purposes.
