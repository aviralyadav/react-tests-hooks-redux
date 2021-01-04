import { Button } from "@chakra-ui/react";
import React from "react";
import { Consumer } from "../context";
import { useCounter } from "../custom-hooks/useCounter";
// import MyComponent from "./Download";

const PostList = (props) => {
  const { counter, increment, decrement } = useCounter();
  return (
    <>
      {/* <Consumer>{(value) => <div>{value.name}</div>}</Consumer> */}
      <h3 data-testid="counter">{counter}</h3>
      <Button data-testid="add" onClick={increment}>Add</Button>
      <Button data-testid="remove" onClick={decrement}>Remove</Button>
      {/* <MyComponent /> */}
    </>
  );
};

export default PostList;
