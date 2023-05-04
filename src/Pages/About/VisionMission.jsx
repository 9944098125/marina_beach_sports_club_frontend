import React from "react";
import Aos from "aos";
import "aos/dist/aos.css";

function VisionMission() {
  React.useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <React.Fragment>
      <div className="vision_mission_container">
        <h2 className="vision_head">Vision & Mission</h2>
        <div data-aos="fade-up" className="each_block">
          <div style={{ padding: "15px" }}>
            <img
              src="https://images.unsplash.com/photo-1519046947096-f43d6481532b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YmVhY2glMjBzcG9ydHxlbnwwfHwwfHw%3D&w=1000&q=80"
              className="vision_img"
              alt=""
              style={{
                border: "10px solid #20E162",
              }}
            />
          </div>
          <div style={{}}>
            <p className="vision_head">Developing beach Sports</p>
            <p
              style={{
                color: "#20E162",
                fontSize: "12px",
              }}
            >
              Our vision is to develop beach sports, in all coastal areas of
              India. We strive to improve the caliber of players and assist them
              in taking part in international level sports events.
            </p>
          </div>
        </div>

        <div data-aos="fade-up" className="each_block2">
          <div>
            <p className="vision_head">Unity & Friendship</p>
            <p
              style={{
                color: "#00B9F4",
                fontSize: "12px",
              }}
            >
              We believe in promoting unity, friendship, and understanding among
              our members and facilitating well-wishers to become members. We
              aim to bring about a friendly feeling of unanimity among the
              members, irrespective of caste, creed, or color on all subjects
              involving common good.
            </p>
          </div>
          <div style={{ padding: "15px" }}>
            <img
              src="data:image/jpeg;base64,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"
              className="vision_img"
              alt=""
              style={{
                border: "10px solid #00B9F4",
              }}
            />
          </div>
        </div>

        <div data-aos="fade-up" className="each_block">
          <div style={{ padding: "15px" }}>
            <img
              src="data:image/png;base64,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"
              className="vision_img"
              alt=""
              style={{
                border: "10px solid #20E162",
              }}
            />
          </div>
          <div style={{}}>
            <p className="vision_head">Non - Political & Inclusive</p>
            <p
              style={{
                color: "#20E162",
                fontSize: "12px",
              }}
            >
              Our society functions as a non-political club, working towards the
              welfare, development, and progress of beach sports athletes of
              India without any distinctions of caste, creed, race, religion,
              color or language. We aim to encourage young sportsmen and women
              to actively participate in our programs and camps.
            </p>
          </div>
        </div>

        <div data-aos="fade-up" className="each_block2">
          <div>
            <p className="vision_head">Peaceful Relationship</p>
            <p
              style={{
                color: "#00B9F4",
                fontSize: "12px",
              }}
            >
              Our goal is to create a peaceful relationship between our
              neighboring districts, states, and other foreign countries by
              conducting district, state, national, and international level
              competitions.
            </p>
          </div>
          <div style={{ padding: "15px" }}>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFmb5xrn6ieheXjQCyovjR21qtQKtiVxXmzw&usqp=CAU"
              className="vision_img"
              alt=""
              style={{
                border: "10px solid #00B9F4",
              }}
            />
          </div>
        </div>

        <div data-aos="fade-up" className="each_block">
          <div style={{ padding: "15px" }}>
            <img
              src="https://media.istockphoto.com/id/1336336750/photo/girl-athlete-volleyball-player-on-the-beach-playing-at-sunset.jpg?s=612x612&w=0&k=20&c=82QouWVEJYnCFH9s40OT-cDMQx2ULESJ_szZnwN3B0c="
              className="vision_img"
              alt=""
              style={{
                border: "10px solid #20E162",
              }}
            />
          </div>
          <div style={{}}>
            <p className="vision_head">Excellence in Beach sports</p>
            <p
              style={{
                color: "#20E162",
                fontSize: "12px",
              }}
            >
              Our core aim is to navigate each and all individual sportsmen and
              sportswomen to produce laurels for the country and achieve success
              in international competitions. We aim to achieve a medal in the
              Olympics by following the above-mentioned activities of our
              society.
            </p>
          </div>
        </div>

        <div data-aos="fade-up" className="each_block2">
          <div>
            <p className="vision_head">Holistic Development</p>
            <p
              style={{
                color: "#00B9F4",
                fontSize: "12px",
              }}
            >
              Our vision includes promoting health and fitness-related nutrition
              knowledge in rural areas, creating awareness, training, equipping,
              and developing the youth of India with knowledge and skill set
              required to face the real world without fear. We aim to build
              confidence and behavioral coaching along with professional/power
              skills training implementation strategies to create highly
              independent and energetic sportsmen and sportswomen.
            </p>
          </div>
          <div style={{ padding: "15px" }}>
            <img
              src="https://www.tilakedu.com/icons/psychology.png"
              className="vision_img"
              alt=""
              style={{
                border: "10px solid #00B9F4",
              }}
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default VisionMission;
