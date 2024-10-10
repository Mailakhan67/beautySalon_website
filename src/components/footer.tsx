import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import Image from "next/image";


export default function Footer() {
  return (
    <div className=" bg-[#DFBFA8] h-[450px] rounded-sm pt-24 mt-14">
     <div className="w-[434px] h-[213px]  text-center m-auto  flex flex-col justify-center items-center">
<h1 className="font-serif font-bold text-6xl   ">Beauty   Salon</h1>
<p className=" text-[#000000] text-left leading-normal mt-10 p-6 text-2xl w-[800px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis velit reprehenderit reiciendis consequatur asperiores, doloribus rem! Vel asperiores dolorum eius ea eum nostrum omnis, officiis architecto perspiciatis? Vel, debitis ex!</p>
<div className="h-[450px] cursor-pointer w-[400px] flex justify-center items-center gap-6 text-6xl font-bold">
<FontAwesomeIcon
          icon={faFacebook}
          className="text-[#1877F2] text-8xl font-bold h-[30px] w-[30px]"
        />
        <FontAwesomeIcon
          icon={faInstagram}
          className="text-pink-500 text-8xl font-bold h-[30px] w-[30px]"
        />
        <FontAwesomeIcon
          icon={faWhatsapp}
          className="text-green-500 text-8xl font-bold h-[30px] w-[30px]"
        />
        </div>
     </div>
    </div>
  );
}
