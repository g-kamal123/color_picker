import { TextField } from '@mui/material'
import React, { useState } from 'react'
import {colorArray} from './Data'
import classes from './Styles/ColorPicker.module.css'

function ColorPicker() {
    const [resultcolor,setResultColor] = useState('#000000')
    const [input,setInput] = useState('')

    const colorpicker = (value)=>{
        setResultColor(value)
    }
    const inputHandler =(event)=>{
        var inp =event.target.value
        // if(inp===''){alert('enter rgb value'); return}
        if(inp.length>11){
            inp = inp.substring(0,11)
        }
        let arr = inp.split(',')
        for(var i =0;i<3;i++){
            if(Number(arr[i]>255 || Number(arr[i]<0))){
                alert('enter value between -1 and 256');
                setInput('')
                setResultColor('#000000')
                return
            }
        }
        setInput(inp)
        var hexcode = rgbToHex(Number(arr[0]),Number(arr[1]),Number(arr[2]))
        setResultColor(hexcode)
    }
    const  rgbToHex= (r, g, b)=> "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);

    const  componentToHex=(c)=> {
        var hex = c.toString(16);
        // console.log(hex)
        return hex.length === 1 ? "0" + hex : hex;
    }
  return (
    
    <div className={classes.parent}>
        <TextField onChange={inputHandler} value={input} placeholder='enter like... 50,40,40' label='enter RGB value'/><span>enter like... 50,40,40</span>
        <divi className={classes.divresult} style={{backgroundColor:resultcolor}}></divi>
        <p>{resultcolor}</p>
        <divi className={classes.colorparent}>
            {colorArray.map((item)=>
            <divi className={classes.divcolor} style={{backgroundColor:item}} onClick={()=>colorpicker(item)}></divi>)}
        </divi>
    </div>
  )
}

export default ColorPicker