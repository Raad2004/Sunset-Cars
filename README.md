# Performance Car Hub

![Performance Car Hub](Car%20websites.PNG)

## Overview

**Performance Car Hub** is a modern, full-stack web application designed for car enthusiasts to explore and compare high-performance luxury vehicles. Built using the **MERN stack** (MongoDB, Express.js, React.js, Node.js), this application provides an intuitive interface for users to browse detailed vehicle specifications and make side-by-side comparisons.

## Features

### Core Functionality
- **Interactive Car Catalog** – Browse a curated selection of high-performance vehicles with comprehensive specifications.
- **Real-Time Comparison Tool** – Select and compare up to two vehicles side-by-side.
- **Dynamic Statistics** – View aggregated statistics about available vehicles.
- **Responsive Design** – Fully optimized for desktops, tablets, and mobile devices.

### Technical Features
- **Modern UI Components** – Built with React's latest features for a seamless user experience.
- **Real-Time Data Updates** – Uses MongoDB change streams for live data synchronization.
- **Optimized Performance** – Implements lazy loading and efficient state management.
- **Error Handling** – Includes graceful fallbacks for image loading and data fetching.
- **Animated Transitions** – Smooth CSS animations to enhance user interactions.

## Technology Stack

### Frontend
- **React.js** – Component-based UI development with functional components and hooks.
- **React Router** – Seamless client-side navigation.
- **CSS3** – Advanced styling using CSS Grid, Flexbox, and custom properties.
- **Modern JavaScript (ES6+)** – Utilizing the latest JavaScript features.

### Backend
- **Node.js** – Runtime environment for scalable applications.
- **Express.js** – Web framework for creating RESTful APIs.
- **MongoDB** – NoSQL database for flexible and efficient data storage.
- **Mongoose** – Object modeling library for MongoDB in Node.js.

### Key Dependencies
```json
{
  "react": "^18.2.0",
  "react-router-dom": "^6.x",
  "express": "^4.18.x",
  "mongoose": "^7.x",
  "mongodb": "^5.x"
}
```

## Architecture

### Frontend Architecture
- **Component-Based Structure** – Modular and reusable components.
- **Custom Hooks** – Shared logic and state management.
- **Responsive Design System** – Mobile-first approach using CSS Grid and Flexbox.
- **Error Boundaries** – Ensuring graceful degradation on errors.

### Backend Architecture
- **RESTful API Design** – Well-structured API endpoints.
- **MVC Pattern** – Organized code with Models, Views, and Controllers.
- **Middleware Implementation** – Authentication, logging, and error handling.
- **Optimized Database Schema** – Efficient MongoDB schemas for performance.

## API Endpoints

```http
GET /api/cars        # Retrieve all cars
GET /api/cars/:id    # Retrieve specific car details
GET /api/cars/compare # Compare selected cars
POST /api/cars       # Add new car (Admin)
PUT /api/cars/:id    # Update car details (Admin)
DELETE /api/cars/:id # Remove car from database (Admin)
```

## Database Schema

```javascript
const carSchema = new Schema({
  brand: { type: String, required: true },
  name: { type: String, required: true },
  horsepower: { type: Number, required: true },
  torque: { type: String, required: true },
  zeroToSixty: { type: String, required: true },
  price: { type: String, required: true },
  engine: { type: String, required: true },
  displacement: { type: String, required: true },
  image: { type: String, required: true },
  fallbackImage: { type: String, required: true },
  color: { type: String, required: true }
});
```

## Performance Optimizations
- **Image Optimization** – Lazy loading and fallback images.
- **Caching Strategy** – Browser and server-side caching for speed.
- **Database Indexing** – Optimized queries with MongoDB indexes.
- **Code Splitting** – Dynamic imports for improved load times.
- **Minification** – Compressed static assets for efficiency.

## Security Features
- **Input Validation** – Server-side validation for all API endpoints.
- **Error Handling** – Secure error messages and logging.
- **CORS Configuration** – Controlled cross-origin requests.
- **Rate Limiting** – API rate limits to prevent abuse.
- **Data Sanitization** – Protection against NoSQL injection.

## Future Enhancements
- **User Authentication** – Personalized user accounts.
- **Advanced Search & Filtering** – More powerful discovery tools.
- **User Reviews & Ratings** – Community-driven feedback.
- **Social Sharing** – Share comparisons with friends.
- **More Vehicle Categories** – Expanding the database with additional car specs.

## Local Development

### Clone the Repository
```bash
git clone https://github.com/yourusername/performance-car-hub.git
```

### Install Dependencies
```bash
cd performance-car-hub
npm install
```

### Set Up Environment Variables
```bash
cp .env.example .env
# Edit .env with your MongoDB connection string and other configurations
```

### Start the Development Server
```bash
npm run dev
```

## Contributing

Contributions are welcome! If you’d like to help improve this project, feel free to **submit a Pull Request**.

## License

This project is licensed under the **MIT License** – see the [LICENSE](LICENSE) file for details.

## Contact

**Raad Sarker** – [raad.sask@gmail.com](mailto:raad.sask@gmail.com)


