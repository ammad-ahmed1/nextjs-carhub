import { CarProps } from "@/types";

const options = {
  method: "GET",
  url: "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars",
  params: { model: "corolla" },
  headers: {
    "x-rapidapi-key": "27952c87bfmshf012359fda59ce3p10d2edjsn9ff666572a3e",
    "x-rapidapi-host": "cars-by-api-ninjas.p.rapidapi.com",
  },
};
export async function fetchCars() {
  const headers = {
    "x-rapidapi-key": "27952c87bfmshf012359fda59ce3p10d2edjsn9ff666572a3e",
    "x-rapidapi-host": "cars-by-api-ninjas.p.rapidapi.com",
  };
  const response = await fetch(
    "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla",
    { headers: headers }
  );
  const result = response.json();
  return result;
}
export const calculateCarRent = (city_mpg: number, year: number) => {
  const basePricePerDay = 50; // Base rental price per day in dollars
  const mileageFactor = 0.1; // Additional rate per mile driven
  const ageFactor = 0.05; // Additional rate per year of vehicle age

  // Calculate additional rate based on mileage and age
  const mileageRate = city_mpg * mileageFactor;
  const ageRate = (new Date().getFullYear() - year) * ageFactor;

  // Calculate total rental rate per day
  const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

  return rentalRatePerDay.toFixed(0);
};
export const generateCarImageUrl = (car: CarProps, angle?: string) => {
  const url = new URL("https://cdn.imagin.studio/getimage");
  // const url = new URL("https://cars-by-api-ninjas.p.rapidapi.com/v1/cars");
  const { make, year, model } = car;
  url.searchParams.append("customer", "hrjavascript-mastery");
  url.searchParams.append("make", make);
  url.searchParams.append("modelFamily", model.split("")[0]);
  url.searchParams.append("zoomType", "fullscreen");
  url.searchParams.append("modelYear", `${year}`);
  url.searchParams.append("angle", `${angle}`);
  console.log(car, "...car param");
  console.log(`${url}`);
  return `${url}`;
};

// export const generateCarImageUrl = (car: CarProps, angle?: string) => {
//   const { make, model, year } = car;

//   // Create a query string for Google Images
//   const query = `${make} ${model} ${year} car`;
//   const googleImagesUrl = `https://www.google.com/search?hl=en&tbm=isch&q=${encodeURIComponent(
//     query
//   )}`;

//   return `${googleImagesUrl}`;
// };
