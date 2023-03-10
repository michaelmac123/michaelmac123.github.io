import React from 'react'

import CaseStudies from '../../Components/CaseStudy/CaseStudies'
import CaseStudyHeader from '../../Components/CaseStudy/CaseStudyHeader'
import CaseStudySection from '../../Components/CaseStudy/CaseStudySection'

class CampaignInterface extends React.Component {
  render() {
    const content =[
      { title: "Goal",
        text:<div>
              <h5>Goal</h5>
              <p>Develop a stand-alone call center interface that would guide the call center representatives to correctly and efficiently route IVR (Interactive Voice Response) calls, and direct calls to geographic and service type specific, partnered advertisers.</p>
              <h5>Problem</h5>
              <p>Most call center technologies are proprietary, and designed to work within a specific system. eLocal wanted to integrate IVR technology with a new call center dashboard that would leverage the IVR to qualify calls then use the call center dashboard to provide the call representative support to correctly connect callers with partners near their geography who could provide the specific service.</p>
              <h5>My Role</h5>
              <p><span>UX Designer & Visual Designer</span>I was the lead designer conducting user interviews, researching existing products, created basic and advanced flows,  and creating prototypes with refined visuals and interactions. Additionally, I worked with the CTO to manage the development team’s timelines, and deliverables.</p>
            </div>},
      { title: "Discovery",
        text:<div>
                <h5>Competitive Analysis – Who is doing something similar?</h5>
                <p>At the time, there were very few off the shelf call center products available on the market. We partnered with Twilio to leverage their API to streamline the connection between our IVR and UI.</p>
                <h5>Personnel factors – Stakeholders vs. users.</h5>
                <p>This was a bit murky with upper management requesting specific goals and functionality that seemed at odds with the representatives.</p>
                <h5>Environmental factors – What will affect the user?</h5>
                <p>The call center location was mixed in amongst  cubicles of sales teams and operations teams creating a distracting environment.  Team consolidation, upgraded headsets, and sound reducing cubicle walls were recommended in addition to designing a new UI.</p>
              </div>
      },
      { title: "Flow & Users",
        text:<div>
                <div className='row align-items-center'>
                  <div className="col-sm-5">
                    <p>Quick proto-personas maintained focus on the user, and prevented deviating by the non-user stakeholders from the agreed upon design goals, and grounded our user flow.</p>
                  </div>
                  <div className="col-sm-7">
                    <p className='text-center'><img alt="Temp Title" src={'../../images/caseStudies/Persona_ Call_Center.png'}></img></p>
                  </div>
                </div>
                <div className='row align-items-center'>
                  <div className="col-sm-5">
                    <p>Texts about the flow chart</p>
                  </div>
                  <div className="col-sm-7">
                    <p className='text-center'><img alt="Temp Title" src={'../../images/caseStudies/calls-flow-v2.png'}></img></p>
                  </div>
                </div>
              </div>
      },
      { title: "Ideation",
        text:<div>
                <div className='row align-items-center'>
                  <div className="col-sm-5">
                    <p>Quick proto-personas maintained focus on the user, and prevented deviating by the non-user stakeholders from the agreed upon design goals, and grounded our user flow.</p>
                  </div>
                  <div className="col-sm-7">
                    <p className='text-center'><img alt="Temp Title" src={'../../images/caseStudies/Persona_ Call_Center.png'}></img></p>
                  </div>
                </div>
                <div className='row align-items-center'>
                  <div className="col-sm-5">
                    <p>Texts about the flow chart</p>
                  </div>
                  <div className="col-sm-7">
                    <p className='text-center'><img alt="Temp Title" src={'../../images/caseStudies/calls-flow-v2.png'}></img></p>
                  </div>
                </div>
              </div>
      },
      { title: "Prototyping",
        text:<div>
                <div className='row align-items-center'>
                  <div className="col-sm-5">
                    <p>Quick proto-personas maintained focus on the user, and prevented deviating by the non-user stakeholders from the agreed upon design goals, and grounded our user flow.</p>
                  </div>
                  <div className="col-sm-7">
                    <p className='text-center'><img alt="Temp Title" src={'../../images/caseStudies/Persona_ Call_Center.png'}></img></p>
                  </div>
                </div>
                <div className='row align-items-center'>
                  <div className="col-sm-5">
                    <p>Texts about the flow chart</p>
                  </div>
                  <div className="col-sm-7">
                    <p className='text-center'><img alt="Temp Title" src={'../../images/caseStudies/calls-flow-v2.png'}></img></p>
                  </div>
                </div>
              </div>
      },
      { title: "Closing the Loop",
        text:<div>
                <div className='row align-items-center'>
                  <div className="col-sm-5">
                    <p>Quick proto-personas maintained focus on the user, and prevented deviating by the non-user stakeholders from the agreed upon design goals, and grounded our user flow.</p>
                  </div>
                  <div className="col-sm-7">
                    <p className='text-center'><img alt="Temp Title" src={'../../images/caseStudies/Persona_ Call_Center.png'}></img></p>
                  </div>
                </div>
                <div className='row align-items-center'>
                  <div className="col-sm-5">
                    <p>Texts about the flow chart</p>
                  </div>
                  <div className="col-sm-7">
                    <p className='text-center'><img alt="Temp Title" src={'../../images/caseStudies/calls-flow-v2.png'}></img></p>
                  </div>
                </div>
              </div>
      }
    ]
    return(
      <section>
        <article className="container">
          <div className="row">
            <CaseStudyHeader
              CsTitle = "Project: Pay-Per-Click Campaigns Interface"
              CsSubtitle = "Landing page generator designed for rapid deployment of theme-based PPC campaigns."
              CsHero = {'../../images/caseStudies/Campaigns-Hero.png'}
            />
            <CaseStudySection content={content} />
            <CaseStudies />
          </div>
        </article>
      </section>
    )
  }
}

export default CampaignInterface