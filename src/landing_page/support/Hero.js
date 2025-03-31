import React from "react";

function Hero() {
  return (
    <section className="container-fluid" id="supportHero" >
      <div style={{backgroundColor : "rgb(66, 132, 237)"}}>
      <div className="row p-5 m-3">
        <div className="col-6 p-3">
          <h1 className="fs-3 mb-2" >
            Search for an answer or browse help topics to create a ticket
          </h1>
          <input placeholder="Eg. how do I activate F&O" />
          <br />
          
        </div>
        <div className="col-6 p-3">
          <h1 className="fs-3">Featured</h1>
          <ol>
            <li>
              <a href="" style={{color:"white"}}>Current Takeovers and Delisting - January 2024</a>
            </li>
            <li>
              <a href="" style={{color:"white"}}>Latest Intraday leverages - MIS & CO</a>
            </li>
          </ol>
        </div>
      </div>
      </div>
    </section>
  );
}

export default Hero;