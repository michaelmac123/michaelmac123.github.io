import React from 'react'
import styled from '@emotion/styled'

import Card from './Card'

const CaseStudyHeader= styled.div`
  text-align: left;
  margin-top: 3rem;
  margin-bottom: .25rem;
  h5 {
    padding:0;
  }
  hr {
    margin-top .25rem;
  }
`

class CaseStudies extends React.Component {
  render() {
    const content = [
      { Link: '/case-studies/call-center-dashboard',
        Image: "../../images/caseStudies/Calls-Center-Hero.png",
        Title: 'Call Center Dashboard',
        ImgClass: 'smallImage',
        Content: 'Real time, call center dashboard connecting live callers to eLocal advertising partners.'
      },
      { Link: '/case-studies/calls-leads-feature',
        Image: '../../images/caseStudies/BU-Calls-Hero.png',
        Title:'Calls & Leads Feature',
        Content:'Fully integrate business user dashboard with calls & leads acceptance functionality.',
        Color:'#e6f8e5'
      },
      { Link: '/case-studies/additional-projects',
        Image: '../../images/caseStudies/Campaigns-Hero.png',
        Title: 'Additional Projects',
        Content: 'A collection of assorted projects.',
        Color: '#dbdae9'
      }
    ]

    return(
      <section>
        <div className="container">
          <div className="row">
            <CaseStudyHeader className="col">
              <h5>Case Studies</h5>
              <hr className="hr-theme hidden-xs"/>
            </CaseStudyHeader>
          </div>
          <div className="row">
            <Card content={content} />
          </div>
        </div>
      </section>
    )
  }
}

export default CaseStudies