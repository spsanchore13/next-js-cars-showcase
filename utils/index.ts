import { CarProps, FilterProps } from "@/types";

const axios = require('axios');


export async function fetchCars(filters: FilterProps) {

    const options = {
        method: 'GET',
        url: 'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars',
        params: { ...filters },
        headers: {
            'X-RapidAPI-Key': '04d2ef5322msh6483b4faa3ec632p153bcejsna15396b56d9d',
            'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
        }
    };
    try {
        const response = await axios.request(options);

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

export const updateSearchParams = (type: string, value: string) => {
    const searchParams = new URLSearchParams(window.location.search)

    searchParams.set(type, value)

    const newPathname = `${window.location.pathname}?${searchParams.toString()}`

    return newPathname;
}

