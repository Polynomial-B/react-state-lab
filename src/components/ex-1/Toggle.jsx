import React from "react"

// * The challenge here is have the "h2" be hidden intially when this component first renders
// * When a user clicks the button, the "h2" should now be shown
// * When the button is clicked again, the text should hide again

function Toggle() {
const [isShown, setIsShown] = React.useState(true)

function handleShown(){ 
  if(isShown) {
    setIsShown(false);
  } else {
    setIsShown(true)
  }
}

  return (
    <div>
      <button onClick={handleShown}>
        Click me to hide and show the text below
      </button>
      {isShown ? <h2>I should be hidden to start with, but click the button should make me appear, clicking again will hide me</h2> : ""}
    </div>
  )
}


export default Toggle
