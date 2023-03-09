import logo from './logo.svg';
import './App.css';
import React, {useState} from "react";

function App() {

  const [showSubmitted, setShowSubmitted] = useState(false);

  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [location, setLocation] = useState('');
  const [redhotQuantity, setRedhotQuantity] = useState('');
  const [redhotSelection, setRedhotSelection] = useState('');
  const [coupon, setCoupon] = useState('');
  

  const [orderTotalNum, setOrderTotalNum] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();
    if (coupon.match("\b\d{5}\b")){
      setCoupon(e.target.value)
    }
    else{
      setCoupon("")
      alert("Please type in 5 digits for the coupon code")
    }

    if (userName){
      setShowSubmitted(true);
      if (coupon > 50000){
        setOrderTotalNum((redhotQuantity*0.5)*0.8)
      }
      else{
        setOrderTotalNum(redhotQuantity*0.5)
      }
    } else{
      setShowSubmitted(false);
    }
    
  }


  function RenderThis({showSubmitted}) {
    console.log("renders");
    return(
      <div>
      {showSubmitted && (
        <div>
          <p>Order for {userName}</p>
          <p>{email}</p>
          <p>{location}</p>
          <p>{redhotQuantity}</p>
          <p>{redhotSelection}</p>
          <p>{coupon}</p>
          <p>{redhotQuantity}</p>
          <p></p>
        </div>
        )}
      </div>
    )
  }


  return (
    <div className="App">
      <form>
        <h2>Name</h2>
          <input type="text" required value={userName} onChange={e => setUserName(e.target.value)}></input>
        <h2>Email Address</h2>
          <input type="email" required value={email} onChange={e => setEmail(e.target.value)}></input>
        <h2>Store Location</h2>
          <select value={location} onChange={e => setLocation(e.target.value)} >
          <option value={" "}> </option>
            <option value={"Brighton"}>Brighton</option>
            <option value={"Henrietta"}>Henrietta</option>
            <option value={"Downtown Rochester"}>Downtown Rochester</option>
            <option value={"Pittsford"}>Pittsford</option>
          </select>
        <h2>Redhot Quantity</h2>
          <input type="number" required value={redhotQuantity} onChange={e => setRedhotQuantity(e.target.value)}></input>
        <h2>Redhot Selection</h2>
        <select value={setRedhotSelection} onChange={e => setRedhotSelection(e.target.value)} >
            <option value={"The Shiny (White)"}>The Shiny (White)</option>
            <option value={"The Scandal (Texas)"}>The Scandal (Texas)</option>
            <option value={"The Scary (Garbage Plate)"}>The Scary (Garbage Plate)</option>
          </select>
        <h2>Coupon Code</h2>
          <input type="number" required value={coupon} onChange={e => setCoupon(e.target.value)} pattern='\b\d{5}\b'></input>
          <button type="submit" onClick={handleSubmit}>submit</button>
          {showSubmitted && (
        <div>
          <p>Order for {userName}</p> 
          <p>Email: {email}</p>
          <p>Store Location: {location}</p>
          <p>Redhot Quantity: {redhotQuantity}</p>
          <p>Redhot Selection: {redhotSelection}</p>
          <p>Coupon: {coupon}</p>
          <p>Total price {orderTotalNum}</p>
        </div>
        )}
      </form>



    </div>
  );
}

export default App;
