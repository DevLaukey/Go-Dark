import { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import Header from "./Header";
import Loading from "./Loading";
import { useDispatch, getState } from "react-redux";
import { setSettings } from "../../store/actions/settingsActions";
import store from "../../store/store";

const Layout = ({ title, children }) => {
  const dispatch = useDispatch();
  const loading = store.getState().settings.loading;
  
  let width;
  if (window.innerWidth > 500) {
    width = 520;
  } else {
    width = window.innerWidth - 1;
  }

  const experience = useRef(null);

  const onEnd = () => {
    experience.current.classList.add("active");
  };

  return (
    <div className="layout">
      <Head>
        <title>{title} - GoDark</title>

        
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {loading ? (
        <>
          <div className="experience" ref={experience}>
            <div className="experience__modal">
              <svg
                className="experience__modal-svg"
                xmlns="http://www.w3.org/2000/svg"
                width="100%"
                height="100%"
                preserveAspectRatio="none"
              >
                <rect
                  id="rectName"
                  x="0"
                  y="0"
                  fill="none"
                  className="experience_rect"
                  width={width}
                  height="300px"
                  margin="10px"
                  rx="3"
                  ry="3"
                />
              </svg>
              <h1 className="experience__modal-title">
                Do you want the full experience?
              </h1>
              <div className="experience__modal-buttons">
                <button
                  className="experience__button"
                  onClick={() => {
                    dispatch(
                      setSettings({
                        fullExperience: true,
                        loading: false,
                      })
                    );
                  }}
                >
                  <svg
                    className="experience__button-svg"
                    xmlns="http://www.w3.org/2000/svg"
                    width="100%"
                    height="100%"
                    preserveAspectRatio="none"
                  >
                    <rect x="0" y="0" fill="none" width="150px" height="35px" />
                  </svg>
                  <div className="experience__button-content">YES</div>
                </button>
                <button
                  className="experience__button"
                  onClick={() => {
                    dispatch(
                      setSettings({
                        fullExperience: false,
                        loading: false,
                      })
                    );
                  }}
                >
                  <svg
                    className="experience__button-svg"
                    xmlns="http://www.w3.org/2000/svg"
                    width="100%"
                    height="100%"
                    preserveAspectRatio="none"
                  >
                    <rect x="0" y="0" fill="none" width="150px" height="35px" />
                  </svg>
                  <div className="experience__button-content">NO</div>
                </button>
              </div>
            </div>
          </div>
          <Loading onEnd={onEnd} />
        </>
      ) : (
        <>
          <Header />
          {children}
        </>
      )}
    </div>
  );
};

Layout.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

export default Layout;
