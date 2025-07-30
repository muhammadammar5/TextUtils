import React, { useState } from 'react'

export default function TextForm(props) {

    //Event Handling functions

    //invoked upon clicking the button
    const handleUpClick = () => {

        //console.log('Upper case button was clicked,its an arrow function')

        console.log('Upper case was clicked ' + text) //what we update is printed on console,we have access text

        let upperText = text.toUpperCase(); //changed to upper case

        //setText("This is update function of useState,invoked upon clicking button") // now text="value in set text"

        setText(upperText)
        props.showAlert("Converted to upper case","success")
    }

    //converts to lower case
    const handleLoClick = () => {
        let lowerText = text.toLowerCase();
        setText(lowerText)
        props.showAlert("Converted to lower case","success") //display alert
    }

    //clears the input
    const handleclear = () => {
        let newText = '';
        setText(newText)
        props.showAlert("Text cleared","success")
    }

    //inverts the input text
    const handleInvertClick = () => {
        let invertedText = text
            .split(" ")                       // Split into words
            .map(word => word.split("").reverse().join("")) // Reverse each word
            .join(" ");                       // Join them back with spaces
        setText(invertedText);
        props.showAlert("Text Inverted","success")
    }

    //copies the text
   const copyText = () => {
    navigator.clipboard.writeText(text);
    document.getSelection().removeAllRanges();
    props.showAlert("Text Copied to Clip Board","success")
   };

   //remove extra spaces
   const handleExtraSpaces = () => {
    let newText = text.split(/\s+/).join(" ");
    setText(newText);
    props.showAlert("Extra spaces removed","success")
};

    
    //called when we change input field,gives free object
    const handleOnChange = (event) => {
        console.log('On change handled')
        setText(event.target.value) //now we can change
    }

    //using react hook
    const [text, setText] = useState(''); // can fill default value useState('Enter text here');
    //text is statevar passed as value for it to be render ,setText is updation function
    // cant update like this in react , text="hihhs"  ,text is a state here now

    return (
        <>
            <div className="container " style={{color:props.mode ==='dark' ? 'white' : '#042743'}}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control my-3 mb-2" value={text} onChange={handleOnChange}  style={{backgroundColor:props.mode ==='dark' ? '#13466e' : 'white',color:props.mode ==='dark' ? 'white' : '#042743'}}id="myBox" rows="8"></textarea>
                </div>
                {/*  disbaled buttons if no text*/}
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Upper Case</button>
                <button disabled={text.length===0}className="btn btn-danger mx-1 my-1" onClick={handleLoClick}>Convert to Lower Case</button>
                <button disabled={text.length===0}className="btn btn-success mx-1 my-1" onClick={handleclear}>Clear the Text</button>
                <button disabled={text.length===0}className="btn btn-warning mx-1 my-1" onClick={handleInvertClick}>Invert the Text</button>
                <button disabled={text.length===0}onClick={copyText} type="button" className="btn btn-secondary mx-1 my-1">Copy Text</button>
                <button disabled={text.length===0}className="btn btn-dark mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
            </div>
            <div className="container my-6" style={{color:props.mode ==='dark' ? 'white' : '#042743'}}>
                <h1 className="yo my-3">Your text summary</h1>
                <p>{text.split(/\s+/).filter((element)=>{return element.length !==0}).length} words and {text.length} characters</p>
                <p> A user takes {0.008 * text.split(" ").filter((element)=>{return element.length !==0}).length} minutes to read </p>
                <h2>Preview</h2>
                <p>{text.length>0 ?text:"Nothing to Preview"}</p>

            </div>

        </>
    )
}
