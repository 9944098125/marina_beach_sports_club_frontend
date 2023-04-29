import React from "react";

import TopPart from "./TopPart";
import rows1 from "../../Assets/Images/rows1.png";
import rows2 from "../../Assets/Images/rows2.png";
import rows3 from "../../Assets/Images/rows3.png";
import "./styles.css";
import Rows from "./Rows";

export default function Events() {
  return (
    <React.Fragment>
      <TopPart />
      <div className="bold_text_container">
        <h3 className="bold_text">
          Get ready for the biggest beach volleyball event of the year! The
          Volleyball World Beach Pro Tour 2023 is coming to Goa from October
          19th to 22nd, and you won't want to miss a minute of the action.
        </h3>
      </div>
      <Rows
        index={0}
        image={rows1}
        head="Asian Championship Chennai"
        text="Barwon has an ESG Committee that is responsible for overseeing environmental, social and governance issues that are relevant across all of Barwon’s investments and business operations and supports each business in its efforts to become a leader in the consideration of ESG factors when managing alternative investment strategies.
"
      />
      <Rows
        index={1}
        image={rows2}
        head="FIVB challenge BSNL"
        text="First time in India FIVB was brought - the event was conducted in Chennai Elliot's beach - 32 countries - 32 teams from all aroun the Globe participated and 24 teams were finalized in the selection process - the total prize money was $100,000.00 for Men and Women ($50k for men/$50K for women). Based on the success FIVB alloted us the 2010 event to us"
      />
      <Rows
        index={3}
        image={rows3}
        head="FIVB challenge SRM"
        text="2010 is a Mega event witnessed by 5000 people, 54 countries involved - 32 teams - 24 in the league - $100k prize money - it was event of extravaganza such as Fashion show, promotional events were conducted in the populated areas of the city for this event and gathered a huge crowd of visitors.  With DJ from Slovakia and music band also involved"
      />
      <Rows
        index={1}
        image={rows2}
        head="FIVB challenge BSNL"
        text="First time in India FIVB was brought - the event was conducted in Chennai Elliot's beach - 32 countries - 32 teams from all aroun the Globe participated and 24 teams were finalized in the selection process - the total prize money was $100,000.00 for Men and Women ($50k for men/$50K for women). Based on the success FIVB alloted us the 2010 event to us"
      />
      <Rows
        index={3}
        image={rows3}
        head="FIVB challenge SRM"
        text="2010 is a Mega event witnessed by 5000 people, 54 countries involved - 32 teams - 24 in the league - $100k prize money - it was event of extravaganza such as Fashion show, promotional events were conducted in the populated areas of the city for this event and gathered a huge crowd of visitors.  With DJ from Slovakia and music band also involved"
      />
    </React.Fragment>
  );
}
