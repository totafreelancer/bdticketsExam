import React, { useState } from "react";
import "../assets/css/Hero.css";
import "../assets/images/banner-web.png";
import BusIcon from "../assets/images/icon_svg/Bus.svg";
import AirIcon from "../assets/images/icon_svg/air.svg";
import ShipIcon from "../assets/images/icon_svg/Ship.svg";
import SotelIcon from "../assets/images/icon_svg/Hotel.svg";
import SwaplIcon from "../assets/images/icon_svg/swap-red-light.svg";
import heroJson from "../assets/json/hero.json";

const Hero = () => {
  const [input1Text, setInput1Text] = useState("Pleaseselect");
  const [input2Text, setInput2Text] = useState("Pleaseselect");
  const [showTable, setShowTable] = useState(false);

  const handleItemClick = (text1, text2) => {
    setInput1Text(text1);
    setInput2Text(text2);
  };

  const handleSearchSubmit = () => {
    if (isValid()) {
      setShowTable(true);
    } else {
      setShowTable(false);
    }
  };

  const isValid = () => {
    return input1Text !== "Pleaseselect" && input2Text !== "Pleaseselect";
  };

  return (
    <div>
      <div id="hero" className="bg-cover bg-no-repeat">
        <section className="bdt_search py-20 mx-auto">
          <div className="bdt_search_inner">
            <ul className="bdt_search_types">
              <li>
                <button className="active">
                  <img src={BusIcon} alt="Bus icon" />
                  BUS
                </button>
              </li>
              <li>
                <button className="">
                  <img src={AirIcon} alt="Air icon" />
                  AIR
                </button>
              </li>
              <li>
                <button className="">
                  <img src={ShipIcon} alt="Ship icon" />
                  SHIP
                </button>
              </li>
              <li>
                <button className="">
                  <img src={SotelIcon} alt="Sotel icon" />
                  HOTEL
                </button>
              </li>
            </ul>
            <div className="bdt_search_wrapper">
              <div className="bdt_search_form">
                <div className="bdt_input_wrapper relative bg-white">
                  <div className="bdt_input relative">
                    <div>
                      <span className="bdt_input_label">Going From</span>
                      <span className="bdt_input_value" id="input1">{input1Text}</span>
                    </div>
                  </div>
                  <div className="bdt_input relative">
                    <div>
                      <span className="bdt_input_label">Going To</span>
                      <span className="bdt_input_value" id="input2">{input2Text}</span>
                    </div>
                  </div>
                  <button className="btn_swipe">
                    <img src={SwaplIcon} className="scheme-secondary" alt="icon" />
                  </button>
                </div>
                <div className="bdt_input_wrapper relative bg-white">
                  <div className="bdt_input relative">
                    <div>
                      <span className="bdt_input_label">Departure Date</span>
                      <input type="date" name="tota_date" id="tota_date" />
                    </div>
                  </div>
                  <div className="bdt_input relative">
                    <div className="cursor-not-allowed opacity-50">
                      <span className="bdt_input_label">Return Date</span>
                      <span className="bdt_input_value">Pleaseselect</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bdt-trending-search pl-5">
                <span className="font-medium mr-4">Trending Searches:</span>
                <ul className="list-route">
                  {heroJson.trendingSearches.map((search, index) => (
                    <li key={index}>
                      <a className="cursor-pointer">
                        <ul className="list-route-card" onClick={() => handleItemClick(search.from, search.to)}>
                          <li>{search.from}</li>
                          <li>{search.to}</li>
                        </ul>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bdt-search-submit">
                <button type="submit" className="btn btn-primary capitalize fw-bold" onClick={handleSearchSubmit}>search bus</button>
              </div>
            </div>
          </div>
        </section>
      </div>
      <section id="tota_output">
        {showTable && (
          <table className="list_table">
            <thead>
              <tr>
                <th>From</th>
                <th>To</th>
                <th>Fare</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {heroJson.map((item, index) => (
                <tr key={index}>
                  <td>{item.from}</td>
                  <td>{item.to}</td>
                  <td>{item.fare}</td>
                  <td>{item.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </section>
    </div>
  );
};

export default Hero;
