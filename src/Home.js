import React from "react";
import "./Home.css";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset } from "./actions";

function Home() {
  const counter = useSelector(state => state.counter);
  const dispatch = useDispatch();

  return (
    <div className="Home">
      <h1>Home Counter: {counter}</h1>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <br />
      <button onClick={() => dispatch(reset())}>Reset</button>
    </div>
  );
}

export default Home;
