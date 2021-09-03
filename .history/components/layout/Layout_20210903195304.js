import { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import Header from "./Header";
import { useDispatch } from "react-redux";
import { setSettings } from "../../store/actions/settingsActions";

const Layout = ({ title, children}) => {

  return (
    <div className="layout">
      <Head>
        <title>{title} - GoDark</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
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
