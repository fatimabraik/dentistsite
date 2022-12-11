import React, { useState } from "react";
import img from "./images/dent 2.jpg";
import "../css/AboutStyle.css";
import imgAbout from "./images/dent 1.webp";

const About = () => {
  const [data1, setShowData1] = useState(false);
  const show1 = () => setShowData1(true);
  const cache1 = () => setShowData1(false);
  const Result1 = () => {
    return (
      <div>
        <h6>hhhhhhhhhhhhh</h6>
      </div>
    );
  };
  const [data, setShowData] = useState(false);
  const show = () => setShowData(true);
  const cache = () => setShowData(false);
  const Result = () => {
    return (
      <div>
        <h6>ggggggggggggggggggggggggggggggg</h6>
      </div>
    );
  };

  return (
    <>
      <div className="mainContainer">
        <div className="aboutContainer">
          <img src={img} alt=""></img>
          <div className="aboutText">
            <h2>about us</h2>
            <p>
              DR LUX, Graduated from the Heigher institue of DENSTISTRY in RABAT
              SPECIALIZING IN ...{" "}
            </p>
            {data1 ? <Result1 /> : null}
            {!data1 ? (
              <button className="btnContainer" onClick={show1}>
                READ MORE
              </button>
            ) : (
              <button className="btnContainer" onClick={cache1}>
                {" "}
                READ LESS
              </button>
            )}
          </div>
        </div>
      </div>
      <div className="mainAbout">
        <div className="mainText">
          <div className="pText">
            <p>
              our dental office, is a medical space reserved for oral health but
              also for the improvement or restoration of the smile..
            </p>
            {data ? <Result /> : null}
            {!data ? (
              <button className="btnContainer" onClick={show}>
                READ MORE
              </button>
            ) : (
              <button className="btnContainer" onClick={cache}>
                READ LESS
              </button>
            )}
          </div>
          <div className="mainImg">
            <img src={imgAbout}></img>
          </div>
        </div>
      </div>
    </>
  );
};
export default About;
