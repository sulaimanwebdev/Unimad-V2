import Header from "../components/Header";
import Footer from "../components/Footer";

const Login = () => {
  return (
    <>
     <div className="bg-white overflow-hidden">
       <Header/>

        <div className="mainCont relative mb-[100px] md2:mb-[150px] mt-[150px] md2:mt-[200px]">
         <div className="relative text-main-dark min-h-[calc(100vh-608px)] z-30">
            <div className="relative">
            <div className="text-[30px] sm2:text-[35px] text-center mb-16">Login with <span className="font-semibold">Linkedin</span></div>
             <button className="flex items-center gap-2 rounded-lg border leading-none transition hover:shadow mx-auto px-4 py-2"><img src="/images/linkedin.svg" alt="linkedin" className="w-[30px]" /> <div className="mt-1">Login with Linkedin</div></button>
            </div>
         </div>
        </div>

       <Footer/>
     </div>  
    </>
  )
}

export default Login