import React from "react"

// * For this challenge, when the button is clicked, the color of the box should toggle from blue to yellow
// * This can be acheived by removing the class "blue" and adding the class "yellow" to the div
// * Use a click event, and react state to add the correct class to the element

function Switch() {
const [isBlue, setIsBlue] = React.useState('box blue')

function handleColourChange() {
  if(isBlue === 'box blue') {
    setIsBlue('box yellow')
  } else {
    setIsBlue('box blue')
  }
  
}

  return (
    <div className="container">
      <button onClick={handleColourChange}>
        Blue / Yellow
      </button>

      <div className={isBlue} />
    </div>
  )
}

export default Switch
