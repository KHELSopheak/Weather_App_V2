```markdown
# React + Vite

This is Weather app built by Sopheak KHEL.
```

# My UI

- Link:

# Convention Guide

- [convention.md](./docs/convention.md)

# Project description

The Weather App is a user-friendly and intuitive application designed to provide real-time weather information to users. It aims to deliver accurate and up-to-date weather forecasts, allowing users to plan their activities accordingly.

Key Features :

- Current Weather Conditions: The app displays the current weather conditions, including temperature, humidity, wind speed, and visibility.
  - Users can quickly get an overview of the current weather at their location or any other specified location.
- Hourly and Daily Forecasts: The Weather App provides hourly and daily forecasts, enabling users to plan their day or week ahead.
  - It offers detailed information such as temperature variations, precipitation chances, and wind direction for each hour or day.
- Location-based Weather: The app utilizes the user's device location to provide accurate weather information specific to their current location.

  - Users can also search for weather updates in other cities or regions by entering the desired location manually.
  - The app is display the current day (Today is temperature) and all 24 hours timeline.
  - By default the app catch up location at Cambodia to display
  - If user search and input nothing it will display like 'Not found.'

- ## API
- I have learned how to fetch data from API and retrieve the desire data to display on my App. I learned how to get current location from user with Geolocation in Javascript.
- Forcast.json : https://api.weatherapi.com/v1/forecast.json?key=2da904978abf4bf7802145154230509&q=Cambodia&days=1&aqi=no&alerts=no

# Project management

- All of the UI prepare and designing by myself with styling and colors choose for making this shape of weather app
- Designing coding layout and styling and the other opinion use to apply in css by myself of the app
- on git problem I also ask my teamate Sereyvathana and Moonlight from AnB_prime for the support and help me faced the problem when a mistake accured.
- I also ask to my brother to explain and teach me how to fetch data API to display information data in the app in the process and managing with all the component to the main.jsx to be meaning full and readable coding and finally done the app.

- npm install -D tailwindcss postcss autoprefixer
- npx tailwindcss init
- npm install react-router-dom
- npm install @mui/material @emotion/react @emotion/styled
- npm install @mui/material @mui/styled-engine-sc styled-components
- npm install @mui/icons-material
- npm install moment react-icons

- https://emotion.sh/docs/introduction
- https://styled-components.com/

# Branches:

I used 4 main branches for my project :

- `main` branch: it represents the latest production-ready state of my project. It contains stable code that is suitable for deployment.

- `develop` branch: It is where ongoing development and integration of new features occur. It's a branch from which feature branches are created and merged back once the features are complete.

- `feature` branch: For each new feature, a dedicated feature branch was created from the develop branch. Feature branches are where the actual coding takes place. To create a feature branch.

- `release` branches: To prepare the codebase for a new release, I introduce release branches. A release branch is created from the develop branch and is used to ensure that the upcoming release is stable and ready for deployment. During this phase, only bug fixes and necessary changes are made. Once the release branch is thoroughly tested, it's merged into both the main branch for deployment and the develop branch to incorporate any last-minute fixes back into ongoing development.

# Getting Started

To run this project locally:

1. clone git repository: 'git clone https://github.com/anb-hq/Fireflies_Sopheak_Khel_WeatherApp.git'
2. Change to the cloned directory: 'cd Fireflies_Sopheak_Khel_WeatherApp'
3. run yarn
4. yarn dev

# Reference

- Open weather API (Developer Plan) - Link: https://openweathermap.org/
- shoutout to the [OpenWeatherMap](https://openweathermap.org/) for the free developer subscription.
- json file for serach country: https://github.com/dr5hn/countries-states-cities-database
- React Icons: Used to import nescessary icons for website including the sun, cloud, humidity, speed of wind and search icons

# Shape of Weather App

![Mobile Image](./docs/MobileImage.png)
![Mobile Image](./docs/MobileImage2.png)

![Web Image](./docs/WebImage.png)
![Web Image](./docs/WebImage2.png)
