import React from 'react'
import {SidebarContainer,Icon,CloseIcon,SidebarMenu,SidebarLink,SidebarRoute,SidebarBtnWrap} from './SidebarElements'



const Sidebar = ({isOpen,toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
             <Icon onClick={toggle}>
                 <CloseIcon/>
             </Icon>
                <SidebarMenu>
                    <SidebarLink to="/">Lorem Ipsum</SidebarLink>
                    <SidebarLink to="/">Lorem Ipsum</SidebarLink>
                    <SidebarLink to="/">Lorem Ipsum</SidebarLink>
                </SidebarMenu>
                <SidebarBtnWrap>
                    <SidebarRoute to="/">Lorem Ipsum</SidebarRoute>  
                </SidebarBtnWrap>
        </SidebarContainer>
    )
}

export default Sidebar
