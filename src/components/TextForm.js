import React, {useState} from 'react'


export default function TextForm(props) {
    const handleUpClick = ()=>{
        // console.log("Uppercase was clicked" + text);
        
        // FOR UPPERCASE 
        let newText = text.toUpperCase();
        // FOR LOWERCASE
        // let newText = text.toLowerCase();
        setText(newText)
    }
    const handleLoClick = ()=>{
        // console.log("Uppercase was clicked" + text);
        
        // FOR UPPERCASE 
        let newText = text.toLowerCase();
        // FOR LOWERCASE
        // let newText = text.toLowerCase();
        setText(newText)
    }
    

    const handleClearClick = ()=>{
        let newText = '';
        setText(newText)
    }

    const handleOnChange = (event)=>{
        // console.log("OnChange");
        setText(event.target.value);
    }

    const handleCopy = () =>{
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
    }


    const handleExtraSpaces = () => {
        let newText = text.split(/[  ]+/);
        setText(newText.join(" "))
    }

    const [text, setText] = useState('Enter Text Here');
    return (
        <>
        <div>
           
   <h1>{props.heading}</h1>
<div className="mb-3">
  <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
</div>
<button className="btn btn-primary mx-1" onClick={handleUpClick} >Convert To UpperCase</button>
<button className="btn btn-danger mx-1" onClick={handleLoClick} >Convert To LowerCase</button>
<button className="btn btn-danger mx-1" onClick={handleClearClick}>Clear Text</button>
<button className="btn btn-danger mx-1" onClick={handleCopy} >Copy Text</button>
<button className="btn btn-danger mx-1" onClick={handleExtraSpaces} >Remove Extra Spaces</button>
        </div>


<div className="container my-3">
<h2>Your Text Summary</h2>
<p>{text.split(" ").length} Words and {text.length} Characters</p>
<p>{0.008 * text.split(" ").length} Minutes Read</p>
<h2>Preview</h2>
<p>{text}</p>

</div>
</>

    )
}