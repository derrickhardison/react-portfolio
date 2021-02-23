import React from 'react';

const Project = () => {
    return (
        <main className ="container">
        <div className="row">
            <div className="col-12 mt-2">   
              <div className="jumbotron">
                  <div className="row">
                      <div className="col-12">
                          <h1 className="display-4">Check out some of my work!</h1>
                          <hr className="my-6"/>
                      </div>
                  </div>
                  <div className ="row mt-3">
                      <div className="col-lg-6 mt-3">
                          <img src="https://placekitten.com/350/350" className ="img-fluid w-100" alt="cat"/>
                      </div>
                      <div className="col-lg-6 mt-3">
                          <img src="https://placekitten.com/350/350" className ="img-fluid w-100" alt="cat"/>
                      </div>
                  </div>
                  <div className ="row mt-3">
                      <div className="col-lg-6 mt-3">
                          <img src="https://placekitten.com/350/350" className ="img-fluid w-100" alt="cat"/>
                      </div>
                      <div className="col-lg-6 mt-3">
                          <img src="https://placekitten.com/350/350" className ="img-fluid w-100" alt="cat"/>
                      </div>
                  </div>
                  <div className ="row mt-4">
                      <div className ="col-lg-6">
                          <img src="https://placekitten.com/350/350" className ="img-fluid w-100" alt="cat"/>                                                          
                      </div>
                  </div>
              </div>
            </div>
        </div>
      </main>
    );
};

export default Project;