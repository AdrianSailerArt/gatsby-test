import React from "react"
import Navbar from "./navbar"
import '../styles/global.css'
// children like SLOT in vue.js. Display nested content
export default function Layout({ children }) {
  return (
    <div className="layout">
      <Navbar />
      <div className="content">
        {/*Content of the Page */}
        {children}
      </div>
      <footer className="footer">
        <p>Copyright ASA</p>
      </footer>
    </div>
  )
}
