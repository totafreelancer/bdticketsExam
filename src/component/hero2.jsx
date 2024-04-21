import React, { useState } from "react";
import "../assets/css/Hero.css";
import "../assets/images/banner-web.png";
import BusIcon from "../assets/images/icon_svg/Bus.svg";
import AirIcon from "../assets/images/icon_svg/air.svg";
import ShipIcon from "../assets/images/icon_svg/Ship.svg";
import SotelIcon from "../assets/images/icon_svg/Hotel.svg";
import SwaplIcon from "../assets/images/icon_svg/swap-red-light.svg";
import HeroJson from "../assets/json/hero.json";
import "../assets/images/icon_svg/svgRight.svg";

const Hero = () => {
  const [input1Text, setInput1Text] = useState("Pleaseselect");
  const [input2Text, setInput2Text] = useState("Pleaseselect");
  const [outputVisible, setOutputVisible] = useState(false);

  const handleItemClick = (text1, text2) => {
    setInput1Text(text1);
    setInput2Text(text2);
  };

  const handleSubmit = () => {
    if (input1Text === "Pleaseselect" || input2Text === "Pleaseselect") {
      alert("Please select both 'Going From' and 'Going To' options.");
    } else {
      setOutputVisible(true);
    }
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
                      <span className="bdt_input_label">Date</span>
                      <input type="date" name="" id="tota_date" />
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
                  {HeroJson.map((item, index) => (
                    <li key={index}>
                      <a className="cursor-pointer" onClick={() => handleItemClick(item.from, item.to)}>
                        <ul className="list-route-card">
                          <li>{item.from}</li>
                          <li>{item.to}</li>
                        </ul>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bdt-search-submit">
                <button type="submit" className="btn btn-primary capitalize fw-bold" onClick={handleSubmit}>search bus</button>
              </div>
            </div>
          </div>
        </section>
      </div>
      {outputVisible && (
        <section id="tota_output">
          <table className="list_table">
            <thead>
              <tr>
                <th>No:</th>
                <th>From</th>
                <th>To</th>
                <th>Fare</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {HeroJson.filter(item => item.from === input1Text && item.to === input2Text).map((item, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item.from}</td>
                  <td>{item.to}</td>
                  <td>{item.fare}</td>
                  <td>{item.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      )}
    </div>
  );
};

export default Hero;
