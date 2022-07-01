import styled from "styled-components";

export default styled.button`
  background-color: ${(props) =>
    props.background ? props.background : "#E0D618"};
  border-radius: 20px;
  width: 100%;
  color: ${(props) => (props.color ? props.color : "black")};
  padding: 0.5rem 1rem;
`;
