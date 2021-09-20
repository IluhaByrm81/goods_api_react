import React from "react";
import "./Goods.css";

function Goods({ goods, nextPage, prevPage, validNextPage, validPrevPage }) {
  return (
    <div className="container">
      <div className="box">
        {goods.map((elem) => {
          return (
            <div key={elem.id} className="card_box">
              <h3 className="card_title">{elem.title}</h3>
              <p className="card_description">{elem.description}</p>
              <div className="card_price">$ {elem.price}</div>
            </div>
          );
        })}
      </div>
      <div className="btn">
        <button
          onClick={prevPage}
          disabled={!validPrevPage}
          className="prev_btn"
        >
          Назад
        </button>
        <button
          onClick={nextPage}
          disabled={!validNextPage}
          className="next_btn"
        >
          Вперед
        </button>
      </div>
    </div>
  );
}

export default Goods;
