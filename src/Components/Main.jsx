import React from 'react'
import {
  Routes,
  Route
} from 'react-router-dom'

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
        <Routes>
          <Route path='/' element={<About />}/>
          <Route path='/experience' element={<Experience />}/>
          <Route path='/case-studies' element={<Home />}/>
          <Route path='/case-studies/call-center-dashboard' element={<CallCenterDashboard />}/>
          <Route path='/case-studies/calls-leads-feature' element={<BUCallsLeadsFeature />}/>
          <Route path='/case-studies/additional-projects' element={<AdditionalProjects />}/>
          <Route path='/case-studies/advertiser-onboarding' element={<AdvertiserOnboarding />}/>
          <Route path='/case-studies/campaign-interface' element={<CampaignInterface />}/>
          <Route path='/case-studies/creative-direction' element={<CreativeProjects />}/>
          <Route path='/case-studies/loving-with-food' element={<LovingWithFood />}/>
        </Routes>
      </main>
    )
  }
}

export default Main