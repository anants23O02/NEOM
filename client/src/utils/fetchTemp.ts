export const fetchWeather = async (lat, lon) => {
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,weathercode&daily=temperature_2m_max,temperature_2m_min&timezone=auto`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        // Extract temperatures
        const currentTemp = data.current.temperature_2m;
        const maxTemp = data.daily.temperature_2m_max[0];
        const minTemp = data.daily.temperature_2m_min[0];

        // Determine weather condition based on WMO weather codes
        const weatherCode = data.current.weathercode;
        let weatherCondition = "Unknown";

        if ([0, 1].includes(weatherCode)) {
            weatherCondition = "Clear sky";
        } else if ([2, 3].includes(weatherCode)) {
            weatherCondition = "Partly cloudy";
        } else if ([45, 48].includes(weatherCode)) {
            weatherCondition = "Foggy";
        } else if ([51, 53, 55].includes(weatherCode)) {
            weatherCondition = "Drizzle";
        } else if ([61, 63, 65].includes(weatherCode)) {
            weatherCondition = "Rainy";
        } else if ([71, 73, 75].includes(weatherCode)) {
            weatherCondition = "Snowy";
        } else if ([80, 81, 82].includes(weatherCode)) {
            weatherCondition = "Rain showers";
        } else if ([95, 96, 99].includes(weatherCode)) {
            weatherCondition = "Thunderstorm";
        }

        console.log(`Current Temp: ${currentTemp}°C`);
        console.log(`Max Temp: ${maxTemp}°C`);
        console.log(`Min Temp: ${minTemp}°C`);
        console.log(`Weather Condition: ${weatherCondition}`);

        return { currentTemp, maxTemp, minTemp, weatherCondition };
    } catch (error) {
        console.error('Error fetching weather:', error);
    }
};
