import React from 'react';

const Contact = () => {
    return (
        <main className ="container">
              <div className="row">
                  <div className="col-8 mt-5">   
                    <div className="jumbotron">
                        <div className="row">
                            <div className="col-12">
                                <h1 className="display-4">Let's Connect!</h1>
                                <hr className="my-4"/>
                            </div>
                        </div>
                        <div className ="row">
                            <div className="col-12">
                                <h2 className="text-muted">LinkedIn</h2>
                                <a href="https://github.com/derrickhardison" target="_blank" rel="noreferrer"><p>https://github.com/derrickhardison</p></a>
                                <h2 className="text-muted">GitHub</h2>
                                <a href="https://github.com/derrickhardison" target="_blank" rel="noreferrer"><p>https://github.com/derrickhardison</p></a>

                                <h2 className="text-muted">Email</h2>
                                <a href="https://github.com/derrickhardison" target="_blank" rel="noreferrer"><p>https://github.com/derrickhardison</p></a>

                                <h2 className="text-muted">Phone</h2>
                                <p>Hey, we just met! Try sending an email first.  </p>
                            </div>
                    </div>
          </div>
                  </div>
              </div>
            </main>
    )
}

export default Contact;