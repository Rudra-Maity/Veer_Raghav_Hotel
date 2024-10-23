import CustomCursor from "@/components/Customcourser";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import AnimatedCursor from "react-animated-cursor";
import img1 from '../components/arrow.png'
import SparkleEffect from "@/components/Customcourser";
// import ContactSection from "@/app/contact/page";

export default function Home() {
  return (
    <>
      <div >
        {/* <SparkleEffect /> */}
        <AnimatedCursor
          innerSize={8}
          outerSize={25}
          color="255, 165, 0"
          outerAlpha={0.2}
          innerScale={0.7}
          outerScale={2}
          clickables={[
            'a',
            'input[type="text"]',
            'input[type="email"]',
            'input[type="number"]',
            'input[type="submit"]',
            'input[type="image"]',
            'label[for]',
            'select',
            'textarea',
            'button',
            '.link',
          ]}
        />
        
        {/* Adjust Navbar position and z-index */}
        <div className="fixed top-0 left-0 w-full z-50">
        </div>

        <div className=""> {/* Add padding to avoid overlap with fixed Navbar */}
          {/* <ContactSection /> */}
        </div>
      </div>
    </>
  );
}
