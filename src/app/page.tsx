import Image from "next/image";
import BackgroundImage from "@/components/backgroundimage";
import Footer from "@/components/footer";
import Header from "@/components/header";
export default function Home() {
  return (
    <div className="">
      <div>
        <BackgroundImage />
        <Header />
      </div>
    </div>
  );
}
