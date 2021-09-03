import PropTypes from "prop-types";
import Head from "next/head";
import Header from "./Header";
import Experience from "../shared/Experience";
import { useState } from "react";

const Layout = ({ title, children }) => {
  const [visited, setVisited] = useState(false)

  return (
    <div className="layout">
      <Head>
        <title>{title} - GoDark</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {
        visited ? <Header /> {children} : <Experience />
      
      }
      
    
      <Header />
      {children}
     
    </div>
  );
};;

Layout.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};


export default Layout;
