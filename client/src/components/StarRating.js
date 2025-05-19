import React from "react";
import star05 from '../assets/starRating/star05.jpg'
import star10 from '../assets/starRating/star10.jpg'
import star15 from '../assets/starRating/star15.jpg'
import star20 from '../assets/starRating/star20.jpg'
import star25 from '../assets/starRating/star25.jpg'
import star30 from '../assets/starRating/star30.jpg'
import star35 from '../assets/starRating/star35.jpg'
import star40 from '../assets/starRating/star40.jpg'
import star45 from '../assets/starRating/star45.jpg'
import star50 from '../assets/starRating/star50.jpg'

export default function StarRating(props) {

  const starImages = {
  0.5: star05,
  1.0: star10,
  1.5: star15,
  2.0: star20,
  2.5: star25,
  3.0: star30,
  3.5: star35,
  4.0: star40,
  4.5: star45,
  5.0: star50,
};

  const rounded = Math.round(Math.max(0.5, Math.min(5, props.rating)) * 2) / 2;
  const imageSrc = starImages[rounded];

  return (
    <img
      src={imageSrc}
      alt={`${props.rating} star rating`}
      className="star-rating-icon"
    />
  );
}
