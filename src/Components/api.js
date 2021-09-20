export const getGoods = async (page, limit) => {
  try {
    const response = await fetch(
      `https://acb-api.algoritmika.org/api/goods?page=${page}&limit=${limit}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};
