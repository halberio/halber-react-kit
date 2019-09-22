import React from "react";
import { Avatar, Dropdown, Menu } from "antd";
import { NavLink } from "react-router-dom";
import "./navbar.scss";
import Logo from "../svg/Logo";

const Navbar = props => {
  return (
    <>
      <Menu mode="horizontal" className="navbar">
        <Menu.Item key="0" className="navbar-brand">
          <NavLink to="/" className="brand-link">
            <Logo />
          </NavLink>
        </Menu.Item>

        {props.isLoggedIn ? (
          <Menu.Item key="4" className="first-element">
            <NavLink to="/posts">Posts</NavLink>
          </Menu.Item>
        ) : null}

        {!props.isLoggedIn ? (
          <Menu.Item key="1" className="navbar-right">
            <NavLink to="/signin">signin</NavLink>
          </Menu.Item>
        ) : null}

        {!props.isLoggedIn ? (
          <Menu.Item key="2">
            <NavLink to="/signup">signup</NavLink>
          </Menu.Item>
        ) : null}

        {props.isLoggedIn ? (
          <Menu.Item key="3" className="navbar-avatar navbar-right">
            <Dropdown
              overlay={
                <AvatarDropdown user={props.user} logout={props.logout} />
              }
              trigger={["click"]}
            >
              <Avatar size={32} icon="user" className="avatar" />
            </Dropdown>
          </Menu.Item>
        ) : null}
      </Menu>
    </>
  );
};
export default Navbar;

const AvatarDropdown = props => {
  return (
    <Menu>
      <Menu.Item key="0">Hello {props.user.name}</Menu.Item>
      <Menu.Item key="1" onClick={() => props.logout()}>
        Logout
      </Menu.Item>
    </Menu>
  );
};
