const mongoose = require('mongoose');

mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/event_flow_db',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);
// Export connection 
module.exports = mongoose.connection;
