import React from "react";
import styles from './ProductPage.module.css';


const ZoomBox = ({zoomStyle}) => {
  return <div className={styles.zoomBox} style={zoomStyle}></div>;
};

export default ZoomBox;
