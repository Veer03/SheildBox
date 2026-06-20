import { useState } from "react";

function MyComponent() {
  const [name, setName] = useState("guest"); //initial state
  const [age, setAge] = useState(18);

  //onClick event handler function
  const [TheName, setTheName] = useState("guest");
  const [quantity, setQuantity] = useState();
  const [CommentChange, setCommentChange] = useState();
  // can use the sam thing in radio button, <select>!!<option>(thhis is dropdown)
  //  and checkbox as well

  //update obeject
  const [car, updateCar] = useState({ year: "2026", model: "ford" });

  const updateName = () => {
    setName("Veer");
  };
  const incAge = () => {
    setAge((a) => a + 1); //update function!!
  };
  return (
    <>
      <div>
        <p>Name: {name}</p>
        <p>Age: {age}</p>
        <button onClick={updateName}>Set Name</button>
        <button onClick={incAge}>Increase Age</button>
      </div>
      <div>
        <br />
        <br />
        <input
          value={TheName}
          onChange={(e) => {
            setTheName(e.target.value);
          }}
        />
        <p>
          <b>The Name: {TheName}</b>
        </p>
        <br />
        <br />
        <input
          value={quantity}
          onChange={(e) => {
            setQuantity(e.target.value);
          }}
        />
        <p>
          <b>Quantity: {quantity}</b>
        </p>
        <br />
        <textarea
          value={CommentChange}
          onChange={(e) => {
            setCommentChange(e.target.value);
          }}
          placeholder="Enter your comment..."
        ></textarea>
        <p>
          <b>Comment: {CommentChange}</b>
        </p>
      </div>
      <div>
        <h1>Fav car!:</h1>
        <p>
          your fav car is: {car.year} and teh model:{car.model}
        </p>
        <input
          value={car.year}
          onChange={(event) => {
            updateCar((c) => ({ ...c, year: event.target.value }));
          }}
        />
      </div>
    </>
  );
}
export default MyComponent;
