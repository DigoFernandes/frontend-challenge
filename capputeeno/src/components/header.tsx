"use client"

import { Saira_Stencil_One } from "next/font/google";
import styled from "styled-components";

interface HeaderProps {}

const TagHeader = styled.header`
    display: flex;
    align-items; center;
    justify-content: space-between;
    padding: 20px 160px
`;
const Logo = styled.a`
    color: var(--logo-color);
    line-height: 60px;
    font-weight: 400;
    font-size: 40px;
`;

const sairaStencil = Saira_Stencil_One({
  weight: ["400"],
  subsets: ["latin"],
});
export function Header(props: HeaderProps) {
  return( 
    
  <TagHeader>
    <Logo className={sairaStencil.className}>Capputeeno</Logo>
  </TagHeader>
  
  )

}
