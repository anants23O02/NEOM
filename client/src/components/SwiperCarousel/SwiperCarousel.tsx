import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules/navigation";
import "swiper/css";
import "swiper/css/navigation";
import styles from "../../styles/Swiper.module.css";


interface ImageCarouselModalProps {
  isOpen: boolean;
  onClose: () => void;
  images: string[];
}

export const ImageCarouselModal: React.FC<ImageCarouselModalProps> = ({
  isOpen,
  onClose,
  images,
}) => {
  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContainer} onClick={(e) => e.stopPropagation()}>
        {/* Close Button */}
        <button className={styles.closeButton} onClick={onClose}>
          &times;
        </button>
        {/* Swiper Carousel */}
        <Swiper
          navigation
          loop
          modules={[Navigation]}
          className={styles.swiperContainer}
        >
          {images.map((imgUrl, index) => (
            <SwiperSlide key={index}>
              <img
                src={imgUrl}
                alt={`Slide ${index + 1}`}
                className={styles.carouselImage}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};
