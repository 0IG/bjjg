const confirmPrice = (cost) => {
  const { name, price } = cost;

  if (name == null || price == nill) {
    return console.log("Missing Name || Price field.");
  }

  switch (priceCheck) {
    case belt:
      name.toLowerCase().contains("belt") && price >= 15;
      return true;
      break;
    case rashguard:
      name.toLowerCase().contains("rashgaurd") && price >= 40;
      return true;
      break;
    case gi:
      name.toLowerCase().contains("gi") && price >= 140;
      return true;
    default:
  }
};
