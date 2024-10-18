import Image from "next/image";

const About = () => {
  return (
    <div className="flex justify-between h-screen bg-slate-100">
      <div className=" h-[700px] flex justify-between mt-32">
        <Image
          src={"/aboutimage.jpeg"}
          alt=""
          width={600}
          height={400}
          className="font-bold rounded-md"
        />

        <div className="text-center p-6">
          <h1 className="font-sans font-bold text-6xl">Mega Sale</h1>
          <p className="mt-10 text-left leading-normal font-sans text-[#000000] text-2xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae,
            ipsam? Quam quasi explicabo veniam esse illo nobis repudiandae vitae
            odit odio veritatis porro placeat quos, sunt recusandae.ipsum dolor
            sit amet consectetur adipisicing elit. Beatae, ipsam? Quam quasi
            explicabo veniam esse illo nobis repudiandae vitae odit odio
            veritatis porro placeat quos, sunt recusandae.ipsum dolor sit amet
            consectetur adipisicing elit. Beatae, ipsam? Quam quasi explicabo
            veniam esse illo nobis repudiandae vitae odit odio veritatis porro
            placeat quos, sunt recusandae.ipsum dolor sit amet consectetur
            adipisicing elit. Beatae, ipsam? Quam quasi explicabo veniam esse
            illo nobis repudiandae vitae odit odio veritatis porro placeat quos,
            sunt recusandae.ipsum dolor sit amet consectetur adipisicing elit.
            Beatae, ipsam? Quam quasi explicabo veniam esse illo nobis
            repudiandae vitae odit odio veritatis porro placeat quos, sunt
            recusandae.
          </p>
          <button className="hover:bg-blue-500 mt-14 p-4 bg-blue-400 w-[300px] rounded-md shadow-lg shadow-gray-500 font-serif border border-gray-500 hover:border-blue-950  font-bold text-3xl bg-gradient-to-tr from-purple-300 via-yellow-200 to-pink-200">
            Find Out More
          </button>
        </div>
      </div>
      <div className="h-10"></div>
    </div>
  );
};

export default About;
