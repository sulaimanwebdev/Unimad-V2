import { useState } from "react"
import Link from "next/link";
import Task from "../components/Task";

const Uniprep = () => {

    const [menu, setMenu] = useState(false);
    const [tab, setTab] = useState("My Plan Progress");
    const [week, setWeek] = useState("Week 4");

  return (
    <div className="bg-[#F5F5F5] text-main-dark overflow-hidden">
     <div className="w-full p-5">
      <div className="relative flex items-center justify-between z-30">
        <Link href="/" className="flex items-center gap-2"><svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.66667 13.3333L0 6.66667L6.66667 0L7.6 0.95L1.88333 6.66667L7.6 12.3833L6.66667 13.3333Z" fill="#1B3252"/></svg> Back</Link>
        <Link href="/" className="flex"><img src="/images/logo.svg" alt="logo" className="w-[120px]" /></Link>
        <div className="relative">
         <button onClick={()=> {setMenu(!menu)}} className={`${menu === false ? "visible opacity-100" : "invisible opacity-0"}`}><svg width="24" height="16" viewBox="0 0 24 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 16V14H24V16H0ZM0 9V7H24V9H0ZM0 2V0H24V2H0Z" fill="#1B3252"/></svg></button>
         <div className={`customShadow3 bg-white rounded-lg absolute top-0 right-0 w-[170px] overflow-hidden z-30 ${menu === true ? "block" : "hidden"}`}>
            <div className="flex items-center justify-end p-3"><button onClick={()=> {setMenu(false)}} className="rounded-full transition hover:bg-[#1B3252] hover:bg-opacity-10"><svg width="25" height="25" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="8.22266" y="5.99999" width="24" height="2" transform="rotate(45 8.22266 5.99999)" fill="#1B3252"/><rect x="25.1953" y="7.41421" width="24" height="2" transform="rotate(135 25.1953 7.41421)" fill="#1B3252"/></svg></button></div>
            <div className="flex gap-1 flex-col mb-2 px-2">
             <Link href="/about" className="bg-white transition hover:bg-[#1B3252] hover:bg-opacity-10 text-[15px] flex w-full font-semibold rounded-full px-2.5 py-2">About</Link>
             <Link href="/mad-stories" className="bg-white transition hover:bg-[#1B3252] hover:bg-opacity-10 text-[15px] flex w-full font-semibold rounded-full px-2.5 py-2">MAD Stories</Link>
             <button className="bg-white transition hover:bg-[#1B3252] hover:bg-opacity-10 text-[15px] flex w-full font-semibold rounded-full px-2.5 py-2">Logout</button>
            </div>
         </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md2:grid-cols-[300px,1fr] gap-5 min-h-[calc(100vh-132px)] mt-20 md2:mt-16">
      <div className="flex gap-5 flex-col">
        <div className="customShadow2 bg-white text-center rounded-2xl px-3 py-5">
          <img src="/images/person.png" alt="person" className="border-[5px] border-main-dark w-[100px] h-[100px] object-cover object-center rounded-full overflow-hidden mx-auto -mt-[65px]" />
          <div className="text-[20px] font-semibold mt-5">Tanya Fernandez</div>
          <div className="text-[#8C8C8C] text-[15px] mt-1">M.S Bio Technology</div>
          <div className="bg-[#F4F4F4] text-[14px] text-white font-semibold leading-none rounded-full mt-4 px-1.5 py-1">
            <div style={{ width: '35%' }} className="customBG rounded-full p-1">35%</div>
          </div>
          <div className="flex items-center justify-center gap-y-0.5 flex-col mb-3 mt-7">
            <div className="bg-[#F8F8F8] text-[#8C8C8C] border border-[#8C8C8C] text-[14px] rounded-full px-3 py-1">Data Science</div>
            <div className="bg-[#F8F8F8] text-[#8C8C8C] border border-[#8C8C8C] text-[14px] rounded-full px-3 py-1">Business Development</div>
            <div className="bg-[#F8F8F8] text-[#8C8C8C] border border-[#8C8C8C] text-[14px] rounded-full px-3 py-1">Healthcare</div>
          </div>
        </div>

        <div className="customShadow2 bg-white rounded-2xl px-4 py-5 flex flex-col flex-1">
          <div className="flex gap-3 flex-col w-full">
            <button onClick={() => { setTab("My Plan Progress") }} className={`transition hover:bg-[#1B3252] hover:bg-opacity-20 flex items-center justify-between w-full font-semibold rounded-lg px-3.5 py-2.5 ${tab === "My Plan Progress" ? "bg-[#1B3252] bg-opacity-20" : "bg-white"}`}>My Plan Progress</button>
            <button onClick={() => { setTab("Unibot") }} className={`transition hover:bg-[#1B3252] hover:bg-opacity-20 flex items-center justify-between w-full font-semibold rounded-lg px-3.5 py-2.5 ${tab === "Unibot" ? "bg-[#1B3252] bg-opacity-20" : "bg-white"}`}>Unibot</button>
            <button onClick={() => { setTab("Courses") }} className={`transition hover:bg-[#1B3252] hover:bg-opacity-20 flex items-center justify-between w-full font-semibold rounded-lg px-3.5 py-2.5 ${tab === "Courses" ? "bg-[#1B3252] bg-opacity-20" : "bg-white"}`}>Courses</button>
            <button onClick={() => { setTab("Talk to us") }} className={`transition hover:bg-[#1B3252] hover:bg-opacity-20 flex items-center justify-between w-full font-semibold rounded-lg px-3.5 py-2.5 ${tab === "Talk to us" ? "bg-[#1B3252] bg-opacity-20" : "bg-white"}`}>Talk to us</button>
            <button className="bg-white text-[#8C8C8C] transition hover:bg-[#f0f0f0] flex items-center justify-between w-full font-semibold rounded-lg px-3.5 py-2.5">Resume Builder <svg width="16" height="20" viewBox="0 0 12 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.125 15.75C0.815625 15.75 0.550781 15.6398 0.330469 15.4195C0.110156 15.1992 0 14.9344 0 14.625V6.4875C0 6.17813 0.110156 5.91328 0.330469 5.69297C0.550781 5.47266 0.815625 5.3625 1.125 5.3625H2.4375V3.5625C2.4375 2.57688 2.78504 1.73672 3.48011 1.04203C4.17519 0.347344 5.01581 0 6.00199 0C6.98816 0 7.82813 0.347344 8.52188 1.04203C9.21563 1.73672 9.5625 2.57688 9.5625 3.5625V5.3625H10.875C11.1844 5.3625 11.4492 5.47266 11.6695 5.69297C11.8898 5.91328 12 6.17813 12 6.4875V14.625C12 14.9344 11.8898 15.1992 11.6695 15.4195C11.4492 15.6398 11.1844 15.75 10.875 15.75H1.125ZM6.00315 12C6.40105 12 6.74063 11.8623 7.02188 11.5869C7.30313 11.3115 7.44375 10.9805 7.44375 10.5938C7.44375 10.2188 7.30207 9.87813 7.01872 9.57188C6.73537 9.26562 6.39475 9.1125 5.99685 9.1125C5.59895 9.1125 5.25938 9.26562 4.97813 9.57188C4.69688 9.87813 4.55625 10.2219 4.55625 10.6031C4.55625 10.9844 4.69793 11.3125 4.98128 11.5875C5.26463 11.8625 5.60525 12 6.00315 12ZM3.5625 5.3625H8.4375V3.5625C8.4375 2.88541 8.20074 2.30989 7.72721 1.83594C7.25367 1.36198 6.67868 1.125 6.00221 1.125C5.32574 1.125 4.75 1.36198 4.275 1.83594C3.8 2.30989 3.5625 2.88541 3.5625 3.5625V5.3625Z" fill="#808080"/></svg></button>
          </div>
        </div>
      </div>

      <div className="customShadow2 bg-white rounded-2xl px-5 py-3">
      {
        tab === "My Plan Progress" ?
        <>
         <div className="customScroll overflow-x-auto py-2">
        <div className="flex flex-nowrap items-center gap-5 whitespace-nowrap min-w-full max-w-[1px]">
         <button onClick={()=> {setWeek("Week 1")}} className={`relative text-[15px] transition hover:bg-main-dark hover:text-white border-2 border-main-dark font-semibold rounded-full px-5 py-1.5 ${week === "Week 1" ? "bg-main-dark text-white" : "bg-white text-main-dark"}`}>Week 1 <svg width="18" height="18" className="absolute -top-1 -right-1" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="8.5" cy="8.5" r="8.5" fill="#299935"/><rect x="3" y="9.36914" width="2.02865" height="5.07164" transform="rotate(-46.6027 3 9.36914)" fill="white"/><rect x="12.1797" y="4.0896" width="2.02865" height="10.1433" transform="rotate(43.3973 12.1797 4.0896)" fill="white"/></svg></button>
         <button onClick={()=> {setWeek("Week 2")}} className={`relative text-[15px] transition hover:bg-main-dark hover:text-white border-2 border-main-dark font-semibold rounded-full px-5 py-1.5 ${week === "Week 2" ? "bg-main-dark text-white" : "bg-white text-main-dark"}`}>Week 2 <svg width="18" height="18" className="absolute -top-1 -right-1" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="8.5" cy="8.5" r="8.5" fill="#299935"/><rect x="3" y="9.36914" width="2.02865" height="5.07164" transform="rotate(-46.6027 3 9.36914)" fill="white"/><rect x="12.1797" y="4.0896" width="2.02865" height="10.1433" transform="rotate(43.3973 12.1797 4.0896)" fill="white"/></svg></button>
         <button onClick={()=> {setWeek("Week 3")}} className={`relative text-[15px] transition hover:bg-main-dark hover:text-white border-2 border-main-dark font-semibold rounded-full px-5 py-1.5 ${week === "Week 3" ? "bg-main-dark text-white" : "bg-white text-main-dark"}`}>Week 3 <svg width="18" height="18" className="absolute -top-1 -right-1" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="8.5" cy="8.5" r="8.5" fill="#299935"/><rect x="3" y="9.36914" width="2.02865" height="5.07164" transform="rotate(-46.6027 3 9.36914)" fill="white"/><rect x="12.1797" y="4.0896" width="2.02865" height="10.1433" transform="rotate(43.3973 12.1797 4.0896)" fill="white"/></svg></button>
         <button onClick={()=> {setWeek("Week 4")}} className={`relative text-[15px] transition hover:bg-main-dark hover:text-white border-2 border-main-dark font-semibold rounded-full px-5 py-1.5 ${week === "Week 4" ? "bg-main-dark text-white" : "bg-white text-main-dark"}`}>Week 4</button>
         <button className="relative text-[15px] bg-[#E6E6E6] text-[#B0B0B0] border-2 border-[#E6E6E6] font-semibold rounded-full px-5 py-1.5">Week 5</button>
         <button className="relative text-[15px] bg-[#E6E6E6] text-[#B0B0B0] border-2 border-[#E6E6E6] font-semibold rounded-full px-5 py-1.5">Week 6</button>
         <button className="relative text-[15px] bg-[#E6E6E6] text-[#B0B0B0] border-2 border-[#E6E6E6] font-semibold rounded-full px-5 py-1.5">Week 7</button>
         <button className="relative text-[15px] bg-[#E6E6E6] text-[#B0B0B0] border-2 border-[#E6E6E6] font-semibold rounded-full px-5 py-1.5">Week 8</button>
        </div>
       </div>

       <div className="flex gap-5 flex-col mt-10">
        {
         week === "Week 1" ?
         <>
          <Task state="Completed" locked={false} />
          <Task state="In Progress" locked={false}/>
          <Task state="In Progress" locked={true}/>
          <Task state="In Progress" locked={true}/>
         </>
         :
         week === "Week 2" ?
         <>
          <Task state="Completed" locked={false} />
          <Task state="In Progress" locked={false}/>
         </>
         :
         week === "Week 3" ?
         <>
          <Task state="Completed" locked={false} />
         </>
         :
         week === "Week 4" ?
         <>
          <Task state="Completed" locked={false} />
          <Task state="In Progress" locked={false}/>
          <Task state="In Progress" locked={true}/>
         </>
         :
         null
        }
       </div>
        </>
        :
        tab === "Unibot" ?
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
        :
        null
      }

      </div>

     </div>
     </div>
    </div>
  )
}

export default Uniprep