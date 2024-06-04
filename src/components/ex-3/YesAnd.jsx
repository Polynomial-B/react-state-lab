import React from 'react'

// * This challenge comes in three parts:
// * 1) You are given 2 bits of true/false state (conditions) on lines 8/9 (uncomment them).
// * Now add click events to the buttons to toggle the respective condition true/false. So the first button should toggle firstCondition, and the second, secondCondition
// * 2) Now show the correct text inside each button, for firstCondition and secondCondition respectively, depending on if each condition true/false.
// * 3) When both conditions are true, update the text inside your <p> tag to show 'Both conditions are true!'. 
// * If both conditions are not true, it should show nothing.

function YesAnd() {
  const [firstCondition, setFirstCondition] = React.useState(false)
  const [secondCondition, setSecondCondition] = React.useState(false)

function handleFirstCondition() {
  setFirstCondition(!firstCondition)
}

function handleSecondCondition() {
  setSecondCondition(!secondCondition)
}

  return (
    <div className="container">
      <button onClick={handleFirstCondition}>
        {firstCondition ? "TRUE" : "FALSE"}
      </button>
      <button onClick={handleSecondCondition}>
      {secondCondition ? "TRUE" : "FALSE"}
      </button>
      {firstCondition && secondCondition ? <p>
        When both conditions are true, show: Both conditions are true! here.
        Otherwise show nothing.
      </p> : "" }
    </div>
  )
}

export default YesAnd
