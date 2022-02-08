

import './Header.css'
import { Link } from 'react-router-dom';

const Header = () => {
  return (
      <header className="site-header">
          <div className="container">
              <div className="row">
                  <div className="col">
                      <div className="site-info">
                          Joynal
                      </div>
                  </div>
                  <div className="col center">
                    <div className="menu">
                        <ul>
                            <li>
                                
                            </li>
                        </ul>
                    </div>
                  </div>
                  <div className="col right">
                      Works
                  </div>
              </div>
          </div>
      </header>
  );
};

export default Header;
