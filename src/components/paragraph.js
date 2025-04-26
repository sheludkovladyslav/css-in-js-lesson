import styled from "styled-components";

const Paragraph = styled.p`
  background-color: ${(props) => (props.primary ? "white" : "tomato")};
  color: ${(props) => (props.primary ? "tomato" : "white")};
  border: ${(props) => (props.primary ? "1px solid black" : "none")};
  border-radius: 10px;
  padding: 10px 20px;
  font-size: 24px;
`;

export default Paragraph;
