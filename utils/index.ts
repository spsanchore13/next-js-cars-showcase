const axios = require('axios');

console.log()

export async function fetchCars() {
    const options = {
        method: 'GET',
        url: 'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars',
        params: { model: 'corolla' },
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