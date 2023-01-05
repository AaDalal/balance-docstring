import React, {useState} from 'react';

function DocstringInput() {
  const parse = (length, inputText) => {
    console.log(inputText)
    const re = new RegExp(`(?:[\\s\\S]{0,${length - 2}}\\S\\b)|(?:\\S*?\\b)`, "g")
    console.log(re.toString())
    const lines = inputText.match(re) || []
    console.log(lines)
    return lines.join("\n")
  }
  

  const [inputField, setInputField] = useState("")
  const [numChars, setNumChars] = useState(100)

  const inputFieldChange = (event) => {
    setInputField(event.target.value);
  }
  
  const numCharsChange = (event) => {
    let num = Math.max(3, event.target.value)
    setNumChars(num);
  }

  return (
      <div>
          <textarea 
          type="text" 
          name="inputDocstring" 
          onChange={inputFieldChange} 
          placeholder='""""your docstring..."""'
          style={{FontFace: "monospace"}}
          cols="100"
          rows="25"
          value={inputField}/>           
          <br/>

          <textarea 
          type="text" 
          name="outputDocstring" 
          cols="100"
          rows="25"
          disabled
          placeholder='"""...nicely formatted"""' 
          value={parse(numChars, inputField)}/>

          <br/>

          <input
          type="number"
          name="numChars"
          onChange={numCharsChange}
          placeholder="ex: 100"
          value={numChars}
          />
      </div>  
  )
}

export default DocstringInput