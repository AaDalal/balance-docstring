import React, {useState} from 'react';

function DocstringInput() {
  const parse = (length, inputText) => {
    const re = new RegExp(`\\S[\\s\\S]{0,${length-1}}(?=(?:\\s|$))|\\S[\\s\\S]{${length-1}}\\S+`, "g")
    // split paragraphs
    const paragraphs = inputText.split(/\n\s*\n/)
    const parsedParagraphs = paragraphs.map((paragraph) => {
      const lines = paragraph.replace("\n", " ").match(re) || []
      return lines.filter((line) => !!line).join("\n")
    })
    return parsedParagraphs.join("\n\n")
  }
  

  const [inputField, setInputField] = useState("")
  const [numChars, setNumChars] = useState(100)
  const [tmpNumChars, setTmpNumChars] = useState(100)

  const inputFieldChange = (event) => {
    setInputField(event.target.value);
  }
  
  const tmpNumCharsChange = (event) => {
    setTmpNumChars(event.target.value)
    console.log(numChars, tmpNumChars)
  }

  const handleNumCharsConfirm = () => {
    let num = Math.max(2, tmpNumChars)
    setNumChars(num)
    setTmpNumChars(num)
    console.log(numChars, tmpNumChars)
  }

  let outputField = parse(numChars, inputField)

  return (
      <div class="mx-auto w-fit">
          <textarea
          type="text" 
          name="inputDocstring" 
          cols="100"
          rows="10"
          onChange={inputFieldChange} 
          placeholder='""""your docstring..."""'
          className="font-mono p-4 rounded-md"
          value={inputField}/>
          <div className="relative w-fit h-fit">
            <textarea
            type="text"
            name="outputDocstring"
            className="font-mono p-4 rounded-md"
            disabled
            cols="100"
            rows="10"
            placeholder='"""...nicely formatted"""'
            value={outputField}></textarea>
            <button
            onClick={() => {navigator.clipboard.writeText(outputField)}}
            className="absolute top-2 right-2 bg-gray-600 p-1 rounded-md"
            aria-label="copy" 
            title="copy"
            >
              📋
            </button>
          </div>
          <br/>

          <div className="h-fit inline-block">
            <div class="p">Max Chars per Line</div>
            <input
            type="number"
            name="numChars"
            onInput={tmpNumCharsChange}
            className="font-mono p-2 rounded-l-md h-100"
            placeholder="ex: 100"
            min="3"
            value={tmpNumChars}
            />
            <button
            className="h-100 bg-gray-600 p-2 rounded-r-md"
            aria-label="confirm number of characters" 
            onClick={handleNumCharsConfirm}
            title="submit"
            >
              ✅
            </button>
          </div>
      </div>  
  )
}

export default DocstringInput