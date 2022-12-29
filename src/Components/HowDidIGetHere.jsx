import React from 'react'

import CircleBubbles from "./Circles/CircleBubbles"
import SectionTitleContainer from "./Section/SectionTitleContainer"
import SectionSubtitleContainer from "./Section/SectionSubtitleContainer"
import IconKnife from "./Icons/IconKnife"
import IconBulb from "./Icons/IconBulb"
import IconPencil from "./Icons/IconPencil"
import IconCode from "./Icons/IconCode"
import IconClipBoard from "./Icons/IconClipBoard"

class HowDidIGetHere extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedLink: 0,
      selectedContent: 0
    };
    this.openLink = this.openLink.bind(this);
  }
  openLink(index) {
    this.setState({
      selectedLink: (this.state.selectedLink === index ? -1 : index),
      selectedContent: (this.state.selectedLink === index ? -1 : index)
    });
  }

  getCircleLinks() {
    const CircleLinks = [
      {svg: <IconKnife styleName="about-svg" key='1'/>, title: "Chef"},
      {svg: <IconBulb styleName="about-svg" key='1'/>, title: "Marketing Specialist"},
      {svg: <IconPencil styleName="about-svg" key='1'/>, title: "Graphic Designer"},
      {svg: <IconCode styleName="about-svg" key='1'/>, title: "Visual Designer"},
      {svg: <IconClipBoard styleName="about-svg" key='1'/>, title: "Creative Director"},
      {svg: <IconClipBoard styleName="about-svg" key='1'/>, title: "Product Designer"}
    ]
    return CircleLinks
  }
  getCircleContents() {
      const CircleContents = [
        {
          title: "Chef",
          content: <p>I feel at times that I was a foodie-hipster well before they were cool. As a chef, I insisted on the highest standard and established a high-quality product that earned 2 James Beard awards—Best Chef Mid-Atlantic, Best Single Subject Cookbook. Co-developed, planned strategy and assisted in layout of an award-winning cookbook and was personally recognized by the Executive Chef/Owner in credits. Oversaw all development, production and presentation for James Beard Event Dinner.</p>,
          bubbles: ["Sauces", "Stews", "Knife Skills", "Grilling", "Ceviche", "Saute", "Pastry", "Creative"]},
        {
          title: "Marketing Specialist",
          content: <p>Taking my love of food, I began channeling that inner creativeness and began using it to drive customer interactions through my marketing efforts. I started using Twitter in it's early days as a means to open a small window of discussion with the local community during my efforts with a small real estate company. I successfully developed and designed all internal and external communications to support all marketing campaigns including email invitations, online ad/landing page content and newsletter sponsorships.</p>,
          bubbles: ["Market Research","Strategic Directions","Public Relations","Content Strategy","Email Marketing","Online Advertising"]},
        {
          title: "Graphic Designer",
          content: <p>Obsessing over clients’ brand’s identity can enlighten you to your inner weaknesses and challenge you to become better at what you love. I love to take that challenge and find new ways to be inventive using techniques to provide relevant design schemes and using color and shape to translate the emotion of a client's design. In essence, design should look and feel light and non-invasive as if you feel the section is just an exension of the whole, much like a sauce in cooking is a way to accent the main ingredients. Simple... a fantastic guiding principle.</p>,
          bubbles: ["Branding","Illustrator","Photoshop","InDesign","Photography","Logo Design","Infographics"]},
        {
          title: "Visual Designer",
          content: <p>Knowing the ingredients is a great place to start. Early on, I discovered a love for the intricate details of web development (and the sadness of IE6). Pushing the CSS envelope, I moved to LESS then SASS and have the ability to harness its greatness. Working on complex applications with dynamic data forces me to think on a large scale and be a master of flexible layout, thinking beyond basic, static, Photoshop layouts. Building rapid prototypes allows for quick iteration of concepts and experiences that enables immediate consumer interaction.</p>,
          bubbles: ["WebDesign","CSS/SASS","HTML/HAML","Javascript","Ruby on Rails","Bootstrap/Foundation","WordPress" ]},
        {
          title: "Creative Director",
          content: <p>Leading the charge!  Brand focused, and creative driven.  I'm at heart an optimist. Between design and technology, anything is possible. There are no bounds to progress and what I can accomplish. I've established a creative vision, focused on high-quality, and minimalistic design which won new clients and driven innovation. My passion, inspires teams to do their best work, learn more, and dream bigger.  I'm a champion of cohesive, branding effort focused on the big picture, and based on what makes a unique identity.</p>,
          bubbles: ["Creaive Direction","Team Development","Leadership","Photography & Film Direction","Storytelling","Passion","Brand Champion","Coach","Creative Strategy"]},
        {
          title: "Design Leader",
          content: <p>How'd we get here? Designing for the interaction only seemed to be the next step in the customer experience. Figuring out why the user does what she does is challenging and exciting. Following best practices, then throwing best practices out the window after user testing proves otherwise, is a great way to stick it to all those internet trolls. Identifing users, staying open minded about their needs and finding common patterns in their interactions with products, allows you to develop products that will earn their trust and deliver high levels on satisfaction.</p>,
          bubbles: ["Rapid Prototyping","UX Research","Sketch","InVision","User Scenarios","Proto Personas","Card Sorting"]}
      ]
      return CircleContents
    }
  render() {
    const CircleLinks = this.getCircleLinks()
    const CircleContents = this.getCircleContents()
    return (
      <section>
        <div className="container">
          <SectionTitleContainer
            title="Tying it all Together"
            subtitle={[<small key="1">(select below to learn more)</small>]}
            content={[
              <p key="1">I’ve worn many hats in my career — I’ve had a lot of roles and understand their different needs, but what do they all have in common? My consumer obsession, desire to create something fantastic for them and my ablility to bring that creation to life.</p>
              ]}
          />
          <div className="row">
            <div className="col">
              {CircleLinks.length && CircleLinks.map((content, index) => (
                <div key={`item-${index}`} className='about-list-circles'>
                  <button id={"CircleLink_"+index} className={`item ${this.state.selectedLink === index ? 'about-list-circles-links current' : 'about-list-circles-links'}`} onClick={() => this.openLink(index)}>
                    {content.svg}
                  </button>
                  <span className="about-list-title">{content.title}</span>
                </div>
              ))}
            </div>
          </div>

          {CircleContents.length && CircleContents.map((content, index) => (
          <div className={`${this.state.selectedLink === index ? 'row about-box-panel isVisible' : 'row about-box-panel'}`} key={"CircleContent-"+index} id={"CircleContent_"+index}>
            <div id = {"CircleContent_"+index} className="col-md-10 offset-md-1 col-sm-12">
              <SectionSubtitleContainer
                title={content.title}
                content={content.content}
              />
              <ul className="list-inline about-list-tubes">
                <CircleBubbles bubbles={content.bubbles} />
              </ul>
            </div>
          </div>
          ))}





        </div>
      </section>
    )
  }
}

export default HowDidIGetHere