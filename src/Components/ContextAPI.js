import React, { useState, createContext } from "react";
export const ContextAPI = createContext();

export const Studentdata = (props) => {
  const [rows, setRows] = useState([
    { id: "1", name: "Alpha", age: 26, course: "MERN", batch: "August"},
    { id: "2", name: "Charlie", age: 23, course: "MERN", batch: "September"},
    { id: "3", name: "Bravo", age: 21, course: "MERN", batch: "October"},
    { id: "4", name: "Tango", age: 25, course: "MERN", batch: "November"},
  ])
  return (
    <ContextAPI.Provider value={[rows, setRows]}>
      {props.children}
    </ContextAPI.Provider>
  )
}

export default Studentdata