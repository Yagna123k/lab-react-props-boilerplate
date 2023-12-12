
import './App.css';
import elephant from "./images/elephant.jpeg";
import React from "react"


function App({imageData}) {

  let img_arr = imageData()
  console.log(img_arr)
  
  return (
    <>
    <h1>Kalvium Gallery</h1>
    <div className='parent_div'>
      {/* <img src={img_arr[0].img} className='image_div' alt="" />
      <img src={img_arr[1].img} className='image_div' alt="" />
      <img src={img_arr[2].img} className='image_div' alt="" />
      <img src={img_arr[3].img} className='image_div' alt="" /> */}
      {img_arr.map(item=>{
        return (
          <img src={item.img} alt='elphant' className='image_div'></img>
        )
      })}
    </div>
    </>
  )
}

export default App;
