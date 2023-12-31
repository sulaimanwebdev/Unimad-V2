import React, { useState, useEffect, useRef } from "react";
import ReactMarkdown from "react-markdown";
import ChatHistory from "./ChatHistory";

const ChatBotUniprep = () => {
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setisLoading] = useState(true);
  const [textareaHeight, setTextareaHeight] = useState(50);
  const [isChatVisible, setIsChatVisible] = useState(false);
  const [botMessages, setBotMessages] = useState([
    'Hi Tanya! How can I help you?',
    '## Heading 1\n### Heading 2\nThis is a paragraph of text.\n![Placeholder Image](https://via.placeholder.com/150)\n[Link Example](https://www.example.com)\n**Bold Text**\n*Italic Text*\n- List item 1\n- List item 2\n- List item 3\n> Blockquote example\n`inline code`\n```javascript\n// Code block example\nfunction greet() {\n  return \'Hello!\';\n}\ngreet();\n```',
  ]);
  const [userMessages, setUserMessages] = useState(["I need to find a job in UK"]);

  const textareaRef = useRef(null);
  const messagesEndRef = useRef(null);
  const chatbotScrollRef = useRef(null);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const sendMessage = () => {
    if (inputValue.trim() !== '') {
      const newMessage = inputValue.trim();
      setUserMessages([...userMessages, newMessage]);
      handleChatVisibility();
      setInputValue('');
    }

    setTimeout(() => {
      if (chatbotScrollRef.current) {
        chatbotScrollRef.current.scrollTo({
          top: chatbotScrollRef.current.scrollHeight,
          behavior: 'smooth',
        });
      }
    }, 1);
  };

  useEffect(() => {
    if (textareaRef.current) {
      const currentHeight = textareaRef.current.scrollHeight;
      setTextareaHeight(currentHeight > 200 ? 200 : currentHeight);
    }
    if (inputValue === '') {
      setTextareaHeight(50);
    }
  }, [inputValue]);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
    if (chatbotScrollRef.current) {
      chatbotScrollRef.current.scrollTo({
        top: chatbotScrollRef.current.scrollHeight,
        behavior: 'smooth',
      });
    }
  }, [botMessages, userMessages]);

  const handleChatVisibility = () => {
    setIsChatVisible(true);
    setTimeout(() => {
      if (chatbotScrollRef.current) {
        chatbotScrollRef.current.scrollTo({
          top: chatbotScrollRef.current.scrollHeight,
          behavior: 'smooth',
        });
      }
    }, 0);
    
  };

  return (
    <>
      <div className={`relative flex flex-col pt-[40px] ${textareaHeight > 50 ? "" : "md2:h-[calc(100%-60px)]"}`}>
      
       
        <div className="absolute top-0 left-1/2 -translate-x-1/2 text-[22px] text-center font-semibold z-30">Unibot🤖</div>
        <div className="relative flex-1 z-30">
          <div ref={chatbotScrollRef} className={`customScroll relative rounded-t-xl md2:max-h-[calc(100vh-100px)] overflow-x-hidden overflow-y-auto pr-2 ${isChatVisible ? "max-h-[350px]" : ""}`}>
            
            
          {!isChatVisible && (
        <div className="flex items-center gap-10 flex-col text-center h-full min-h-[calc(80vh+20px)] bg-white rounded-xl p-5">
          <div className="flex-1 flex items-center justify-center flex-col gap-3">
           <img src="/images/bot.svg" alt="bot icon" className="mx-auto mb-2" />
           <div className="bg-[#EFF7FF] rounded-lg px-5 py-3">Ask me anything! </div>
          </div>

          <div className="flex items-center justify-center gap-3 flex-wrap max-w-[900px] mx-auto">
           <button onClick={handleChatVisibility} className="mainButton flex px-4 py-3 font-[600] bg-white border border-main-dark text-[15px] rounded-lg transition hover:bg-main hover:text-white hover:border-main w-fit">How do I make a resume?</button>
           <button onClick={handleChatVisibility} className="mainButton flex px-4 py-3 font-[600] bg-white border border-main-dark text-[15px] rounded-lg transition hover:bg-main hover:text-white hover:border-main w-fit">Best Job hunt websites?</button>
           <button onClick={handleChatVisibility} className="mainButton flex px-4 py-3 font-[600] bg-white border border-main-dark text-[15px] rounded-lg transition hover:bg-main hover:text-white hover:border-main w-fit">Best Job hunt websites?</button>
           <button onClick={handleChatVisibility} className="mainButton flex px-4 py-3 font-[600] bg-white border border-main-dark text-[15px] rounded-lg transition hover:bg-main hover:text-white hover:border-main w-fit">Top University for Data science</button>
           <button onClick={handleChatVisibility} className="mainButton flex px-4 py-3 font-[600] bg-white border border-main-dark text-[15px] rounded-lg transition hover:bg-main hover:text-white hover:border-main w-fit">How can I improve my Linked IN profile?</button>
          </div>
        </div>
      )}


            {isChatVisible && (
            <div className="flex flex-col gap-12 justify-end relative bg-white h-full min-h-[350px] md2:min-h-[calc(100vh-100px)] rounded-xl pb-3">
              {botMessages.map((message, index) => (
                <div className="left flex items-start gap-2" key={`bot-${index}`}>
                 <img src="/images/bot.svg" alt="bot" className="w-[40px] translate-y-1" />
                  <div className="bg-[#EFF7FF] text-[#1B3252] text-[17px] px-4 py-3" style={{ borderRadius: "20px 20px 20px 0px" }}>
                    <ReactMarkdown className="prose">{message}</ReactMarkdown>
                    <div ref={messagesEndRef}></div>
                  </div>
                </div>
              ))}


              {/* loading animation starts */}
              {isLoading && (
               <div className="left flex items-start gap-2">
                <img src="/images/bot.svg" alt="bot" className="w-[40px] translate-y-1" />
                <div className="bg-[#EFF7FF] text-[#595959] text-[17px] w-fit px-4 py-3" style={{ borderRadius: '20px 20px 20px 0px' }}>
                  <div className="flex items-center gap-2 text-sm">
                  <div className="lds-dots relative flex items-center gap-2">
                    <div className="bg-main w-2.5 h-2.5 rounded-full"></div>
                    <div className="bg-main w-2.5 h-2.5 rounded-full"></div>
                    <div className="bg-main w-2.5 h-2.5 rounded-full"></div> {/* Third dot */}
                  </div>
                  <p>AI is thinking</p>
                </div>
                </div>
              </div>
              )}
             {/* loading animation ends */}


              {userMessages.map((message, index) => (
                <div className="right flex items-start justify-end gap-2" key={`user-${index}`}>
                  <div className="bg-[#F0F0F0] text-main-dark text-[17px] px-4 py-3" style={{ borderRadius: "20px 20px 0px 20px" }}>
                    <ReactMarkdown className="prose">{message}</ReactMarkdown>
                  </div>
                  <img src="/images/person.png" alt="person" className="w-[40px] translate-y-1" />
                </div>
              ))}
            </div>
)}
          </div>
        </div>
      </div>

      <div className="flex items-end gap-2">

        <ChatHistory/>
        <button className="flex items-center justify-center gap-2 bg-white border border-[#0000001A] overflow-hidden rounded-xl h-[50px] -translate-y-2 px-3 sm:px-4"><svg className="min-w-[15px] min-h-[15px] sm:min-w-[18px] sm:min-h-[18px]" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.25 9.75H0V8.25H8.25V0H9.75V8.25H18V9.75H9.75V18H8.25V9.75Z" fill="#8C8C8C"/></svg></button>

        <div className="w-full bg-white py-2">
        <div className={`flex items-end gap-2 bg-white border border-[#0000001A] overflow-hidden min-h-[50px] max-h-[400px] pl-5 rounded-xl`}>
          <textarea
            placeholder="Ask me anything"
            value={inputValue}
            onChange={handleInputChange}
            ref={textareaRef}
            className="customScroll border-none outline-none resize-none truncate w-full h-full py-3 pr-2"
            style={{
              height: `${textareaHeight}px`,
              overflow: textareaHeight < 200 ? 'hidden' : 'scroll',
            }}
          ></textarea>
          <button className="-translate-y-4 pl-3 pr-5" onClick={sendMessage}>
            <svg width="19" height="17" viewBox="0 0 19 17" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 16.0868V10.0868L8 8.08679L0 6.08679V0.086792L19 8.08679L0 16.0868Z" fill="#4C8AE1" />
            </svg>
          </button>
        </div>
      </div>
  
      </div>
    </>
  );
};

export default ChatBotUniprep;
