import React from 'react'

import Header from '../Components/Header'
import SectionTitleContainer from "../Components/Section/SectionTitleContainer"
import HowDidIGetHere from '../Components/HowDidIGetHere'
import CaseStudies from '../Components/CaseStudy/CaseStudies'

class About extends React.Component {
  render() {
    return(
      <div>
        <Header
        title="Michael McMillan"
        subtitle="People focused user experience design leader and strategist, producing elegant designs to meet business objectives, create thoughtful experiences focused on people centric solutions. Empathic mentor that thrives in cultivating teams and driving growth."
        headerList={[
            <ul className="header-list" key="header-list-1">
              <li>Team Leadership – Leading and mentoring a multidisciplinary team of 50+ designers and consultants in a fully remote environment including teams within the US and India.</li>
              <li>Design Thinking – Problem solving through discovery and creative approach to identify quick wins and recognize failure fast to define best in class products and design.</li>
              <li>Innovative Solutions – Telling stories that help people fall in love with a product or brand by focusing on meaningful experiences that drive engagement and creates stickiness.</li>
            </ul>
          ]}
        />
        <section>
          <div className="container">
            <SectionTitleContainer
                title="Leadership Philosophy"
                content={[
                  <div key="4"><p>Why do I love to lead designers and a design organization?</p>

                  <ol className="about-ordered-list">
                    <li>The impact the design team can have on a company’s direction.</li>
                    <li>The growth those designers will experience in their careers. Success to me is when business impact and personal growth influence each other.</li>
                  </ol>
                  <p>
                    There are 5 things I strongly believe in that help define my approach:.
                  </p>
                  <ol className="about-ordered-list">
                    <li>Never settle for good enough</li>
                    <li>ABL: Always be learning</li>
                    <li>Be able to jump into the weeds, then have the ability to quickly get out</li>
                    <li>Make space for your team to grow and learn by empowering them to be responsible for their projects</li>
                    <li>Trust your team and challenge them to do their best work</li>
                  </ol>
                  <p>As a leader, it is ok to say I don’t know. But I also believe in proactively trying to find solutions. A growth mindset is a combination of humility and confidence and knowing when to have which. At this point in my career my main goals are to share what I know, learn what I can and provide guidance with integrity.</p>
                  </div>
                  ]}
            />
          </div>
          <HowDidIGetHere />
          <CaseStudies />
        </section>
      </div>
    )
  }
}

export default About