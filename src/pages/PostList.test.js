import React from 'react';
import { render, screen, fireEvent, getByTestId} from "@testing-library/react";
import PostList from "./PostList";

it("App loads with initial state of 0", () => {
    const { container } = render(<PostList />);
    // console.log('container', container)
    const counter = getByTestId(container, "counter");
    expect(counter.textContent).toBe("0");
  });

  it("Increment and decrement buttons work", () => {
    const { container, debug } = render(<PostList />);
    // debug()
    // console.log(screen.getByRole("heading").innerHTML)
    // console.log(expect(screen.getByRole("heading")).toHaveTextContent())
    const countValue = getByTestId(container, "counter");
    const increment = getByTestId(container, "add");
    const decrement = getByTestId(container, "remove");
    expect(countValue.textContent).toBe("0");
    fireEvent.click(increment);
    fireEvent.click(increment);
    fireEvent.click(increment);
    expect(countValue.textContent).toBe("3");
    fireEvent.click(decrement);
    expect(countValue.textContent).toBe("2");
  });