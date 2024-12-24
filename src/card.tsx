import React, { useState } from "react";
import { CloseOutlined, LeftOutlined, RightOutlined } from "@ant-design/icons";

interface CardProps {
  node: {
    name: string;
    arrive_time: string;
    leave_time: string;
    profile: string;
    images: string[];
  };
  onClose: () => void;
}

const Card1: React.FC<CardProps> = ({ node, onClose }) => {
  const { name, images, arrive_time, leave_time, profile } = node;
  const [currentIndex, setCurrentIndex] = useState(0);

  const showSlide = (index: number) => {
    if (index >= 0 && index < images.length) {
      setCurrentIndex(index);
    }
  };

  const nextSlide = () => {
    showSlide((currentIndex + 1) % images.length);
  };

  const prevSlide = () => {
    showSlide((currentIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="card">
      <CloseOutlined className="close-icon" onClick={onClose} />
      <h3>{name}</h3>
      <div className="slider">
        <LeftOutlined className="arrow left-arrow" onClick={prevSlide} />
        <div className="slide">
          <img src={images[currentIndex]} alt="" />
        </div>
        <RightOutlined className="arrow right-arrow" onClick={nextSlide} />
      </div>
      <div className="indicators">
        {images.map((_, index) => (
          <span
            key={index}
            className={`indicator ${index === currentIndex ? "active" : ""}`}
            onClick={() => showSlide(index)}
          ></span>
        ))}
      </div>
      <p>
        <strong>到达时间：</strong>
        {arrive_time}
      </p>
      <p>
        <strong>离开时间：</strong>
        {leave_time}
      </p>
      <p>{profile}</p>
    </div>
  );
};

export default Card1;
