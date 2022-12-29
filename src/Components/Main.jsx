import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { TransitionGroup, CSSTransition } from 'react-transition-group'

import ScrollToTop from './ScrollToTop'
import Home from '../Pages/Home'
import About from '../Pages/About'
import Experience from '../Pages/Experience'
import CallCenterDashboard from '../Pages/Case-Studies/CallCenterDashboard'
import BUCallsLeadsFeature from '../Pages/Case-Studies/BUCallsLeadsFeature'
import CampaignInterface from '../Pages/Case-Studies/CampaignInterface'
import AdvertiserOnboarding from '../Pages/Case-Studies/AdvertiserOnboarding'
import AdditionalProjects from '../Pages/Case-Studies/AdditionalProjects'
import CreativeProjects from '../Pages/Case-Studies/CreativeProjects'
import LovingWithFood from '../Pages/Case-Studies/LovingWithFood'


class Main extends React.Component {
  render() {
    return(
      <main>
        <ScrollToTop>
          <Route render={({ location }) => (
            <TransitionGroup>
              <CSSTransition
                key={location.key}
                timeout={300}
                classNames='fade'
              >
              <Switch location={location}>
                <Route exact path='/' component={About}/>
                <Route exact path='/experience' component={Experience}/>
                <Route exact path='/case-studies' component={Home}/>
                <Route exact path='/case-studies/call-center-dashboard' component={CallCenterDashboard}/>
                <Route exact path='/case-studies/calls-leads-feature' component={BUCallsLeadsFeature}/>
                <Route exact path='/case-studies/additional-projects' component={AdditionalProjects}/>
                <Route exact path='/case-studies/advertiser-onboarding' component={AdvertiserOnboarding}/>
                <Route exact path='/case-studies/campaign-interface' component={CampaignInterface}/>
                <Route exact path='/case-studies/creative-direction' component={CreativeProjects}/>
                <Route exact path='/case-studies/loving-with-food' component={LovingWithFood}/>
              </Switch>
              </CSSTransition>
            </TransitionGroup>
          )}/>
        </ScrollToTop>
      </main>
    )
  }
}

export default Main