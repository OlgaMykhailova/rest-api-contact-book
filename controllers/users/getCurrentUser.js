const getCurrentUser = async (req, res) => {
    res.send(req.user);
  };
  
  module.exports = getCurrentUser;
  
  