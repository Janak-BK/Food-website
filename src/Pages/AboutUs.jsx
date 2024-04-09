import React from "react";
import Layout from "../Components/Layout/Layout";
import Subin from "../Images/masala.jpg";
import "../Styles/AboutStyle.css";
import Janak from "../Images/about.jpg";

const AboutUs = () => {
  return (
    <Layout>
      <div className="lalu">
        <div className="heading">
          <h1>About Us</h1>
        </div>
        <div className="para">
          <p>Finding your favorite food</p>
        </div>
        <div className="container">
          <section className="about">
            <div className="about-image">
              <img src={Subin} alt="" />
            </div>
            <div className="about-contain">
              <p>
                Welcome to my Resturant, your premier online destination for
                culinary inspiration and expertise. Our platform is dedicated to
                serving up a diverse array of recipes, cooking tips, and
                engaging content tailored to satisfy every palate and skill
                level. Whether you're a novice in the kitchen or a seasoned
                chef, our curated collection of recipes spans from quick and
                easy weekday meals to elaborate gourmet creations, ensuring
                there's something delightful for everyone to enjoy. Dive into
                our treasure trove of culinary knowledge, where you'll find
                informative articles, handy kitchen hacks, and a supportive
                community of fellow food enthusiasts eager to share their
                passion and expertise. Join us as we celebrate the joys of
                cooking, sharing, and savoring delicious meals that bring people
                together and nourish both body and soul. Explore my resturant
                today and let your culinary journey begin!
              </p>
              <a href="" className="read-more">
                Read more
              </a>
            </div>
          </section>
        </div>
      </div>
      
    </Layout>
  );
};

export default AboutUs;