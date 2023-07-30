import React from 'react';
//import "./Header.css"
//import {Button, Table, Accordion,Card,Nav, Navbar,Container} from 'react-bootstrap';
const Header = ({title}) => {


  return (
    
    
   <header>{title}</header>

  )
  }
Header.defaultProps ={
  title:"To do List"
}
export default Header