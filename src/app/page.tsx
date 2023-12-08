import { Hero } from "./_components/Hero/Hero";
import { Portfolio } from "./_components/Portfolio";
import { MeetandGreet } from "./_components/MeetandGreet";

export default function Home() {
  return (
    <div className="flex-auto pt-16 lg:pt-28">
      {/* Hero  */}
      <Hero />
      {/* Portfolio */}
      <Portfolio />
     
      {/* Meet and Greet */}
     <MeetandGreet />
      {/* Be a Part */}
      <div className="flex justify-center items-center h-screen">
        <div className="text-center">
          <p className="text-gray-400 text-sm uppercase tracking-widest mb-2">
            Be part of
          </p>
          <h1 className="text-red-600 text-5xl md:text-8xl font-bold">
            Indonesia
          </h1>
          <h2 className="text-white text-2xl md:text-5xl font-bold uppercase">
            Comic Con
          </h2>
          <p className="text-yellow-400 text-6xl md:text-9xl font-bold">2023</p>
        </div>
      </div>
      <div className="container mx-auto p-8">
        <div className="flex justify-between items-start">
          {/* <!-- Left Section --> */}
          <div className="w-full md:w-1/2 p-4 space-y-6">
            <div className="text-red-600 uppercase text-sm font-bold tracking-widest">
              Tenant Application
            </div>
            <h1 className="text-5xl font-bold">SHOWCASE YOUR BRAND</h1>
            <p className="text-gray-400">
              Be part of something big by becoming a tenant at Indonesia Comic
              Con, one of the largest pop culture event in Indonesia.
            </p>
            <div className="border-t border-green-500 pt-2">
              <p className="text-gray-400">100% space has been occupied.</p>
            </div>
            <button className="bg-green-500 text-white font-bold py-2 px-4 rounded">
              Book your space
            </button>
          </div>

          {/* <!-- Right Section --> */}
          <div className="w-full md:w-1/2 p-4 space-y-8">
            {/* <!-- Application Categories --> */}
            <div className="space-y-4">
              <div className="flex justify-between items-center border border-red-600 p-4 rounded-lg">
                <div className="space-y-2">
                  <h2 className="text-xl font-bold">
                    Championship of Cosplay Application
                  </h2>
                  <p className="text-gray-400 text-sm">
                    Unleash your inner hero at Indonesia Comic Con&apos;s
                    cosplay competition! Join the fun and win big.
                  </p>
                </div>
                <button className="bg-white text-black font-bold py-2 px-4 rounded-full">
                  Apply
                </button>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between items-center border border-red-600 p-4 rounded-lg">
                <div className="space-y-2">
                  <h2 className="text-xl font-bold">
                    Artist Alley Application
                  </h2>
                  <p className="text-gray-400 text-sm">
                    Are you an artist or a creator? Showcase and sell your
                    artwork, crafts, and other merchandise directly to ICC’s
                    attendees.
                  </p>
                </div>
                <button className="bg-white text-black font-bold py-2 px-4 rounded-full">
                  Apply
                </button>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between items-center border border-red-600 p-6 rounded-lg">
                <div className="space-y-2">
                  <h2 className="text-xl font-bold">
                    Community Booth Application
                  </h2>
                  <p className="text-gray-400 text-sm">
                    Get a limited free booth for pop culture-related
                    communities.
                  </p>
                </div>
                <button className="bg-white text-black font-bold py-2 px-4 rounded-full">
                  Apply
                </button>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between items-center border border-red-600 p-4 rounded-lg">
                <div className="space-y-2">
                  <h2 className="text-xl font-bold">
                    Media Partner Application
                  </h2>
                  <p className="text-gray-400 text-sm">
                    Become an official Indonesia Comic Con’s media partner.
                  </p>
                </div>
                <button className="bg-white text-black font-bold py-2 px-4 rounded-full">
                  Apply
                </button>
              </div>
            </div>
            <div className="text-gray-400 text-sm">
              Do you have any ideas on how we can work together to build a
              better Indonesia Comic Con? Please share your thoughts and
              suggestions.
              <a href="#" className="text-green-500 font-bold">
                Contact us
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
