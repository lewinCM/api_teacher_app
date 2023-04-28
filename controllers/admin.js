// register
const CreateAdminUser = (req, res) => {
  const body = req.body;
  res.send(body);

}
const AllAdminUsers = (req, res) => {
  const { q, nombre, apiKey } = req.query;
  res.json({
    msg: 'AllAdminUsers',
    q,
    nombre,
    apiKey
  });
}
const AdminUserById = (req, res) => {
  const id = req.params.id;
  res.json({
    msg: 'AdminUserById',
    id,
  });

}
const UpdateAdminUser = (req, res) => {
  const id = req.params.id;
  res.json({
    msg: 'UpdateAdminUser',
    id,
  });
}
const DeleteAdminUser = (req, res) => {
  const id = req.params.id;
  res.json({
    msg: 'delete',
    id,
  });
}


module.exports = {
  CreateAdminUser,
  AdminUserById,
  UpdateAdminUser,
  DeleteAdminUser,
  AllAdminUsers

}
