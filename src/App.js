import './App.css';
import {useState} from "react";

function App() {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [age, setAge] = useState(0)
  const [quantity, setQuantity] = useState(0)
  const [cash, setCash] = useState(0)

  let msg = ""
  let ticketCost = 12.99 + 1.14
  let ageRequirement = 16

  function checkEligibility(){
    if((firstName != "" && lastName != "") 
    || (typeof(firstName) == String && typeof(lastName) == String)){
      msg += "<li>" + firstName + " " + lastName + " is a valid name.</li>"
    }else{
      msg += "<li>" + firstName + " " + lastName + " is not a valid name.</li>"
    }

    if(typeof(age) == Number || age != 0){
      if(age >= ageRequirement){
        msg += "<li>" + age + ", is of age to watch this movie.</li>"
      }else{
        msg += "<li>" + age + ", is not of age to watch this movie.</li>"
      }
    }else{
      msg += "<li>Please enter a valid number.</li>"
    }

    if((typeof(quantity) == Number || quantity != 0) && (typeof(cash) == Number) || cash != 0){
      if(quantity * ticketCost <= cash){
        msg += "<li>" + cash + "is enough for " + quantity + " tickets.</li>"
      }else{
        msg += "<li>" + cash + "is not enough for " + quantity + " tickets.</li>"
      }
    }else{
      msg += "<li>Please check your quantity and cash amount.</li>"
    }

    if(quantity * ticketCost <= cash && age >= ageRequirement){
      msg += "<li>Congratulations you bought some ticket(s).</li>"
    }else{
      msg += "<li>Sorry, you couldn't purchase any tickets.</li>"
    }
  }

  return (
    <div className="body">
      <h1>Ticket Eligibility Checker</h1>
      <div>
        <label for="first-name">First Name: </label>
        <input onChange={(e) => setFirstName(e.target.value)} id="first-name" name="first-name" type="text"  />
      </div>
      <div>
        {msg}
      </div>
    </div>
  );
}

export default App;
