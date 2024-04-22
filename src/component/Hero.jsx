import React, { useState } from "react";
import "../assets/css/Hero.css";
import "../assets/images/banner-web.png";
import logo_gif from "../assets/images/gif/logo-gif.gif";
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
  const [busAvailable, setBusAvailable] = useState(true); // Add state for bus availability
  const [loading, setLoading] = useState(false); // Add state for loading

  const handleItemClick = (text1, text2) => {
    setInput1Text(text1);
    setInput2Text(text2);
  };

  const handleSwipeClick = () => {
    const temp = input1Text;
    setInput1Text(input2Text);
    setInput2Text(temp);
  };

  const handleDropdownClick = (dropdownId) => {
    const dropdown = document.getElementById(dropdownId);
    dropdown.classList.add("dropdown-active");
  };

  const handleCloseClick = (dropdownId) => {
    const dropdown = document.getElementById(dropdownId);
    dropdown.classList.remove("dropdown-active");
  };

  const handleSubmit = () => {
    if (input1Text === "Pleaseselect" || input2Text === "Pleaseselect") {
      alert("Please select both 'Going From' and 'Going To' options.");
    } else {
      setLoading(true); // Set loading to true when submitting
      const busData = HeroJson.filter(
        (item) => item.from === input1Text && item.to === input2Text
      );
      setTimeout(() => {
        if (busData.length === 0) {
          setBusAvailable(false); // Set bus availability to false if no data found
        } else {
          setBusAvailable(true); // Set bus availability to true if data found
          setOutputVisible(true);
        }
        setLoading(false); // Set loading to false after data processing
      }, 2000); // Simulate 3 seconds delay
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
                  <div className="bdt_input bdt-has-dropdown1 relative">
                    <div>
                      <span className="bdt_input_label">Going From</span>
                      <span className="bdt_input_value" id="input1" onClick={() => handleDropdownClick("dropdown1")}>
                        {input1Text}
                      </span>
                    </div>

                    <div className="bdt-dropdown bdt-dropdown1 bdt-dropdown-search" id="dropdown1">
                      <div className="bdt-dropdown-header">
                        <div className="position-relative">
                          <button className="bdt-search-btn">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" height="1em" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"></path></svg>
                          </button>
                          <input type="text" placeholder="Search by city"></input>
                          <button className="bdt-close-btn" onClick={() => handleCloseClick("dropdown1")}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" height="1.5em" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"></path></svg>
                          </button>
                        </div>
                      </div>
                      <div className="bdt-dropdown-body">
                        <ul className="bdt-search-list">
                          <li>
                            <div>
                              <span className="bdt-value">AMBARI</span>
                            </div>
                          </li>
                          <li>
                            <div>
                              <span className="bdt-value">Abdullahpur</span>
                            </div>
                          </li>
                          <li>
                            <div>
                              <span className="bdt-value">Aditmari</span>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>

                  </div>
                  <div className="bdt_input bdt-has-dropdown2 relative">
                    <div>
                      <span className="bdt_input_label">Going To</span>
                      <span className="bdt_input_value" id="input2" onClick={() => handleDropdownClick("dropdown2")}>
                        {input2Text}
                      </span>
                    </div>

                    <div className="bdt-dropdown bdt-dropdown2 bdt-dropdown-search" id="dropdown2">
                      <div className="bdt-dropdown-header">
                        <div className="position-relative">
                          <button className="bdt-search-btn">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" height="1em" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"></path></svg>
                          </button>
                          <input type="text" placeholder="Search by city"></input>
                          <button className="bdt-close-btn" onClick={() => handleCloseClick("dropdown2")}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" height="1.5em" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"></path></svg>
                          </button>
                        </div>
                      </div>
                      <div className="bdt-dropdown-body">
                        <ul className="bdt-search-list">
                          <li>
                            <div>
                              <span className="bdt-value">AMBARI</span>
                            </div>
                          </li>
                          <li>
                            <div>
                              <span className="bdt-value">Abdullahpur</span>
                            </div>
                          </li>
                          <li>
                            <div>
                              <span className="bdt-value">Aditmari</span>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>

                  </div>
                  <button className="btn_swipe" onClick={handleSwipeClick}>
                    <img
                      src={SwaplIcon}
                      className="scheme-secondary"
                      alt="icon"
                    />
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
                      <a
                        className="cursor-pointer"
                        onClick={() => handleItemClick(item.from, item.to)}
                      >
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
                <button
                  type="submit"
                  className="btn btn-primary capitalize fw-bold"
                  onClick={handleSubmit}
                >
                  search bus
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
      {loading ? (
        <div className="loading">
          <img src={logo_gif} alt="Loading..." />
        </div>
      ) : (
        <>
          {outputVisible && busAvailable ? (
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
                  {HeroJson.filter(
                    (item) => item.from === input1Text && item.to === input2Text
                  ).map((item, index) => (
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
          ) : (
            <div>{!busAvailable && <p>কোনও বাস নেই</p>}</div>
          )}
        </>
      )}
    </div>
  );
};

export default Hero;
