import React, { useState, useEffect, useRef } from 'react';
import ReactMarkdown from 'react-markdown';

const ChatBotUniprep = () => {
  const [inputValue, setInputValue] = useState('');
  const [textareaHeight, setTextareaHeight] = useState(50);
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
      setInputValue('');
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
      chatbotScrollRef.current.scrollTop = chatbotScrollRef.current.scrollHeight;
    }
  }, [botMessages, userMessages]);

  return (
    <>
      <div className={`relative flex flex-col pt-[40px] ${textareaHeight > 50 ? "" : "md2:h-[calc(100%-60px)]"}`}>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 text-[22px] text-center font-semibold z-30">Unibot🤖</div>
        <div className="relative flex-1 z-30">
          <div className="customScroll relative rounded-t-xl max-h-[350px] md2:max-h-[calc(100vh-100px)] overflow-y-auto pr-2">
            <div className="flex flex-col gap-12 justify-end relative bg-white h-full min-h-[350px] md2:min-h-[calc(100vh-100px)] rounded-xl pb-3">
              {botMessages.map((message, index) => (
                <div className="left flex" key={`bot-${index}`}>
                  <div className="bg-[#E8EAEE] text-[#595959] px-4 py-3" style={{ borderRadius: "20px 20px 20px 0px" }}>
                    <ReactMarkdown className="prose">{message}</ReactMarkdown>
                    <div ref={messagesEndRef}></div>
                  </div>
                </div>
              ))}
              {userMessages.map((message, index) => (
                <div className="right flex justify-end" key={`user-${index}`}>
                  <div className="bg-[#EFF7FF] text-main-dark px-4 py-3" style={{ borderRadius: "20px 20px 0px 20px" }}>
                    <ReactMarkdown className="prose">{message}</ReactMarkdown>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-white py-2">
        <div className="customShadow4  flex items-end gap-2 bg-white overflow-hidden rounded-lg min-h-[50px] max-h-[400px] pl-5">
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
              <path d="M0 16.0868V10.0868L8 8.08679L0 6.08679V0.086792L19 8.08679L0 16.0868Z" fill="black" />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
};

export default ChatBotUniprep;
