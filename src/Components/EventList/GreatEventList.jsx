import { Box, Button, Chip, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// import PropTypes from 'prop-types'
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./styles.css";

// import required modules
import { Keyboard, Mousewheel, Navigation, Pagination } from "swiper/modules";
import API from "../../requester";
import { useNavigate } from "react-router-dom";

const GreatEventList = (props) => {
  const navigate = useNavigate();

  const toDetails = (event) => {
    navigate(`/events/${event.id}`);
  };
  const [events, setEvents] = useState([]);
  const [error, setError] = useState(null);
  const defaultImage =
    // "https://assets.simpleviewinc.com/simpleview/image/upload/c_limit,h_1200,q_75,w_1200/v1/clients/irving-redesign/Events_Page_Header_2903ed9c-40c1-4f6c-9a69-70bb8415295b.jpg";
    // "https://www.sueddeutsche.de/image/sz.1.5204492/1200x675?v=1613327941";
    " https://s1.dmcdn.net/v/SyqA01Wc73eyRpiP5/x1080";

  const defaultLocation = "Bishkek";
  const overlayStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    padding: "16px",
    boxSizing: "border-box",
    opacity: 0.8,
    background: "rgba(0, 0, 0, 0.5)",
    color: "#fff",
    borderRadius: "8px",
  };

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await API.get("events/");
        setEvents(response.data.results);
        console.log("API response:", response.data);
      } catch (error) {
        console.error("Error fetching events:", error);
        setError("Error!!!");
      }
    };

    fetchEvents();
  }, []);
  const { title, comments } = props;
  return (
    <Box>
      <Typography>{title}</Typography>

      <Box sx={{ px: "24px" }}>
        <Swiper
          navigation={true}
          // grabCursor={true}
          // loop={true}
          // centeredSlides={true}
          cssMode={true}
          pagination={true}
          mousewheel={true}
          keyboard={true}
          // pagination={true}
          modules={[Navigation, Pagination, Mousewheel, Keyboard]}
          className="mySwiper"
        >
          {events.map((event) => (
            <SwiperSlide style={{ display: "flex" }} key={event.id}>
              <Box
                sx={{
                  width: "100%",
                  height: "350px",
                  display: "flex",
                  flexDirection: "column",
                  position: "relative",
                  borderRadius: "8px",
                  overflow: "hidden",
                  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                  cursor: "pointer",
                  margin: "16px",
                }}
                onClick={() => toDetails(event)}
              >
                <img
                  width="100%"
                  height={200}
                  src={event.image || defaultImage}
                  alt={event.title}
                  style={{ borderRadius: "8px 8px 0 0" }}
                />
                <div style={overlayStyle}>
                  <Typography fontWeight={700}>{event.title}</Typography>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Typography fontWeight={600} sx={{ mr: 1 }}>
                      {event.date_created}{" "}
                    </Typography>
                    <Chip
                      sx={{
                        background: "rgba(255, 51, 51, 0.10)",
                        color: "#F33",
                      }}
                      label={event.location.detail || defaultLocation}
                    />
                  </Box>
                  <Typography variant="body2">
                    {event.is_free ? "Price: Free" : "Price: $" + event.price}
                  </Typography>
                </div>
              </Box>
            </SwiperSlide>
          ))}
          <Button></Button>
        </Swiper>
      </Box>
    </Box>
  );
};

GreatEventList.propTypes = {};

export default GreatEventList;
