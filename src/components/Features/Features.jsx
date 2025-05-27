import React from "react";
import "./styles.scss";
import bg1 from "../../assets/Rectangle 39.png";
import bg2 from "../../assets/Rectangle 39 (1).png";
import bg3 from "../../assets/Rectangle 39 (2).png";
import bg4 from "../../assets/Rectangle 39 (3).png";
import f1 from "../../assets/image3 1.png";
import f2 from "../../assets/image4.png";
import f3 from "../../assets/image5 1.png";
import f4 from "../../assets/image6 1.png";
import arrow from "../../assets/arrow.png";
function Features() {
  return (
    <div className="features wrapper">
      <h1 className="features__title">Features</h1>
      <p className="features__desc">
        Some of the features and advantages that we provide for those of you who
        store data in this Data Warehouse.
      </p>
      <div className="features-container">
        <div className="feature stacked">
          <div className="feature__bg">
            <img src={bg1} alt="" />
          </div>
          <div className="feature__img">
            <img src={f1} alt=""></img>
          </div>
          <div className="feature__content">
            <div>
              <h2 className="feature__title">Search Data</h2>
              <p className="feature__desc">
                Don’t worry if your data is very large, the Data Warehoue
                provides a search engine, which is useful for making it easier
                to find data effectively saving time.
              </p>
            </div>

            <div className="feature__learn-more">
              <span>Learn more</span>
              <img src={arrow} alt="" />
            </div>
          </div>
        </div>
        <div className="feature stacked">
          <div className="feature__bg">
            <img src={bg2} alt="" />
          </div>
          <div className="feature__img">
            <img src={f2} alt=""></img>
          </div>
          <div className="feature__content">
            <div>
              <h2 className="feature__title">24 Hours Access</h2>
              <p className="feature__desc">
                Access is given 24 hours a full morning to night and meet again
                in the morning, giving you comfort when you need data when
                urgent.
              </p>
            </div>

            <div className="feature__learn-more">
              <p>Learn more</p>
              <img src={arrow} alt="" />
            </div>
          </div>
        </div>
        <div className="feature stacked">
          <div className="feature__bg">
            <img src={bg3} alt="" />
          </div>
          <div className="feature__img">
            <img src={f3} alt=""></img>
          </div>
          <div className="feature__content">
            <div>
              <h2 className="feature__title">Print Out</h2>
              <p className="feature__desc">
                Print out service gives you convenience if someday you need
                print data, just edit it all and just print it.
              </p>
            </div>

            <div className="feature__learn-more">
              <p>Learn more</p>
              <img src={arrow} alt="" />
            </div>
          </div>
        </div>
        <div className="feature stacked">
          <div className="feature__bg">
            <img src={bg4} alt="" />
          </div>
          <div className="feature__img">
            <img src={f4} alt=""></img>
          </div>
          <div className="feature__content">
            <div>
              <h2 className="feature__title">Security Code</h2>
              <p className="feature__desc">
                Data Security is one of our best facilities. Allows for your
                files to be safer. The file can be secured with a code or
                password that you created, so only you can open the file.
              </p>
            </div>

            <div className="feature__learn-more">
              <p>Learn more</p>
              <img src={arrow} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
