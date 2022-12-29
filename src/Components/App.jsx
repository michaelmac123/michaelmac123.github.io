import React from 'react'

import IconScrollTop from './Icons/IconScrollTop'
import Main from './Main'
import NavBar from './NavBar'
import Footer from './Footer'

import { animateScroll as scroll } from 'react-scroll'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.scrollToTop = this.scrollToTop.bind(this);
  }

  scrollToTop() {
    scroll.scrollToTop();
  }

  state = {
      isTop: true,
    };

  componentDidMount() {
    document.addEventListener('scroll', () => {
      const isTop = window.scrollY < 500;
      if (isTop !== this.state.isTop) {
          this.setState({ isTop })
      }
    });
  }

  render() {
    return (
      <div className="app">
        <NavBar />
        <Main />
        <Footer />
        <button onClick={this.scrollToTop} className={this.state.isTop ? 'scrollTop hide' : 'scrollTop show'} ><IconScrollTop /></button>
      </div>
    )
  }
}

export default App;
