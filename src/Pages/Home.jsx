import React from 'react'

import Header from '../Components/Header'
import CaseStudies from '../Components/CaseStudy/CaseStudies'

class Home extends React.Component {
  render() {
    return(
      <div>
        <Header
          title="Michael McMillan"
          subtitle="People focused user experience design leader and strategist, producing elegant designs to meet business objectives, create thoughtful experiences focused on people centric solutions. Empathic mentor that thrives in cultivating teams and driving growth."
        />
        <CaseStudies />
      </div>
    )
  }
}

export default Home