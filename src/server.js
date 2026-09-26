const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

// تحميل متغيرات البيئة
dotenv.config();

// الاتصال بقاعدة البيانات
connectDB();

const app = express();

// Middleware لقراءة البيانات بصيغة JSON
app.use(express.json());

// مسار تجريبي للتأكد أن السيرفر يعمل
app.get('/', (req, res) => {
  res.json({ message: 'CakeDesign API is running successfully!' });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});