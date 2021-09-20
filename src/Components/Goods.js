import React from "react";
import { useState, useEffect } from "react";
import { getGoods } from "./api";

function Goods() {
  const [goods, setGoods] = useState([]);

  useEffect(() => {
    getGoods()
      .then((goods) => {
        setGoods(goods);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="wraper">
      {goods.map((elem) => {
        return (
          <div key={elem.id}>
            <p>{elem.title}</p>
            <p>{elem.description}</p>
            <p>{elem.price}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Goods;
