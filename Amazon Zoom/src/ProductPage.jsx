import React, { useRef, useState } from "react";
import styles from "./ProductPage.module.css";
import ZoomBox from "./ZoomBox";
import Details from "./Details";

const ProductPage = () => {
  const imageRef = useRef(null);
  const [zoomStyle, setZoomStyle] = useState({});
  const [lensStyle, setLensStyle] = useState({});
  const [showZoom, setShowZoom] = useState(false);

  const handleMouseMove = (e) => {
    const rect = imageRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const lensSize = 100;
    const maxX=rect.width-lensSize;
    const maxY=rect.height-lensSize;

    const lensX = Math.max(0,Math.min(x-lensSize/2,maxX));
    const lensY = Math.max(0,Math.min(y-lensSize/2,maxY));

    // const bgX = (x / rect.width) * 100;
    // const bgY = (y / rect.height) * 100;

    setLensStyle({
      display: "block",
      left: `${lensX}px`,
      top: `${lensY}px`,
      width: `${lensSize}px`,
      height: `${lensSize}px`,
    });

    setZoomStyle({
      backgroundImage: `url(/image.jpg)`,
      backgroundSize: `${rect.width * 2}px ${rect.height * 2}px`,
      backgroundPosition: `${-x*1.3}px ${-y*1.3}px`,
    });
  };

  const handleMouseLeave = () => {
    setShowZoom(false);
    setLensStyle({ display: "none" });
  };

  const handleMouseEnter = () => {
    setShowZoom(true);
  };

  return (
    <div className={styles.container}>
      <div
        className={styles.imageSection}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onMouseEnter={handleMouseEnter}
        ref={imageRef}
      >
        <img src="image.jpg" alt="Product" className={styles.productImage} />
        <div className={styles.lens} style={lensStyle}></div>
      </div>
      <div>{showZoom ? <ZoomBox zoomStyle={zoomStyle} /> : <Details />}</div>
    </div>
  );
};

export default ProductPage;
