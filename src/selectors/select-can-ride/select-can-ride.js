import { selectCurrentWeather } from '../../store/current-weather/current-weather';
import { selectWeatherTolerance } from '../../store/weather-tolerance/weather-tolerance';
import { RAIN_TOLERANCE_MODES_UNRIDEABLE_WEATHER_CONDITION_CODES } from '../../constants/rain-tolerance-modes-unrideable-weather-condition-codes';
import { TEMPERATURE_MAXIMUM } from '../../constants/temperature-maximum';

export const selectCanRide = (state = {}) => {
  const currentWeather = selectCurrentWeather(state);
  const weatherTolerance = selectWeatherTolerance(state);

  const { conditionId, temperatureMax, temperatureMin, windSpeed } = currentWeather;
  const { rainToleranceMode, temperatureMinimum, windSpeedMaximum } = weatherTolerance;

  if (windSpeed > windSpeedMaximum) return false;
  if (temperatureMax > TEMPERATURE_MAXIMUM) return false;
  if (temperatureMin < temperatureMinimum) return false;
  if (RAIN_TOLERANCE_MODES_UNRIDEABLE_WEATHER_CONDITION_CODES[rainToleranceMode].includes(conditionId)) return false;
  // TODO: maybe handle visibility distance here?

  return true;
};
