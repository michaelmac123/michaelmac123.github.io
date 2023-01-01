import React from 'react'

import CaseStudies from '../../Components/CaseStudy/CaseStudies'
import CaseStudyHeader from '../../Components/CaseStudy/CaseStudyHeader'
import CaseStudySection from '../../Components/CaseStudy/CaseStudySection'

class CreativeProjects extends React.Component {
  render() {
    const content =[
      { title: "Campaigns Dashboard",
        text:<div>
              <div className="col-sm-6 offset-sm-3">
                <p className='text-center'><img alt="Temp Title" src={'../../images/caseStudies/Campaigns-Hero.png'}></img></p>
              </div>
              <div className="col-sm-10 offset-sm-1">
                <h5>Goal</h5>
                <p>Create a single platform to manage and create landing page campaigns.</p>
                <h5>Problem</h5>
                <p>Elocal required a simple platform that would allow mutliple landing page campaigns to be created quickly through a basic dashboard interface.</p>
                <h5>My Role</h5>
                <p><span>UX Designer & Project Manager</span>I was solely responsible for UX, UI and visual design for this project. Including follow up user testing, competitive research, delivering hi-fidelity prototypes, and supplying the development team with a working HTML/CSS layout.</p>
              </div>
              <div className="col-sm-10 offset-sm-1">
                  <p className='text-center'><img alt="Temp Title" src={'../../images/caseStudies/Campaigns-Main-1.png'}></img></p>
                </div>
            </div>},
      { title: "Affiliates Onboarding",
        text:<div>
              <div className="col-sm-6 offset-sm-3">
                <p className='text-center'><img alt="Temp Title" src={'../../images/caseStudies/Affiliates-Onboarding-Hero.png'}></img></p>
              </div>
              <div className="col-sm-10 offset-sm-1">
                <h5>Goal</h5>
                <p>Create and consolidate eLocal's affiliate onboarding process.</p>
                <h5>Problem</h5>
                <p>When onboarding a new affiliate, it was discovered that different team members had multiple ways to handle the same tasks. We took a deep dive into the process and deteremined the best ways to consolidate the steps and create an easy way to track progress and complete the necessary steps to move a new affliate to an active status.</p>
                <h5>My Role</h5>
                <p><span>UX Designer & Visual Designer</span>I was solely responsible for UX, UI and visual design for this project. Including user discovery, delivering hi-fidelity prototypes, and converting them to functioning visuals.</p>
              </div>
              <div className="col-sm-10 offset-sm-1">
                  <p className='text-center'><img alt="Temp Title" src={'../../images/caseStudies/Affiliates-Onboarding-Main-1.png'}></img></p>
                </div>
            </div>}
    ]
    return(
      <section>
        <article className="container">
          <div className="row">
            <CaseStudyHeader
              CsTitle = "Creative Direction"
              CsSubtitle = "Assorted Creative"
              CsHero = {'../../images/caseStudies/AdditionalProjects-Hero.png'}
            />
            <CaseStudySection content={content} />
            <CaseStudies />
          </div>
        </article>
      </section>
    )
  }
}

export default CreativeProjects