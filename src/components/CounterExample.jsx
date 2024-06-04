import React from "react"

function CounterExample() {
  // ! To manage state in react, we need to use a 'hook' called useState
  // ! A 'hook' is a function that 'hooks into' Reacts capabilities.

  // ! We call the function useState passing through an argument.
  // ! The argument is the initial value of our piece of state.
  // ! useState always give back an array with 2 elements
  // * - first element is the current value of our state (starts at 0)
  // * - second element is the function to update our count. 
  const [count, setCount] = React.useState(0)
  // ! Here is another piece of state that tracks if you're increasing or decreasing.
  const [isIncreasing, setIsIncreasing] = React.useState(true)

  console.log("Count: ", count)

  function increaseCount() {
    setCount(count + 1)
    setIsIncreasing(true)
    // ! This will not have updated yet, because the component has not been re-rendered by React.
    console.log("increase count ", count)
  }

  function decreaseCount() {
    setCount(count - 1)
    setIsIncreasing(false)
  }

  return (
    <div>
      <div className="counter-container"> 
        <button onClick={decreaseCount}>➖</button>
        <h2>{count}</h2>
        <button onClick={increaseCount}>➕</button>
        {/* // ! Another way I could use the count, for conditional rendering */}
        {count > 5 && '🔥'}
        {isIncreasing ? "Increasing" : "Decreasing"}
      </div>
    </div>
  )
}

export default CounterExample
