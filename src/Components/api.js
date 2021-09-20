export const getGoods = async (page) => {
  try {
    const response = await fetch(
      `https://acb-api.algoritmika.org/api/goods?page=${page}&limit=2`
    );
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    throw error;
  }
};
