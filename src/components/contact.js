import React, { Component } from 'react'

export default class Contact extends Component {
    render() {
      return (
  
        <section className="colorlib-contact" data-section="contact" id="contact">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">Get in Touch</span>
                <h2 className="colorlib-heading">Contact</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-5">
                <div className="colorlib-feature colorlib-feature-sm animate-box" data-animate-effect="fadeInLeft">
                  <div className="colorlib-icon">
                    <i className="icon-globe-outline" />
                  </div>
                  <div className="colorlib-text">
                    <p><a href="#">benjaminbui97@gmail.com</a></p>
                  </div>
                </div>
                <div className="colorlib-feature colorlib-feature-sm animate-box" data-animate-effect="fadeInLeft">
                  <div className="colorlib-icon">
                    <i className="icon-phone" />
                  </div>
                  <div className="colorlib-text">
                    <p><a href="tel://">+1 (413) 652-9201</a></p>
                  </div>
                </div>
              </div>
              <div className="col-md-7 col-md-push-1">
                <div className="row">
                  <div className="col-md-10 col-md-offset-1 col-md-pull-1 animate-box" data-animate-effect="fadeInRight">
                    <form action="https://formspree.io/xdowlwle" method="POST">
                      <div className="form-group">
                        <input type="text" name="name" className="form-control" placeholder="Name" />
                      </div>
                      <div className="form-group">
                        <input type="text" name="_replyto" className="form-control" placeholder="Email" />
                      </div>
                      <div className="form-group">
                        <input type="text" name="_subject" className="form-control" placeholder="Subject" />
                      </div>
                      <div className="form-group">
                        <textarea name id="message" name="message" cols={30} rows={7} className="form-control" placeholder="Message" defaultValue={""} />
                      </div>
                      <div className="form-group">
                        <input type="submit" className="btn btn-primary btn-send-message" defaultValue="Send Message" />
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      );
    }
  };
