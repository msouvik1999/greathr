import { Input } from 'antd';
import classes from "./style.module.css"
// import { useState,useEffect } from "react";


const InputField=({placeholder,type,userInputed})=>{
   const userInput=(e)=>{
      userInputed(e.target.value)
   }
   return (
    <Input placeholder={placeholder} type={type} className={classes.inputBox} onChange={userInput} required/>
   );
    
}
export default InputField;