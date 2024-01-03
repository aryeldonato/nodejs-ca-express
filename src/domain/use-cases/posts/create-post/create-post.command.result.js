const createPostCommandResult = (data) => ({
  createPostCommandResult: {
    id: data.id,
    userId: data.userId,
    tittle: data.tittle,
    body: data.body,
  },
});

module.exports = {
  createPostCommandResult,
};
