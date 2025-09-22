export function age(planet: string, seconds: number): number {
  const planets: { [key: string]: number } = {
    'earth': 1,
    'mercury': 4.152018690727338,
    'venus': 1.625494885981774,
    'mars': 0.5316841766216553,
    'jupiter': 0.0842984451573283,
    'saturn': 0.0339587424371334,
    'uranus': 0.0119023749118123,
    'neptune': 0.0060682807808081
  }

  return parseFloat(((seconds/31557600)*planets[planet]).toFixed(2));
}
