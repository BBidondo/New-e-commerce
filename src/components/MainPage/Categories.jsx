import React from "react";
import { connect } from 'react-redux';
import { setFilterCategory } from '../../common/redux/actions';


const mapDispatchToProps = (dispatch) => {
  return {
    setFilterCategory: (payload) => dispatch(setFilterCategory(payload)),
  };
};



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
        {data.map((item, index) => {
          return (
            <div className="box f_flex" key={index} onClick={() => setFilterCategory(item.cateName)}>
              <img src={item.cateImg} alt="" />
              <span>{item.cateName}</span>
            </div>
          );
        })}
      </div>
    </>
  );
  
};



export default connect(null, mapDispatchToProps)(Categories);