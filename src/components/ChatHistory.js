import { Fragment, useRef } from 'react';
import { Menu, Transition } from '@headlessui/react';

export default function ChatHistory() {
  const buttonRef = useRef();

  return (
    <Menu
      as="div"
      className="relative inline-block text-left -translate-y-2 z-[50]"
    >
      <div>
        <Menu.Button
          ref={buttonRef}
          className="flex items-center justify-center gap-2 bg-white border border-[#0000001A] overflow-hidden h-[50px] rounded-xl px-3 sm:px-4"
        >
          <svg
            className="min-w-[18px] min-h-[18px] sm:min-w-[22px] sm:min-h-[22px]"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.943 24C8.89686 24 6.24156 23.0053 3.97714 21.0159C1.71271 19.0264 0.402625 16.5212 0.046875 13.5H1.56416C1.97186 16.0808 3.14735 18.226 5.09062 19.9356C7.0339 21.6452 9.31804 22.5 11.943 22.5C14.868 22.5 17.3493 21.4813 19.3868 19.4438C21.4243 17.4062 22.443 14.925 22.443 12C22.443 9.075 21.4243 6.59375 19.3868 4.55625C17.3493 2.51875 14.868 1.5 11.943 1.5C10.3911 1.5 8.93245 1.82789 7.56705 2.48366C6.20167 3.13944 4.99687 4.04232 3.95265 5.19232H7.67377V6.69232H1.443V0.461549H2.943V4.04423C4.10262 2.77115 5.46176 1.77884 7.02041 1.06729C8.57906 0.355762 10.2199 0 11.943 0C13.6065 0 15.1656 0.312976 16.6204 0.938926C18.0752 1.5649 19.3464 2.42164 20.4339 3.50914C21.5214 4.59664 22.3781 5.86779 23.0041 7.32259C23.63 8.77739 23.943 10.3365 23.943 12C23.943 13.6635 23.63 15.2226 23.0041 16.6774C22.3781 18.1322 21.5214 19.4034 20.4339 20.4909C19.3464 21.5784 18.0752 22.4351 16.6204 23.0611C15.1656 23.687 13.6065 24 11.943 24ZM16.7488 17.7808L11.2796 12.3116V4.5H12.7796V11.6884L17.8103 16.7192L16.7488 17.7808Z"
              fill="#8C8C8C"
            />
          </svg>
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="dropDownShadow absolute left-0 bottom-[55px] w-[250px] origin-top-left bg-[#FFFFFF80] border border-[#0000001A] rounded-xl p-2">
          
          <div className="text-[#BFCFE9] text-sm text-center mb-3">Chat History</div>

          <div className="flex gap-2 flex-col">
           <div className="flex items-center justify-between gap-1 rounded-lg hover:bg-[#4C8AE133]">
            <button className="overflow-hidden text-left overflow-ellipsis whitespace-nowrap w-full pl-2 py-2">This question will go out of the ordinary and into the realm of unpredictability.</button>
            <button className="py-2 px-2"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.3077 20.5C6.80898 20.5 6.38302 20.3234 6.02982 19.9701C5.67661 19.6169 5.5 19.191 5.5 18.6923V5.99999H4.5V4.50002H8.99997V3.61542H15V4.50002H19.5V5.99999H18.5V18.6923C18.5 19.1974 18.325 19.625 17.975 19.975C17.625 20.325 17.1974 20.5 16.6922 20.5H7.3077ZM17 5.99999H6.99997V18.6923C6.99997 18.782 7.02883 18.8557 7.08652 18.9134C7.14423 18.9711 7.21795 19 7.3077 19H16.6922C16.7692 19 16.8397 18.9679 16.9038 18.9038C16.9679 18.8397 17 18.7692 17 18.6923V5.99999ZM9.40385 17H10.9038V7.99999H9.40385V17ZM13.0961 17H14.5961V7.99999H13.0961V17Z" fill="#1B3252"/></svg></button>
           </div>  

           <div className="flex items-center justify-between gap-1 rounded-lg hover:bg-[#4C8AE133]">
            <button className="overflow-hidden text-left overflow-ellipsis whitespace-nowrap w-full pl-2 py-2">This question will go out of the ordinary and into the realm of unpredictability.</button>
            <button className="py-2 px-2"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.3077 20.5C6.80898 20.5 6.38302 20.3234 6.02982 19.9701C5.67661 19.6169 5.5 19.191 5.5 18.6923V5.99999H4.5V4.50002H8.99997V3.61542H15V4.50002H19.5V5.99999H18.5V18.6923C18.5 19.1974 18.325 19.625 17.975 19.975C17.625 20.325 17.1974 20.5 16.6922 20.5H7.3077ZM17 5.99999H6.99997V18.6923C6.99997 18.782 7.02883 18.8557 7.08652 18.9134C7.14423 18.9711 7.21795 19 7.3077 19H16.6922C16.7692 19 16.8397 18.9679 16.9038 18.9038C16.9679 18.8397 17 18.7692 17 18.6923V5.99999ZM9.40385 17H10.9038V7.99999H9.40385V17ZM13.0961 17H14.5961V7.99999H13.0961V17Z" fill="#1B3252"/></svg></button>
           </div>  

           <div className="flex items-center justify-between gap-1 rounded-lg hover:bg-[#4C8AE133]">
            <button className="overflow-hidden text-left overflow-ellipsis whitespace-nowrap w-full pl-2 py-2">This question will go out of the ordinary and into the realm of unpredictability.</button>
            <button className="py-2 px-2"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.3077 20.5C6.80898 20.5 6.38302 20.3234 6.02982 19.9701C5.67661 19.6169 5.5 19.191 5.5 18.6923V5.99999H4.5V4.50002H8.99997V3.61542H15V4.50002H19.5V5.99999H18.5V18.6923C18.5 19.1974 18.325 19.625 17.975 19.975C17.625 20.325 17.1974 20.5 16.6922 20.5H7.3077ZM17 5.99999H6.99997V18.6923C6.99997 18.782 7.02883 18.8557 7.08652 18.9134C7.14423 18.9711 7.21795 19 7.3077 19H16.6922C16.7692 19 16.8397 18.9679 16.9038 18.9038C16.9679 18.8397 17 18.7692 17 18.6923V5.99999ZM9.40385 17H10.9038V7.99999H9.40385V17ZM13.0961 17H14.5961V7.99999H13.0961V17Z" fill="#1B3252"/></svg></button>
           </div>   
          </div> 
          
        </Menu.Items>
      </Transition>
    </Menu>
  );
}