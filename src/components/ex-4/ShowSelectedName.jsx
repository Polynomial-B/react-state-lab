import React from 'react'

// * Heres a brand new event "change", have a look at the console.log firing from the function
// * Show the selected name from the dropdown, where it says: SHOW CHOSEN NAME HERE



function ShowSelectedName() {
  const [name, setName] = React.useState("")

  function handleChange(e) {
    setName(e.target.value)
  }

  return (
    <div className="container">
      <p>The selected name is: {name}</p>

      <select defaultValue="" onChange={handleChange}>
        <option disabled>Pick A Name</option>
        <option value="Matt">Jack</option>
        <option value="Emma">Emma</option>
        <option value="Alex">Alex</option>
        <option value="Hugo">Hugo</option>
      </select>
    </div>
  )
}

export default ShowSelectedName
