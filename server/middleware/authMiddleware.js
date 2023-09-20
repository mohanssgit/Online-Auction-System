// Middleware to check if the user has the 'Admin' role
function isAdmin(req, res, next) {
    if (req.isAuthenticated() && req.user.roles.includes('Admin')) {
      return next();
    }
    res.status(403).json({ message: 'Access forbidden' });
  }
  
  module.exports = { isAdmin };
  