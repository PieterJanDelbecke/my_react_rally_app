import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import styled from "@emotion/styled";

import Context from "../context/context";

const Container = styled.div`
  padding: 24px;
  max-width: 390px;
  display: flex;
  flex-direction: column;
  margin: auto;
`;
const H1 = styled.h1`
  font-size: 28px;
  font-wight: 500px;
  margin-bottom: 24px;
`;

const Input = styled.input`
  width: 100%;
  background-color: #f8f8f8;
  border: 1px solid #e5e5e5;
  padding: 8px;

  ::placeholder {
    font-color: #808080;
  }
`;
const VsSeparator = styled.div`
  text-align: center;
  margin: 16px 0 16px 0;
`;

const SetsHeading = styled.h2`
  margin: 24px 0 16px 0;
`

const RadioButton = styled.input`
  transform: scale(1.2);
`
const SetsLabel = styled.label`
  margin: 0 16px 0 8px;
`

const Button = styled.button`
  width: 100%;
  margin-top: 24px;
  height: 48px;
  background-color: black;
  color: white;
  border-radius: 20px;
`


const NewMatch = () => {
  const { context, setContext } = useContext(Context);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    setContext({
      playerA: event.target.playerA.value,
      playerB: event.target.playerB.value,
      sets: parseInt(event.target.sets.value, 10),
    });

    navigate("/choice");
  };

  return (
    <Container>
      <H1>New Match</H1>
      <form onSubmit={handleSubmit}>
        <div>
          <Input type="text" placeholder="Player A" name="playerA" />
          <VsSeparator>vs.</VsSeparator>
          <Input type="text" placeholder="Player B" name="playerB" />
        </div>

        <div>
          <SetsHeading>Sets</SetsHeading>
          <RadioButton type="radio" id="sets1" name="sets" value={1} defaultChecked />
          <SetsLabel htmlFor="sets1">1</SetsLabel>
          <RadioButton type="radio" id="sets3" name="sets" value={3} />
          <SetsLabel htmlFor="sets3">3</SetsLabel>
          <RadioButton type="radio" id="sets5" name="sets" value={5} />
          <SetsLabel htmlFor="sets5">5</SetsLabel>
        </div>
        <div>
          <Button type="submit">Continue</Button>
        </div>
      </form>
    </Container>
  );
};

export default NewMatch;
