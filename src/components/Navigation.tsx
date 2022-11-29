import styled from "styled-components"
import { Link } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "../app/hooks"
import { selectToken } from "../store/user/selectors"
import { logOut } from "../store/user/slice";

export const Navigation = () => {


  const dispatch = useAppDispatch()

  const token = useAppSelector(selectToken)


  return (
    <Nav>
      <Logo href="/">
        Cycling <span>app</span>
      </Logo>
      <Hamburger >
        <span />
        <span />
        <span />
      </Hamburger>
      <Menu>
        {
          <MenuLink to="/info">Info for beginners</MenuLink>

        }
        {
          <MenuLink to="/users_stories">Stories</MenuLink>

        }
        {
          <MenuLink to="/forum">Forum</MenuLink>

        }
        {
          <MenuLink to="/events">Events</MenuLink>

        }
        {
          <MenuLink to="/map">Map</MenuLink>

        }
        {
          <MenuLink to="/statistics">Statistics</MenuLink>

        }
        {token ?
          <button onClick={() => dispatch(logOut())}>Logout</button>
          : <MenuLink to="/login">Login/Signup</MenuLink>}

      </Menu>
    </Nav>
  )
}

const MenuLink = styled(Link)`
  padding: 1rem 2rem;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  color: #ECECEC;
  transition: all 0.3s ease-in;
  font-size: 0.9rem;

  &:hover {
    color: #9CC094;
  }
`

const Nav = styled.div`
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  background: #006400;
  /* position: absolute; */
  top: 0;
  left: 0;
  right: 0;
`

const Logo = styled.a`
  padding: 1rem 0;
  color: #ECECEC;
  text-decoration: none;
  font-weight: 800;
  font-size: 1.7rem;

  span {
    font-weight: 300;
    font-size: 1.3rem;
  }
`

const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;
  span {
    height: 2px;
    width: 25px;
    background-color: #006400;
    margin-bottom: 4px;
    border-radius: 5px;
  }

  @media (max-width: 780px) {
    display: flex;
  }
`

const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  @media (max-width: 780px) {
    overflow: hidden;
    flex-direction: column;
    width: 100%;
    transition: max-height 0.3s ease-in;
  }
`