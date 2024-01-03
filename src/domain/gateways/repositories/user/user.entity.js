const userEntity = (data) => ({
  id: data.id,
  name: data.name,
});

const userEntityList = (data) => {
  data.map((d) => userEntity(d));
};

module.exports = {
  userEntity,
  userEntityList,
};
