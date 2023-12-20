export async function fetchCars() {
  const headers = {
    "X-RapidAPI-Key": "f5f494507bmshdb1f05855eca7dbp18cf02jsn0d7b13c3f133",
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  };
  const response = await fetch(
    "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla",
    {
      headers: headers,
    }
  );
  const result = await response.json();

  return result;
}
