import React from "react";
import Layout from "../components/Layout/Layout";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <Layout>
      <div className="matter">
        <div className="headers">
          <h1 className="a">Want to be a environmentalist!!</h1>
          <h2 className="head2">
            SignUp for free and be a part of our community
          </h2>
        </div>
        <div className="hp">
          <div class="row row-cols-1 row-cols-md-2 g-4">
            <div class="col">
              <Link to="/ongoingevents" class="text-decoration-none">
              <div class="card"  style={{ width: "30rem",height:"10rem"}}>
                <img src="..." class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">ON GOING EVENTS</h5>
                  <p class="card-text">
                    This is a longer card with supporting text below as a
                    natural lead-in to additional content. This content is a
                    little bit longer.
                  </p>
                </div>
              </div>
              </Link>
            </div>
            <div class="col">
            <Link to="/yourparticipations" class="text-decoration-none">
              <div class="card" style={{ width: "30rem",height:"10rem"}}>
                <img src="..." class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">YOUR PARTICIPATIONS</h5>
                  <p class="card-text">
                    This is a longer card with supporting text below as a
                    natural lead-in to additional content. This content is a
                    little bit longer.
                  </p>
                </div>
              </div>
              </Link>
            </div>
            <div class="col">
            <Link to="/hostanevent" class="text-decoration-none">
              <div class="card" style={{ width: "30rem",height:"10rem"}} >
                <img src="..." class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">HOST AN EVENTS</h5>
                  <p class="card-text">
                    This is a longer card with supporting text below as a
                    natural lead-in to additional content.
                  </p>
                </div>
              </div>
              </Link>
            </div>
            <div class="col">
            <Link to="/yourevents" class="text-decoration-none">
              <div class="card" style={{ width: "30rem",height:"10rem"}}>
                <img src="..." class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">YOUR EVENTS</h5>
                  <p class="card-text">
                    This is a longer card with supporting text below as a
                    natural lead-in to additional content. This content is a
                    little bit longer.
                  </p>
                </div>
              </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default HomePage;
