import React from 'react'

class Header extends React.Component {

  render() {
    return (
      <div>
        <header className="header">
          <div className="container">
            <div className='row'>
              <div className='col'>
                <div className="header-container">
                  <h1 className="header-title">{this.props.title}</h1>
                  <h2 className="header-subtitle">{this.props.subtitle}</h2>
                  {this.props.headerList}
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>
    );
  }
}

export default Header