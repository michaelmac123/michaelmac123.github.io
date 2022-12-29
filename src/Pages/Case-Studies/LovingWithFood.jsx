import React from 'react'

import CaseStudies from '../../Components/CaseStudy/CaseStudies'
import CaseStudyHeader from '../../Components/CaseStudy/CaseStudyHeader'
import CaseStudySection from '../../Components/CaseStudy/CaseStudySection'

class LovingWithFood extends React.Component {
  render() {
    const content =[
      { title: "Objective",
        text:<div className="col-sm-10 offset-sm-1">
              <h5>Goal</h5>
              <p>Dream Dinners wanted to create their own direct to consumer, meal kit delivery system that would celebrate life's moments. They wanted a design that visually complemented the sentiment and feeling from the hero video.</p>
              <h5>My Role</h5>
              <p><span>Designer</span>My role was to provide creative direction, visual design, and the experience strategy. This included the construction of the basic UI interactions and flow and delivery of a working prototype to demonstrate flow.</p>
            </div>},
      { title: "Discovery",
        text: <div>
                <div className="col-sm-10 offset-sm-1">
                  <h5>Constraints</h5>
                  <p>From a business perspective, and with a production desktop version in use, the VP of Sales requested that the mobile design follow that version’s functionality. In addition, for simplicity, the development team requested that the design pull from the current components with a focus on responsive design.</p>
                </div>
                <div className="col-sm-10 offset-sm-1">
                  <p className='text-center'><img alt="Temp Title" src={require('../../images/caseStudies/BU-Calls-discovery-1.png')}></img></p>
                </div>
                <div className="col-sm-10 offset-sm-1">
                  <h5>Research</h5>
                  <p>Through Google Analytics I had basic page metrics, which actions were being completed, and potential roadblocks.  Our internal lead tracking system determined how many leads were accepted vs. rejected, and I used that as a metric to determine if the issue was a lead quality issue or design issue.</p>
                  <p>Using a previously established group of advertisers as a user group, I leveraged that relationship to discover how they envisioned completing their calls and leads tasks.</p>
                </div>
              </div>
      },
      { title: "Flow & Users",
        text:<div>
                <div className='row align-items-center'>
                  <div className="col-sm-10 offset-sm-1">
                    <p>For lead submissions, the lead would originate from emails sent to the business email associated with the account. Calls would follow the same flow if the call was converted to a form. In the case of a warm transfer the call would go straight to the business phone.</p>
                  </div>
                  <div className="col-sm-10 offset-sm-1">
                    <p className='text-center'><img alt="Temp Title" src={require('../../images/caseStudies/BU-Calls-flows-1.png')}></img></p>
                  </div>
                </div>
              </div>
      },
      { title: "Ideation",
        text:<div>
                <div className='row align-items-center'>
                  <div className="col-sm-10 offset-sm-1">
                    <p>With so much information being displayed on the desktop version, I followed accepted design patterns, and decided that the design may need to incorporate a high-level view with a link to a more detailed description.</p>
                  </div>
                  <div className="col-sm-10 offset-sm-1">
                    <p className='text-center'><img alt="Temp Title" src={require('../../images/caseStudies/BU-Calls-ideation-1.png')}></img></p>
                  </div>
                </div>
                <div className='row align-items-center'>
                  <div className="col-sm-10 offset-sm-1">
                    <p>The first round of designs were very basic, and followed the paper prototypes. The immediate reaction from the user group was a strong dislike of the additional click to expand the details, and the long page list full of redundant information.</p>
                  </div>
                  <div className="col-sm-10 offset-sm-1">
                    <p className='text-center'><img alt="Temp Title" src={require('../../images/caseStudies/BU-Calls-ideation-3.png')}></img></p>
                  </div>
                  <div className="col-sm-10 offset-sm-1">
                    <p>We progressed from the original design to a simpler card with a responsive design that would adapt from the desktop version. With these three designs, I built out the first prototypes and began testing concepts with our internal teams.</p>
                  </div>
                </div>
              </div>
      },
      { title: "Prototyping",
        text:<div>
                <div className='row align-items-center'>
                  <div className="col-sm-10 offset-sm-1">
                    <p>The second and third round of iterations included the use of a card style design pattern that would work responsively between mobile and desktop layouts. This allowed the mobile version to show a detailed call or lead on the mobile screen, and addressed the additional click issue.</p>
                  </div>
                  <div className="col-sm-10 offset-sm-1">
                    <p className='text-center'><img alt="Temp Title" src={require('../../images/caseStudies/BU-Calls-prototype-1.png')}></img></p>
                  </div>
                  <div className="col-sm-10 offset-sm-1">
                    <p>Using Invision Studio, I added the basic interactions and began testing amongst the external user group that I'd set up for new feature testing. <a href="https://projects.invisionapp.com/prototype/PROTOTYPE-BU-calls-leads-cjrauf29b01bdzo01kwahndco/play/5467833e" rel="noopener noreferrer" target="_blank">View prototype</a></p>
                  </div>
                  <div className="col-sm-10 offset-sm-1">
                    <p className='text-center'><img alt="Temp Title" src={require('../../images/caseStudies/BU-Calls-prototype-2.gif')}></img></p>
                  </div>
                </div>
              </div>
      },
      { title: "Closing the Loop",
        text:<div>
                <div className="col-sm-10 offset-sm-1">
                  <h5>Was this successful?</h5>
                  <p>Initially… no!  With limited screen space, I needed to find a better solution for advertisers to quickly scan the lead information.  A card style layout was adopted which our focus group commented on being an easier way for them to digest the information.</p>
                  <p>Rejected leads, and calls decreased by 3% over a 6 month period and 4% during the first 12 months.</p>
                  <h5>What did I learn?</h5>
                  <p>Different business verticals have different requirements. Inside those categories, different user levels have different requirements.</p>
                  <h5>What can be improved?</h5>
                  <p>Automated notifications and text messaging related responses to follow up with advertisers.</p>
                  <p>Establishing a better sense of balance between detailed business requirements and which information users really needs in the field.</p>
                </div>
              </div>
      }
    ]
    return(
      <section>
        <article className="container">
          <div className="row">
            <CaseStudyHeader
              CsTitle = "Project: Loving with Food"
              CsSubtitle = "Direct to consumer, meal kit delivery system."
              CsHero = {require('../../images/caseStudies/LovingWithFood-Hero.png')}
            />
            <CaseStudySection content={content} />
            <CaseStudies />
          </div>
        </article>
      </section>
    )
  }
}

export default LovingWithFood