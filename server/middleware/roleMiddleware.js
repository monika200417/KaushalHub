const authorizeRoles = (...roles) => {
  return (req, res, next) => {
    console.log("USER FROM TOKEN:", req.user);
    if (!roles.includes(req.user.role)) {
      return res
        .status(403)
        .json({ message: "Access denied for this role" });
    }
    next();
  };
};

module.exports = authorizeRoles;
