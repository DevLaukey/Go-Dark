import Plyr from "plyr-react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Layout from "../components/layout/Layout";
import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import "plyr-react/dist/plyr.css"; 
import Link from "next/link";

const url = (name, wrap = false) =>
  `${
    wrap ? "url(" : ""
  }https://awv3node-homepage.surge.sh/build/assets/${name}.svg${
    wrap ? ")" : ""
  }`;

const About = () => {
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
    <Layout title="About">
      <div
        className="home"
        style={{ width: "100%", height: "100%", background: "#020205" }}
      >
        <Parallax ref={parallax} pages={4}>
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
          <ParallaxLayer
            offset={3.5}
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
          <ParallaxLayer offset={3.6} speed={0.4} style={{ opacity: 0.6 }}>
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
            offset={4}
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
            <div className="about_container">
              <div className="about_img">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzlBSrolJgxBDKmvTqHcQ2oOLsnwLK-4ARLKmB0kBVfT-lKELoq5rY1d2gb29WlJ5xTaA&usqp=CAU"
                  alt=""
                />
              </div>
              <div className="about_text">
                At Go-Dark, <br /> we strive to strengthen our customers???
                information security through advanced reconnaissance,
                consulting, and defensive security services through Operational
                Security (OPSEC). Founded in 2020 by a group of hackers, people
                all over the world have taken their first steps to understanding
                what information about them is out there.
              </div>
            </div>
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
            <div className="about_container">
              <div className="about_text1 draw thick">
                We recognize that Open Source Intelligence (OSINT) is both a
                science and an art, which requires discretion and good judgment.
                Like any complex practice, finding information depends upon the
                ability of the artist to apply knowledge and tools in a way that
                achieves maximum effect. Information security involves tradeoffs
                between security, cost and operations. That???s why at Go-Dark we
                strive to understand your organization from a holistic
                perspective, taking into consideration your objectives and
                unique constraints
              </div>
              <div className="about_img">
                <img src="https://bit.ly/3h5jeCR" alt="" />
              </div>
            </div>
            <br />
          </ParallaxLayer>
          <ParallaxLayer
            offset={2}
            speed={0.1}
            onClick={() => parallax.current.scrollTo(3)}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div className="about_container">
              <div className="about_img">
                
                  <img src="https://bit.ly/3h5jeCR" alt="" />
              </div>
              <div className="about_text1 draw  ">
                At the heart of the issue is Data Privacy. And although Data
                Privacy isn't a black and white matter or therefore a simple
                matter, Go-Dark believes that the individual deserves the
                opportunity to understand the information that is out there that
                pertains to that individual. You also have a right to seek to
                control that information for such things as personal protection,
                removing information that seeks to harm your current
                opportunities in life, keeping your business and employees safe
                from leaked information, competitive disadvantages, or public
                embarrassment. Maybe you want internet anonymity and you want to
                disappear. Go-Dark can help.
              </div>
            </div>
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
          <ParallaxLayer
            offset={3.7}
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

export default About;


