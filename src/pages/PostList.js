import { Button } from "@chakra-ui/react";
import React from "react";
import { Consumer } from "../context";
import { useCounter } from "../custom-hooks/useCounter";

const PostList = (props) => {
  const { counter, increment, decrement } = useCounter();
  return (
    <>
      <Consumer>{(value) => <div>{value.name}</div>}</Consumer>
      <h3>Counter: {counter}</h3>
      <Button onClick={increment}>Add</Button>
      <Button onClick={decrement}>Remove</Button>
    </>
  );
};

export default PostList;
