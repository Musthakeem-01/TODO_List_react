import React from 'react'
//import "./Footer.css"
const Footer = ({length}) => {
//const year = new Date()
  return (
   
       <footer>{length} List {length===1?"item":"items"} 
       </footer>
   
  )
}

export default Footer