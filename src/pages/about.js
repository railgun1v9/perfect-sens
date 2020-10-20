import React from "react"
import Header from "../components/header"

export default function About() {
  return (
    <div style={{ color: `teal` }}>
        <Header headerText="About Gatsby" />
        <Header headerText="This is a header sub-component" />
        <p>Such wow. Very React.</p>
    </div>
  )
}