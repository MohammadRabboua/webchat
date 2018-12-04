const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://mmm:123456m@ds245971.mlab.com:45971/chat', {useMongoClient: true});

mongoose.connection
  .once('open', () => console.log('Connected to the database'))
  .on('error', err => console.error(err));
