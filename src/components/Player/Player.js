import styled from "styled-components";
import Counter from "../Counter/Counter";

export default function Player({ name }) {
  return (
    <PlayerWrapper>
      {name}
      <PlayerScore>
        <Counter />
      </PlayerScore>
    </PlayerWrapper>
  );
}

const Button = styled.button`
  background-color: #e0d618;
  border-radius: 10px;
  padding: 0 10px;
`;

const PlayerScore = styled.div`
  color: black;
  display: grid;
  gap: 5px;
  grid-template-columns: repeat(3, 1fr);
  place-items: center;
`;

const PlayerWrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 1rem;
`;
