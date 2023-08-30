import React,{useState, useEffect} from 'react'
import Mobile_Header from './Mobile_Header';
import Desktop_Header from './Desktop_Header';


const Header = () => {

  const [isMobile, setIsMobile] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.matchMedia("(max-width: 767px)").matches;
      const isDesktop = window.matchMedia("(min-width: 768px)").matches;

      setIsMobile(isMobile);
      setIsDesktop(isDesktop);
    };

    // Call the handleResize function on initial load
    handleResize();

    // Attach the event listener to the window resize event
    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);


  return (
    <>
    <div>
      {isMobile && <Mobile_Header />}
      {isDesktop && <Desktop_Header />}
    </div>
    
    </>
  )
}

export default Header