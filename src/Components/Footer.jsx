import React from 'react'

class Footer extends React.Component {
  render() {
    return(
      <section>
        <div className="section-footer">
          <div className="section container">
            <div className="row">
              <div className="col">
                <div className="footer-social">
                  <ul className="list-inline">
                    <li className="list-inline-item">Follow me on:</li>
                    <li className="list-inline-item">
                      <a className="footer-social-icon ico-Twitter" target="_blank" rel="noopener noreferrer" href="https://www.twitter.com/michaelmac">
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a className="footer-social-icon ico-LinkedIn" target="_blank" rel="noopener noreferrer" href="linkedin.com/in/michael-mcmillan-richmond">
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a className="footer-social-icon ico-Instagram" target="_blank" rel="noopener noreferrer" href="https://www.Instagram.com/michaelmac123">
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <p className="footer-text">Copyright &#169; {(new Date().getFullYear())} Michael McMillan. All Rights Reserved.</p>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <span className="section-closing">&nbsp;</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Footer