// src/components/ToothView/ToothView.jsx
import React, { useContext, useEffect, useState } from "react";
import { SelectionContext } from "../../contexts/SelectionContext.jsx";
import "./ToothView.scss";
import toothImages from "../../assets/images/index.js";

const ToothView = () => {
  const { selectedToothFrontView } = useContext(SelectionContext);
  const { selectedToothTopView } = useContext(SelectionContext);
  const [imageSrcFrontView, setImageSrcFrontView] = useState("");
  const [imageSrcTopView, setImageSrcTopView] = useState("");

  useEffect(() => {
    try {
      const imgFrontView = toothImages[`tooth${selectedToothFrontView}`];
      setImageSrcFrontView(imgFrontView);
    } catch (error) {
      console.log("Image not found", error);
      setImageSrcFrontView("");
    }
  }, [selectedToothFrontView]);

  useEffect(() => {
    try {
      const imgTopView = toothImages[`tooth${selectedToothTopView}`];
      setImageSrcTopView(imgTopView);
    } catch (error) {
      console.log("Image not found!", error);
      setImageSrcTopView("");
    }
  }, [selectedToothTopView]);

  return (
    <div className="tooth-view">
      <div className="tooth-image-front-view">
        {imageSrc ? (
          <CanvasComponent imageSrc={imageSrcFrontView} />
        ) : (
          <div className="no-image">Image not available.</div>
        )}
      </div>
      <div className="tooth-image-top-view">
        {imageSrc ? (
          <CanvasComponent imageSrc={imageSrcTopView} />
        ) : (
          <div className="no-image">Image not available.</div>
        )}
      </div>
    </div>
  );
};

export default ToothView;
