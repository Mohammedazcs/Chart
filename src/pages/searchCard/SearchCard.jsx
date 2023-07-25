import React from "react";
import "./SearchCard.scss";
const SearchCard = () => {
  return (
    <div className="seacrh-card">
      <section className="card-left-section">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/square600/261707778.webp?k=fa6b6128468ec15e81f7d076b6f2473fa3a80c255582f155cae35f9edbffdd78&o=&s=1"
          alt="Hotel"
          className="hotel-image"
        />
      </section>
      <section className="card-middle-section">
        <h2 className="title">Tower Street Apartments</h2>
        <p className="distance">500m from center</p>
        <p className="taxi">Free airport taxi</p>
        <p className="subTitle">Studio Apartment with Air conditioning</p>
        <p className="features">Entire studio • 1 bathroom • 21m² 1 full bed</p>
        <p className="cancel">Free cancellation</p>
        <p className="cancelOpSubtitle">
          You can cancel later, so lock in this great price today!
        </p>
      </section>
      <section className="card-right-section">
        <div className="siRating">
          <span>Excellent</span>
          <button>8.9</button>
        </div>
        <div className="siDetailTexts">
          <span>$112</span>
          <span>Includes taxes and fees</span>
          <button className="availability-button">See availability</button>
        </div>
      </section>
    </div>
  );
};
export default SearchCard;
