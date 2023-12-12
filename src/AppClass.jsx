import React from "react"
import { Component } from "react";
import "./App.css"
// import elephant from "./images/elephant.jpeg";

export default class AppClass extends React.Component{
  


  // code here
  render(){
    let img_arr = this.props.imageData()
    return (
      <>
      <h1>Kalvium Gallery</h1>
      <div className='parent_div'>
        {img_arr.map((item , idx)=>{
          return (
            <img src={item.img} key={idx} alt='elphant' className='image_div'></img>
          )
        })}
      </div>
      </>
    )
  }
}
