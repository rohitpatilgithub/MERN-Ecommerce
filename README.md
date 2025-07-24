# MERN E-commerce Platform

A full-stack e-commerce web application built with the MERN (MongoDB, Express.js, React, Node.js) stack. This platform provides a complete online shopping experience with separate interfaces for customers and administrators.

## 📋 Description

This comprehensive e-commerce solution features two distinct user roles:

- **👨‍💼 Admin**: Complete platform management including inventory control, order processing, user management, and analytics
- **🛍️ Customer**: Seamless shopping experience with product browsing, secure checkout, order tracking, and review system

## ✨ Features

### 🔧 Admin Dashboard
- **Order Management**: View, update status, and manage all customer orders
- **Product Management**: Add, edit, delete products with image upload
- **Inventory Control**: Track stock levels and manage product availability  
- **User Management**: View and manage customer accounts
- **Sales Analytics**: Dashboard with revenue insights and order statistics
- **Category Management**: Organize products into categories

### 🛒 Customer Features
- **Product Catalog**: Browse products with advanced filtering and search
- **Product Details**: Detailed product pages with multiple images and reviews
- **Shopping Cart**: Add/remove items with quantity management
- **Secure Checkout**: Multiple payment options including PayPal integration
- **User Authentication**: Registration, login, and profile management
- **Order Tracking**: View order history and current order status
- **Product Reviews**: Rate and review purchased products
- **Wishlist**: Save favorite products for later

## 🛠️ Tech Stack

**Frontend:**
- ⚛️ React.js - User interface library
- 🎨 Material-UI / Bootstrap - UI component library
- 🔄 Redux / Context API - State management
- 🚦 React Router - Client-side routing

**Backend:**
- 🟢 Node.js - Runtime environment  
- 🚀 Express.js - Web framework
- 🍃 MongoDB - NoSQL database
- 🔐 JWT - Authentication
- 📧 Nodemailer - Email service

**Payment & Services:**
- 💳 PayPal API - Payment processing
- ☁️ Cloudinary - Image storage and management

## 📦 Installation & Setup

### Prerequisites
- Node.js (v14.0.0 or higher)
- npm or yarn package manager
- MongoDB (local installation or MongoDB Atlas)
- PayPal Developer Account

### 🔧 Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/rohitpatilgithub/MERN-Ecommerce.git
   cd MERN-Ecommerce
   ```

2. **Backend Setup**
   ```bash
   cd backend
   npm install
   ```

3. **Frontend Setup**
   ```bash
   cd frontend
   npm install
   ```

4. **Environment Variables**
   # 🛒 MERN E-commerce Application

A full-stack e-commerce application built with the MERN stack (MongoDB, Express.js, React.js, Node.js) featuring user authentication, product management, shopping cart, and payment processing.

## 🚀 Features

- **User Authentication**: JWT-based authentication system
- **Product Management**: CRUD operations for products with image upload
- **Shopping Cart**: Add, remove, and manage items
- **Payment Processing**: Integrated with Stripe and PayPal
- **Image Upload**: Cloudinary integration for product images
- **Responsive Design**: Mobile-friendly user interface
- **Admin Dashboard**: Manage products, orders, and users

## 🛠️ Tech Stack

**Frontend:**
- React.js
- React Router
- Axios
- CSS3/SCSS

**Backend:**
- Node.js
- Express.js
- MongoDB with Mongoose
- JWT Authentication
- Multer (file upload)

**Third-party Services:**
- Cloudinary (image storage)
- Stripe (payment processing)
- PayPal (payment processing)

## 📋 Prerequisites

Before running this project, make sure you have the following installed:
- Node.js (v14 or higher)
- npm or yarn
- MongoDB (local or cloud instance)
- Git

## ⚙️ Environment Setup

### Clone the Repository
```bash
git clone <your-repository-url>
cd mern-ecommerce
```

### Install Dependencies
```bash
# Install server dependencies
cd server
npm install

# Install client dependencies
cd ../client
npm install
```

### Environment Variables Configuration

Create a `.env` file inside the `server/` directory with the following variables:

```env
# Server Configuration
PORT=5000

# Database Configuration
MONGO_URI=mongodb://127.0.0.1:27017/mern-ecommerce
# For MongoDB Atlas (cloud):
# MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/<dbname>?retryWrites=true&w=majority

# Authentication
JWT_SECRET=your_jwt_secret_here

# Cloudinary Configuration (Image Upload Service)
CLOUDINARY_CLOUD_NAME=''
CLOUDINARY_API_KEY=''
CLOUDINARY_API_SECRET=''

# Stripe Payment Configuration
STRIPE_SECRET_KEY=''

# Frontend Configuration
FRONTEND_URL=http://localhost:3000

# PayPal Payment Configuration
PAYPAL_MODE=sandbox
PAYPAL_CLIENT_ID=''
PAYPAL_CLIENT_SECRET=''
```

### 🔍 Environment Variables Explained

| Variable | Description | Example |
|----------|-------------|---------|
| `PORT` | Server port number | `5000` |
| `MONGO_URI` | MongoDB connection string | Local or Atlas URI |
| `JWT_SECRET` | Secret key for JWT token generation | Any secure random string |
| `CLOUDINARY_CLOUD_NAME` | Your Cloudinary cloud name | From Cloudinary dashboard |
| `CLOUDINARY_API_KEY` | Cloudinary API key | From Cloudinary dashboard |
| `CLOUDINARY_API_SECRET` | Cloudinary API secret | From Cloudinary dashboard |
| `STRIPE_SECRET_KEY` | Stripe secret key for payments | Starts with `sk_test_` for testing |
| `FRONTEND_URL` | Frontend application URL | `http://localhost:3000` |
| `PAYPAL_MODE` | PayPal environment mode | `sandbox` for testing, `live` for production |
| `PAYPAL_CLIENT_ID` | PayPal application client ID | From PayPal developer dashboard |
| `PAYPAL_CLIENT_SECRET` | PayPal application secret | From PayPal developer dashboard |

## 🚦 Getting Started

### 1. Start MongoDB
Make sure MongoDB is running on your system:
```bash
# For local MongoDB
mongod

# Or use MongoDB Compass/Atlas for cloud database
```

### 2. Run the Application
```bash
# Start the backend server (from server directory)
cd server
npm run dev

# Start the frontend (from client directory - in a new terminal)
cd client
npm start
```

The application will be available at:
- Frontend: http://localhost:3000
- Backend API: http://localhost:5000

## 📁 Project Structure

```
mern-ecommerce/
├── client/                 # React frontend
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── context/
│   │   └── utils/
│   └── package.json
├── server/                 # Node.js backend
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── utils/
│   ├── .env               # Environment variables
│   └── package.json
└── README.md
```

## 🔐 Security Notes

**Important**: The API keys and secrets shown in this example are for demonstration purposes only. In a real application:

1. **Never commit `.env` files** to version control
2. **Use strong, unique secrets** for JWT and other sensitive data
3. **Rotate API keys regularly**
4. **Use environment-specific configurations** for development, staging, and production
5. **Enable two-factor authentication** on all third-party service accounts

## 📚 API Endpoints

### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `GET /api/auth/profile` - Get user profile

### Products
- `GET /api/products` - Get all products
- `GET /api/products/:id` - Get single product
- `POST /api/products` - Create product (admin)
- `PUT /api/products/:id` - Update product (admin)
- `DELETE /api/products/:id` - Delete product (admin)

### Orders
- `POST /api/orders` - Create new order
- `GET /api/orders` - Get user orders
- `GET /api/orders/:id` - Get single order

**Run the Application**
   
   Backend (Terminal 1):
   ```bash
   cd backend
   npm run dev
   ```
   
   Frontend (Terminal 2):
   ```bash
   cd frontend
   npm start
   ```

The application will be available at:
- Frontend: `http://localhost:3000`
- Backend API: `http://localhost:5000`

## 📱 Usage Guide

### For Customers:

1. **🏠 Home Page**: Browse featured products and categories
2. **🔍 Product Search**: Use search bar and filters to find products
3. **📄 Product Details**: View detailed information, images, and reviews
4. **🛒 Shopping Cart**: Add items and manage quantities
5. **💳 Checkout**: Secure payment processing with PayPal
6. **📊 User Dashboard**: Manage profile and view order history
7. **⭐ Reviews**: Rate and review purchased products

### For Administrators:

1. **🔐 Admin Login**: Access admin panel with admin credentials
2. **📈 Dashboard**: View sales analytics and platform statistics  
3. **📦 Order Management**: Process and update order statuses
4. **🏪 Product Management**: Add, edit, or remove products
5. **👥 User Management**: Manage customer accounts
6. **📊 Reports**: Generate sales and inventory reports

### Default Admin Credentials:
```
Email: admin@admin.com
Password: 123456
```
*⚠️ Change these credentials after first login*

## API Endpoints

### Authentication
- `POST /api/users/login` - User login
- `POST /api/users/register` - User registration
- `GET /api/users/profile` - Get user profile
- `PUT /api/users/profile` - Update user profile

### Products
- `GET /api/products` - Get all products
- `GET /api/products/:id` - Get single product
- `POST /api/products` - Create product (Admin only)
- `PUT /api/products/:id` - Update product (Admin only)
- `DELETE /api/products/:id` - Delete product (Admin only)

### Orders
- `POST /api/orders` - Create new order
- `GET /api/orders/:id` - Get order by ID
- `PUT /api/orders/:id/pay` - Update order to paid
- `GET /api/orders/myorders` - Get logged in user orders
- `GET /api/orders` - Get all orders (Admin only)

## 🗂️ Project Structure

```
MERN-Ecommerce/
├── 📁 backend/
│   ├── 📁 config/          # Database & app configuration
│   ├── 📁 controllers/     # Route controllers
│   ├── 📁 data/           # Sample data for seeding
│   ├── 📁 middleware/     # Custom middleware (auth, error handling)
│   ├── 📁 models/         # MongoDB data models
│   ├── 📁 routes/         # API routes
│   ├── 📁 utils/          # Utility functions
│   ├── 📄 server.js       # Express server setup
│   └── 📄 package.json
├── 📁 frontend/
│   ├── 📁 public/         # Static files
│   ├── 📁 src/
│   │   ├── 📁 components/ # Reusable components
│   │   ├── 📁 pages/      # Page components
│   │   ├── 📁 redux/      # Redux store & slices
│   │   ├── 📁 utils/      # Helper functions
│   │   ├── 📁 assets/     # Images, styles
│   │   └── 📄 App.js      # Main App component
│   └── 📄 package.json
├── 📁 uploads/            # File upload directory
├── 📄 README.md
└── 📄 package.json        # Root package.json
```
