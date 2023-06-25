import React from 'react';
import Layout from '../components/Layout/Layout'
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <Layout>
      <div className="matter">
        <div className="headers">
          <h1 className='a'>Want to be a environmentalist!!</h1>
          <h2>SignUp for free and be a part of our community</h2>
        </div>
        <div className="row">
          <div className="col-3">
            <Link to="/ongoingevents" className='nav-link'>
              <div className="card h-100" id={123}>
                  <img src="./logo.jpg" className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">ONGOING EVENTS</h5>
                    <p className="card-text">Click here to check the ongoing events.</p>
                  </div>
                </div>
            </Link>
          </div>
          <div className="col-3">
            <Link to = '/yourparticipations' className='nav-link'>
              <div className="card h-100">
                <img src="./logo.jpg" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">YOUR PARTICIPATIONS</h5>
                  <p className="card-text">Click here to check your participations</p>
                </div>
              </div>
            </Link>
          </div>
          <div className="col-3">
            <Link to = '/hostanevent' className='nav-link'>
              <div className="card h-100">
                <img src="./logo.jpg" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">HOST AN EVENT</h5>
                  <p className="card-text">Click here to host an event.</p>
                </div>
            </div>
            </Link>
          </div>
        </div>
      </div>

    </Layout>
  )
}

export default HomePage
