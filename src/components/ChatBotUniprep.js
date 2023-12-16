import React from 'react'

const ChatBotUniprep = () => {
  return (
    <>
     <div className="relative h-[calc(100%-60px)] flex flex-col pt-[40px]">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 text-[22px] text-center font-semibold z-30">Unibot🤖</div>
         <div className="relative flex-1 z-30">
          <div className="customScroll relative rounded-t-xl max-h-[350px] md2:max-h-[calc(100vh-100px)] overflow-y-auto pr-2">
           <div className="flex flex-col gap-12 justify-end relative bg-white h-full min-h-[350px] md2:min-h-[calc(100vh-100px)] rounded-xl pb-3">
            <div className="left flex"><div className="bg-[#E8EAEE] text-[#595959] px-4 py-3" style={{borderRadius: "20px 20px 20px 0px"}}>Hi Tanya! How can I help you?</div></div>
            <div className="right flex justify-end"><div className="bg-[#EFF7FF] text-main-dark px-4 py-3" style={{borderRadius: "20px 20px 0px 20px"}}>I need to find a job in UK</div></div>

           </div>
          </div>
         </div>
    
        </div>
        <div className="w-full bg-white py-2">
      <div className="customShadow4 flex items-center gap-2 bg-white overflow-hidden rounded-full w-full h-[50px] border border-white focus-within:border-main-dark pl-5">
        <input type="text" placeholder="Ask me anything" className="text-black w-full placeholder:text-[#BFCFE9] border-none outline-none" />
        <button className="pl-3 pr-5"><svg width="19" height="17" viewBox="0 0 19 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 16.0868V10.0868L8 8.08679L0 6.08679V0.086792L19 8.08679L0 16.0868Z" fill="black"/></svg></button>
      </div>
      </div>
    </>
  )
}

export default ChatBotUniprep;