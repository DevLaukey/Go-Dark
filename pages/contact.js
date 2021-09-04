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

const Contact = () => {
  const { fullExperience } = useSelector((state) => state.settings);
  const parallax = useRef(null);
  const plyr = useRef(null);

  const onMouseOver = (e) => {
    document.getElementById("earth_background-text").style.display = "block";
  };

  const onMouseLeave = (e) => {
    document.getElementById("earth_background-text").style.display = "none";
  };

  useEffect(() => {
    if (fullExperience) {
      plyr?.current?.plyr.play();
    }
  }, [plyr, fullExperience]);
  return (
    <Layout title="Contact">
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
            <h3
              id="earth_background-text"
              style={{ display: "none" }}
              className="earth_background-text"
            >
              Portland Oregon
            </h3>

            <Link id="toggler" className="toggler" href="/contact">
              <img
                className="animate-flicker glitch "
                src={url("earth")}
                style={{ width: "50%" }}
                onMouseOver={onMouseOver}
                onMouseLeave={onMouseLeave}
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
            <span className="contact_title">
              <h4 id="hire">Contact Us</h4>
            </span>
          </ParallaxLayer>
          <ParallaxLayer
            offset={0}
            speed={1.3}
            onClick={() => parallax.current.scrollTo(1)}
            style={{
              display: "none",
              alignItems: "center",
            }}
          ></ParallaxLayer>
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
            offset={2}
            speed={-0}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            onClick={() => parallax.current.scrollTo(1)}
          ></ParallaxLayer>

          <ParallaxLayer
            offset={1}
            speed={0.1}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <section id="hire">
              <form>
                <div className="contact_top">
                  <div class="field name-box">
                    <input type="text" id="name" placeholder="Who Are You?" />
                    <label for="name">Name</label>
                    <span class="ss-icon">check</span>
                  </div>

                  <div class="field email-box">
                    <input
                      type="text"
                      id="email"
                      placeholder="name@email.com"
                    />
                    <label for="email">Email</label>
                    <span class="ss-icon">check</span>
                  </div>
                </div>
                <div class="field msg-box">
                  <textarea
                    id="msg"
                    rows="5"
                    placeholder="Your subject goes here..."
                  />
                  <label for="msg">Subject</label>
                  <span class="ss-icon">check</span>
                </div>
                <br />
                <div class="field msg-box">
                  <textarea
                    id="msg"
                    rows="5"
                    placeholder="Your Message goes here..."
                  />
                  <label for="msg">Messsage</label>
                  <span class="ss-icon">check</span>
                </div>
                <br />
                <input class="button" type="submit" value="Send" />
              </form>
            </section>
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

export default Contact;
