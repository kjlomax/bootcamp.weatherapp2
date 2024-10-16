import { Router } from 'express';
const router = Router();

// import HistoryService from '../../service/historyService.js';
import WeatherService from '../../service/weatherService.js';

// TODO: POST Request with city name to retrieve weather data
router.post('/', (_req, _res) => {
  // TODO: GET weather data from city name
  
  // TODO: save city to search history
});

router.get('/:city', async (req, res) => {
  let data = await WeatherService.getWeatherForCity(req.params.city)
  res.send(`See ${data}`);
});

// TODO: GET search history
router.get('/history', async (_req, _res) => {});

// * BONUS TODO: DELETE city from search history
router.delete('/history/:id', async (_req, _res) => {});

export default router;
