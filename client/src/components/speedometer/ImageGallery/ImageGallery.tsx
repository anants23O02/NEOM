import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import styles from "../../styles/ImageGallery.module.css";


export const ImageGallery:React.FC = ({ image, isOpen, onClose }) => {
    if (!isOpen) return null;
    const images = [image,image,image,image,image]
    return (
      <div className={styles.modalOverlay} onClick={() =>   onClose(false)}>
        <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
          <button className={styles.closeButton} onClick={() =>   onClose(false)}>×</button>
          <Swiper
            modules={[Navigation, Pagination]}
            navigation
            pagination={{ clickable: true }}
            loop
            className={styles.swiperContainer}
          >
            {images.map((img, index) => (
              <SwiperSlide key={index}>
                <img src={img} alt={`Slide ${index + 1}`} className={styles.image} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    );
  };