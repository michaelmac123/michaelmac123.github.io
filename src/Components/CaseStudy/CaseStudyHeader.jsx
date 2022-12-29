import React from "react"
import styled from '@emotion/styled'

const Header = styled.header `
  padding-top: 80px;
  .container {
    border-bottom: 1px solid #919ba1;
  }
  h1 {
    font-size: 3rem;
    font-weight: 300;
    padding: 40px 0 0px 0;
  }
  h2 {
    color: #606B7E;
    font-size: 1.5rem;
    font-weight: 300;
    padding: 0px 0 20px 0;
  }
  img {
    width: 100%;
  }
`

class CaseStudyHeader extends React.Component {
  render() {
    return (
      <Header>
        <div className="container">
          <div className='row'>
            <div className='col'>
              <div>
                <h1>{this.props.CsTitle}</h1>
                <h2>{this.props.CsSubtitle}</h2>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-8 offset-4'>
              <div className="case-study-hero">
                <img src={this.props.CsHero} alt="Computer screen"></img>
              </div>
            </div>
          </div>
        </div>
      </Header>
    )
  }
}

export default CaseStudyHeader