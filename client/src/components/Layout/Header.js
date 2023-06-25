import React from 'react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="containerdemo">
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
            <div>
              <p className='title'>Ecoverse</p>
            </div>
            <div className="d-flex justify-content-end me-3" id="navbarSupportedContent">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item mx-3">
                  <div className="home">
                    <button className="nav-link active" onClick={() => navigate('/')}>HOME</button>
                  </div>
                </li>
                <li className="nav-item mx-3">
                  <div className="about">
                    <button className="nav-link" onClick={() => navigate('/about')}>ABOUT</button>
                  </div>
                </li>
                <li className="nav-item mx-3">
                  <div className="about">
                    <button className="nav-link" onClick={() => navigate('/dashboard')}>DASHBOARD</button>
                  </div>
                </li>
                <li className="nav-item mx-3">
                  <div className="signup">
                    <button className="nav-link" onClick={() => navigate('/signup')}>SIGNUP</button>
                  </div>
                </li>
                <li className="nav-item mx-3">
                  <div className="login">
                    <button className="nav-link" onClick={() => navigate('/login')}>LOGIN</button>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
