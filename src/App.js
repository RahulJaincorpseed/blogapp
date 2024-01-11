import React, { useEffect, useState, Suspense } from "react"
import "./App.css"
import axios from "axios"
import { useDispatch, useSelector } from "react-redux"
import { decrement, increment } from "./redux/slices/counter"
import { getAllTickets } from "./redux/slices/ticket"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import AllTickets from "./tickets/AllTickets"
import AddTicket from "./tickets/AddTicket"
import SingleTicket from "./tickets/SingleTicket"

const MyComponent = React.lazy(() => import("./component/MyComponent"))

function App() {
  const [count, setCount] = useState(0)
  const countValue = useSelector((data) => data.counter)
  const ticketValue = useSelector((data) => data.ticket)
 

  const dispatch = useDispatch()

  console.log("my count value ", countValue)
  console.log("ticket", ticketValue)

  return (
    <div className="App">
      <h1>Main Page </h1>
      <BrowserRouter>
        <Routes>
          <Route path="/allticket"  element={<AllTickets />} />
          <Route path="/addticket"  element={<AddTicket />} />
          <Route path="/ticket/:ticketId"  element={<SingleTicket />} />
        </Routes>
      </BrowserRouter>
      {/* <h4>{count}</h4>
      <h3>{countValue}</h3>
      <button onClick={(e) => dispatch(increment())}>Increment data</button>
      <button onClick={(e) => dispatch(decrement())}>Decrement data</button> */}
      {/* <button onClick={(e)=> dispatch(getAllTickets())}>vfvfvf</button>   */}
      {/* <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>
      <Suspense fallback={<p>This is Loading ...</p>}>
        <MyComponent data={count} />
      </Suspense> */}
    </div>
  )
}

export default App
