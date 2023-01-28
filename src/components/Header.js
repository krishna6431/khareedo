import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import HeaderLinks from './HeaderLinks'

export const Header = () => {
  const logo_image = "https://khareedoapp.com/wp-content/uploads/2022/07/logo.png"

  return (
    <MainHeader>
      <NavLink to="/">
        <img className="logo" src={logo_image} alt="brand logo of khareedo.com" />
      </NavLink>
      <HeaderLinks />
    </MainHeader >
  )
}

const MainHeader = styled.header`
  padding: 0 2rem;
  height: 6rem;
  background-color: ${({ theme }) => theme.colors.bg};
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  .logo {
    height: 4rem;
  }
`;
export default Header;