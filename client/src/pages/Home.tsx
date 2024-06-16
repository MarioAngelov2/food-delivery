import { IoLocationOutline } from "react-icons/io5";
import { PiHamburger } from "react-icons/pi";
import { MdOutlineDeliveryDining } from "react-icons/md";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { LuBadgePercent } from "react-icons/lu";
import { HiOutlineBadgeCheck } from "react-icons/hi";
import { SlStar } from "react-icons/sl";

const Home = () => {
  return (
    <>
      <MaxWidthWrapper>
        {/* FIRST SECTION */}
        <div className="flex flex-col items-center justify-center gap-10 mt-14">
          <div>
            <p className="text-lg text-center">How to order?</p>
            <h2 className="text-4xl font-black text-center text-[#FF823F]">
              It is so easy.
            </h2>
          </div>
          <div className="flex flex-col items-center justify-between gap-12 mt-4 lg:flex-row">
            <div className="flex flex-col items-center gap-5 max-w-[320px]">
              <IoLocationOutline className="text-[#FF823F]" size={48} />
              <h3 className="text-xl font-bold">Tell us where you are</h3>
              <p className="text-center">
                We'll show you nearby shops and restaurants that you can order
                from.
              </p>
            </div>
            <div className="flex flex-col items-center gap-5 max-w-[320px]">
              <PiHamburger className="text-[#FF823F]" size={48} />
              <h3 className="text-xl font-bold">
                Find what you're looking for
              </h3>
              <p className="text-center">
                Search for items or dishes, businesses or cuisines.
              </p>
            </div>
            <div className="flex flex-col items-center gap-5 max-w-[320px]">
              <MdOutlineDeliveryDining className="text-[#FF823F]" size={48} />
              <h3 className="text-xl font-bold">
                Order with delivery or pickup
              </h3>
              <p className="text-center">
                We will inform you about the progress of your order.
              </p>
            </div>
          </div>
        </div>
        {/* FIRST SECTION */}
      </MaxWidthWrapper>

      {/* SECOND SECTION */}
      <div className="bg-gray-200">
        <MaxWidthWrapper>
          <div className="flex flex-col justify-between lg:flex-row mt-14">
            <div className="flex flex-col items-center justify-center lg:items-start">
              <h3 className="mb-4 text-4xl font-bold text-center lg:mt-0 mt-14 lg:text-start">
                Download the application
              </h3>
              <p className="text-lg">Choose a restaurant, order and eat!</p>
              <div className="flex flex-col items-center justify-center gap-5 mt-6 lg:flex-row">
                <img
                  className="w-[140px]"
                  src="/app-store.png"
                  alt="App store logo"
                />
                <img
                  className="w-[150px]"
                  src="/google-play.png"
                  alt="Googple play logo"
                />
                <img
                  className="w-[150px]"
                  src="/app-gallery.png"
                  alt="App gallery logo"
                />
              </div>
            </div>
            <div className="flex justify-center lg:justify-normal">
              <img
                className="w-[320px] mt-12"
                src="/mobile-app-image.png"
                alt="Mobile application image"
              />
            </div>
          </div>
        </MaxWidthWrapper>
      </div>

      {/* THIRD SECTION */}
      <div className="pt-24 pb-24 bg-gray-100">
        <MaxWidthWrapper>
          <h3 className="text-4xl font-black text-center text-[#FF823F]">
            Your time.
          </h3>
          <div className="flex flex-col items-center justify-center gap-4 mt-12 lg:items-start lg:flex-row">
            <div className="flex flex-col items-center justify-center lg:flex-1 md:w-[450px] gap-6 p-4 shadow-xl rounded-xl lg:h-[350px h-[350px] bg-white">
              <LuBadgePercent className="text-[#FF823F]" size={48} />
              <h4 className="text-xl font-bold">Loyalty programs</h4>
              <div className="flex flex-col items-start w-full gap-4">
                <p>
                  Points Program: collect points and use them for great offers
                </p>
                <p>
                  Get stamps, promotions, discounts, news and more. through our
                  newsletter and social media channels offers
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center lg:flex-1 md:w-[450px] gap-6 p-4 shadow-xl rounded-xl lg:h-[350px] h-[390px] bg-white">
              <HiOutlineBadgeCheck className="text-[#FF823F]" size={48} />
              <h4 className="text-xl font-bold">Our promise</h4>
              <div className="flex flex-col items-start w-full gap-4">
                <p>Excellent service</p>
                <p>Authentic user reviews</p>
                <p>
                  Our price guarantee - pay the same, whether you're in the
                  restaurant or at home
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center lg:flex-1 md:w-[450px] gap-6 p-4 shadow-xl rounded-xl lg:h-[350px] h-[350px] bg-white">
              <SlStar className="text-[#FF823F]" size={40} />
              <h4 className="text-xl font-bold">Your benefits</h4>
              <div className="flex flex-col items-start w-full gap-4">
                <p>3000+ places to choose from</p>
                <p>Pay online or with cash</p>
                <p>Order any time, anywhere, and on any device</p>
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </div>
    </>
  );
};

export default Home;
