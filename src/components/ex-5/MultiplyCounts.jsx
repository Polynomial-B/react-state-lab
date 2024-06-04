import React from 'react'

// * In this final challenge, you are given 2 Counters, a left counter and right counter.
// * The left counter should start at 0, the right counter should start at 5.
// * The <div> in the middle of the two counters should show the result of multiplying the two counts together.
// * Both counters should be able to be increased/decreased independently.

function MultiplyCounts() {
  const multiply = // left * right
  const [leftCount, setLeftCount] = React.useState(0)
  const [rightCount, setRightCount] = React.useState(0)

  handleLeftCount


  handleRightCount



  return (
    <div>
      <div className="counter-container">
        <button onClick={handleLeft}>➖</button>
        <h2>Show the left count here</h2>
        <button>➕</button>
        <div>Show the result of multiplying the two counts in here</div>
        <button>➖</button>
        <h2>Show the right count here</h2>
        <button>➕</button>
      </div>
    </div>
  )
}


export default MultiplyCounts
