import Header from "./components/Header";
import Footer from "./components/Footer";
import Section1 from "./components/Section1";
import CashbackComponent from "./components/CashbackComponent";
import UniParts from "./components/UniParts";
import UniBenefits from "./components/UniBenefits";
import SmartBanking from "./components/SmartBanking";
import DownloadApp from "./components/DownloadApp";
import FixedComponent from "./components/FixedComponent";
import { useState ,useEffect} from "react";

function App() {
  // To make a FixedComponent visible after a certain scrolling.
  const [isVisible,setIsVisible]=useState(true);
  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () =>
       window.removeEventListener("scroll", listenToScroll);
  }, [])

  const listenToScroll = () => {
    let heightToHideFrom = 500;
    const winScroll = document.body.scrollTop ||
        document.documentElement.scrollTop;
  
    if (winScroll > heightToHideFrom) {
       isVisible &&      // to limit setting state only the first time
         setIsVisible(false);
    } else {
         setIsVisible(true);
    }
  };


  return (
    <div class="box-border">
      <Header />
      <Section1 />
      <CashbackComponent />
      <UniParts />
      <UniBenefits />
      <SmartBanking />
      <DownloadApp />
      <Footer />
      <FixedComponent isVisible={isVisible} />
    </div>
  );
}

export default App;
