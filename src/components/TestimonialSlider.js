
import React, { useState, useEffect, useRef } from "react";

const testimonials = [
  {
    image: "",
    name: "Jane Doe",
    company: "University of York",
    occupation: "Data Scientist",
    comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Libero enim sed faucibus turpis. Bibendum ut tristique et egestas quis ipsum suspendisse ultrices gravida. Cras sed.",
  },

  {
    image: "",
    name: "Jane Doe",
    company: "University of York",
    occupation: "Data Scientist",
    comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Libero enim sed faucibus turpis. Bibendum ut tristique et egestas quis ipsum suspendisse ultrices gravida. Cras sed.",
  },

  {
    image: "",
    name: "Jane Doe",
    company: "University of York",
    occupation: "Data Scientist",
    comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Libero enim sed faucibus turpis. Bibendum ut tristique et egestas quis ipsum suspendisse ultrices gravida. Cras sed.",
  },

];

const TestimonialSlider = () => {
  const testimonialRef = useRef(null);
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const clonedTestimonials = [...testimonials];
    let totalWidth = 0;

    while (totalWidth < 5000) {
      clonedTestimonials.push(...testimonials);
      totalWidth = clonedTestimonials.length * 400;
    }

    setCards(clonedTestimonials);
  }, []);

  useEffect(() => {
    const testimonialElement = testimonialRef.current;
    let animation = null;
    let position = 0;
    let isPaused = false;

    const startAnimation = () => {
      if (!isPaused) {
        animation = requestAnimationFrame(startAnimation);
        position -= 1;
        if (position <= -(testimonialElement.scrollWidth / 2)) {
          position = 0;
        }
        testimonialElement.style.transform = `translateX(${position}px)`;
      }
    };

    animation = requestAnimationFrame(startAnimation);

    const handleMouseEnter = () => {
      isPaused = true;
      cancelAnimationFrame(animation);
    };

    const handleMouseLeave = () => {
      isPaused = false;
      animation = requestAnimationFrame(startAnimation);
    };

    testimonialElement.addEventListener('mouseenter', handleMouseEnter);
    testimonialElement.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      testimonialElement.removeEventListener('mouseenter', handleMouseEnter);
      testimonialElement.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animation);
    };
  }, []);

  return (
    <>
    <div className="relative text-main-dark mt-[160px] z-30">
     <div className="text-[42px] text-center mb-10 px-5">Listen to our lads!</div>
    <div className="testimonial-slider ">
      <div className="flex gap-2" ref={testimonialRef}>
        {cards.map((testimonial,index) => (
          <div key={index} className="cardShadow min-w-[300px] max-w-[300px] sm:min-w-[400px] sm:max-w-[400px] bg-white border border-main-dark rounded-2xl px-5 py-6 pb-20">
            <div className="flex items-center gap-3 mb-8">
            <div className="bg-[#292929] w-20 h-20 rounded-full"></div>
              <div>
               <div className="text-[17px] font-semibold">{testimonial.name}</div>
               <div className="text-[#383838] font-medium mb-[1px]">{testimonial.company}</div>
               <div className="text-[#B5B5B5] font-medium">{testimonial.occupation}</div>
              </div>
            </div>

            <div className="font-[500] leading-[172%]">{testimonial.comment}</div>
          </div>
        ))}
      </div>
    </div>
    </div>
    </>
  );
};

export default TestimonialSlider;
