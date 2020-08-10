const mongoose = require('mongoose');

/* eslint-disable */
const urlRegexp = /((https?|http)\:\/\/)?([a-z0-9]{1})((\.[a-z0-9-])|([a-z0-9-]))*\.([a-z]{2,6})(\/?)(\w+|\.|\-|\/|\?|\=|\&)*/;
/* eslint-enable */

// создание экземпляра схемы с необходимыми полями
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    minlength: [2, 'В поле "Имя" должно быть не менее 2 символов!'],
    maxlength: [30, 'В поле "Имя" должно быть не более 30 символов!'],
    required: [true, 'Поле "Имя" не является валидным! В нем должно быть от 2 до 30 символов.'],
  },
  about: {
    type: String,
    minlength: [2, 'В поле "О себе" должно быть не менее 2 символов!'],
    maxlength: [30, 'В поле "О себе" должно быть не более 30 символов!'],
    required: [true, 'Поле "О себе" не является валидным! В нем должно быть от 2 до 30 символов.'],
  },
  avatar: {
    type: String,
    validate: {
      validator: (v) => urlRegexp.test(v),
      message: 'Поле "аватар" не является валидным!',
    },
    required: true,
  },
});

// создание модели пользователя
module.exports = mongoose.model('user', userSchema);
