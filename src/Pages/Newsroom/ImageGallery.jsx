import React from "react";
import { useMediaQuery } from "react-responsive";

import "./styles.css";

function ImageGallery({ imagesList }) {
  const mediumDevicesView = useMediaQuery({
    query: "(max-width:768px)",
  });
  const [fullScreenImg, setFullScreenImg] = React.useState(null);
  const [currentIdx, setCurrentIdx] = React.useState(null);

  function openFullScreenImg(idx) {
    setFullScreenImg(imagesList[idx]);
    setCurrentIdx(idx);
  }

  function closeFullScreenImg() {
    setFullScreenImg(null);
    setCurrentIdx(null);
  }

  function moveToNextImg() {
    setCurrentIdx((preIdx) => (preIdx === imagesList.length ? 0 : preIdx + 1));
    setFullScreenImg(imagesList[currentIdx + 1]);
  }

  function moveToPreviousImg() {
    setCurrentIdx((preIdx) => (preIdx === 0 ? imagesList.length : preIdx - 1));
    setFullScreenImg(imagesList[currentIdx - 1]);
  }

  return (
    <React.Fragment>
      <div className="gallery">
        {imagesList.map((img, idx) => (
          <img
            key={idx}
            onClick={() => openFullScreenImg(idx)}
            src={img}
            alt={idx}
            className="gallery_img"
            style={{ marginTop: !mediumDevicesView && idx === 4 && "-50px" }}
          />
        ))}
        {fullScreenImg && (
          <div className="full_screen">
            <img src={fullScreenImg} alt="" />
            <span className="prev" onClick={moveToPreviousImg}>
              &#10094;
            </span>
            <span className="next" onClick={moveToNextImg}>
              &#10095;
            </span>
            <span className="close" onClick={closeFullScreenImg}>
              &times;
            </span>
          </div>
        )}
      </div>
    </React.Fragment>
  );
}

export default ImageGallery;
