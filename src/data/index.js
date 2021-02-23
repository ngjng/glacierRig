var faker = require("faker");

const data = (num = 1) => {
  const dataArray = [];
  for (let i = 0; i < num; i++) {
    dataArray.push({
      image: faker.image.imageUrl(),
      title: faker.name.title(),
      price: faker.commerce.price(),
      rating: Math.floor(Math.random() * Math.floor(6)),
    });
  }
  return dataArray;
};

export default data;
