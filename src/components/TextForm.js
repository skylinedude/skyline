import React, { useState } from 'react'

export default function TextForm(props) {
  const [text, setText] = useState("")
 
  const handleUpClick = () => {
    let newText = text.toUpperCase()
    setText(newText)
    props.showAlert("Converted to upper case", "success")
  }
  
  const handlelowClick = () => {
    let newText = text.toLocaleLowerCase()
    setText(newText)
    props.showAlert("Converted to lower case", "success")
  }
  const toCamelCase = () => {
    let newText = text.replace(/(?:^\w|[A-Z]|\b\w)/g, function(word, index) {
      return index === 0 ? word.toLowerCase() : word.toUpperCase();
    }).replace(/\s+/g, '')
    setText(newText)
    props.showAlert("Converted to camel case", "success")
  }

  const handleCLearClick = () => {
    let newText = ''
    setText(newText)
    props.showAlert("Text cleared", "success")
  }
  const handleCopy=()=>{
navigator.clipboard.writeText(text)
props.showAlert("Text copied", "success")
  }
 
  const handleOnChange = (e) => {
    console.log("on change")
    setText(e.target.value)
  }

  return (
    <>
      <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
        <h2 >Enter your text below</h2>
        <textarea className="form-control mb-3" value={text}  style={{backgroundColor:props.mode==='dark'?'black':'white',color:props.mode==='dark'?'white':'black'}} onChange={handleOnChange} id="myBox" rows="8"></textarea>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to upper case</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handlelowClick}>Convert to lower case</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={toCamelCase}>Camel case</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCLearClick}>Clear</button>
      </div>
      <div className="container mb-3" style={{color:props.mode==='dark'?'white':'black'}}>
        <h1>Text Utils Summary</h1>
        <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} charaters</p>
        <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} minutes to read</p>
        <h2>Text preview</h2>
        <p>{text.length>0?text:'Enter someting in textbox to preview it here'}</p>
      </div>


    </>
  )
}
