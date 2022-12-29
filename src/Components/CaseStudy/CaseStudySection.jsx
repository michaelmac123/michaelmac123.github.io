import React from 'react'
import styled from '@emotion/styled'


const CaseStudyContainer = styled.div `
  border-bottom: 1px solid #919ba1;
  text-align: left;
  padding: 0 .5rem;
  &:last-of-type {
    border-bottom: none;
  }
  h3 {
    margin-top: 30px;
    &:after {
      background-color: #919ba1;
      content: "";
      display: block;
      height: 2px;
      margin: .25rem 0 1.75rem 0;
      position: relative;
      width: 5rem;
    }
  }
  h4 {
    font-size: 1.25rem;
  }
  h5 {
    font-size: 1.15rem;
    margin-bottom: .1rem;
    padding: .5rem .5rem 0 .5rem;
  }
  p {
    color: #68747b;
    font-weight: 300;
    padding: 0 .5rem;
    & span {
      font-weight: 500;
      display: block;
    }
  }
  img {
    width: 100%;
  }
`

function CaseStudySection(props) {
  const content = props.content.map((content, index) =>
    <CaseStudyContainer className="col-2m-12" key={index} >
      <h3>{content.title}</h3>
      {content.text}
    </CaseStudyContainer>
  )
  return (
    content
  )
}

export default CaseStudySection