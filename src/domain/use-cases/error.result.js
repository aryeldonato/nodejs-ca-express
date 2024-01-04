const errorResult = (errorCode, errorMessage) => ({
  errorResult: {
    error_code: errorCode,
    error_message: errorMessage,
  },
});

module.exports = {
  errorResult,
};
