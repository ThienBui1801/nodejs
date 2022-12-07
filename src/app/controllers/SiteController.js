const Course = require('../models/Course')
const {
  multipleMongooseToObject
} = require('../../util/mongoose');

class SiteController {

  // GET /news
  index(req, res, next) {

    // Course.find({}, function (err, courses) {
    //   if (!err) {
    //     return res.json(courses)
    //   };
    //   res.status(400).json({
    //     error: 'ERROR!!!!'
    //   });
    // });

    Course.find({})
      .then(courses => {

        res.render('home', {
          courses: multipleMongooseToObject(courses),
        })
      })
      .catch(next)



    // res.render('home');
  }

  // GET /news/search
  search(req, res) {
    res.render('search');
  }

}

module.exports = new SiteController;