import Image from "next/image";
import Aboutus from "../components/Aboutus/Aboutus";
import Analytics from "../components/Analytics/Analytics";
import Background from "../components/Background/Background";
import Footer from "../components/Footer/Footer";
import Introduction from "../components/Introduction/Introduction";
import Navbar from "../components/Navbar/Navbar";
import Portfolio from "../components/Portfolio/Portfolio";
import Services from "../components/Services/Services";

export default function Home() {
  return (
    <div className="">
      <Background />
      <Navbar />
      <Introduction />
      <Aboutus/>
      <Services/>
      <Portfolio/>
      <Analytics/>
      <Footer/>
    </div>
  );
}
