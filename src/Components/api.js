export const getGoods = async () => {
  try {
    const response = await fetch("https://acb-api.algoritmika.org/api/goods");
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    throw error;
  }
};
