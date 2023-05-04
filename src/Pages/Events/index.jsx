import React from "react";

import "./styles.css";
import TopPart from "./TopPart";
import ImagesRow from "./ImagesRow";

export default function Events() {
  return (
    <React.Fragment>
      <div className="gallery_container">
        <TopPart />

        <div className="gallery_middle_text_container">
          <h3 className="bold_text">
            Get ready for the biggest beach volleyball event of the year! The
            Volleyball World Beach Pro Tour 2023 is coming to Goa from October
            19th to 22nd, and you won't want to miss a minute of the action.
          </h3>
          <p className="gallery_middle_text">
            The Volleyball Beach world Pro Tour is the annual global circuit
            showcasing the best athletes in the world competing for millions in
            prize money and world ranking points. With 3 levels of events and
            the finals culminating at the end of the season, the tour travels
            throughout the year across the globe in stunning locations and
            iconic cities.
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
          <h3 className="events_head">Volleyball World</h3>
          <p className="gallery_middle_text">
            Volleyball World (VW) is a new partnership between the FIVB and CVC
            Capital which will drive innovation, growth and investment in
            volleyball around the globe. It’s the commercial entity for sport
            around the World. VW believe that Volleyball has the potential to
            become a leader in team sports around the globe. It’s aim to
            increase the profile and popularity of the sports, through fresh
            investment for the benefit of Fans, Players, Partners and National
            Federations. The primary objective of VW is focusing on event
            hosting, growth of their digital engagement platform, enhancing fan
            experiences, driving media opportunities, and building partnership
            with stake holders of the industry.
          </p>
          <h3 className="events_head">World Beach Pro Tour</h3>
          <p className="gallery_middle_text">
            The World Beach Pro Tour is the annual global circuit showcasing the
            best athletes in the world competing for millions in prize money and
            world ranking points. With 2 levels of events and The Finals
            culminating at the end of the season, the tour travels throughout
            the year across the globe in stunning locations and iconic cities.
            The World Beach Pro Tour is an entertainment platform that combines
            Sport, Music, Food and the Beach Lifestyle within a single event
            space. Come for the sport – and stay for the party! And then come
            again for both. This is what makes World Beach Pro Tour unique.
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
