import React from 'react'
import Header from "../components/Header"
import About from "../components/About"
import Services from "../components/Services"
import Loan from "../components/Loan"
import Karabo from "../components/Karabo"
import OtherServices from "../components/OtherServices"
function Home() {
  return (
   <>
    <Header />
      <About />
  <Services />
  <Loan />
  <Karabo />
<OtherServices />
   </>
  )
}

export default Home