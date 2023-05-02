
const models = {


  courseModel: require('./nosql/course/course'),
  userModel: require('./nosql/users/auth'),
  roleModel: require('./nosql/users/role'),
  contactModel: require('./nosql/contact/contact'),
  categoryModel: require('./nosql/course/category'),


};

module.exports = models;