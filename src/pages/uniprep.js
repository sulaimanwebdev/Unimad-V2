import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import Link from "next/link";
import Task from "../components/Task";
import ChatBotUniprep from "../components/ChatBotUniprep";

const Uniprep = () => {

    const [menu, setMenu] = useState(false);
    const [tab, setTab] = useState("My Plan Progress");
    const [week, setWeek] = useState("Week 4");

    // modal logic
    let [isOpen, setIsOpen] = useState(false);
    let [modalStep, setmodalStep] = useState(1);

    function closeModal() {
      setIsOpen(false);
      setmodalStep(1);
    }

    function openModal() {
      setIsOpen(true);
    }

  return (
    <>
    <div className="bg-[#F5F5F5] text-main-dark overflow-hidden">
     <div className="w-full p-5">
      <div className="relative flex items-center justify-between z-40">
        <Link href="/" className="flex items-center gap-2"><svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.66667 13.3333L0 6.66667L6.66667 0L7.6 0.95L1.88333 6.66667L7.6 12.3833L6.66667 13.3333Z" fill="#1B3252"/></svg> Back</Link>
        <Link href="/" className="flex"><img src="/images/logo-beta.svg" alt="logo" className="w-[130px]" /></Link>
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

      <div className="grid grid-cols-1 md2:grid-cols-[300px,1fr] gap-5 min-h-[calc(100vh-142px)] mt-20 md2:mt-16">
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
            <button onClick={() => { setTab("My Plan Progress") }} className={`transition hover:bg-main hover:bg-opacity-20 flex items-center justify-between w-full font-semibold rounded-lg px-3.5 py-2.5 ${tab === "My Plan Progress" ? "bg-main bg-opacity-20" : "bg-white"}`}>My Plan Progress</button>
            <button onClick={() => { setTab("Unibot") }} className={`transition hover:bg-main hover:bg-opacity-20 flex items-center justify-between w-full font-semibold rounded-lg px-3.5 py-2.5 ${tab === "Unibot" ? "bg-main bg-opacity-20" : "bg-white"}`}>Unibot</button>
            <button onClick={() => { setTab("Activity") }} className={`transition hover:bg-main hover:bg-opacity-20 flex items-center justify-between w-full font-semibold rounded-lg px-3.5 py-2.5 ${tab === "Activity" ? "bg-main bg-opacity-20" : "bg-white"}`}>Activity</button>
            <button onClick={() => { setTab("Talk to us") }} className={`transition hover:bg-main hover:bg-opacity-20 flex items-center justify-between w-full font-semibold rounded-lg px-3.5 py-2.5 ${tab === "Talk to us" ? "bg-main bg-opacity-20" : "bg-white"}`}>Talk to us</button>
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
        <ChatBotUniprep/>
        </>
        :
        tab === "Activity" ?
        <div className="flex flex-col h-full py-2">
         <div className="text-[20px] font-[600]">Your Activity</div>
         <div className="flex-1 flex items-center justify-center gap-5 flex-col w-full max-w-[850px] mx-auto pt-14">
          <div className="relative bg-[#F8F8F8] border border-[#8C8C8C] rounded-full w-full px-3 py-2"><img src="/images/chart1.svg" alt="chart" className="w-full" /> <svg width="27" height="24" className="absolute -top-7 left-[calc(50%-50px)] -translate-x-1/2" viewBox="0 0 27 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.0981 22.5C14.9434 24.5 12.0566 24.5 10.9019 22.5L0.942629 5.25C-0.212072 3.25 1.2313 0.750001 3.54071 0.750001L23.4593 0.750003C25.7687 0.750003 27.2121 3.25 26.0574 5.25L16.0981 22.5Z" fill="#4C8AE1"/></svg></div>
          <div className="grid grid-cols-1 xl:grid-cols-[1fr,300px] gap-5 w-full">
           <div className="bg-[#F8F8F8] border border-[#8C8C8C] rounded-xl flex items-center sm:justify-center xl:justify-between gap-10 xl:gap-5 flex-col sm:flex-row h-full p-5">
            <div className="flex items-center sm:items-start justify-between gap-5 sm:gap-0 flex-col h-full">
              <div><div className="text-[#1B3252] text-center sm:text-left">Tasks Completed:</div><div className="text-main text-[35px] font-[600] text-center mx-auto mt-2">9</div></div>
              <div><div className="text-[#1B3252] text-center sm:text-left">Tasks Pending:</div><div className="text-[#8C8C8C] text-[35px] font-[600] text-center mx-auto mt-2">4</div>
            </div></div>
            <div>
              <img src="/images/chart2.svg" alt="chart" className="sm:-mr-8 -my-5" />
            </div>
           </div>
           <div className="bg-[#F8F8F8] border border-[#8C8C8C] rounded-xl flex items-center justify-center gap-5 flex-col p-5">
            <div className="text-main-dark text-[80px] font-[600] border border-[#8C8C8C] rounded-xl leading-none px-5 py-5">4</div>
            <div className="text-main-dark text-[20px] text-center">More Weeks to Go!</div>
           </div>
          </div>
         </div>
        </div>
        :
        tab === "Talk to us" ?
        <>
         <div className="text-[25px] font-[600] mb-2 mt-1">Go on, Ask away!</div>
        <div className="text-[15px] max-w-[600px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</div>
        <textarea className="w-full max-w-[600px] border border-[#0000004D] outline-main rounded-lg bg-white h-[200px] resize-none p-3 mt-5"></textarea>
        <div className="flex items-center justify-end w-full max-w-[600px]">
          <button onClick={openModal} className="bg-main-dark text-white rounded-full transition hover:bg-main px-5 py-2 mt-2">Send</button>
        </div>
        </>
        :
        null
      }

      </div>

     </div>
     </div>
    </div>




   {/* Modal */}
   <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-[100]" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-[#00000066]" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-[500px] transform overflow-hidden rounded-xl bg-white text-main-dark p-3 pb-5 text-left align-middle shadow-xl transition-all">
                 <div className="flex items-center justify-end mb-4">
                  <button onClick={closeModal}><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.4 19L5 17.6L10.6 12L5 6.4L6.4 5L12 10.6L17.6 5L19 6.4L13.4 12L19 17.6L17.6 19L12 13.4L6.4 19Z" fill="#1B3252"/></svg></button>
                 </div>

                 {
                  modalStep === 1 ?
                  <div className="flex items-center justify-center flex-col text-center">
                   <img src="/images/person.png" alt="person" className="border-[5px] border-main-dark w-[80px] h-[80px] object-cover object-center rounded-full overflow-hidden" />
                   <div className="text-[20px] font-[600] mt-5">Hello Tanya Fernandez!</div>
                   <div className="text-[15px] mt-2">Answer a few questions to get onboard</div>
                   <button onClick={()=> {setmodalStep(2)}} className="flex items-center gap-3 text-[15px] bg-main-dark text-white rounded-full transition hover:bg-main px-5 py-2 mt-10">Lets go <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.97297 6L0 1.4L1.51351 0L8 6L1.51351 12L0 10.6L4.97297 6Z" fill="currentColor"/></svg></button>
                 </div>
                 :
                 modalStep === 2 ?
                 <div className="flex items-center justify-center flex-col text-center">
                   <div className="text-[22px] mb-4">Your First Name?</div>
                   <input type="text" placeholder="Enter Name" className="w-full max-w-[300px] rounded-lg bg-white border border-[#0000004D] outline-main placeholder:text-[#0000004D] px-3 py-2" />
                   <div className="flex items-center justify-center gap-3 mt-16">
                   <button onClick={()=> {setmodalStep(1)}} className="flex items-center gap-3 text-[15px] bg-white text-main-dark border-2 border-main-dark rounded-full transition hover:bg-main-dark hover:text-white px-5 py-1.5">Back <svg width="8" height="12" className="-rotate-[180deg]" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.97297 6L0 1.4L1.51351 0L8 6L1.51351 12L0 10.6L4.97297 6Z" fill="currentColor"/></svg></button>
                   <button className="flex items-center gap-3 text-[15px] bg-main-dark text-white rounded-full transition hover:bg-main px-5 py-2">Next <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.97297 6L0 1.4L1.51351 0L8 6L1.51351 12L0 10.6L4.97297 6Z" fill="currentColor"/></svg></button>
                   </div>
                 </div>
                 :
                 null
                 }

                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>

  
    </>
  )
}

export default Uniprep