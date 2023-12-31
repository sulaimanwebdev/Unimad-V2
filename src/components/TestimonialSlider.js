import React, { useState, useEffect, useRef } from "react";

const testimonials = [
  {
    image: "",
    name: "Jane Doe 1",
    company: "University of York",
    occupation: "Data Scientist",
    comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Libero enim sed faucibus turpis. Bibendum ut tristique et egestas quis ipsum suspendisse ultrices gravida. Cras sed.",
  },

  {
    image: "",
    name: "Jane Doe 2",
    company: "University of York",
    occupation: "Data Scientist",
    comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Libero enim sed faucibus turpis. Bibendum ut tristique et egestas quis ipsum suspendisse ultrices gravida. Cras sed.",
  },

  {
    image: "",
    name: "Jane Doe 3",
    company: "University of York",
    occupation: "Data Scientist",
    comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Libero enim sed faucibus turpis. Bibendum ut tristique et egestas quis ipsum suspendisse ultrices gravida. Cras sed.",
  },
  // Add more testimonials as needed
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
    let startX = 0;
    let isDragging = false;

    const startAnimation = () => {
      if (!isPaused && !isDragging) {
        animation = requestAnimationFrame(startAnimation);
        position -= 0.9;
        if (position <= -(testimonialElement.scrollWidth / 2)) {
          position = 0;
        }
        testimonialElement.style.transform = `translateX(${position}px)`;
      }
    };

    animation = requestAnimationFrame(startAnimation);

    const handleEnter = () => {
      isPaused = true;
      cancelAnimationFrame(animation);
    };

    const handleLeave = () => {
      isPaused = false;
      animation = requestAnimationFrame(startAnimation);
    };

    const handleStart = (e) => {
      isDragging = true;
      startX = e.clientX || e.touches[0].clientX;
    };

    const handleMove = (e) => {
      if (isDragging) {
        const clientX = e.clientX || e.touches[0].clientX;
        const deltaX = clientX - startX;
        startX = clientX;

        position += deltaX;

        if (position > 0) {
          position = 0;
        } else if (position <= -(testimonialElement.scrollWidth / 2)) {
          position = -(testimonialElement.scrollWidth / 2);
        }

        testimonialElement.style.transform = `translateX(${position}px)`;
      }
    };

    const handleEnd = () => {
      isDragging = false;
    };

    testimonialElement.addEventListener('mouseenter', handleEnter);
    testimonialElement.addEventListener('mouseleave', handleLeave);
    testimonialElement.addEventListener('mousedown', handleStart);
    testimonialElement.addEventListener('touchstart', handleStart);
    testimonialElement.addEventListener('mousemove', handleMove);
    testimonialElement.addEventListener('touchmove', handleMove);
    testimonialElement.addEventListener('mouseup', handleEnd);
    testimonialElement.addEventListener('touchend', handleEnd);

    return () => {
      testimonialElement.removeEventListener('mouseenter', handleEnter);
      testimonialElement.removeEventListener('mouseleave', handleLeave);
      testimonialElement.removeEventListener('mousedown', handleStart);
      testimonialElement.removeEventListener('touchstart', handleStart);
      testimonialElement.removeEventListener('mousemove', handleMove);
      testimonialElement.removeEventListener('touchmove', handleMove);
      testimonialElement.removeEventListener('mouseup', handleEnd);
      testimonialElement.removeEventListener('touchend', handleEnd);
      cancelAnimationFrame(animation);
    };
  }, []);

  return (
    <>
      <div className="relative text-main-dark mt-[150px] sm3:mt-[160px] z-30">
        <div className="text-[35px] sm3:text-[42px] text-center mb-10 px-5">Listen to our lads!</div>
        <div className="testimonial-slider cursor-grab select-none" ref={testimonialRef}>
          <div className="flex gap-[24px]">
            {cards.map((testimonial, index) => (
              <div
                key={index}
                className="cardShadow min-w-[300px] max-w-[300px] sm:min-w-[400px] sm:max-w-[400px] bg-white rounded-2xl px-5 py-6 pb-20"
                style={{ filter: "drop-shadow(0px 0px 8px rgba(0, 0, 0, 0.10))" }}
              >
                <div className="flex items-center gap-3 mb-8">
                  <div className="bg-[#292929] min-w-[75px] min-h-[75px] max-w-[75px] max-h-[75px] rounded-full overflow-hidden">
                    <img
                      src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      alt="person"
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                  <div>
                    <div className="text-[17px] font-semibold">{testimonial.name}</div>
                    <div className="text-[#383838] font-medium mb-[1px]">{testimonial.company}</div>
                    <div className="text-[#B5B5B5] font-medium">{testimonial.occupation}</div>
                  </div>
                </div>
                <div className="font-regular leading-[172%]">{testimonial.comment}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default TestimonialSlider;
