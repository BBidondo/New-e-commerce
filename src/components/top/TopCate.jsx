import React from "react";
import "./style.css";

const TopCate = () => {
  return (
    <>
      <section className="TopCate background">
        <div className="container">
          <div className="contentWidth">
            <h2 className="heading">¡Visita nuestra tienda!</h2>
            <div className="map-container">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1679343.8250565822!2d-58.736858924233566!3d-34.70597675284692!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x959f81b85c6d6d9b%3A0x9c84a4f21be4ec0d!2sCoquitos%20PetShop!5e0!3m2!1ses-419!2suy!4v1686146827255!5m2!1ses-419!2suy"
                width="1000"
                height="400"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TopCate;
