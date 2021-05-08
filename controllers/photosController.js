'use strict';

exports.doGet = (req, res, next) => {
  res.send('Some photos');
};

exports.printParams = (req, res, next) => {
  res.send(req.params.title);
};
