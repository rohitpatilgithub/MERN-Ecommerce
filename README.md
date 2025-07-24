# MERN E-commerce Platform

A full-stack e-commerce web application built with the MERN (MongoDB, Express.js, React, Node.js) stack. This platform provides a complete online shopping experience with separate interfaces for customers and administrators.

## 🚀 Live Demo

[View Live Application](https://your-app-url.com) *(Update with your deployed URL)*

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
   
   Create `.env` file in the backend directory:
   ```env
   NODE_ENV=development
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_key
   JWT_EXPIRE=30d
   PAYPAL_CLIENT_ID=your_paypal_client_id
   PAYPAL_CLIENT_SECRET=your_paypal_client_secret
   CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
   CLOUDINARY_API_KEY=your_cloudinary_api_key
   CLOUDINARY_API_SECRET=your_cloudinary_api_secret
   SMTP_HOST=your_smtp_host
   SMTP_PORT=587
   SMTP_EMAIL=your_email
   SMTP_PASSWORD=your_email_password
   ```

5. **Database Setup**
   ```bash
   # Import sample data (optional)
   cd backend
   npm run data:import
   
   # Or destroy data
   npm run data:destroy
   ```

6. **Run the Application**
   
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

## Contributing

Contributions are welcome! If you'd like to contribute to this project, please follow these steps:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/your-feature-name`)
3. Make your changes and commit them (`git commit -m 'Add new feature'`)
4. Push to the branch (`git push origin feature/your-feature-name`)
5. Open a Pull Request

Please ensure your code adheres to the existing style and includes appropriate tests.

## 🚀 Available Scripts

### Backend Scripts
```bash
npm run dev          # Start development server with nodemon
npm start           # Start production server
npm run data:import # Import sample data to MongoDB
npm run data:destroy # Delete all data from MongoDB
```

### Frontend Scripts  
```bash
npm start           # Start development server
npm run build       # Create production build
npm test           # Run test suite
npm run eject      # Eject from Create React App
```

## 🚀 Deployment

### Heroku Deployment

1. **Prepare for deployment**
   ```bash
   # Create Heroku app
   heroku create your-app-name
   
   # Set environment variables
   heroku config:set NODE_ENV=production
   heroku config:set MONGO_URI=your_mongodb_uri
   heroku config:set JWT_SECRET=your_jwt_secret
   # ... add all other environment variables
   ```

2. **Deploy**
   ```bash
   git add .
   git commit -m "Deploy to Heroku"
   git push heroku main
   ```

### Other Deployment Options
- **Netlify** (Frontend)
- **Vercel** (Frontend)  
- **AWS EC2** (Full Stack)
- **DigitalOcean** (Full Stack)

## 📸 Screenshots

### Customer Interface
![Home Page](./screenshots/homepage.png)
![Product Page](./screenshots/product.png)
![Shopping Cart](./screenshots/cart.png)

### Admin Dashboard
![Admin Dashboard](./screenshots/admin-dashboard.png)
![Product Management](./screenshots/admin-products.png)
![Order Management](./screenshots/admin-orders.png)

*📝 Add screenshots to `/screenshots` folder*

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

For any questions or support, please open an issue in the GitHub repository or contact:

- **Email**: your.email@example.com
- **GitHub**: [@yourgithubusername](https://github.com/yourgithubusername)

## Acknowledgments

- Thanks to all contributors who have helped with this project
- PayPal for payment processing integration
- MongoDB for database services
- The MERN stack community for excellent documentation and support
