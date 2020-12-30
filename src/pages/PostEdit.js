import React, { useState } from "react";
import { Button } from "@chakra-ui/react";
import { Post } from "../utils/JSONUtils";
import { useHistory } from "react-router-dom";

const PostEdit = () => {
  const { push } = useHistory();
  const [stateObj, setStateObj] = useState({ title: "", description: "" });
  const submitHandler = (event) => {
    event.preventDefault();
    Post("http://localhost:3002/posts", stateObj)
      .then((res) => {
        // console.log("res", res);
        setStateObj({ title: "", description: "" });
        push("/posts");
      })
      .catch((err) => {
        console.log("err", err);
      });
    // console.log("submit", stateObj);
  };
  return (
    <div>
      <form onSubmit={submitHandler}>
        <div>
          <input
            placeholder="Title"
            onChange={(e) =>
              setStateObj({ ...stateObj, title: e.target.value })
            }
          />
        </div>
        <div>
          <input
            placeholder="Description"
            onChange={(e) =>
              setStateObj({ ...stateObj, description: e.target.value })
            }
          />
        </div>
        <div>
          <Button type="submit">Submit</Button>
        </div>
      </form>
    </div>
  );
};

export default PostEdit;
