import DocstringInput from './docstringInput'

function App() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-xl font-sans w-fit mx-auto mb-2 font-bold">🐍 Docstring Balancer</h1>
      <p className="italic w-fit mx-auto mb-3">
        Format docstrings to a specified line length, preserving paragraph breaks.
        <br/>
        Note: This doesn't handle indents gracefully (yet!). Unindent then re-indent after. 
      </p>
      <DocstringInput className="w-100"></DocstringInput>
    </div>
  )
}

export default App
