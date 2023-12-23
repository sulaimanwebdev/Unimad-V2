import React, { useRef, useEffect } from 'react';

const StepsAnimation = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5, // Adjust the threshold as needed
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Video section is in view
          const video = videoRef.current;
          video.play(); // Play the video

          // Pause the video at 4 seconds
          video.addEventListener('timeupdate', () => {
            if (video.currentTime >= 4) {
              video.pause();
            }
          });

          observer.unobserve(entry.target); // Stop observing once played
        }
      });
    }, options);

    observer.observe(videoRef.current);

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

  return (
    <div className="video-container">
      <video
        ref={videoRef}
        src="/images/plan.mp4"
        className="-ml-[20px] -mt-5 relative  flex z-30"
        muted
        loop={false}
        playsInline
        autoPlay={false}
        controls={false}
      />
    </div>
  );
};

export default StepsAnimation;
