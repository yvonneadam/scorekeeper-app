import styled from "styled-components";
import Button from "../Button/Button";

export default function Form() {
  return (
    <FormWrapper>
      <label htmlFor="name">Write your name here</label>
      <input type="text" id="name" />
      <Button background="#CEAFEE" color="black">
        Add player
      </Button>
    </FormWrapper>
  );
}

const FormWrapper = styled.form`
  display: flex;
  padding: 20px;
  border-top: 20px;
  flex-direction: column;
  gap: 20px;
`;
