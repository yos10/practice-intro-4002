'use strict';

exports.index = (req, res, next) => {
  res.send('Some photos');
};

exports.getParams = (req, res, next) => {
  res.send(req.params.title);
};
