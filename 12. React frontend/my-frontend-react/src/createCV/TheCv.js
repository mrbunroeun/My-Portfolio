// src/CV.js
import React from "react";
import "./TheCv.css";

function TheCv() {
  return (
    <>
      <div className="the_main_div">
        <p className="the_line"></p>
        <h1 className="your_name ">Your Name</h1>

        <div>
          <p className="junior_developer green_main">
            Junior Frontend Developer
          </p>
          <div className="font">
            <p className="identification">
              123 Your Street
              <br />
              Your Sity, ST 12345
              <br />
              (123) 456-789 no_reply@example.com
            </p>
          </div>
        </div>

        <div>
          <p className="skill green_main">Skill</p>
          <div className="font">
            <p className="skill_to_use">
              HTML, CSS, Javascript, accessibility, Figma to Design, Respon sive
              Webdesign
              <br />
              Technical Writing Presentation
            </p>
          </div>
        </div>

        <div>
          <p className="education green_main">Education</p>
          <div className="font">
            <p className="scholl_location blue_font">School Name, Location Degree</p>
            <p className="month_school">Month 20xx to Month 20xx</p>
            <ul className="list_of_achievements">
              <li>List of achievements</li>
              <li>List of achievements</li>
              <li>List of achievements</li>
            </ul>
          </div>
        </div>

        <div>
          <p className="experience green_main">Experience</p>
          <div className="font">
            <p className="company_location blue_font">Company Name, Location Job-Title</p>
            <p className="month_company">Month 20xx to Month 20xx</p>
            <ul className="list_of_achievements">
              <li>List of achievements</li>
              <li>List of achievements</li>
              <li>List of achievements</li>
            </ul>
            <p className="list_of_skill">
              Skills: List of skills used or gained at this company
            </p>
          </div>
        </div>

        <div>
          <p className="experience green_main">Experience</p>
          <div className="font">
            <p className="company_location blue_font">Company Name, Location Job-Title</p>
            <p className="month_company">Month 20xx to Month 20xx</p>
            <ul className="list_of_achievements">
              <li>List of achievements</li>
              <li>List of achievements</li>
              <li>List of achievements</li>
            </ul>
            <p className="list_of_skill">
              Skills: List of skills used or gained at this company
            </p>
          </div>
        </div>

        <div>
          <p className="across_internet green_main">Across the Internet</p>
          <div className="font">
            <p className="your_social_media">
              Add your LinkedIn, GitHub profile links
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default TheCv;
