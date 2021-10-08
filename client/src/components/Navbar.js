import React,{useState} from 'react';
import { Link} from 'react-router-dom'
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { SidebarData } from './SidebarData';
import { IconContext } from 'react-icons/lib';
import SubMenu from './SubMenu';

import styled from 'styled-components';

const NavIcon = styled(Link)`
  margin-left: 2rem; //icon placement
  font-size: 2rem;
  height: 60px; // x icon from top
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;


const SidebarNav = styled.nav`
  background: #15171c; //leftside sidebar
  width: 200px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
  transition: 350ms;
  z-index: 100;
`;

//put above for scrolling
//overflow-x: hidden;

const SidebarWrap = styled.div`
  width: 100%; //puts the icons in sequence rather than horizantal
`;

const Nav = styled.div`
  background: #15171c;
  height: 50px; // top rectangle

  width:auto;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;



function Navbar() {
    const [sidebar,setSidebar]=useState(false)
    const showSidebar=()=>setSidebar(!sidebar)
    return (
        <div>
        <IconContext.Provider value={{color:'#fff'}}>
        <Nav>
          <NavIcon to='#'>
          <FaIcons.FaBars onClick={showSidebar} /> 
          </NavIcon>
        </Nav>
        <SidebarNav sidebar={sidebar}>
          <SidebarWrap>
            <NavIcon to='#'>
            <AiIcons.AiOutlineClose onClick={showSidebar} />
            </NavIcon>
                  {SidebarData.map((item, index) => {
              return <SubMenu item={item} key={index} />;
            })}
    </SidebarWrap>
            </SidebarNav>
            </IconContext.Provider>
        </div>
    )
}

export default Navbar;
