const mongoose = require('mongoose');

/* eslint-disable */
const urlRegexp = /^((https?|http)\:\/\/)?([a-z0-9]{1})((\.[a-z0-9-])|([a-z0-9-]))*\.([a-z]{2,6})(\/?)(\w+|\.|\-|\/|\?|\=|\&)*$/;
/* eslint-enable */

// создание экземпляра схемы с необходимыми полями
const cardSchema = new mongoose.Schema({
  name: {
    type: String,
    minlength: [2, 'В поле "Имя" должно быть не менее 2 символов!'],
    maxlength: [30, 'В поле "Имя" должно быть не более 30 символов!'],
    required: [true, 'Поле "Имя" не является валидным! В нем должно быть от 2 до 30 символов.'],
  },
  link: {
    type: String,
    validate: {
      validator: (v) => urlRegexp.test(v),
      message: 'Поле "Ссылка" не является валидным!',
    },
    required: [true, 'В данном поле должна быть ссылка!'],
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
    required: true,
  },
  likes: {
    type: [mongoose.Schema.Types.ObjectId],
    default: [],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// создание модели карточки
module.exports = mongoose.model('card', cardSchema);
