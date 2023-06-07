import React from "react";

const Categories = () => {
  const data = [
    {
      cateImg: "./images/category/cat10.png",
      cateName: "Comida",
    },
    {
      cateImg: "./images/category/cat4.png",
      cateName: "Juguetes",
    },
    {
      cateImg: "./images/category/cat3.png",
      cateName: "Paseo",
    },
    {
      cateImg: "./images/category/cat8.png",
      cateName: "Cuidado",
    },
    {
      cateImg: "./images/category/cat5.png",
      cateName: "Para la casa",
    },
  ];

  return (
    <>
      <div className="category">
        {data.map((value, index) => {
          return (
            <div className="box f_flex" key={index}>
              <img src={value.cateImg} alt="" />
              <span>{value.cateName}</span>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Categories;
