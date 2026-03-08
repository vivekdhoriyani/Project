require('dotenv').config();
const mongoose = require('mongoose');
const User = require('./models/User');

const checkAndUpdateUser = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to MongoDB\n');

    console.log('Listing all users:');
    const allUsers = await User.find({});
    
    if (allUsers.length === 0) {
      console.log('No users found in database');
    } else {
      allUsers.forEach(u => {
        console.log(`ID: ${u._id}`);
        console.log(`Email: ${u.email}`);
        console.log(`Role: ${u.role}`);
        console.log('---');
      });
      
      // Update first user to admin
      const firstUser = allUsers[0];
      if (firstUser.role !== 'admin') {
        firstUser.role = 'admin';
        await firstUser.save();
        console.log(`\nUpdated ${firstUser.email} to admin role`);
      }
    }
    
    process.exit(0);
  } catch (error) {
    console.error('Error:', error.message);
    process.exit(1);
  }
};

checkAndUpdateUser();
