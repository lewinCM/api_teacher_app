// register
const registerCtl = (req, res) => {
  const body = req.body;
  res.send(body);
}



// login
const loginCtl = (req, res) => {
  res.send("login")
}

module.exports = {
  registerCtl,
  loginCtl
}
