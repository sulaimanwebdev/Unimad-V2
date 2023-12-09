import Header from "../../components/Header";
import Footer from "../../components/Footer";

const Blog = () => {
  return (
    <>
     <div className="bg-[#F5F5F5] overflow-hidden">
       <Header/>

        <div className="mainCont relative mt-[150px] md2:mt-[200px]">
         <div className="relative text-main-dark min-h-[calc(100vh-452px)] z-30">
            <div className="relative">
             <div className="relative bg-[#FAFAFA] rounded-t-3xl min-h-[calc(100vh-453px)] overflow-hidden pb-20 z-30">
              <img src="/images/cover.png" alt="blog cover" className="w-full h-[400px] object-cover object-bottom" />
              <div className="px-10 py-7">
               <div className="text-[30px] sm:text-[35px] font-semibold">Blog Title</div>
               <div className="flex items-center mt-3">
                   <div className="font-semibold">Author</div>
                   <div className="bg-[#D9D9D9] w-1 h-1 rounded-full mx-2.5"></div>
                   <div className="font-semibold">Date</div>
               </div>

               <div className="mt-10">
                <div className="mb-16">Nulla facilisi nullam vehicula ipsum a. Sed blandit libero volutpat sed. Placerat in egestas erat imperdiet sed euismod nisi. Sit amet nisl purus in. In ornare quam viverra orci sagittis eu volutpat odio facilisis. Non blandit massa enim nec dui nunc. Eget gravida cum sociis natoque penatibus et. Et tortor consequat id porta nibh. Scelerisque felis imperdiet proin fermentum. Ac turpis egestas integer eget aliquet nibh praesent tristique magna. Luctus venenatis lectus magna fringilla urna porttitor rhoncus dolor.</div>
                <div>Nulla facilisi nullam vehicula ipsum a. Sed blandit libero volutpat sed. Placerat in egestas erat imperdiet sed euismod nisi. Sit amet nisl purus in. In ornare quam viverra orci sagittis eu volutpat odio facilisis. Non blandit massa enim nec dui nunc. Eget gravida cum sociis natoque penatibus et. Et tortor consequat id porta nibh. Scelerisque felis imperdiet proin fermentum. Ac turpis egestas integer eget aliquet nibh praesent tristique magna. Luctus venenatis lectus magna fringilla urna porttitor rhoncus dolor.</div>
               </div>

              </div>

             </div>
             <img src="/images/circle5.svg" alt="circle bg" className="absolute -top-[150px] -left-[500px]" />
             <img src="/images/circle7.svg" alt="circle bg" className="absolute -bottom-[600px] -left-[300px]" />
            </div>
         </div>
        </div>

       <Footer/>
     </div>  
    </>
  )
}

export default Blog