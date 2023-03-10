import React,{useState} from 'react'

export default function TextForm (props) {
const [text,setText] = useState("");


const uppercase = ()=>{
  // console.log("uppercase clicked")
  let newtext=text.toUpperCase();
  setText(newtext);
  if(text!==""){ 
    props.showalert(" : text is converted into uppercase","success")
  } else{
    props.showalert(" : Enter text first in the text box","success")

  }

}

const copy = ()=>{
  var copyText = document.getElementById("exampleFormControlTextarea1");
  copyText.select();
  navigator.clipboard.writeText(text);
  if(text!==""){ 
    props.showalert(" : text is copied","success")
  } else{
    props.showalert(" : Enter text first in the text box","success")

  }
}

const clear = ()=>{
  // console.log("uppercase clicked")
  setText("");
  if(text!==""){ 
    props.showalert(" : text is Clear","success")
  } else{
    props.showalert(" : Enter text first in the text box","success")

  }

}

const lowercase = ()=>{
  console.log("uppercase clicked")
  let newtext=text.toLowerCase();
  setText(newtext);
  if(text!==""){ 
    props.showalert(" : text is converted into lowercase","success")
  } else{
    props.showalert(" : Enter text first in the text box","success")

  }

}

const handleOnchange = (event)=>{
  console.log("handle onchaneg")
  setText(event.target.value)

 
}

  return (
    
    <>
    
    <div className="container my-4">
      <h1>{props.heading}</h1>
    <div className="mb-3 my-2">
  <textarea className="form-control" id="exampleFormControlTextarea1" onChange={handleOnchange} style={{backgroundColor: props.mode==="light"?"white":"#343a40",color:props.mode==="light"?"black":"white"}} value={text} rows="8" placeholder="Enter text here"></textarea>
      
</div>
<button className="btn btn-secondary mx-2 my-1" onClick={uppercase}>Convert to UpperCase</button>
<button className="btn btn-secondary mx-2 my-1" onClick={lowercase}>Convert to LowerCase</button>
<button className="btn btn-secondary my-1 mx-2" onClick={clear}>Clear text</button>
<button className="btn btn-secondary mx-2 my-1" onClick={copy}>Copy text</button>
    </div>
    <div className="container my-4">
      <h1>Your Text Summry</h1>
      <p>{text.split(/\s+/).filter(word => word !== '').length} Words and {text.length} Character</p>
      <p>{0.008 * text.split(" ").filter(word => word !== '').length} Minutes for Read</p>
      <h3>Preview of your text</h3>
      <hr/>
      <p>{text===""?"Enter text in above textbox for Preview here":text}</p>
      <hr/>
     
      </div>
    </>
  )
}
