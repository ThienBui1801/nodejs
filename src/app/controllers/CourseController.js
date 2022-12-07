const Course = require('../models/Course');
const {
  mongooseToObject
} = require('../../util/mongoose');

class CourseController {

  // GET /courses/:slug
  show(req, res, next) {

    Course.findOne({
        slug: req.param.slug
      })
      .then(course => {
        res.render('courses/show', { course: mongooseToObject(course) });
      })
      .catch(next)

    // res.send('COURSE DETAIL');
  }

}

module.exports = new CourseController;