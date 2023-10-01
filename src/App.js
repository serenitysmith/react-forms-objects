import React, {useState} from 'react';

import './App.css';

function App() {
  // const [firstName, setFirstName] = React.useState("")
  // const [lastName, setLastName] = React.useState("")
  // this was the origanial code which works but, its better to use an object to access state if you have multiple states, objects only ned one setter function intead of multiple like above

// using only one state below 
// added and onject inside of the use state set to an empty string 
const [formData, setFormData] = React.useState(
  {firstName: "", lastName: "" })

  console.log(formData)
// removed these two functions and made it one handle change function 
  // function handleFirstNameChange(event) {
  //     setFirstName(event.target.value)
  // }
  
  // function handleLastNameChange(event) {
  //     setLastName(event.target.value)
  // }



  function handleChange(event) {
    // setFirstName(event.target.value)
    // changed the function to meet above form data state 
// changed it to event.target.name 

// console logs either frist name or last name dependeding on which input was used 

// console.log(event.target.name)

// added set formm data to access the value propery that is put into input 


// we need toknow the previous state here becuase typically this would be used with a big for, wiht lots of info 
setFormData(prevFormData => {
  // we need to return a new object while keeping the old object info intact so we use the spread operator 
  return{
...prevFormData, 

//below we overwrite the specificic form data we are accessing 
// we can do that the same way as above wiht event. target but, it has to be surrounded by brackets else it wont work and will throw an error 
[event.target.name]: event.target.value
  }

})
}


  // we need way for our handle change event to disingush which input triggered event, we can do that by give eeach input  a name 
  return (
      <form>
          <input
              type="text"
              placeholder="First Name"
              // changed below function to Handle change 
              onChange={handleChange}

              // added name property made it match the property name in the state value


              name='firstName'
          />
          <input
              type="text"
              placeholder="Last Name"
              onChange={handleChange}
              name='lastName'
          />
      </form>
  )
}

export default App;
