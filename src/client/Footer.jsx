import { Link } from '@adobe/react-spectrum';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const NavLink = ({ children, href, ...rest }) => {
  const navigate = useNavigate();

  const onClick = e => {
    navigate(href);
  };

  return (
    <a onPress={onClick} {...rest}>
      {children}
    </a>
  );
};

export const Footer = () => (
  <footer>
    <span>App &copy; {new Date().getFullYear()}</span>
    <span>/</span>
    <NavLink href="/">Home</NavLink>
    <span>/</span>
    <NavLink href="/asdf">Stock 404 Page</NavLink>
  </footer>
);
