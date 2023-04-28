// register
const registerCtl = (req, res) => {
  res.send("register");
}

// login
const loginCtl = (req, res) => {
  res.send("login")
}

module.exports = {
  registerCtl,
  loginCtl
}
