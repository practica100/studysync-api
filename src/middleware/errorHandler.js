const errorHandler = (err, req, res, next) => {
  res.status(500).json({
    mensaje: "Error interno del servidor"
  });
};

module.exports = errorHandler;