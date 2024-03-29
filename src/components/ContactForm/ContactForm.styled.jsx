import styled from '@emotion/styled';

export const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  width: 400px;
`;

export const Label = styled.label`
  text-align: center;
  font-size: 20px;
  margin-bottom: 10px;
`;

export const FieldStyled = styled.input`
  padding: 10px;
  width: 75%;
  margin-inline: auto;
  margin-bottom: 10px;
`;

export const Button = styled.button`
  padding: 20px;
  background-color: aquamarine;
  border: 1px solid black;
`;

export const ErrorMessageStyled = styled.p`
  text-align: center;
  background-color: bisque;
`;
