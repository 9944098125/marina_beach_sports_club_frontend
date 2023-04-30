import React from "react";

import "./styles.css";
import TopPart from "./TopPart";
import ImagesRow from "./ImagesRow";

export default function Gallery() {
  return (
    <React.Fragment>
      <div className="gallery_container">
        <TopPart />
        <div className="gallery_middle_text_container">
          <p className="gallery_middle_text">
            Welcome to our volleyball gallery! Here, you'll find a collection of
            photos and videos from some of the most exciting volleyball
            tournaments and events organized by the Marina Beach Sports Club.
          </p>
          <p className="gallery_middle_text">
            Our volleyball events have become a major draw for sports fans and
            athletes from around the world. From the high-flying action of the
            Asian Beach Volleyball Tour to the intense competition of the Tamil
            Nadu State Tourism Beach Volleyball Open Tournament, our tournaments
            showcase the best in beach volleyball talent and athleticism. In our
            gallery, you'll see images of top players spiking, blocking, and
            diving for the ball, as well as snapshots of the enthusiastic crowds
            and colorful beach atmosphere that make our events so unique.
          </p>
        </div>
        <ImagesRow />
        <div className="gallery_middle_text_container">
          <div className="gallery_middle_text">
            We've captured some of the most memorable moments from our
            tournaments, including close matches, dramatic comebacks, and
            stunning upsets. Whether you're a die-hard volleyball fan or just
            love the excitement of beach sports, we hope you'll enjoy browsing
            our gallery and reliving some of the most unforgettable moments from
            Marina Beach Sports Club volleyball history.
          </div>
          <button className="view_btn">View more →</button>
        </div>
      </div>
    </React.Fragment>
  );
}
