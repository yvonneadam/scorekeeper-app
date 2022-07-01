import styled from "styled-components";
import { useState } from "react";

export default function Counter({}) {
  const [counter, setCounter] = useState(0);

  return (
    <>
      <Button
        type="button"
        onClick={() => {
          setCounter(counter - 1);
        }}
        aria-label="Decrease score"
      >
        -
      </Button>
      <span>{counter}</span>
      <Button
        type="button"
        onClick={() => {
          setCounter(counter + 1);
        }}
        aria-label="Increase score"
      >
        +
      </Button>
    </>
  );
}

const Button = styled.button`
  background-color: green;
  border-radius: 10px;
  padding: 0 10px;
`;
