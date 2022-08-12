import Image from "next/image";
import Aboutus from "../components/Aboutus/Aboutus";
import Background from "../components/Background/Background";
import Introduction from "../components/Introduction/Introduction";
import Navbar from "../components/Navbar/Navbar";

export default function Home() {
  return (
    <div className="">
      <Background />
      <Navbar />
      <Introduction />
      <Aboutus/>
    </div>
  );
}
