import React from 'react'
import { NavLink } from 'react-router-dom'

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      addClass: false,
      isTop: true
    }
  }
  toggle() {
    this.setState({
      addClass: !this.state.addClass
    });
  }

  componentDidMount() {
    document.addEventListener('scroll', () => {
      const isTop = window.scrollY < 70;
      if (isTop !== this.state.isTop) {
          this.setState({ isTop })
      }
    });
  }

  render() {
    let hamburgerClass = ["c-hamburger c-hamburger--htx"];
    let navClass = ["nav-element"];
    if(this.state.addClass) {
      hamburgerClass.push('is-active');
      navClass.push('element-active');
    }

    return (
      <header className={this.state.isTop ? 'nav-banner' : 'nav-banner scroll'}>
        <button className={hamburgerClass.join(' ')} onClick={this.toggle.bind(this)}>
          <span>toggle menu</span>
        </button>
        <div className="nav-banner-container">
          <div className={this.state.isTop ? 'logos' : ' logos min'}>
            <h1>
              <NavLink exact to="/">Michael McMillan</NavLink>
            </h1>
              <NavLink exact to="/" className="logo2">Michael McMillan</NavLink>
          </div>
          <nav className={navClass.join(' ')}>
            <div className="nav-container">
              <div className="menu-top-right-container">
                <ul className="nav-list" id="menu-top-right">
                  <li className="nav-item"><NavLink onClick={this.toggle.bind(this)} eventkey={1} exact to="/case-studies" >Case Studies</NavLink></li>
                  <li className="nav-item"><NavLink onClick={this.toggle.bind(this)} eventkey={2} exact to="/experience" >Experience</NavLink></li>
                  <li className="nav-item"><NavLink onClick={this.toggle.bind(this)} eventkey={3} exact to="/" >About</NavLink></li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </header>
    )
  }
}

export default NavBar