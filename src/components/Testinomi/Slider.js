import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import {
  Card,
  Description,
  Profile,
  ProfileImg,
  ProfileWrap,
  ProfileName,
  Arrow,
  ProfileRole,
} from "./TestinomiElements";
import TestiData from "./Data";
import { MdFormatQuote } from "react-icons/md";

const SliderComp = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: (
      <Arrow>
        <FiChevronLeft />
      </Arrow>
    ),
    nextArrow: (
      <Arrow>
        <FiChevronRight />
      </Arrow>
    ),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <Slider {...settings}>
        {TestiData.map(({ name, profile, description, role }, i) => (
          <Card key={i}>
            <MdFormatQuote size="24px" color="#01BF71" />
            <Description>{description}</Description>
            <Profile>
              <ProfileImg src={profile} />
              <ProfileWrap>
                <ProfileName>{name}</ProfileName>
                <ProfileRole>{role}</ProfileRole>
              </ProfileWrap>
            </Profile>
          </Card>
        ))}
      </Slider>
    </>
  );
};

export default SliderComp;
