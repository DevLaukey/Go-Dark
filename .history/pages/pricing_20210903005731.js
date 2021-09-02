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
            <div class="pricingTable">
              <h2 class="pricingTable-title">
                Find a plan that's right for you.
              </h2>
              <h3 class="pricingTable-subtitle">
                Every plan comes with a 30-day free trial.
              </h3>

              <ul class="pricingTable-firstTable">
                <li class="pricingTable-firstTable_table">
                  <h1 class="pricingTable-firstTable_table__header">
                    Bronze Packege
                  </h1>
                  <p class="pricingTable-firstTable_table__pricing">
                    <span>$</span>
                    <span>10</span>
                    <span>Month</span>
                  </p>
                  <ul class="pricingTable-firstTable_table__options">
                    <li>Unlimited Listing</li>
                    <li>Edit Your Listing</li>
                    <li>Approve Reviews</li>
                  </ul>
                  <button class="pricingTable-firstTable_table__getstart">
                    Get Started Now
                  </button>
                </li>
                <li class="pricingTable-firstTable_table">
                  <h1 class="pricingTable-firstTable_table__header">
                    Gold Packege
                  </h1>
                  <p class="pricingTable-firstTable_table__pricing">
                    <span>$</span>
                    <span>19</span>
                    <span>Month</span>
                  </p>
                  <ul class="pricingTable-firstTable_table__options">
                    <li>Unlimited Listing</li>
                    <li>Edit Your Listing</li>
                    <li>Approve Reviews</li>
                    <li>Take Booking Online</li>
                    <li>24/7 Support Service</li>
                  </ul>
                  <button class="pricingTable-firstTable_table__getstart">
                    Get Started Now
                  </button>
                </li>
                <li class="pricingTable-firstTable_table">
                  <h1 class="pricingTable-firstTable_table__header">
                    Platinum Packege
                  </h1>
                  <p class="pricingTable-firstTable_table__pricing">
                    <span>$</span>
                    <span>49</span>
                    <span>Month</span>
                  </p>
                  <ul class="pricingTable-firstTable_table__options">
                    <li>Unlimited Listing</li>
                    <li>Edit Your Listing</li>
                    <li>Approve Reviews</li>
                  </ul>
                  <button class="pricingTable-firstTable_table__getstart">
                    Get Started Now
                  </button>
                </li>
              </ul>
            </div>
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
