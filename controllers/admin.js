// register
const CreateAdminUser = (req, res) => {
  res.send("CreateAdminUser");
}
const AllAdminUsers = (req, res) => {
  res.send("AllAdminUsers");
}
const AdminUserById = (req, res) => {
  res.send("AdminUserById");
}
const UpdateAdminUser = (req, res) => {
  res.send("UpdateAdminUser");
}
const DeleteAdminUser = (req, res) => {
  res.send("DeleteAdminUser");
}


module.exports = {
  CreateAdminUser,
  AdminUserById,
  UpdateAdminUser,
  DeleteAdminUser,
  AllAdminUsers

}
