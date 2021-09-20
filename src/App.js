import React from "react";
import Goods from "./Components/Goods";
import "./App.css";

import { useState, useEffect } from "react";
import { getGoods } from "./Components/api";

function App() {
  const [goods, setGoods] = useState([]);
  const [page, setPage] = useState(0);
  const [validNextPage, setValidNextPage] = useState(true);
  const [validPrevPage, setValidPrevPage] = useState(false);

  useEffect(() => {
    getGoods(page)
      .then((goods) => {
        setGoods(goods);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [page]);

  const nextPage = () => {
    if (page < 3) {
      setPage(page + 1);
      setValidPrevPage(true);
      setValidNextPage(true);
    } else {
      setValidNextPage(false);
    }
  };

  const prevPage = () => {
    if (page) {
      setPage(page - 1);
      setValidNextPage(false);
      setValidNextPage(true);
    } else {
      setValidPrevPage(false);
    }
  };

  return (
    <div className="App">
      <h1 className="h1_title">Интернет-магазин "Электроник"</h1>
      <Goods
        goods={goods}
        page={page}
        nextPage={nextPage}
        prevPage={prevPage}
        validNextPage={validNextPage}
        validPrevPage={validPrevPage}
      />
    </div>
  );
}

export default App;
