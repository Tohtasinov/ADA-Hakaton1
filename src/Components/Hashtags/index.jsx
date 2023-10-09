import { Box, Button, Chip, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import party from "../../assets/party.gif";
// import PropTypes from 'prop-types'
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./styless.css";

// import required modules
import { Keyboard, Mousewheel, Navigation, Pagination } from "swiper/modules";

const Hashtags = (props) => {
  const hash = [
    "students",
    "clubs",
    "kechkiBiw",
    "kinomaniya",
    "IKayratovna",
    "bars",
    "football",
    "scriptonit",
    "students",
    "clubs",
    "kechkiBiw",
    "kino",
    "IKayratovna",
    "bars",
    "football",
    "scriptonit",
  ];
  return (
    <Box sx={{ px: "60px", width: "100%", transform: "translatey(90px)" }}>
      <Swiper
        navigation={true}
        // grabCursor={true}
        // loop={true}
        // centeredSlides={true}
        slidesPerView={5}
        cssMode={true}
        spaceBetween={30}
        // pagination={true}
        mousewheel={true}
        keyboard={true}
        // pagination={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiperr"
      >
        {hash.map((item) => (
          <Box
            sx={{
              display: "flex",
              gap: "8px",
              width: "200px",
              overflow: "hidden",
            }}
          >
            <SwiperSlide key={item.id}>
              <Typography
                variant="h4"
                sx={{
                  px: "16px",
                  py: "4px",
                  fontFamily: "Sansita One",
                  transition: "150ms",
                  cursor: "pointer",
                  "&:hover": {
                    transform: "scale(1.1)",
                    mx: "16px",
                    color: "#E27777",
                  },
                }}
              >
                #{item}
              </Typography>
            </SwiperSlide>
          </Box>
        ))}
      </Swiper>
    </Box>
  );
};

Hashtags.propTypes = {};

export default Hashtags;
