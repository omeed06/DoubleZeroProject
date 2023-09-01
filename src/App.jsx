
import Banner from "./Components/Banner/Banner";

import Bottombanner from "./Asset/Images/bottombanner.png"
import CardCarousel from "./Components/Cards/CardCarousel";
import EventsCard from "./Components/Cards/EventsCard";
import StoriesCard from "./Components/Cards/StoriesCard";
import "./App.css"



function App() {
  return (
    <>
      {/* <Header /> */}
      <Banner />
      <div className="">
        <p className="text-xl my-5 md:text-6xl md:my-10 text-[#404040] font-semibold text-center" style={{fontFamily: "Krona One"}}>Events and Experiences</p>
        <div className="m-auto w-20 my-5 md:w-36 md:my-10 border-[#023D65] border-b-[10px] rounded-xl "></div>
        <CardCarousel cards={<EventsCard />} />
      </div>

      <div className="bg-[#F5FADF] py-5">
        <p className="text-xl my-5 md:text-6xl md:my-10 text-[#404040] font-semibold text-center" style={{fontFamily: "Krona One"}}>Stories</p>
        <div className="m-auto w-20 my-5 md:w-36 md:my-10 border-[#023D65] border-b-[10px] rounded-xl "></div>
        <CardCarousel cards={<StoriesCard />} />
      </div>

      <div style={{ backgroundImage: `url(${Bottombanner})`}} className="w-full h-full bg-cover bg-no-repeat py-10 md:py-16">
        <p className=" text-center text-3xl sm:text-6xl font-semibold text-white" style={{fontFamily: "Karone One"}} >Our Mission</p>
        <div className="m-auto w-20 md:w-36 border-[#023D65] border-b-[6px] md:border-b-[10px] rounded-xl my-3 sm:my-10"></div>
        <div className="max-w-2xl mx-auto sm:max-w-xl md:max-w-6xl">
          <p className="text-start text-white px-5 text-xl sm:text-4xl sm:px-10" style={{fontFamily: "Helvetica"}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the <br/><br/> 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic</p>
        </div>
      </div>

      {/* <Footer /> */}

    </>
  );
}

export default App;
