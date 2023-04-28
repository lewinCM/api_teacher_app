const { Schema, model } = require("mongoose");

const UserSchema = Schema({
  name: { type: String, required: true, },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true, },
  img: { type: String, required: false, },
  rol: { type: String, required: false, enum: ['user', 'admin', 'profesor'], default: 'user' },
  estado: { type: Boolean, default: true },

},
  {
    timestamps: true,
    versionKey: false,
  });



UserSchema.methods.toJSON = function () {
  const { __v, password, ...user } = this.toObject()
  return user;
}


module.exports = model('User', UserSchema)

