import React, { useEffect, useState, Suspense } from "react"
import "./App.css"
import axios from "axios"

const MyComponent = React.lazy(()=> import("./component/MyComponent"))

function App() { 
    const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1>Test App</h1>
      <h4>{count}</h4>
      <button onClick={()=> setCount((prev) => (prev+1))}>Increment</button>
      <Suspense fallback={<p>This is Loading ...</p>}>
      <MyComponent data={count} />
      </Suspense>


    </div>
  )
}

export default App
