import React, { useEffect, useState } from "react";
import {
  Keyboard,
  Mousewheel,
  Navigation,
  Controller,
  Autoplay,
  EffectCards,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./Projects.module.css";
import "swiper/css";
import "swiper/css/bundle";
import CarouselCard from "./CarouselCard";
import BEML from "../assets/gui1.webp";
import Yelp from "../assets/yelpcamp.webp";
import PW from "../assets/ss.webp";
import ISS from "../assets/iss.webp";
const Projects = () => {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    window.addEventListener("resize", () => {
      setWidth(window.innerWidth);
    });
  }, []);
  if (width > 768) {
    return (
      <div className={styles.container}>
        <div className={styles.title}>Projects</div>
        <div className={styles.swiperContainer}>
          <Swiper
            modules={[Keyboard, Mousewheel, Navigation, Controller, Autoplay]}
            spaceBetween={30}
            slidesPerView={3}
            keyboard={{ enabled: true }}
            loop={true}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            // navigation={true}
            mousewheel={true}
            controller={true}
            className={styles.swiper}
          >
            <SwiperSlide>
              <CarouselCard
                title="AIM"
                //image={BEML}
                description="An ALL IN ONE MEDICALCARE website integrated with Artificial Intelligence (AI) which can 
                revolutionize health-tech for the better."
                github="https://github.com/Shatakshi127?tab=repositories"
              />
            </SwiperSlide>
            <SwiperSlide>
              <CarouselCard
                title="UpdateAI"
                //image={Yelp}
                description="This project, currently in progress, is made for the Microsoft Imagine Cup. It is an AI suite 
                integrated with web development, with an aim to make education interactive and modern. "
                github="https://github.com/Shatakshi127?tab=repositories"
              />
            </SwiperSlide>
            <SwiperSlide>
              <CarouselCard
                title="Project Sakhi"
                //image={PW}
                description="Menstrual sanitation faces barriers of social, economic and cultural factors. To overrule this 
                stigma, Project Sakhi is initiated. It’s basically a website which aims to aid the menstruating population."
                github="https://github.com/Shatakshi127?tab=repositories"
              />
            </SwiperSlide>
            <SwiperSlide>
              <CarouselCard
                title="Veritas Digital Design Logbook"
                //image={ISS}
                description="The entire project has been executed online following the `Engineering 
                Design Process'. I am working for the further development of the digital logbook."
                github="https://github.com/Shatakshi127?tab=repositories"
              />
            </SwiperSlide>
            <SwiperSlide>
              <CarouselCard
                title="ScholarVerse"
                //image={ISS}
                description="A robust online portal, giving insights of courses offered by National and International 
                Institutions, along with Scholarships and Grants based on merit, income etc."
                github="https://github.com/Shatakshi127?tab=repositories"
              />
            </SwiperSlide>
            <SwiperSlide>
              <CarouselCard
                title="Other Projects"
                //image={ISS}
                description="Web Dev: Password Generator, Running Game, Tic-Tac-Toe, Spotify Clone
                Python : YouTube Video Downloader. Number Guessing Game
                MATLAB : Face Detection, Face Recognition, Hand Gesture
                Web Scraping : Amazon Data Web Scraping using Python with Beautiful Soup library"
                github="https://github.com/Shatakshi127?tab=repositories"
              />
            </SwiperSlide>
            ...
          </Swiper>
        </div>
        <p className={styles.infoText}>
          View more on{" "}
          <a
            className="text-success"
            href="https://github.com/Shatakshi127"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
          .
        </p>
        <p className={styles.infoText}>
          To collaborate,{" "}
          <a className="text-info" href="#contact">
            Click Here!!
          </a>
        </p>
      </div>
    );
  } else {
    return (
      <div className={styles.container}>
        <div className={styles.title}>Projects</div>
        <div className={styles.mobileSwiper}>
          <Swiper
            effect={"cards"}
            grabCursor={true}
            modules={[EffectCards]}
            // mousewheel={true}
            // className={styles.swiper}
          >
            <SwiperSlide>
              <CarouselCard
                title="AIM"
                //image={BEML}
                description="An ALL IN ONE MEDICALCARE website integrated with Artificial Intelligence (AI) which can 
                revolutionize health-tech for the better."
                github="https://github.com/Shatakshi127?tab=repositories"
              />
            </SwiperSlide>
            <SwiperSlide>
              <CarouselCard
                title="UpdateAI"
                //image={Yelp}
                description="This project, currently in progress, is made for the Microsoft Imagine Cup. It is an AI suite 
                integrated with web development, with an aim to make education interactive and modern. "
                github="https://github.com/Shatakshi127?tab=repositories"
              />
            </SwiperSlide>
            <SwiperSlide>
              <CarouselCard
                title="Project Sakhi"
                //image={PW}
                description="Menstrual sanitation faces barriers of social, economic and cultural factors. To overrule this 
                stigma, Project Sakhi is initiated. It’s basically a website which aims to aid the menstruating population."
                github="https://github.com/Shatakshi127?tab=repositories"
              />
            </SwiperSlide>
            <SwiperSlide>
              <CarouselCard
                title="Veritas Digital Design Logbook"
                //image={ISS}
                description="The entire project has been executed online following the `Engineering 
                Design Process'. I am working for the further development of the digital logbook."
                github="https://github.com/Shatakshi127?tab=repositories"
              />
            </SwiperSlide>
            <SwiperSlide>
              <CarouselCard
                title="ScholarVerse"
                //image={ISS}
                description="A robust online portal, giving insights of courses offered by National and International 
                Institutions, along with Scholarships and Grants based on merit, income etc."
                github="https://github.com/Shatakshi127?tab=repositories"
              />
            </SwiperSlide>
            <SwiperSlide>
              <CarouselCard
                title="Other Projects"
                //image={ISS}
                description="Web Dev: Password Generator, Running Game, Tic-Tac-Toe, Spotify Clone
                Python : YouTube Video Downloader. Number Guessing Game
                MATLAB : Face Detection, Face Recognition, Hand Gesture
                Web Scraping : Amazon Data Web Scraping using Python with Beautiful Soup library"
                github="https://github.com/Shatakshi127?tab=repositories"
              />
            </SwiperSlide>
            ...
          </Swiper>
        </div>
        <p className={styles.infoText}>
          View more on{" "}
          <a
            className="text-success"
            href="https://github.com/Shatakshi127"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
          .
        </p>
        <p className={styles.infoText}>
          To collaborate,{" "}
          <a className="text-info" href="#contact">
            Click Here!!
          </a>
        </p>
      </div>
    );
  }
};

export default Projects;
