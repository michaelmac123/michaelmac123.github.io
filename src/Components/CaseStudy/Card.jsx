import React from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/core'
import { Link } from 'react-router-dom'

const dynamicStyle = props =>
  css`
    background-color: #e2ecf8;
    background-color: ${props.color};
    height: 365px;
    overflow: hidden;
    padding: 30px;
    position: relative;
    transition:  all .5s;
    width: 100%;
    @media (min-width: 768px) {
        height: 235px;
    }
    @media (min-width: 1024px) {
        height: 365px;
    }
    img {
      position: relative;
      width: 140%;
      &.smallImage {
        left: -35%;
      }
    }
  `
const CaseStudyCardContainer = styled.div `
  a {
    color: #212529;
    &:hover {
      color: #212529;
      text-decoration: none;
    }

  }
`
const ImageThumb = styled.div `
  ${dynamicStyle};
`
const CaseStudyCard = styled.div`
  border-radius: 1px;
  cursor: pointer;
  display: block;
  margin: 20px 0;
  min-height: 535px;
  padding: 0;
  transition:  all .5s;
  width: 100%;
  &:hover {
    box-shadow: 0 10px 15px rgba(0,0,0, .35);
    transition: transition:  all .5s;
  }
  &:hover div {
    opacity: .8;
    transition: all .5s;
  }
  p {
    display:block;
    font-size: 1.5rem;
    font-weight:500;
    margin-bottom: 0;
    margin-top: 20px;
    padding: 0 20px;
    text-align: left;
    width: 100%
  }
  span {
    &:after {
      background-color: #919ba1;
      content: "";
      display: block;
      height: 2px;
      margin: .25rem 0 .75rem 0;
      position: relative;
      width: 50%;
    }
  }
  p:last-of-type {
    color: #68747b;
    font-size: 1rem;
    font-weight:300;
    margin-top: 0px;
    padding-bottom: 20px;
  }
`

function Card(props) {
  const content = props.content.map((content, index) =>
    <CaseStudyCardContainer key={index} className="col-md col-sm-12">
      <Link to={content.Link}>
        <CaseStudyCard>
          <ImageThumb color={content.Color}>
            <img src={content.Image} alt="Computer screen" className={content.ImgClass}></img>
          </ImageThumb>
          <p><span className="block">{content.Title}</span></p>
          <p>{content.Content}</p>
        </CaseStudyCard>
      </Link>
    </CaseStudyCardContainer>

  )
  return (
    content
  )
}

export default Card