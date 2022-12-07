const mongoose = require('mongoose');

async function connect() {

  try {
    await mongoose.connect('mongodb://localhost:27017/thien_blog_dev', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connect Successfully!!!')
  } catch (error) {
    console.log('Connect Failed');
  }

}

module.exports = {
  connect
};