import React, { Component } from 'react'

export default class Education extends Component {
    render() {
      return (
        <div>
          <section className="colorlib-education" data-section="education" id="education">
            <div className="colorlib-narrow-content">
              <div className="row">
                <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                  <h2 className="colorlib-heading animate-box">Education</h2>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12 animate-box" data-animate-effect="fadeInLeft">
                  <p>I graduated Williams College in 2019 with a Bachelor of Arts in Chemistry and Economics. My formal studies focused primarily on macroeconomics and physical chemistry and although I did not satisfy the requirement for the completion of a degree in mathematics, the majority of my non-major coursework was in mathematics. I developed a love of conceptual and open-ended problem solving with a particular focus on quantitative modelling of dynamical systems. I developed an <a href="https://github.com/blazelisk/thesis/blob/master/manuscript/manuscript.pdf" target="_blank" rel="noopener noreferrer">undergraduate thesis </a> on the chaotic dynamics of an inventory cycle driven business cycle model which allowed me to graduate with highest honors in Chemistry. The completion of this thesis gave me an opportunity to teach myself python, discrete-time dynamics, and chaos theory while also showing the power of the growing field of econophysics in explaining complex macroeconomic behavior.</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      );
  }
};