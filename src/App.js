import React, { useEffect, useState, Suspense } from "react"
import "./App.css"
import axios from "axios"
import { useDispatch, useSelector } from "react-redux"
import { decrement, increment } from "./redux/slices/counter"

const MyComponent = React.lazy(() => import("./component/MyComponent"))

function App() {
  const [count, setCount] = useState(0)
  const countValue = useSelector((data) => (data.counter));

  const dispatch = useDispatch();

  console.log("my count value ", countValue);

  return (
    <div className="App">
      <h1>Test App</h1>
      <h4>{count}</h4>
      <h3>{countValue}</h3>
      <button onClick={(e) => dispatch(increment())}>Increment data</button>
      <button onClick={(e) => dispatch(decrement())}>Decrement data</button>
    
      <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>
      <Suspense fallback={<p>This is Loading ...</p>}>
        <MyComponent data={count} />
      </Suspense>
    </div>
  )
}

export default App
