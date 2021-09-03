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
          ></ParallaxLayer>
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
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <div class="container">
              <section class="card">
                <div class="card_inner">
                  <div class="card_inner__circle">
                    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/rocket.png" />
                  </div>
                  <div class="card_inner__header">
                    <img src="http://www.pixeden.com/media/k2/galleries/343/002-city-vector-background-town-vol2.jpg" />
                  </div>
                  <div class="card_inner__content">
                    <div class="title">Personal edition</div>
                    <div class="price">$19.99</div>
                    <div class="text">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Curabitur at posuere eros. Interdum et malesuada fames ac
                      ante ipsum primis in faucibus. <br /> <br />
                      Fusce sed tortor in orci ultrices tempor quis ut leo.
                      Fusce imperdiet eget ante eu faucibus. Nam rhoncus sapien
                    </div>
                  </div>
                  <div class="card_inner__cta">
                    <button>
                      <span>Buy now</span>
                    </button>
                  </div>
                </div>
              </section>
              <section class="card">
                <div class="card_inner">
                  <div class="card_inner__circle">
                    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/cog.png" />
                  </div>
                  <div class="card_inner__header">
                    <img src="https://www.5genergy.ca/wp-content/uploads/2016/01/free-vector-modern-city_093317_bluecity1.jpg" />
                  </div>
                  <div class="card_inner__content">
                    <div class="title">Team edition</div>
                    <div class="price">$49.99</div>
                    <div class="text">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Curabitur at posuere eros. Interdum et malesuada fames ac
                      ante ipsum primis in faucibus. <br /> <br />
                      Fusce sed tortor in orci ultrices tempor quis ut leo.
                      Fusce imperdiet eget ante eu faucibus. Nam rhoncus sapien
                    </div>
                  </div>
                  <div class="card_inner__cta">
                    <button>
                      <span>
                        <a
                          href="https://www.codepen.io/jcoulterdesign"
                          target="_blank"
                        >
                          Follow me on codepen
                        </a>
                      </span>
                    </button>
                  </div>
                </div>
              </section>
              <section class="card">
                <div class="card_inner">
                  <div class="card_inner__circle">
                    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/paperplane.png" />
                  </div>
                  <div class="card_inner__header">
                    <img src="https://c7.uihere.com/files/859/510/385/abstract-forest-landscape.jpg" />
                  </div>
                  <div class="card_inner__content">
                    <div class="title">Enterprise edition</div>
                    <div class="price">$89.99</div>
                    <div class="text">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Curabitur at posuere eros. Interdum et malesuada fames ac
                      ante ipsum primis in faucibus. <br /> <br />
                      Fusce sed tortor in orci ultrices tempor quis ut leo.
                      Fusce imperdiet eget ante eu faucibus. Nam rhoncus sapien
                    </div>
                  </div>
                  <div class="card_inner__cta">
                    <button>
                      <span>Buy now</span>
                    </button>
                  </div>
                </div>
              </section>
            </div>
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
