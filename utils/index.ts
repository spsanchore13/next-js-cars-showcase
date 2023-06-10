import { CarProps } from "@/types";

const axios = require('axios');

console.log()

export async function fetchCars() {
    const options = {
        method: 'GET',
        url: 'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars',
        params: { model: 'q3' },
        headers: {
            'X-RapidAPI-Key': process.env.XRAPIDAPIKEY,
            'X-RapidAPI-Host': process.env.XRAPIDHOST
        }
    };
    try {
        const response = await axios.request(options);
        // console.log(response.data);
        return response.data;
    } catch (error) {
        console.error(error);
    }

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
    const url = new URL('https://cdn.imagin.studio/getimage')
    const { make, year, model } = car;

    url.searchParams.append("customer", "hrjavascript-mastery")
    url.searchParams.append("make", make)
    url.searchParams.append("modelFamily", model.split(" ")[0])
    url.searchParams.append("zoomType", "fulsscreen")
    url.searchParams.append("modelYear", `${year}`)
    url.searchParams.append("angle", `${angle}`)
    return `${url}`
}

