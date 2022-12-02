
var auth = function(req, res, next) {
    if (req.session && req.session.user && req.session.admin)
      return next();
    else
    return res.send('Fallo en la autenticacion');
};

module.exports = auth;