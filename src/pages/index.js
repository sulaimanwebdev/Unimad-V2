"use client"
import React, { useState, useEffect, useRef } from 'react';
import Header from "../components/Header";
import TestimonialSlider from "../components/TestimonialSlider";
import Footer from "../components/Footer";
import Fade from "react-reveal/Fade";
import { TypeAnimation } from "react-type-animation";

const Home = () => {

  const text = "MAD LIVES. MAD VIBES. MAD LIVES. MAD VIBES. MAD LIVES. MAD VIBES. MAD LIVES. MAD VIBES. MAD LIVES. MAD VIBES. MAD LIVES. MAD VIBES. MAD LIVES. MAD VIBES. MAD LIVES. MAD VIBES. MAD LIVES. MAD VIBES. MAD LIVES. MAD VIBES. MAD LIVES. MAD VIBES. MAD LIVES. MAD VIBES. ";
  
  const handleClickScroll = () => {
    const element = document.getElementById('section2');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };


  // chatbot textarea
  const [inputValue, setInputValue] = useState('');
  const [textareaHeight, setTextareaHeight] = useState(50); // Initial height

  const textareaRef = useRef(null);

  useEffect(() => {
    if (textareaRef.current) {
      const currentHeight = textareaRef.current.scrollHeight;
      setTextareaHeight(currentHeight > 200 ? 200 : currentHeight);
    }
  }, [inputValue]);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div className="overflow-hidden">
     <div className="relative max-w-[1200px] mx-auto min-h-[calc(100vh-150px)] md2:min-h-[calc(100vh-200px)]">
     <Header/>
     <img src="/images/circle1.svg" alt="circle bg" className="absolute -top-[200px] sm2:-top-[300px] -right-[200px] sm2:-right-[350px] sm:-right-[500px]" />

     <Fade bottom>
      <div className="mainCont relative text-main-dark mt-[140px] md:mt-[160px] lg2:mt-[200px] z-30">
       <div className="text-[35px] sm3:text-[40px] sm:text-[55px] md:text-[65px] leading-[117%] lg2:translate-x-[175px] lg2:scale-[1.3]">Want to land multiple<br className="hidden sm:flex"/> interviews in less than<br className="hidden sm:flex"/> <span className="text-main font-semibold inline-flex whitespace-nowrap">8 weeks</span></div>
       <button className="mainButton flex items-center gap-3 border border-main-dark rounded-full transition hover:bg-main hover:text-white hover:border-main font-medium text-[19px] w-fit px-5 py-3 mt-10 lg2:mt-16 lg2:translate-x-[15px] lg2:scale-[1.1]">Yes, I'm in! <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.175 9H0V7H12.175L6.575 1.4L8 0L16 8L8 16L6.575 14.6L12.175 9Z" fill="currentColor"/></svg></button>
      </div>
      </Fade>
      <div className="flex items-center justify-center mt-24 absolute bottom-0 left-1/2 -translate-x-1/2 z-30"><button onClick={handleClickScroll}><img src="/images/search-group.svg" alt="search icon" className="animate-bounce" /></button></div>
     </div>

     <div id="section2" className="flex items-center justify-center md2:min-h-screen pt-[100px] sm:mt-[20px] md2:pt-0 md2:mt-0">
     <div  className="mainCont relative text-main-dark grid grid-cols-1 md2:grid-cols-2 xl:grid-cols-[1.2fr,1fr] gap-12 md2:gap-10 z-30">
     <Fade bottom>

     <div className="bg-[#FBFBFB] rounded-t-xl order-2 md2:order-none md2:col-start-1">
      <div className="customScroll relative bg-[#FBFBFB] h-full max-h-[350px] rounded-xl p-5 overflow-y-auto">
      <div className="flex flex-col justify-end min-h-[300px] gap-12">
        <div className="left flex"><div className="bg-[#E8EAEE] text-[#595959] px-4 py-3" style={{borderRadius: "20px 20px 20px 0px"}}>Hi Tanya! How can I help you?</div></div>
        <div className="right flex justify-end"><div className="bg-[#EFF7FF] text-main-dark px-4 py-3" style={{borderRadius: "20px 20px 0px 20px"}}>I need to find a job in UK</div></div>
        </div>
      </div>
      <div className="flex items-end gap-2 bg-white border border-main-dark overflow-hidden rounded-lg min-h-[50px] max-h-[400px] pl-5">
      <textarea
          placeholder="Ask me anything"
          value={inputValue}
          onChange={handleInputChange}
          ref={textareaRef}
          className="customScroll border-none outline-none resize-none w-full h-full py-3 pr-2"
          style={{
            height: `${textareaHeight}px`,
            overflow: textareaHeight < 200 ? 'hidden' : 'scroll',
          }}
        ></textarea>
        <button className="-translate-y-4 pl-3 pr-5">
          <svg width="19" height="17" viewBox="0 0 19 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 16.0868V10.0868L8 8.08679L0 6.08679V0.086792L19 8.08679L0 16.0868Z" fill="black"/>
          </svg>
        </button>
      </div>
    </div>


      </Fade>

      <Fade bottom>
      <div className="order-1 md2:order-none md2:col-start-2">
        <div className="text-[30px] sm3:text-[40px] leading-[117%] mb-6">Go ahead, ask your<br className="hidden sm3:flex"/> <span className="text-main font-semibold">Personal Chatbot for</span><br className="hidden sm3:flex"/> Job hunt queries</div>
        <div className="typingAnimation text-black font-medium italic">
        “
        <TypeAnimation
        cursor={true}
      sequence={[
        "Unibot's my name, acing your job hunt is my game.",
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        "Unibot's asdasd asd 123 asd",
        1000,
        "asduhybhasd asdjb asjd asjd asd",
        1000,
        "jasdndjkn23iun",
        1000
      ]}
      wrapper="span"
      speed={50}
      repeat={Infinity}
    />
    ”
        </div>
        <div className="flex items-center gap-x-5 gap-y-3 flex-wrap mt-8">
        <button className="mainButton flex px-4 py-3 font-[600] border border-main-dark rounded-lg transition hover:bg-main hover:text-white hover:border-main w-fit">How do I make a resume?</button>
        <button className="mainButton flex px-4 py-3 font-[600] border border-main-dark rounded-lg transition hover:bg-main hover:text-white hover:border-main w-fit">Best Job hunt websites?</button>
        <button className="mainButton flex px-4 py-3 font-[600] border border-main-dark rounded-lg transition hover:bg-main hover:text-white hover:border-main w-fit">Top University for Data science</button>
        </div>
      </div>
      </Fade>
     </div>
     </div>


     <div className="mainCont relative text-main-dark">
      <div className="relative text-center z-30 mt-[150px] md2:mt-[200px]">
      <Fade bottom>
       <div className="text-[42px] leading-[117%] mb-6"><span className="text-main font-semibold">8 Steps</span> to land your Dream Job</div>
       <div className="font-[500]">We're here to help students like you with the knowledge, strategies, and resources to<br className="hidden md2:flex"/> crack multiple interviews which eventually lead you to secure a job.</div>
      </Fade>
      <Fade bottom>
       <img src="/images/steps.svg" alt="steps" className="mx-auto mt-10" />
      </Fade>
      <Fade bottom>
       <button className="button2 bg-main transition hover:bg-main-dark text-white flex items-center gap-3 text-center font-medium rounded-full w-fit px-6 py-4 mt-10 mx-auto">Start your Journey <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.675 9H0.5V7H12.675L7.075 1.4L8.5 0L16.5 8L8.5 16L7.075 14.6L12.675 9Z" fill="white"/></svg></button>
       </Fade>
      </div>
      <Fade bottom>
      
      <div className="relative text-center z-30 mt-[150px]">
       <div className="text-[38px] sm2:text-[42px] italic mb-4">Don’t chase jobs, attract them!</div>
       <div className="font-[500]"><button onClick={handleClickScroll} className="text-main font-semibold">Talk to Unibot</button> to clear all your job-search queries and follow our 8-week framework to<br className="hidden md2:flex"/> upskill your profile that impress recruiters. </div>
      </div>
      </Fade>

      <img src="/images/circle2.svg" alt="circle bg" className="absolute -bottom-[500px] -left-[500px] md2:-left-[800px] xl:-left-[1000px]" />
     </div>


     <div className="banner relative w-full overflow-hidden text-white text-[40px] md:text-[50px] py-2 mt-[120px] md2:mt-[150px] z-30">
      <div className="text-wrapper inline-flex whitespace-nowrap leading-[0]">
        <span>{text}</span>
        <span>{text}</span>
      </div>
    </div>


    <div className="mainCont relative">
     <div className="relative text-main-dark mt-[150px] md2:mt-[200px] z-30">
     <Fade bottom>

      <div className="text-[38px] sm3:text-[42px] text-center mb-5"><span className="text-main font-semibold">AI</span> tailored Plan, Just for you!</div>
      </Fade>
      <Fade bottom>
      <img src="/images/plan.svg" alt="plan" className="mx-auto" />
      </Fade>
      <Fade bottom>
      <button className="button2 bg-main transition hover:bg-main-dark text-white flex items-center gap-3 text-center font-medium rounded-full w-fit px-6 py-4 mt-10 mx-auto">Get my Plan <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.675 9H0.5V7H12.675L7.075 1.4L8.5 0L16.5 8L8.5 16L7.075 14.6L12.675 9Z" fill="white"/></svg></button>
      </Fade>
     </div>

     <img src="/images/circle3.svg" alt="circle bg" className="absolute -bottom-[300px] -left-[500px]" />
     <img src="/images/circle4.svg" alt="circle bg" className="w-[1000px] absolute -bottom-[700px] -right-[500px]" />
    </div>


     <div className="relative overflow-hidden z-30">
     <Fade bottom>
     <TestimonialSlider/>
     </Fade>
     </div>

     <Fade bottom>
     <div className="mainCont">
      <div className="mainCont customBG relative text-white text-center rounded-3xl my-[150px] py-12 z-30">
       <div className="text-[34px] sm2:text-[45px] font-semibold mb-3">Step Into the Unimad Circle</div>
       <div className="max-w-[700px] mx-auto">Reinvent your job search. The goal is to form a community of MSc students who thrive to uplift each other. Questions, thoughts, breakthroughs, or want to celebrate a win? We're all ears. Your voice is what shapes our community.</div>
       <a href="mailto:grow@unimad.xyz" className="bg-white text-main-dark flex text-center font-medium rounded-full w-fit transition hover:-translate-y-0.5 px-6 py-3 mt-10 mx-auto">Contact Us</a>
      </div>
     </div>
     </Fade>

    <Footer/>
    </div>
  )
}

export default Home