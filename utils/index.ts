import { CarProps, FilterProps } from "@/types";

// Dummy car data for testing
const dummyCars: CarProps[] = [
  {
    city_mpg: 23,
    class: "midsize",
    combination_mpg: 26,
    cylinders: 4,
    displacement: 2.0,
    drive: "fwd",
    fuel_type: "gas",
    highway_mpg: 30,
    make: "Toyota",
    model: "Camry",
    transmission: "a",
    year: 2022
  },
  {
    city_mpg: 28,
    class: "compact",
    combination_mpg: 32,
    cylinders: 4,
    displacement: 1.8,
    drive: "fwd",
    fuel_type: "gas",
    highway_mpg: 38,
    make: "Honda",
    model: "Civic",
    transmission: "a",
    year: 2023
  },
  {
    city_mpg: 20,
    class: "suv",
    combination_mpg: 23,
    cylinders: 6,
    displacement: 3.5,
    drive: "awd",
    fuel_type: "gas",
    highway_mpg: 27,
    make: "BMW",
    model: "X5",
    transmission: "a",
    year: 2022
  },
  {
    city_mpg: 25,
    class: "sedan",
    combination_mpg: 28,
    cylinders: 4,
    displacement: 2.5,
    drive: "fwd",
    fuel_type: "gas",
    highway_mpg: 32,
    make: "Audi",
    model: "A4",
    transmission: "a",
    year: 2023
  },
  {
    city_mpg: 22,
    class: "suv",
    combination_mpg: 25,
    cylinders: 4,
    displacement: 2.0,
    drive: "awd",
    fuel_type: "gas",
    highway_mpg: 29,
    make: "Mercedes-Benz",
    model: "GLC",
    transmission: "a",
    year: 2022
  },
  {
    city_mpg: 30,
    class: "compact",
    combination_mpg: 34,
    cylinders: 4,
    displacement: 1.6,
    drive: "fwd",
    fuel_type: "gas",
    highway_mpg: 40,
    make: "Volkswagen",
    model: "Golf",
    transmission: "a",
    year: 2023
  },
  {
    city_mpg: 18,
    class: "sports",
    combination_mpg: 21,
    cylinders: 8,
    displacement: 4.0,
    drive: "rwd",
    fuel_type: "gas",
    highway_mpg: 25,
    make: "Porsche",
    model: "911",
    transmission: "a",
    year: 2022
  },
  {
    city_mpg: 26,
    class: "sedan",
    combination_mpg: 29,
    cylinders: 4,
    displacement: 2.0,
    drive: "fwd",
    fuel_type: "gas",
    highway_mpg: 33,
    make: "Lexus",
    model: "ES",
    transmission: "a",
    year: 2023
  },
  {
    city_mpg: 24,
    class: "suv",
    combination_mpg: 27,
    cylinders: 4,
    displacement: 2.5,
    drive: "awd",
    fuel_type: "gas",
    highway_mpg: 31,
    make: "Volvo",
    model: "XC60",
    transmission: "a",
    year: 2022
  },
  {
    city_mpg: 32,
    class: "compact",
    combination_mpg: 36,
    cylinders: 4,
    displacement: 1.5,
    drive: "fwd",
    fuel_type: "gas",
    highway_mpg: 42,
    make: "Hyundai",
    model: "Elantra",
    transmission: "a",
    year: 2023
  },
  {
    city_mpg: 19,
    class: "suv",
    combination_mpg: 22,
    cylinders: 6,
    displacement: 3.0,
    drive: "awd",
    fuel_type: "gas",
    highway_mpg: 26,
    make: "Range Rover",
    model: "Sport",
    transmission: "a",
    year: 2022
  },
  {
    city_mpg: 27,
    class: "sedan",
    combination_mpg: 30,
    cylinders: 4,
    displacement: 2.0,
    drive: "fwd",
    fuel_type: "gas",
    highway_mpg: 34,
    make: "Mazda",
    model: "6",
    transmission: "a",
    year: 2023
  },
  {
    city_mpg: 21,
    class: "suv",
    combination_mpg: 24,
    cylinders: 4,
    displacement: 2.0,
    drive: "awd",
    fuel_type: "gas",
    highway_mpg: 28,
    make: "Subaru",
    model: "Forester",
    transmission: "a",
    year: 2022
  },
  {
    city_mpg: 29,
    class: "compact",
    combination_mpg: 33,
    cylinders: 4,
    displacement: 1.8,
    drive: "fwd",
    fuel_type: "gas",
    highway_mpg: 39,
    make: "Kia",
    model: "Forte",
    transmission: "a",
    year: 2023
  },
  {
    city_mpg: 17,
    class: "sports",
    combination_mpg: 20,
    cylinders: 8,
    displacement: 4.2,
    drive: "rwd",
    fuel_type: "gas",
    highway_mpg: 24,
    make: "Ferrari",
    model: "F8",
    transmission: "a",
    year: 2022
  },
  // Electric cars
  {
    city_mpg: 35,
    class: "sedan",
    combination_mpg: 38,
    cylinders: 0,
    displacement: 0,
    drive: "awd",
    fuel_type: "electricity",
    highway_mpg: 42,
    make: "Tesla",
    model: "Model 3",
    transmission: "a",
    year: 2023
  },
  {
    city_mpg: 32,
    class: "suv",
    combination_mpg: 35,
    cylinders: 0,
    displacement: 0,
    drive: "awd",
    fuel_type: "electricity",
    highway_mpg: 38,
    make: "Tesla",
    model: "Model Y",
    transmission: "a",
    year: 2023
  },
  {
    city_mpg: 30,
    class: "sedan",
    combination_mpg: 33,
    cylinders: 0,
    displacement: 0,
    drive: "fwd",
    fuel_type: "electricity",
    highway_mpg: 36,
    make: "Nissan",
    model: "Leaf",
    transmission: "a",
    year: 2022
  },
  {
    city_mpg: 28,
    class: "suv",
    combination_mpg: 31,
    cylinders: 0,
    displacement: 0,
    drive: "awd",
    fuel_type: "electricity",
    highway_mpg: 34,
    make: "Ford",
    model: "Mustang Mach-E",
    transmission: "a",
    year: 2023
  },
  {
    city_mpg: 33,
    class: "compact",
    combination_mpg: 36,
    cylinders: 0,
    displacement: 0,
    drive: "fwd",
    fuel_type: "electricity",
    highway_mpg: 40,
    make: "Chevrolet",
    model: "Bolt",
    transmission: "a",
    year: 2022
  }
];

export async function fetchCars(filters: FilterProps) {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500));

  let filteredCars = [...dummyCars];

  // Apply filters
  if (filters.make) {
    filteredCars = filteredCars.filter(car => 
      car.make.toLowerCase().includes(filters.make.toLowerCase())
    );
  }

  if (filters.model) {
    filteredCars = filteredCars.filter(car => 
      car.model.toLowerCase().includes(filters.model.toLowerCase())
    );
  }

  if (filters.year) {
    filteredCars = filteredCars.filter(car => car.year === filters.year);
  }

  if (filters.fuel_type) {
    filteredCars = filteredCars.filter(car => 
      car.fuel_type.toLowerCase() === filters.fuel_type.toLowerCase()
    );
  }

  // Apply limit
  if (filters.limit) {
    filteredCars = filteredCars.slice(0, filters.limit);
  }

  return filteredCars;
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
    // Use hero.png for all cars - it's a high-quality car image
    // This provides consistency and reliability
    return '/hero.png';
}

export const updateSearchParams = (type: string, value: string) => {
    const searchParams = new URLSearchParams(window.location.search)

    searchParams.set(type, value)

    const newPathname = `${window.location.pathname}?${searchParams.toString()}`

    return newPathname;
}

