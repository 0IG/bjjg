const confirmPrice = (cost) => {
  const { name, price } = cost;

  if (name == null || price == null) {
    return console.log("Missing Name || Price field.");
  }

  if (name.toLowerCase().includes("belt") && price >= 15) {
    return true;
  } else if (name.toLowerCase().includes("rashgaurd") && price >= 40) {
    return true;
  } else if (name.toLowerCase().includes("gi") && price >= 140) {
    return true;
  }
};

module.exports = confirmPrice;
