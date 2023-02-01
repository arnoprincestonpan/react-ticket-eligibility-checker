import './App.css';
import {useState} from "react";

function App() {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [age, setAge] = useState(0)
  const [quantity, setQuantity] = useState(0)
  const [cash, setCash] = useState(0)
  const [message, setMessage] = useState("")

  let msg = ""
  let ticketCost = 12.99 + 1.14
  let ageRequirement = 16

  function checkEligibility(){
    if(typeof(firstName) === "string"){
      msg += "<li>" + firstName + " is a valid String.</li>"
    }else{
      msg += "<li>" + firstName + " is not a valid String.</li>"
    }

    if(typeof(lastName) === "string"){
      msg += "<li>" + lastName + " is a valid String.</li>"
    }else{
      msg += "<li>" + lastName + " is not a valid String.</li>"
    }

    if(typeof(quantity) === "number" && typeof(cash) === "number" && typeof(age) === "number"){
      msg += "<li>You have entered valid quantity: " + quantity + ", cash: $" + cash + " and age: " + age + " numbers.</li>"
    }else{
      msg += "<li>You have not entered valid quantity: " + quantity + ", cash: $" + cash + " and age: " + age + " numbers.</li>"
    }

    if(quantity * ticketCost <= cash && age >= ageRequirement){
      msg += "<li>You have " + cash + ", which is enough to buy " + quantity + " tickets at $" + ticketCost + " each.</li>"
      msg += "<li>Congratulations you bought some ticket(s).</li>"
    }else{
      if(age <= ageRequirement){
        msg += "<li>" + age + ", is not of age for a " + ageRequirement +  " age requirement.</li>"
      }
      if(quantity * ticketCost >= cash){
        msg += "<li>" + cash + " is not enough to buy " + quantity + " of " + ticketCost + " tickets.</li>"
      }
      msg += "<li>Sorry, you couldn't purchase any tickets.</li>"
    }

    setMessage(msg)
  }

  return (
    <div className="body">
      <h1>Ticket Eligibility Checker</h1>
      <div>
        <label htmlFor="first-name">First Name: </label>
        <input onChange={(e) => setFirstName(e.target.value)} id="first-name" name="first-name" type="text"  />
      </div>

      <div>
        <label htmlFor="last-name">Last Name: </label>
        <input onChange={(e) => setLastName(e.target.value)} id="last-name" name="last-name" type="text"  />
      </div>

      <div>
        <label htmlFor="age">Age: </label>
        <input onChange={(e) => setAge(e.target.valueAsNumber)} id="age" name="age" type="number"  />
      </div>

      <div>
        <label htmlFor="quantity">Quantity: </label>
        <input onChange={(e) => setQuantity(e.target.valueAsNumber)} id="quantity" name="quantity" type="number"  />
      </div>

      <div>
        <label htmlFor="cash">Cash: </label>
        <input onChange={(e) => setCash(e.target.valueAsNumber)} id="cash" name="cash" type="number"  />
      </div>

      <input onClick={() => checkEligibility()} id="submit-button" type="submit" value="Check Eligibility"  />
      
      <div dangerouslySetInnerHTML={{__html: message}}></div>
    </div>
  );
}

export default App;
