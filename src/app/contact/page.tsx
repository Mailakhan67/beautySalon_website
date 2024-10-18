"use client";
import { useRouter } from "next/navigation";

const Contact = () => {
  const router = useRouter();
  return (
    <div className=" mt-40 h-screen bg-slate-100">
      <h1 className="font-bold ml-40 w-[850px] text-end  font-serif text-5xl text-purple-950">
        Connect With Us
      </h1>
      <form
        action=""
        className="border bg-slate-200 mr-10 mt-10 border-black shadow-lg gap-x-10 shadow-gray-500 h-[640px] w-[700px] p-[60px] ml-[490px]"
      >
        <label htmlFor="" className="font-bold text-2xl text-left">
          Name
        </label>
        <br />
        <input
          type="text"
          className="border shadow-lg shadow-green-200  hover:border-yellow-700 border-black h-17 h-[50px] w-[600px] mb-6 "
        />
        <br />

        <label htmlFor="" className="font-bold text-2xl gap-y-6">
          Email
        </label>
        <br />
        <input
          type="email"
          className="border mb-6 hover:border-yellow-700 border-black h-[50px] w-[600px] shadow-lg shadow-green-200 "
        />
        <br />

        <label htmlFor="" className="font-bold text-2xl">
          Book an Appointment
        </label>
        <br />
        <input
          type="number"
          className="border shadow-lg shadow-green-200 hover:border-yellow-700 border-black h-17 h-[50px] w-[600px]"
        />
        <br />
        <button
          onClick={() => router.push("/")}
          className="hover:bg-blue-500 mt-28 p-4 bg-blue-400 w-[200px] rounded-md shadow-lg shadow-gray-500 font-serif border border-gray-500 hover:border-blue-950  font-bold text-3xl bg-gradient-to-tr from-slate-400 via-yellow-100 to-red-300"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
