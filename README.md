# Next.js Cars Showcase

A modern car rental/showcase application built with Next.js 13, TypeScript, and Tailwind CSS. This application allows users to search, filter, and view car details with a beautiful, responsive interface.

## Features

- 🚗 **Car Search & Filtering**: Search by manufacturer and model with autocomplete
- 📅 **Year Filter**: Filter cars by production year (2015-2023)
- ⛽ **Fuel Type Filter**: Filter by gas or electric vehicles
- 🖼️ **Car Images**: Dynamic car images using placeholder service
- 💰 **Pricing Calculator**: Automatic rental price calculation based on MPG and year
- 📱 **Responsive Design**: Mobile-first design with Tailwind CSS
- ⚡ **Fast Performance**: Built with Next.js 13 App Router
- 🎨 **Modern UI**: Clean, accessible interface with Headless UI components

## Tech Stack

- **Framework**: Next.js 13.4.4 (App Router)
- **Language**: TypeScript 5.1.3
- **Styling**: Tailwind CSS 3.3.2
- **UI Components**: Headless UI (@headlessui/react)
- **Images**: Local static car images (no external dependencies)
- **Data**: Local dummy data (no external API required)

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd next-js-cars-showcase
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Using the Development Script

For convenience, you can use the included development script:

```bash
# Install dependencies
./scripts/dev-setup.sh install

# Start development server
./scripts/dev-setup.sh dev

# Build the project
./scripts/dev-setup.sh build

# Run linter
./scripts/dev-setup.sh lint

# Show help
./scripts/dev-setup.sh help
```

## Project Structure

```
next-js-cars-showcase/
├── app/                    # Next.js App Router pages
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── CarCard.tsx        # Individual car display
│   ├── CarDetails.tsx     # Car details modal
│   ├── CustomButton.tsx   # Reusable button
│   ├── CustomFilter.tsx   # Filter dropdown
│   ├── Hero.tsx           # Hero section
│   ├── Navbar.tsx         # Navigation
│   ├── SearchBar.tsx      # Search functionality
│   └── SearchManufacturer.tsx # Manufacturer search
├── constant/              # Static data
│   └── index.ts           # Manufacturers, years, fuels
├── types/                 # TypeScript interfaces
│   └── index.ts           # Type definitions
├── utils/                 # Utility functions
│   └── index.ts           # API functions, calculations
└── scripts/               # Development scripts
    └── dev-setup.sh       # Development helper script
```

## Data Source

This application uses local dummy data instead of external APIs. The data includes:

- **20 cars** with realistic specifications
- **Mix of gas and electric vehicles**
- **Various manufacturers**: Toyota, Honda, BMW, Audi, Mercedes-Benz, Tesla, etc.
- **Different vehicle classes**: Sedan, SUV, Compact, Sports

### Sample Car Data

```typescript
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
}
```

## Features in Detail

### Search & Filtering

- **Manufacturer Search**: Autocomplete dropdown with 40+ car manufacturers
- **Model Search**: Text input for car model names
- **Year Filter**: Dropdown with years 2015-2023
- **Fuel Type Filter**: Gas or Electricity options

### Car Display

- **Grid Layout**: Responsive grid showing car cards
- **Car Cards**: Display make, model, price, and key specs
- **Car Details Modal**: Detailed view with all specifications
- **Multiple Images**: Different angles for each car

### Pricing

- **Automatic Calculation**: Based on city MPG and vehicle age
- **Formula**: Base price + mileage factor + age factor
- **Real-time Updates**: Prices update when filters change

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Customization

### Adding More Cars

Edit the `dummyCars` array in `utils/index.ts` to add more vehicles.

### Styling

- Global styles: `app/globals.css`
- Tailwind config: `tailwind.config.js`
- Component-specific styles: Inline Tailwind classes

### Images

The app uses local static car images from the public folder, ensuring 100% reliability with no external dependencies. Each car gets a consistent image based on its make and model, with different images for different viewing angles in the car details modal.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).

## Acknowledgments

- Built with Next.js and React
- Styled with Tailwind CSS
- UI components from Headless UI
- Local car images for reliability
