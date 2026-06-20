import { useState } from "react";

function List(props) {
  //   fruits.sort((a, b) => a.name.localeCompare(b.name)); // sort fruits by name
  // uniques for each item in the

  //filtering low-calorie fruits-method with React state management to dynamically update the
  //  user interface based on user input or criteria

  const itemsList = props.items;
  const category = props.category;

  // updtae array
  const [food, setFood] = useState(["Apple"]);

  const lowCalFruits = itemsList.filter((fruit) => {
    return fruit.cal < 100;
  });
  //.map() method to create a new array of list items based on the fruits in a list array. Each list item displays the name and calorie content of a fruit.
  const listItems = itemsList.map((fruit) => (
    <li key={fruit.id}>
      {fruit.name}: &nbsp;
      <b>{fruit.cal}</b>
    </li>
  ));
  const lowCalListItems = lowCalFruits.map((fruit) => (
    <li key={fruit.id}>
      {fruit.name}: &nbsp;
      <b>{fruit.cal}</b>
    </li>
  ));

  function handleAddFood() {
    const newFood = document.getElementById("foodInput").value;
    document.getElementById("foodInput").value = "";

    setFood((f) => [...f, newFood]);
  }
  function handleRemoveFood(index) {
    setFood(food.filter((_, i) => i !== index));
  }
  return (
    <>
      <div>
        <div>
          <h1>List of food</h1>
          <ul>
            {food.map((food, index) => (
              <li
                key={index}
                onClick={() => {
                  handleRemoveFood(index);
                }}
              >
                {food}{" "}
              </li>
            ))}
          </ul>
          <input id="foodInput" type="text" placeholder="enter food name" />
          <button onClick={handleAddFood}>add food</button>
        </div>
        <b>
          <i>Low-Calorie Fruits</i>
        </b>
        <ol>{lowCalListItems}</ol>
        <b>
          <i>{category}</i>
        </b>
        <ol>{listItems}</ol>
      </div>
    </>
  );
}

// should  also have prop types / prop validation to ensure that the component receives the correct types of props and to provide default values for props that are not passed in. This can help prevent bugs and improve the robustness of the component./
//prop default

export default List;
