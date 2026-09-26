import React from 'react'
import {useState} from 'react'
import { Square } from './components/sqaure.jsx'

export const App = () => {
const[turn,setTurn]=useState("X")
const[arr,setArr]=useState(
  Array(9).fill("")
)
const handleClick=(index)=>{
  if(arr[index]===""){
    let tempArr=[...arr]
    tempArr[index]=turn
    setArr(tempArr)
    setTurn(turn==="X"?"O":"X")
  }
}
  return (
    <div style={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100vh",backgroundColor:"black",color:"white"}}>
    <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",width:"200px",height:"200px"}}>
      {arr.map((item,index)=>{
        return(
          <Square item={item} onclick={()=>handleClick(index)}/>
        )
      })
    }
  
    </div>
    <div style={{marginTop:"20px",fontSize:"24px"}}>Turn: {turn}</div>
    <button style={{marginTop:"20px",padding:"10px 20px",fontSize:"16px"}} onClick={()=>{
      setArr(Array(9).fill(""))
      setTurn("X")
    }}>Reset</button>
    </div>
  )
}
export default App
