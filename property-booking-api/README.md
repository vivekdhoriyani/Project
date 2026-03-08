# 🏠 Property Booking API

A complete RESTful API for property booking system with authentication, property management, and booking features.

## 🚀 Features

- ✅ User Authentication (JWT)
- ✅ Role-based Authorization (User/Admin)
- ✅ Property Management (CRUD)
- ✅ Booking System
- ✅ Property Search & Filters
- ✅ Beautiful Login/Signup UI (EJS)
- ✅ MongoDB Atlas Integration

## 🛠️ Tech Stack

- **Backend:** Node.js, Express.js
- **Database:** MongoDB (Atlas)
- **Authentication:** JWT (JSON Web Tokens)
- **Template Engine:** EJS
- **Styling:** CSS3

## 📋 Prerequisites

- Node.js (v14 or higher)
- MongoDB Atlas account
- npm or yarn

## ⚙️ Installation

### 1. Clone the repository
```bash
git clone https://github.com/YOUR_USERNAME/property-booking-api.git
cd property-booking-api
```

### 2. Install dependencies
```bash
npm install
```

### 3. Environment Setup
Create a `.env` file in the root directory:
```env
PORT=5000
MONGODB_URI=mongodb+srv://YOUR_USERNAME:YOUR_PASSWORD@cluster0.xxxxx.mongodb.net/property-booking?retryWrites=true&w=majority
JWT_SECRET=your_secret_key_here
JWT_EXPIRE=7d
```

**Get MongoDB Atlas URI:**
1. Create account at https://www.mongodb.com/cloud/atlas
2. Create a free cluster
3. Get connection string from "Connect" → "Connect your application"
4. Replace `<username>` and `<password>` with your credentials

### 4. Run the application
```bash
npm start
```

Server will run on `http://localhost:5000`


### Set Admin Role
```bash
node checkUser.js
```

## 📁 Project Structure

```
property-booking-api/
├── config/
│   └── db.js                 # Database configuration
├── controllers/
│   ├── authController.js     # Authentication logic
│   ├── propertyController.js # Property management
│   └── bookingController.js  # Booking management
├── middleware/
│   ├── auth.js              # JWT authentication
│   └── errorHandler.js      # Error handling
├── models/
│   ├── User.js              # User schema
│   ├── Property.js          # Property schema
│   └── Booking.js           # Booking schema
├── routes/
│   ├── authRoutes.js        # Auth routes
│   ├── propertyRoutes.js    # Property routes
│   └── bookingRoutes.js     # Booking routes
├── views/
│   ├── login.ejs            # Login page
│   ├── signup.ejs           # Signup page
│   └── dashboard.ejs        # Dashboard
├── public/
│   └── css/                 # Stylesheets
├── .env                     # Environment variables (not in repo)
├── .env.example             # Environment template
├── .gitignore              # Git ignore file
├── server.js               # Entry point
└── package.json            # Dependencies

```

## 🔐 Environment Variables

| Variable | Description | Example |
|----------|-------------|---------|
| PORT | Server port | 5000 |
| MONGODB_URI | MongoDB connection string | mongodb+srv://... |
| JWT_SECRET | Secret key for JWT | your_secret_key |
| JWT_EXPIRE | JWT expiration time | 7d |

## 🎯 Usage Examples

### Register User
```bash
POST http://localhost:5000/api/auth/register
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123"
}
```

### Create Property (Admin)
```bash
POST http://localhost:5000/api/properties
Authorization: Bearer YOUR_TOKEN
Content-Type: application/json

{
  "name": "Beach Villa",
  "description": "Beautiful beachfront property",
  "location": "Miami, FL",
  "price": 250,
  "amenities": ["WiFi", "Pool"],
  "images": ["url1.jpg"]
}
```

### Create Booking
```bash
POST http://localhost:5000/api/bookings
Authorization: Bearer YOUR_TOKEN
Content-Type: application/json

{
  "property": "PROPERTY_ID",
  "checkIn": "2025-02-01",
  "checkOut": "2025-02-05",
  "guests": 2
}
```

## 🌐 UI Pages

- **Login:** `http://localhost:5000/login`
- **Signup:** `http://localhost:5000/signup`
- **Dashboard:** `http://localhost:5000/dashboard`

## 📖 Documentation Files

- `API_TESTING_GUIDE.md` - Complete API testing guide
- `QUICK_START.md` - Quick start guide
- `API_FLOW_DIAGRAM.md` - Visual API flow
- `TESTING_CHECKLIST.md` - Testing checklist

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License.

## 👤 Author

Your Name
- GitHub: [@yourusername](https://github.com/yourusername)
- Email: your.email@example.com

## 🙏 Acknowledgments

- MongoDB Atlas for database hosting
- Express.js for the backend framework
- JWT for authentication

## 📞 Support

For support, email your.email@example.com or open an issue in the repository.

---

**⭐ If you find this project useful, please give it a star!**
