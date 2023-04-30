const { Schema, model } = require("mongoose");

const UserSchema = Schema({
  name: { type: String, required: true, },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true, },
  img: { type: String, required: false, },
  rol: { type: String, required: false, enum: ['user', 'admin', 'profesor'], default: 'user' },
  estado: { type: Boolean, default: true },
  google: { type: String, required: false },

},
  {
    timestamps: true,
    versionKey: false,
  });



UserSchema.methods.toJSON = function () {
  const { __v, _id, password, ...user } = this.toObject()
  user.uid = _id
  return user;
}


module.exports = model('User', UserSchema)

