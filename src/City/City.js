import React from "react";
import "./City.css";
const City = (props) => {
  const { city } = props;
  return (
    <div className="card float-left mr-2" style={{ width: "18rem" }}>
      <img className="card-img-top" src={city.image.src} alt={city.image.alt} />
      <div className="card-body">
        <div className="card-text text-left">
          <p>Name: {city.name}</p>
          <p>Creation year: {city.creationYear}</p>
          <p>Districts: </p>
          <ul>
            {city.districts.map((district) => (
              <li key={district}>{district}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default City;
