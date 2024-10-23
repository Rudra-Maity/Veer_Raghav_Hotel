import CustomCursor from "@/components/Customcourser";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import AnimatedCursor from "react-animated-cursor";
import img1 from '../components/arrow.png'
import SparkleEffect from "@/components/Customcourser";

export default function Home() {
  return (
    <>
    <div>
      <SparkleEffect/>
      <AnimatedCursor
        innerSize={8}
        outerSize={25}
        // RGB values for white color
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
      <Navbar />
      </div>
    </>
  );
}

