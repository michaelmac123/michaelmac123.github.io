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

class CreativeDirection extends React.Component {
  render() {
    const content = [
      { Link: '/case-studies/loving-with-food',
        Image: "../../images/caseStudies/LovingWithFood-Hero.png",
        Title: 'Loving with Food',
        ImgClass: 'smallImage',
        Content: 'Direct to consumer, meal kit delivery system that would celebrate life\'s moments.'
      },
      { Link: '/case-studies/calls-leads-feature',
        Image: '../../images/caseStudies/BeccasRestaurant-hero.png',
        Title:'Becca\'s Restaurant',
        Content:'Branding for a new restaurant launch.',
        Color:'#e6f8e5'
      },
      { Link: '/case-studies/creative-projects',
        Image: '../../images/caseStudies/Campaigns-Hero.png',
        Title: 'Creative Direction',
        Content: 'A collection of assorted creative.',
        Color: '#dbdae9'
      }
    ]

    return(
      <section>
        <div className="container">
          <div className="row">
            <CaseStudyHeader className="col">
              <h5>Creative Direction</h5>
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

export default CreativeDirection