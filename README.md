# eCommerce Express App with JWT Authentication

This is an eCommerce app built using **Express.js** and **Mongoose** for handling backend logic and database interactions. The app has two sections: **Admin** and **User**. **Admins** can manage products, while **Users** can browse products and add them to their cart. Both roles are authenticated using **JWT (JSON Web Token)** for authorization and **bcrypt** for password hashing. Admins can upload product images using **Multer**.

## Features

### Admin:
- View, add, update, and delete products.
- Secure login with JWT authentication.
- Admin has full control over product data.
- Admin can upload product images using **Multer**.

### User:
- Browse available products.
- Add products to cart.
- Secure login with JWT authentication.

### Authentication:
- Admin and User authentication handled with **JWT**.
- Passwords securely hashed using **bcrypt**.

### MongoDB:
- Data (products, users, admin) stored in **MongoDB** using **Mongoose**.

## Prerequisites

Before running the app, ensure you have the following installed:

- **Node.js** (v12.x or higher)
- **npm** (v6.x or higher)
- **MongoDB** (local instance or MongoDB Atlas)

## Installation

1. **Clone the repository**:
   ```bash
   git clone <repository_url>
   cd <project_directory>

2. **Install dependencies**:
    ```bash
    yarn add

3. **Set up environment variables**:
    - Create a .env file in the root of the project.
    - Add the following environment variables:

    ```bash
    JWT_KEY = YOUR_KEY
    EXPRESS_SESSION_SECRET = "YOUR_SECRET
    NODE_ENV="development" || "prodcution" // Depending on deployment

4. **Run the application**:
    ```bash
    Copy code





