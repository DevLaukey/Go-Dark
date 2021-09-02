import Plyr from "plyr-react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Layout from "../components/layout/Layout";
import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import "plyr-react/dist/plyr.css";
import Loading from "../components/layout/Loading";
import Link from "next/link";

const url = (name, wrap = false) =>
  `${
    wrap ? "url(" : ""
  }https://awv3node-homepage.surge.sh/build/assets/${name}.svg${
    wrap ? ")" : ""
  }`;

const Pricing = () => {
    const { fullExperience } = useSelector((state) => state.settings);
    const parallax = useRef(null);
    const plyr = useRef(null);

    useEffect(() => {
      if (fullExperience) {
        plyr?.current?.plyr.play();
      }
    }, [plyr, fullExperience]);
    
  return (
    <Layout title="Pricing">
      <div
        className="home"
        style={{ width: "100%", height: "100%", background: "#020205" }}
      >
        <Parallax ref={parallax} pages={3}>
          <ParallaxLayer
            offset={1}
            speed={1}
            style={{ backgroundColor: "#020205" }}
          />
          <ParallaxLayer
            offset={2}
            speed={1}
            style={{ backgroundColor: "#020205" }}
          />
          <ParallaxLayer
            offset={0}
            speed={0}
            factor={3}
            style={{
              backgroundImage: url("stars", true),
              backgroundSize: "cover",
            }}
          />
          <ParallaxLayer
            offset={1.3}
            speed={-0.3}
            style={{ pointerEvents: "none", display: "none" }}
          >
            <img
              src={url("satellite4")}
              style={{ width: "15%", marginLeft: "70%" }}
              alt=""
            />
          </ParallaxLayer>
          <ParallaxLayer offset={1} speed={0.8} style={{ opacity: 0.1 }}>
            <img
              src={url("cloud")}
              style={{ display: "block", width: "20%", marginLeft: "55%" }}
              alt=""
            />
            <img
              src={url("cloud")}
              style={{ display: "block", width: "10%", marginLeft: "15%" }}
              alt=""
            />
          </ParallaxLayer>
          <ParallaxLayer offset={1.75} speed={0.5} style={{ opacity: 0.1 }}>
            <img
              src={url("cloud")}
              style={{ display: "block", width: "20%", marginLeft: "70%" }}
              alt=""
            />
            <img
              src={url("cloud")}
              style={{ display: "block", width: "20%", marginLeft: "40%" }}
              alt=""
            />
          </ParallaxLayer>
          <ParallaxLayer offset={1} speed={0.2} style={{ opacity: 0.2 }}>
            <img
              src={url("cloud")}
              style={{ display: "block", width: "10%", marginLeft: "10%" }}
              alt=""
            />
            <img
              src={url("cloud")}
              style={{ display: "block", width: "20%", marginLeft: "75%" }}
              alt=""
            />
          </ParallaxLayer>
          <ParallaxLayer offset={1.6} speed={-0.1} style={{ opacity: 0.4 }}>
            <img
              src={url("cloud")}
              style={{ display: "block", width: "20%", marginLeft: "60%" }}
              alt=""
            />
            <img
              src={url("cloud")}
              style={{ display: "block", width: "25%", marginLeft: "30%" }}
              alt=""
            />
            <img
              src={url("cloud")}
              style={{ display: "block", width: "10%", marginLeft: "80%" }}
              alt=""
            />
          </ParallaxLayer>
          <ParallaxLayer offset={2.6} speed={0.4} style={{ opacity: 0.6 }}>
            <img
              src={url("cloud")}
              style={{ display: "block", width: "20%", marginLeft: "5%" }}
              alt=""
            />
            <img
              src={url("cloud")}
              style={{ display: "block", width: "15%", marginLeft: "75%" }}
              alt=""
            />
          </ParallaxLayer>
          <ParallaxLayer
            offset={2.5}
            speed={-0.4}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <h3 className="earth_background-text">Portland Oregon</h3>

            <Link className="toggler" href="/contact">
              <img
                className="animate-flicker glitch "
                src={url("earth")}
                style={{ width: "50%" }}
                alt=""
              />
            </Link>
          </ParallaxLayer>
          <ParallaxLayer
            offset={2}
            speed={-0.3}
            style={{
              backgroundSize: "80%",
              backgroundPosition: "center",
              backgroundImage: url("clients", true),
              display: "none",
            }}
          />
          <ParallaxLayer
            offset={0}
            speed={1.2}
            onClick={() => parallax.current.scrollTo(1)}
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <section>
              <div class="pricing pricing-palden">
                <div class="pricing-item">
                  <div class="pricing-deco">
                    <svg
                      class="pricing-deco-img"
                      enable-background="new 0 0 300 100"
                      height="100px"
                      id="Layer_1"
                      preserveAspectRatio="none"
                      version="1.1"
                      viewBox="0 0 300 100"
                      width="300px"
                      x="0px"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      xmlns="http://www.w3.org/2000/svg"
                      y="0px"
                    >
                      <path
                        class="deco-layer deco-layer--1"
                        d="M30.913,43.944c0,0,42.911-34.464,87.51-14.191c77.31,35.14,113.304-1.952,146.638-4.729&#x000A;	c48.654-4.056,69.94,16.218,69.94,16.218v54.396H30.913V43.944z"
                        fill="#FFFFFF"
                        opacity="0.6"
                      ></path>
                      <path
                        class="deco-layer deco-layer--2"
                        d="M-35.667,44.628c0,0,42.91-34.463,87.51-14.191c77.31,35.141,113.304-1.952,146.639-4.729&#x000A;	c48.653-4.055,69.939,16.218,69.939,16.218v54.396H-35.667V44.628z"
                        fill="#FFFFFF"
                        opacity="0.6"
                      ></path>
                      <path
                        class="deco-layer deco-layer--3"
                        d="M43.415,98.342c0,0,48.283-68.927,109.133-68.927c65.886,0,97.983,67.914,97.983,67.914v3.716&#x000A;	H42.401L43.415,98.342z"
                        fill="#FFFFFF"
                        opacity="0.7"
                      ></path>
                      <path
                        class="deco-layer deco-layer--4"
                        d="M-34.667,62.998c0,0,56-45.667,120.316-27.839C167.484,57.842,197,41.332,232.286,30.428&#x000A;	c53.07-16.399,104.047,36.903,104.047,36.903l1.333,36.667l-372-2.954L-34.667,62.998z"
                        fill="#FFFFFF"
                      ></path>
                    </svg>
                    <div class="pricing-price">
                      <span class="pricing-currency">$</span>29
                      <span class="pricing-period">/ mo</span>
                    </div>
                    <h3 class="pricing-title">Freelance</h3>
                  </div>
                  <ul class="pricing-feature-list">
                    <li class="pricing-feature">1 GB of space</li>
                    <li class="pricing-feature">Support at $25/hour</li>
                    <li class="pricing-feature">Limited cloud access</li>
                  </ul>
                  <button class="pricing-action">Choose plan</button>
                </div>
                <div class="pricing-item pricing__item--featured">
                  <div class="pricing-deco">
                    <svg
                      class="pricing-deco-img"
                      enable-background="new 0 0 300 100"
                      height="100px"
                      id="Layer_1"
                      preserveAspectRatio="none"
                      version="1.1"
                      viewBox="0 0 300 100"
                      width="300px"
                      x="0px"
                      xml:space="preserve"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      xmlns="http://www.w3.org/2000/svg"
                      y="0px"
                    >
                      <path
                        class="deco-layer deco-layer--1"
                        d="M30.913,43.944c0,0,42.911-34.464,87.51-14.191c77.31,35.14,113.304-1.952,146.638-4.729&#x000A;	c48.654-4.056,69.94,16.218,69.94,16.218v54.396H30.913V43.944z"
                        fill="#FFFFFF"
                        opacity="0.6"
                      ></path>
                      <path
                        class="deco-layer deco-layer--2"
                        d="M-35.667,44.628c0,0,42.91-34.463,87.51-14.191c77.31,35.141,113.304-1.952,146.639-4.729&#x000A;	c48.653-4.055,69.939,16.218,69.939,16.218v54.396H-35.667V44.628z"
                        fill="#FFFFFF"
                        opacity="0.6"
                      ></path>
                      <path
                        class="deco-layer deco-layer--3"
                        d="M43.415,98.342c0,0,48.283-68.927,109.133-68.927c65.886,0,97.983,67.914,97.983,67.914v3.716&#x000A;	H42.401L43.415,98.342z"
                        fill="#FFFFFF"
                        opacity="0.7"
                      ></path>
                      <path
                        class="deco-layer deco-layer--4"
                        d="M-34.667,62.998c0,0,56-45.667,120.316-27.839C167.484,57.842,197,41.332,232.286,30.428&#x000A;	c53.07-16.399,104.047,36.903,104.047,36.903l1.333,36.667l-372-2.954L-34.667,62.998z"
                        fill="#FFFFFF"
                      ></path>
                    </svg>
                    <div class="pricing-price">
                      <span class="pricing-currency">$</span>59
                      <span class="pricing-period">/ mo</span>
                    </div>
                    <h3 class="pricing-title">Business</h3>
                  </div>
                  <ul class="pricing-feature-list">
                    <li class="pricing-feature">5 GB of space</li>
                    <li class="pricing-feature">Support at $5/hour</li>
                    <li class="pricing-feature">Full cloud access</li>
                  </ul>
                  <button class="pricing-action">Choose plan</button>
                </div>
                <div class="pricing-item">
                  <div class="pricing-deco">
                    <svg
                      class="pricing-deco-img"
                      enable-background="new 0 0 300 100"
                      height="100px"
                      id="Layer_1"
                      preserveAspectRatio="none"
                      version="1.1"
                      viewBox="0 0 300 100"
                      width="300px"
                      x="0px"
                      xml:space="preserve"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      xmlns="http://www.w3.org/2000/svg"
                      y="0px"
                    >
                      <path
                        class="deco-layer deco-layer--1"
                        d="M30.913,43.944c0,0,42.911-34.464,87.51-14.191c77.31,35.14,113.304-1.952,146.638-4.729&#x000A;	c48.654-4.056,69.94,16.218,69.94,16.218v54.396H30.913V43.944z"
                        fill="#FFFFFF"
                        opacity="0.6"
                      ></path>
                      <path
                        class="deco-layer deco-layer--2"
                        d="M-35.667,44.628c0,0,42.91-34.463,87.51-14.191c77.31,35.141,113.304-1.952,146.639-4.729&#x000A;	c48.653-4.055,69.939,16.218,69.939,16.218v54.396H-35.667V44.628z"
                        fill="#FFFFFF"
                        opacity="0.6"
                      ></path>
                      <path
                        class="deco-layer deco-layer--3"
                        d="M43.415,98.342c0,0,48.283-68.927,109.133-68.927c65.886,0,97.983,67.914,97.983,67.914v3.716&#x000A;	H42.401L43.415,98.342z"
                        fill="#FFFFFF"
                        opacity="0.7"
                      ></path>
                      <path
                        class="deco-layer deco-layer--4"
                        d="M-34.667,62.998c0,0,56-45.667,120.316-27.839C167.484,57.842,197,41.332,232.286,30.428&#x000A;	c53.07-16.399,104.047,36.903,104.047,36.903l1.333,36.667l-372-2.954L-34.667,62.998z"
                        fill="#FFFFFF"
                      ></path>
                    </svg>
                    <div class="pricing-price">
                      <span class="pricing-currency">$</span>99
                      <span class="pricing-period">/ mo</span>
                    </div>
                    <h3 class="pricing-title">Enterprise</h3>
                  </div>
                  <ul class="pricing-feature-list">
                    <li class="pricing-feature">10 GB of space</li>
                    <li class="pricing-feature">Support at $5/hour</li>
                    <li class="pricing-feature">Full cloud access</li>
                  </ul>
                  <button class="pricing-action">Choose plan</button>
                </div>
              </div>
            </section>
          </ParallaxLayer>
          <ParallaxLayer
            offset={0}
            speed={0.8}
            onClick={() => parallax.current.scrollTo(1)}
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            {/* <span data-text="GO DARK" className="title">
              GO DARK
            </span> */}
          </ParallaxLayer>
          <ParallaxLayer
            offset={0}
            speed={1.3}
            onClick={() => parallax.current.scrollTo(1)}
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <span className="about_section-text ">
              At the heart of the issue is Data Privacy. And although Data
              Privacy isn't a black and white matter or therefore a simple
              matter, Go-Dark believes that the individual deserves the
              opportunity to understand the information that is out there that
              pertains to that individual. You also have a right to seek to
              control that information for such things as personal protection,
              removing information that seeks to harm your current opportunities
              in life, keeping your business and employees safe from leaked
              information, competitive disadvantages, or public embarrassment.
              Maybe you want internet anonymity and you want to disappear.
              Go-Dark can help.
            </span>
          </ParallaxLayer>
          <ParallaxLayer
            offset={0}
            speed={1.2}
            onClick={() => parallax.current.scrollTo(1)}
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <span className="about_section-title">
              We are hackers, we are good people
            </span>
            <span className="about_section-title1">
              , we are here to help protect you.
            </span>
          </ParallaxLayer>
          <ParallaxLayer
            offset={1}
            speed={0.1}
            onClick={() => parallax.current.scrollTo(2)}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img src={url("bash")} style={{ width: "40%" }} alt="" />
          </ParallaxLayer>
          <ParallaxLayer
            offset={2}
            speed={-0}
            style={{
              display: "none",
              alignItems: "center",
              justifyContent: "center",
            }}
            onClick={() => parallax.current.scrollTo(0)}
          >
            <img src={url("clients-main")} style={{ width: "40%" }} alt="" />
          </ParallaxLayer>
        </Parallax>
      </div>
      <div className="audio-player">
        <Plyr
          source={{
            type: "audio",
            sources: [
              {
                src: "/audio.mp3",
                type: "audio/mp3",
              },
            ],
          }}
          options={{
            controls: [
              "play",
              "progress",
              "current-time",
              "duration",
              "mute",
              "volume",
            ],
            loop: { active: true },
          }}
          ref={plyr}
        />
      </div>
    </Layout>
  );
};

export default Pricing;
