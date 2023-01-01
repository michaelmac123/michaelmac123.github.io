import React from 'react'

import CaseStudies from '../../Components/CaseStudy/CaseStudies'
import CaseStudyHeader from '../../Components/CaseStudy/CaseStudyHeader'
import CaseStudySection from '../../Components/CaseStudy/CaseStudySection'

class CallCenterDashboard extends React.Component {
  render() {
    const content =[
      { title: "Objective",
        text:<div className="col-sm-10 offset-sm-1">
              <h5>Goal</h5>
              <p>Develop a stand-alone call center interface that would guide the call center representatives to correctly and efficiently route IVR (Interactive Voice Response) calls, and direct calls to geographic and service type specific, partnered advertisers.</p>
              <h5>Problem</h5>
              <p>Most call center technologies are proprietary, and designed to work within a specific system. eLocal wanted to integrate IVR technology with a new call center dashboard that would leverage the IVR to qualify calls then use the call center dashboard to provide the call representative support to correctly connect callers with partners near their geography who could provide the specific service.</p>
              <h5>My Role</h5>
              <p><span>UX Designer & Visual Designer</span>I was the lead designer conducting user interviews, researching existing products, created basic and advanced flows,  and creating prototypes with refined visuals and interactions. Additionally, I worked with the CTO to manage the development team’s timelines, and deliverables.</p>
            </div>},
      { title: "Discovery",
        text:<div className="col-sm-10 offset-sm-1">
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
                  <div className="col-sm-10 offset-sm-1">
                    <p>Quick proto-personas maintained focus on the user, and prevented deviating by the non-user stakeholders from the agreed upon design goals, and grounded our user flow. This allowed us to have a focused user to reference for all decisions made during the design process.</p>
                  </div>
                  <div className="col-sm-10 offset-sm-1">
                    <p className='text-center'><img alt="Temp Title" src={'../../images/caseStudies/Persona_ Call_Center.png'}></img></p>
                  </div>
                </div>
                <div className='row align-items-center'>
                  <div className="col-sm-10 offset-sm-1">
                    <p>With a basic direction, I created the foundation for the user flow and defined the steps a call representative would follow once they answered the call.</p>
                  </div>
                  <div className="col-sm-10 offset-sm-1">
                    <p className='text-center'><img alt="Temp Title" src={'../../images/caseStudies/calls-flow-v2.png'}></img></p>
                  </div>
                </div>
              </div>
      },
      { title: "Ideation",
        text:<div>
                <div className='row align-items-center'>
                  <div className="col-sm-10 offset-sm-1">
                    <p>White board, and paper prototypes were utilized to get the basic design ideas out for discussion. The CTO, and I quickly “roughed out” the basic interactive flow, and user actions then looked for potential development roadblocks that could slow the project. From there we, put together some rough visuals for using testing and review.</p>
                  </div>
                </div>
                <div className='row align-items-start'>
                  <div className="col-sm-10 offset-sm-1">
                    <p className='text-center'><img alt="Temp Title" src={'../../images/caseStudies/call-center-ideation-1-1-1.png'}></img></p>
                  </div>
                  <div className="col-sm-10 offset-sm-1">
                    <p>A few quick sketches allowed me to discover a major omission that would not have been fleshed out until the development cycle started.</p>
                  </div>
                </div>
              </div>
      },
      { title: "Prototyping",
        text:<div>
                <div className='row align-items-center'>
                  <div className="col-sm-10 offset-sm-1">
                    <p>The <a href="https://cc-prototype.herokuapp.com" rel="noopener noreferrer" target="_blank">first prototype</a> was created with Angular, and Middleman to define page interactions, and provide a walk through for the call center representatives.</p>
                  </div>
                </div>
                <div className='row align-items-center'>
                  <div className="col-sm-10 offset-sm-1">
                    <p className='text-center'><img alt="Temp Title" src={'../../images/caseStudies/call-center-prototyping-1.png'}></img></p>
                  </div>
                </div>
                <div className='row align-items-center'>
                  <div className="col-sm-10 offset-sm-1">
                    <p>This was the planned jump-off point for additional iterations, feature introduction, and provided a basic structure for the development team during production development.</p>
                  </div>
                </div>
                <div className='row align-items-center'>
                  <div className="col-sm-10 offset-sm-1">
                    <p className='text-center'><img alt="Temp Title" src={'../../images/caseStudies/call-center-prototyping-2.png'}></img></p>
                  </div>
                </div>
              </div>
      },
      { title: "Closing the Loop",
        text: <div className='row align-items-center'>
                <div className="col-sm-10 offset-sm-1">
                  <h5>Was this successful?</h5>
                  <p>First and foremost we got a production version up, and running in 3 months!</p>
                  <p>There was a 15% increase in monetized calls, specifically by representatives referencing the callback queue, and returning those dropped or missed calls. </p>
                  <p>The current iteration of this project supports a call team of 25 representatives in 3 different states using a variety of devices from Chromebooks to desktop computers.</p>
                  <h5>What did I learn?</h5>
                  <p>Call representatives aren’t machines!</p>
                  <p>Call scripts are great as prompts… not so great for reading verbatim.</p>
                  <p>Time zones needed to be considered more effectively.</p>
                  <p>Don’t give a dev team a straw man during the development cycle.</p>
                  <h5>What can be improved?</h5>
                  <p>Visual design was minimized to get a fully functional production version.</p>
                  <p>This led to some “clunky” interactions between screens, and a “spreadsheet” look design.</p>
                  <p>Finalized visuals never made it into the final production version.</p>
                </div>
              </div>
      }
    ]
    return (
      <section>
        <article className="container">
          <div className="row">
            <CaseStudyHeader
              CsTitle = "Project: Call Center Dashboard"
              CsSubtitle = "Real time, call center dashboard connecting live callers to eLocal advertising partners."
              CsHero = {'../../images/caseStudies/Calls-Center-Hero.png'}
            />
            <CaseStudySection content={content} />
            <CaseStudies />
          </div>
        </article>
      </section>
    )
  }
}

export default CallCenterDashboard



