import React from "react";

export default function Skills(props) {
  return (
    <div className="skills">
      <div className="skillbox">
        <div className="skill-section skill-first">
          <div className="skill-top">
            <h4 className="skill-title">Front-End Development</h4>
            <p>
              I enjoy building user journeys which are fast, engaging, and
              impressionable.
            </p>
          </div>
          <div className="skill-btm">
            <p>Design Tools</p>
            <ul className="skill-list">
              <li>React</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>Javascript</li>
            </ul>
          </div>
        </div>
        <div className="skill-section skill-center">
          <div className="skill-top">
            <h4 className="skill-title ">Back-End Development</h4>
            <p>
              I tackle elaborate problems through structured problem-solving
              techniques.
            </p>
          </div>
          <div className="skill-btm">
            <p>Dev Tools</p>
            <ul className="skill-list">
              <li>Django</li>
              <li>Redux</li>
              <li>SQL</li>
              <li>Python</li>
            </ul>
          </div>
        </div>
        <div className="skill-section skill-end">
          <div className="skill-top">
            <h4 className="skill-title">Business Process Automation</h4>
            <p>I manage business resources through tailored approaches.</p>
          </div>
          <div className="skill-btm">
            <p>Tools</p>
            <ul className="skill-list">
              <li>Pandas</li>
              <li>Selenium</li>
              <li>Google Apps Script</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
