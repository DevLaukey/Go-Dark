import { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import Header from "./Header";
import Loading from "./Loading";
import { useDispatch } from "react-redux";
import { setSettings } from "../../store/actions/settingsActions";

const Layout = ({ title, children}) => {
  const dispatch = useDispatch();
  const [loading, setLoading]= useState(false);
  const [visited, setVisited] = useState(false);

  let width;
  if (window.innerWidth > 500) {
    width = 520;
  } else {
    width = window.innerWidth - 1;
  }

  useEffect(() => {
    setLoading(false);
  }, []);

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
      (
        <>
          <Header />
          {children}
        </>
      )}
    </div>
  );
;;

Layout.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};
export async function getServerSideProps() {
  const loading = true;

  return {
    props: {
      loading,
    },
  };
}

export default Layout;
