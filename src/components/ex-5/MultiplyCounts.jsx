import React from 'react'

// * In this final challenge, you are given 2 Counters, a left counter and right counter.
// * The left counter should start at 0, the right counter should start at 5.
// * The <div> in the middle of the two counters should show the result of multiplying the two counts together.
// * Both counters should be able to be increased/decreased independently.





function MultiplyCounts() {
  
  const [leftCount, setLeftCount] = React.useState(0)
  const [rightCount, setRightCount] = React.useState(5)

  // ? don't add const [multiple, setMultiple] as you're get a lagging issue.....

  return (
    <div>
      <div className="counter-container">
        <button onClick={()=> setLeftCount(leftCount - 1)}>➖</button>
        <h2>{leftCount}</h2>
        <button onClick={()=> setLeftCount(leftCount + 1)}>➕</button>
        <h1>{leftCount * rightCount}</h1>
        <button onClick={()=> setRightCount(rightCount - 1)}>➖</button>
        <h2>{rightCount}</h2>
        <button onClick={()=> setRightCount(rightCount + 1)}>➕</button>
      </div>
    </div>
  )
}


export default MultiplyCounts
