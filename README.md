# Car Rental Reservation System - Backend

## Description

The **Car Rental Reservation System** backend is a Node.js application built with
### Express, 
### TypeScript, 
### Mongoose,
### and MongoDB. 
 This system allows users to rent cars, and administrators can manage cars and bookings. The backend provides functionalities such as car management, booking management, user authentication, and car returns. The system ensures secure authentication and authorization using JWT tokens and includes role-based access for admins and users.

---

## Features

- **User Authentication & Authorization**: Secure login and registration using JWT with role-based access (user and admin).
- **Car Management (Admin)**: Admins can add, update, and delete cars, as well as manage the availability status of cars.
- **Booking Management**: Users can book available cars, and admins can complete bookings by calculating the total cost.
- **Car Return (Admin)**: Admins can mark cars as returned, updating the availability status and calculating total rental costs.
- **CRUD Operations**: Perform create, read, update, and delete operations on users, cars, and bookings.
- **Error Handling & Validation**: API-level error handling for all endpoints with meaningful status codes and messages.

---

## Technologies Used

- **Node.js**
- **Express.js**
- **TypeScript**
- **MongoDB**
- **Mongoose**
- **JWT (JSON Web Tokens)**
- **Zod Validation**
- **ES2022**

---

## Installation & Setup

### Prerequisites

Make sure you have the following installed on your system:

- **Node.js** (v14 or higher)
- **MongoDB** (local instance or MongoDB Atlas)
- **Vercel CLI** (if deploying on Vercel)


## API Endpoints
Authentication & Users
- **POST /api/users/register - Register a new user.**
- **POST /api/users/login - Login to the system and receive a JWT token.**
## Car Management (Admin)
- **GET /api/cars - Get all cars.**
 - **POST /api/cars - Add a new car (Admin only).**
 - **PUT /api/cars/:id - Update a car by ID (Admin only).**
- **DELETE /api/cars/:id - Delete a car by ID (Admin only).**
## Booking Management
POST /api/bookings - Create a new booking (User).
- **GET /api/bookings/my-bookings - Get all bookings for the logged-in user.**
- **PUT /api/cars/return - Mark a car as returned (Admin only).**


### Clone the Repository

bash
git clonehttps:`//github.com/Saifuddinmonna/Car-Rental-Reservation-System`

# Install Dependencies
After cloning the repository, install the required dependencies by running:

bash
Copy code
npm install
Environment Variables
Create a .env file in the root directory and set the following environment variables:

plaintext
Copy code
PORT=5001
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
Running the Application
Start the Server (Development Mode)
Run the following command to start the server with Nodemon (if installed):

bash
Copy code
npm run dev
For regular Node.js execution:

bash
Copy code
npm start
Access the Application
The application will be running on ` http://localhost:5001`.



Deployment
Vercel Deployment
To deploy this project to Vercel:

Install the Vercel CLI if you haven't already:

bash
Copy code
npm install -g vercel
Run the following command to deploy your project:

# bash
Copy code
vercel
Follow the prompts to deploy.

# MongoDB Setup
Make sure your MongoDB instance is properly connected by setting the MONGO_URI environment variable with your connection string.
If using MongoDB Atlas, ensure that your IP address is whitelisted and the database cluster is running.
Contribution
Feel free to contribute to this project by submitting issues or pull requests. All contributions are welcome.

 # License
This project is licensed under the MIT License.

# Contact
For any questions or support, reach out to Saifuddin . 
Phone : 01623361191


## Conclusion (15-30 seconds)
-**Summary: Briefly summarize what you've demonstrated.**
   -**Future Enhancements: Mention any future features you'd like to implement (e.g., better reporting, advanced admin features, etc.).**
 -**Thanks: Thank the viewer for watching.**


### Explanation:
- **Headings** (`#`, `##`, etc.) are used to structure the document.
- **Lists** (`-` or `*`) are used for bullet points.
- **Code blocks** (triple backticks ``` ) are used for commands, code, or configuration files.
- **Links** (e.g., `[http://localhost:5001](http://localhost:5001)`) are used for URLs.

