import styled from "styled-components";
import { SearchIcon } from "./search-icon";
import { InputHTMLAttributes } from "react";

export const PrimaryInput = styled.input`
  width: 352px;
  font-family: inherit;
  padding: 10px 16px;
  border: none;

  background: var(--bg-secondary);

  font-size: 14px;
  font-weigth: 400;
  border-radius: 8px;
  line-height: 22px;
  color: var(--text-dark);
`;

const InputContainer = styled.div`
  position: relative;
  width: 352px;
  svg {
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
  }
`;
interface InputProps extends InputHTMLAttributes <HTMLInputElement>{}

export function PrimaryInputWSearchIcon(props: InputProps) {
  return (
  <InputContainer>
      <PrimaryInput {...props}/>
      <SearchIcon/>
  </InputContainer>)
}
