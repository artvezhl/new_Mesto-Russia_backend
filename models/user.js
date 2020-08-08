const mongoose = require('mongoose');

/* eslint-disable */
const urlRegexp = /((https?|http)\:\/\/)?([a-z0-9]{1})((\.[a-z0-9-])|([a-z0-9-]))*\.([a-z]{2,6})(\/?)(\w+|\.|\-|\/|\?|\=|\&)*/;
/* eslint-enable */

// создание экземпляра схемы с необходимыми полями
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minLength: 2,
    maxLength: 30,
  },
  about: {
    type: String,
    required: true,
    minLength: 2,
    maxLength: 30,
  },
  avatar: {
    type: String,
    validate: {
      validator: (v) => urlRegexp.test(v),
    },
    required: true,
  },
});

// создание модели пользователя
module.exports = mongoose.model('user', userSchema);
