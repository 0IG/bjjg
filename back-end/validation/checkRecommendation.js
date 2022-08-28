//const db = require('../db/dbConfig');

const changeImageUrl = (req, res, next) => {
  const { image } = req.body;
  if (!image) {
    req.body.image =
      "https://dummyimage.com/400x400/6e6c6e/e9e9f5.png&text=No+Image";
  }
  next();
};

const capitalizeRecName = (req, res, next) => {
  const { name } = req.body;
  let recName = name.split(" ");

  req.body.name = recName
    .map((eachWord) => {
      return eachWord.length > 2
        ? eachWord.charAt(0).toUpperCase() + eachWord.slice(1).toLowerCase()
        : eachWord.toLowerCase();
    })
    .join(" ");
  next();
};

module.exports = {
  changeImageUrl,
  capitalizeRecName,
};
