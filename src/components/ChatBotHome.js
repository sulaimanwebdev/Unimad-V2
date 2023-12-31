import React, { useState, useEffect, useRef } from "react";
import ReactMarkdown from "react-markdown";

const ChatBotHome = () => {
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setisLoading] = useState(true);
  const [textareaHeight, setTextareaHeight] = useState(50);
  const [botMessages, setBotMessages] = useState([
    '## Heading 1\n### Heading 2\nThis is a paragraph of text.\n![Placeholder Image](https://via.placeholder.com/150)\n[Link Example](https://www.example.com)\n**Bold Text**\n*Italic Text*\n- List item 1\n- List item 2\n- List item 3\n> Blockquote example\n`inline code`\n```javascript\n// Code block example\nfunction greet() {\n  return \'Hello!\';\n}\ngreet();\n```',
  ]);
  const [userMessages, setUserMessages] = useState(["Hi, What's the weather like today?"]);

  const textareaRef = useRef(null);
  const messagesEndRef = useRef(null);
  const chatbotScrollRef = useRef(null);

  const [isChatVisible, setIsChatVisible] = useState(false);
  const [blurChat, setBlurChat] = useState(false);
  const [showSignInPrompt, setShowSignInPrompt] = useState(false);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const sendMessage = () => {
    if (inputValue.trim() !== '') {
      const newMessage = inputValue.trim();
      setUserMessages([...userMessages, newMessage]);
      setTimeout(() => {
        if (chatbotScrollRef.current) {
          chatbotScrollRef.current.scrollTo({
            top: chatbotScrollRef.current.scrollHeight,
            behavior: 'smooth',
          });
        }
      }, 1);
      setInputValue('');
      handleChatVisibility();
    }
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

  useEffect(() => {
    if (userMessages.length >= 3 && !showSignInPrompt) {
      setBlurChat(true);
    }
  }, [userMessages, showSignInPrompt]);

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

  const handleSignInPrompt = () => {
    setShowSignInPrompt(true);
  };

  return (
    <div className={`relative bg-[#F3F3F3] border-[10px] border-white rounded-[40px] md:rounded-[64px] order-2 md2:order-none md2:col-start-1 w-full p-2 ${isChatVisible && "visible"}`}>
      {!isChatVisible && (
        <div className="flex items-center justify-end gap-24 lg:gap-[120px] flex-col text-center min-h-[450px] lg:min-h-[500px] bg-[#F3F3F3] rounded-[40px] md:rounded-[64px] p-5">
          <div>
           <img src="/images/bot.svg" alt="bot icon" className="mx-auto mb-2" />
           <div className="text-[25px]">“Go ahead, ask me for job hunt queries”</div>
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
        <>
          <div ref={chatbotScrollRef} className={`customScroll relative bg-[#F3F3F3] rounded-[40px] md:rounded-[64px] h-[450px] overflow-x-hidden overflow-y-auto px-3 py-3`}>
            <div className="flex flex-col justify-end min-h-[450px] gap-12">
            
            {botMessages.map((message, index) => (
              <div className="left flex items-start gap-2">
                <img src="/images/bot.svg" alt="bot" className="w-[40px] translate-y-1" />
                <div className="bg-gray-200 text-main-dark text-[17px] w-full px-4 py-3" style={{ borderRadius: '20px 20px 20px 0px' }}>
                  <ReactMarkdown key={`bot-${index}`} className="prose">
                    {message}
                  </ReactMarkdown>
                  <div ref={messagesEndRef}></div>
                </div>
              </div>
            ))}

              <div className="left flex items-start gap-2">
                <img src="/images/bot.svg" alt="bot" className="w-[40px] translate-y-1" />
                <div className="bg-main text-white text-[17px] w-fit px-4 py-3" style={{ borderRadius: '20px 20px 20px 0px' }}>
                   Go ahead, ask me for Job hunt queries 💬
                  <div ref={messagesEndRef}></div>
                </div>
              </div>

            {isLoading && (
              <div className="left flex items-start gap-2">
                <img src="/images/bot.svg" alt="bot" className="w-[40px] translate-y-1" />
                <div className="bg-main text-white text-[17px] w-fit px-4 py-3" style={{ borderRadius: '20px 20px 20px 0px' }}>
                  <div className="flex items-center gap-2 text-sm">
                    <div className="lds-dots relative flex items-center gap-2">
                      <div className="bg-white w-2.5 h-2.5 rounded-full"></div>
                      <div className="bg-white w-2.5 h-2.5 rounded-full"></div>
                      <div className="bg-white w-2.5 h-2.5 rounded-full"></div>
                    </div>
                    <p>AI is thinking</p>
                  </div>
                </div>
              </div>
            )}

            {userMessages.map((message, index) => (
              <div className="right flex justify-end">
                <div className="bg-white text-main-dark text-[17px] px-4 py-3" style={{ borderRadius: '20px 20px 0px 20px' }}>
                  <ReactMarkdown key={`user-${index}`} className="prose">
                    {message}
                  </ReactMarkdown>
                </div>
              </div>
            ))}
            </div>

            {showSignInPrompt && (
              <div className="flex items-center justify-center h-full">
                <button onClick={handleSignInPrompt}>Sign In for More Prompts</button>
              </div>
            )}
          </div>
          </>
      )}
          <div className={`flex items-end gap-2 bg-white overflow-hidden w-full max-w-[690px] min-h-[50px] max-h-[400px] mx-auto pl-5 ${textareaHeight < 70 ? "rounded-full" : "rounded-lg"}`}>
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

            <button className="-translate-y-4 pl-3 pr-5" onClick={sendMessage}>
              <svg width="19" height="17" viewBox="0 0 19 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 16.0868V10.0868L8 8.08679L0 6.08679V0.086792L19 8.08679L0 16.0868Z" fill="#4C8AE1" />
              </svg>
            </button>
          </div>
       
       
       {blurChat && 
       <div className="absolute top-0 left-0 flex items-center justify-center rounded-[40px] lg:rounded-[64px] gap-7 flex-col w-full h-full p-5" style={{backdropFilter: "blur(8px)"}}>
        <div className="text-[35px] sm3:text-[42px] text-center"><span className="text-main font-semibold">Sign in</span> for more prompts</div>
        <button className="button2 bg-main transition hover:bg-main-dark text-white flex items-center gap-3 text-center font-medium rounded-full w-fit mx-auto px-6 py-4">Take me in <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.675 9H0.5V7H12.675L7.075 1.4L8.5 0L16.5 8L8.5 16L7.075 14.6L12.675 9Z" fill="white"/></svg></button>
       </div>
       }
    </div>
  );
};

export default ChatBotHome;
