import React from 'react'
import styled from '@emotion/styled'

const HDIGHHeader= styled.div`
  text-align: left;
  margin-bottom:.25rem;
  h3 {
    margin-top: 30px;
    &:after {
      background-color: #919ba1;
      content: "";
      display: block;
      height: 2px;
      margin: .25rem 0 .75rem 0;
      position: relative;
      width: 5rem;
    }
  }
  p {
    font-weight: 300;
    margin:0;
    padding: 0 .5rem;
    color: #68747b;
    & span {
      color: #49545a;
      font-weight: 500;
      display: block;
    }
  }
  small {
    color: #49545a;
    font-size: 65%;
    padding-left: .5rem;
  }
  hr {
    margin-top .25rem;
  }
`


class SubtitleContainer extends React.Component {
  render() {
    return(
      <div className="row">
        <HDIGHHeader className="col">
          <p><span>{this.props.title}</span></p>
          {this.props.content}
        </HDIGHHeader>
      </div>
    )
  }
}

export default SubtitleContainer