const errorHnadler = (err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  if (statusCode === 500) {
    console.error(err); // unexpected error - log full stack
  } else {
    res
      .status(statusCode)
      .json({ error: err.message || 'Internal server error' });
  }
};

module.exports = errorHnadler;
