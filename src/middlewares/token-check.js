export const checkToken = async (req, res, next) => {
  if (!req.headers.authorization) {
    return res.send('Token is required');
  }

  const isValid = req.headers.authorization === process.env.APIKEY;
  if (isValid) {
    return next();
  } else {
    return res.send('Access not allowed');
  }
};
