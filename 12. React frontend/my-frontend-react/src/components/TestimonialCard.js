// components/testimonialCard.js
import React from "react";
import "./TestimonialCard.css";
import image1 from "../images/image1.png";
import image2 from "../images/image2.png";
import image3 from "../images/image3.png";

function TestimonialCard() {
  return (
    <>
      <div className="inline_wrapper">
        <div className="first_wrapper">
          <p className="i_have_solving">
            I have been solving all the project ideas on roadmap.sh and I am
            surprised how far I have come from where I stared <br />
            <br />
            Highly recommended!
          </p>
          <p className="thinking"></p>
          <div className="first_profile_wrapper">
            <img className="first_profile" src={image1} alt="testimonial" />
            <div className="name_skill">
              <h2>Arthem Jone</h2>
              <p>Junior Frontend Developer</p>
            </div>
          </div>
        </div>

        <div className="second_wrapper">
          <p className="since_starting">
            Since starting my career in 2021, I have only followed one resource,
            roadmap.sh. It truely help me from 0 to having a job changing the
            fianacial trajectory of my family
            <br />
            <div className="image_skill_wrapper">
              <img className="second_profile" src={image2} alt="testiial" />
              <div className="second_name_skill">
                <h2>Arthem Jone</h2>
                <p>Junior Frontend Developer</p>
              </div>
            </div>
          </p>
        </div>
      </div>

      <div className="second_line_wrapper">
        <img className="girl_pic" src={image3} alt="forTestimonial" />
        <div className="fourth_box_wrapper">
          <p className="fourth_text_wrapper">
            <i className="fa-solid fa-star star" />
            <i className="fa-solid fa-star star" />
            <i className="fa-solid fa-star star" />
            <i className="fa-solid fa-star star" />
            <i className="fa-solid fa-star star" />
            <p className="jakie_mackle">Jakie Mackle</p>
            <p className="engineering_manager">Engineering Manager</p>
            <p className="i_find_myself">
              I find myself recommending roadmap.sh to all the internees or
              junior developer. It's great way to skill up and grow in you
              caree.
            </p>
          </p>
        </div>
      </div>
      {/* the last section*/}
      <div className="last_wrapper">
        <p className="roadmap_is_an">
          roadmap.sh is an incredible resource. I was fortunate to discover it
          during my university days in 2018. Back then it was just a single
          repository with three images. It's amazing to see how much impact it
          has had one millions of lives since then.
          <br />
        </p>
        <div className="last_image_wrapper">
          <img className="last_profile one" src={image2} alt="testiial" />
          <img className="last_profile two" src={image2} alt="testiial" />
          <img className="last_profile three" src={image2} alt="testiial" />
        </div>
        <div className="the_last_name">
          <p>
            Arthem Jones
          </p>
        </div>
      </div>
    </>
  );
}

export default TestimonialCard;
