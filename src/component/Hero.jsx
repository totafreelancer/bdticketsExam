import React, { useState } from "react";
import "../assets/css/Hero.css";
import "../assets/images/banner-web.png";
import BusIcon from "../assets/images/icon_svg/Bus.svg";
import AirIcon from "../assets/images/icon_svg/air.svg";
import ShipIcon from "../assets/images/icon_svg/Ship.svg";
import SotelIcon from "../assets/images/icon_svg/Hotel.svg";
import SwaplIcon from "../assets/images/icon_svg/swap-red-light.svg";
import "../assets/images/icon_svg/svgRight.svg";

const Hero = () => {


  const [input1Text, setInput1Text] = useState("Pleaseselect");
  const [input2Text, setInput2Text] = useState("Pleaseselect");

  const handleItemClick = (text1, text2) => {
    setInput1Text(text1);
    setInput2Text(text2);
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
                      <span className="bdt_input_label">Going From</span>
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
                      <span className="bdt_input_label">Going From</span>
                      <input type="date" name="" id="tota_date" />
                    </div>
                  </div>
                  <div className="bdt_input relative">
                    <div className="cursor-not-allowed opacity-50">
                      <span className="bdt_input_label">Going From</span>
                      <span className="bdt_input_value">Pleaseselect</span>
                    </div>
                  </div>
                </div>

              </div>

              <div className="bdt-trending-search pl-5">
                <span className="font-medium mr-4">Trending Searches:</span>
                <ul className="list-route">
                  <li>
                    <a className="cursor-pointer">
                      <ul className="list-route-card" onClick={() => handleItemClick("dhaka", "rajshahi")}>
                        <li>dhaka</li>
                        <li>rajshahi</li>
                      </ul>
                    </a>
                  </li>
                  <li>
                    <a className="cursor-pointer">
                      <ul className="list-route-card" onClick={() => handleItemClick("dhaka", "barisal")}>
                        <li id="bdt_input_value1">dhaka</li>
                        <li id="bdt_input_value2">barisal</li>
                      </ul>
                    </a>
                  </li>
                  <li>
                    <a className="cursor-pointer">
                      <ul className="list-route-card" onClick={() => handleItemClick("dhaka", "coxs-bazar")}>
                        <li id="bdt_input_value1">dhaka</li>
                        <li id="bdt_input_value2">coxs-bazar</li>
                      </ul>
                    </a>
                  </li>
                  <li>
                    <a className="cursor-pointer">
                      <ul className="list-route-card" onClick={() => handleItemClick("dhaka", "chittagong")}>
                        <li id="bdt_input_value1">dhaka</li>
                        <li id="bdt_input_value2">chittagong</li>
                      </ul>
                    </a>
                  </li>
                  <li>
                    <a className="cursor-pointer">
                      <ul className="list-route-card" onClick={() => handleItemClick("dhaka", "chapainawabganj")}>
                        <li id="bdt_input_value1">dhaka</li>
                        <li id="bdt_input_value2">chapainawabganj</li>
                      </ul>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="bdt-search-submit">
                <button type="submit" className="btn btn-primary capitalize fw-bold">search bus</button>
              </div>

            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Hero;
