import React from "react";

import TopPart from "./TopPart";
import rows1 from "../../Assets/Images/rows1.png";
import "./styles.css";
import Rows from "./Rows";

export default function Gallery() {
  return (
    <React.Fragment>
      <TopPart />
      <div className="bold_text_container"></div>
      <Rows
        index={0}
        image={rows1}
        head="Asian Championship Chennai"
        text="Barwon has an ESG Committee that is responsible for overseeing environmental, social and governance issues that are relevant across all of Barwon’s investments and business operations and supports each business in its efforts to become a leader in the consideration of ESG factors when managing alternative investment strategies.
"
      />
      <Rows
        index={1}
        image="https://media.istockphoto.com/id/996847394/photo/beach-volleyball.jpg?s=612x612&w=0&k=20&c=-5oyUKlQt1V_uNTUMmVFx6rAq-nV2HHLZ8K1KF1lziw="
        head="FIVB challenge BSNL"
        text="First time in India FIVB was brought - the event was conducted in Chennai Elliot's beach - 32 countries - 32 teams from all aroun the Globe participated and 24 teams were finalized in the selection process - the total prize money was $100,000.00 for Men and Women ($50k for men/$50K for women). Based on the success FIVB alloted us the 2010 event to us"
      />
      <Rows
        index={3}
        image="https://www.volleytours.com/images/2020/03/02/20190405-sunsation-035.webp"
        head="FIVB challenge SRM"
        text="2010 is a Mega event witnessed by 5000 people, 54 countries involved - 32 teams - 24 in the league - $100k prize money - it was event of extravaganza such as Fashion show, promotional events were conducted in the populated areas of the city for this event and gathered a huge crowd of visitors.  With DJ from Slovakia and music band also involved"
      />
      <Rows
        index={1}
        image="https://www.reuters.com/resizer/kSbtu7TcpdFwLQWP3wDo-RCPiOs=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/ZCMTODNQNVJLZK4DQQ4WNKWKDY.jpg"
        head="FIVB challenge BSNL"
        text="First time in India FIVB was brought - the event was conducted in Chennai Elliot's beach - 32 countries - 32 teams from all aroun the Globe participated and 24 teams were finalized in the selection process - the total prize money was $100,000.00 for Men and Women ($50k for men/$50K for women). Based on the success FIVB alloted us the 2010 event to us"
      />
      <Rows
        index={3}
        image="https://i.guim.co.uk/img/media/dbca9f8bd896ad064417153ff9f3aa8d7dfc1319/0_37_3588_2155/master/3588.jpg?width=1200&quality=85&auto=format&fit=max&s=44b9e70f43dcddc88201e856a5d87b8d"
        head="FIVB challenge SRM"
        text="2010 is a Mega event witnessed by 5000 people, 54 countries involved - 32 teams - 24 in the league - $100k prize money - it was event of extravaganza such as Fashion show, promotional events were conducted in the populated areas of the city for this event and gathered a huge crowd of visitors.  With DJ from Slovakia and music band also involved"
      />
    </React.Fragment>
  );
}
