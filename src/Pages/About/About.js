import React from "react";

const About = () => {
  return (
    <div>
      <main className="container">
        <div className="row mt-5">
          <div className="col-12 col-md-10 col-lg-8 mt-5">
            <div className="jumbotron">
              <div className="row">
                <div className="col-12">
                  <h1 className="display-4">A little about Derrick...</h1>
                  <hr className="my-6" />
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12">
                  <img
                    src={require("./images/IMG_7530.jpg")}
                    className="thumbnail float-left pr-2 pb-2"
                    alt="me"
                  />
                  <p>
                    Hi! I'm Derrick and I'm an aspiring full-stack web
                    developer. I have years of experience in the information
                    technology industry, but on the networking side of things. I
                    am now looking to transition over to the development world.
                  </p>
                  <p>
                    Visit my GitHub profile{" "}
                    <a
                      href="https://github.com/derrickhardison"
                      target="=_blank"
                    >
                      {" "}
                      here!
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;
