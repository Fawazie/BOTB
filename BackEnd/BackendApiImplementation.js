const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose'); // Example for MongoDB

dotenv.config();

const connectDB = require('./config/db');
connectDB();

const app = express();

// Middleware
const applyMiddleware = require('./middleware');
applyMiddleware(app);

// Routes
const authRoutes = require('./routes/authRoutes');
const uploadRoutes = require('./routes/uploadRoutes');
const aiRoutes = require('./routes/aiRoutes');

app.use('/api/auth', authRoutes);
app.use('/api/ai', aiRoutes);
app.use('/api/upload', uploadRoutes);

// Error handler
app.use(require('./errorHandler'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Xylo Solutions backend running on port ${PORT}`);
  console.log(`Environment: ${process.env.NODE_ENV}`);
});

module.exports = (app) => {
  app.use(helmet());
  app.use(cors());
  app.use(express.json({ limit: '50mb' }));
  app.use(morgan('combined'));
  app.use(compression());
  app.use('/api/', apiLimiter);
};