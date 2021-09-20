import React from "react";
import { useState, useEffect } from "react";
import { getGoods } from "./api";

function Goods() {
  const [goods, setGoods] = useState([]);
  const [page, setPage] = useState(0);
  const [limit] = useState(2);
  const [validNextPage, setValidNextPage] = useState(true);
  const [validPrevPage, setValidPrevPage] = useState(false);

  useEffect(() => {
    getGoods(page, limit)
      .then((goods) => {
        setGoods(goods);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [page, limit]);

  const nextPage = () => {
    if (page !== limit) {
      setPage(page + 1);
      setValidPrevPage(true);
      setValidNextPage(true);
    } else {
      setValidNextPage(false);
    }
  };

  const prevPage = () => {
    if (page && limit) {
      setPage(page - 1);
      setValidNextPage(false);
      setValidNextPage(true);
    } else {
      setValidPrevPage(false);
    }
  };

  return (
    <div className="wraper">
      {page}
      {goods.map((elem) => {
        return (
          <div key={elem.id}>
            <p>{elem.title}</p>
            <p>{elem.description}</p>
            <p>{elem.price}</p>
          </div>
        );
      })}
      <button onClick={prevPage} disabled={!validPrevPage}>
        Назад
      </button>
      <button onClick={nextPage} disabled={!validNextPage}>
        Вперед
      </button>
    </div>
  );
}

export default Goods;
