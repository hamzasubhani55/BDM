import Navbar from "../navbar/Navbar";
import Footer from "../footer/footer";
import Join from "../../assets/images/joinus.png";
import Trust from "../../assets/icons/trust.svg";
import Lock from "../../assets/icons/lock.svg";
import Group from "../../assets/icons/group.svg";
import Service from "../../assets/icons/services.svg";
import Service1 from "../../assets/icons/services1.svg";
import Service2 from "../../assets/icons/shopping.svg";
import Service3 from "../../assets/icons/services3.svg";
import userCard from "../../assets/icons/userCard.svg";
import BgVideo from "../../assets/videos/bg-video.mp4";
import Card from "../card/Card";
import UserCard from "../card/UserCard";

function Landing() { 
  const data = [
    {
      icon: Service,
      stat: "10.5k",
      label: "Sellers active on our site",
    },
    {
      icon: Service1,
      stat: "33k",
      label: "Monthly Product Sales",
    },
    {
      icon: Service2,
      stat: "45.5k",
      label: "Customers active on our site",
    },
    {
      icon: Service3,
      stat: "25k",
      label: "Annual gross sales on our ",
    },
  ];

  const userData = [
    {
      avatar: userCard,
      name: "Alex",
      jobTitle: "Software Engineer",
      email: "Alex@mail.com",
      phone: "12345678",
      walletBalance: "26 euro",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",
      rating: "4",
    },
    {
      avatar: userCard,
      name: "John",
      jobTitle: "Web Developer",
      email: "John@mail.com",
      phone: "12345678",
      walletBalance: "26 euro",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",
      rating: "5",
    },
    {
      avatar: userCard,
      name: "James",
      jobTitle: "DevOps",
      email: "James@mail.com",
      phone: "12345678",
      walletBalance: "26 euro",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",
      rating: "5",
    },
    {
      avatar: userCard,
      name: "Sarah",
      jobTitle: "DevOps",
      email: "Sarah@mail.com",
      phone: "12345678",
      walletBalance: "26 euro",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",
      rating: "5",
    },
  ];

  return (
    <div className="w-screen min-h-screen  overflow-hidden">
      <div className="mb-10">
      <Navbar />
      </div>
      <div className="relative flex w-screen h-[50vh] sm:h-[60vh] md:h-screen overflow-hidden">
        <video
          autoPlay
          muted
          loop
          id="myVideo"
          className="w-full h-full object-cover"
        >
          <source src={BgVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-white">
            Welcome to BMDL
          </h1>
        </div>
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="flex flex-col md:flex-row gap-6 md:gap-12 mb-12">
          <div className="md:w-1/2 space-y-6 text-center md:text-left p-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
              Why Join Us
            </h2>
            <p className="text-sm sm:text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <p className="text-sm sm:text-base">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum.
            </p>
          </div>
          <div className="md:w-1/2 hover:scale-110 transition duration-300">
            <img
              src={Join}
              alt="Join Us"
              className="w-full h-auto max-h-[400px] object-contain"
            />
          </div>
        </div>
        <div className=" text-start space-y-8 p-6 ">
           <div className="font-bold text-4xl">Our Values</div>
        <div className="flex flex-col space-y-8 text-start p-6">
       
          <div className="flex space-x-4 my-6 ">
            <div className="hover:scale-110 transition duration-300">
              <img src={Trust} alt="trust" />
            </div>
            <div className="hover:scale-110 transition duration-300">
              <img src={Lock} alt="trust" />
            </div>
            <div className="hover:scale-110 transition duration-300">
              <img src={Group} alt="trust" />
            </div>
          </div>
        </div>
       <div className="flex flex-wrap justify-center gap-6 mt-6 px-4">
  {data.map((item, index) => (
    <div
      key={index}
      className="hover:shadow-xl hover:scale-105 transition duration-300 hover:rounded-xl"
    >
      <Card icon={item.icon} stat={item.stat} label={item.label} />
    </div>
  ))}
</div>

<div className="flex flex-wrap justify-center gap-8 my-10 px-4">
  {userData.map((item, index) => (
    <div
      key={index}
      className="hover:shadow-xl hover:scale-105 transition duration-300"
    >
      <UserCard
        avatar={item.avatar}
        name={item.name}
        jobTitle={item.jobTitle}
        content={item.content}
        walletBalance={item.walletBalance}
        rating={item.rating}
      />
    </div>
  ))}
</div>
        </div>
      </div>

      <div className="div">
        <Footer/>
      </div>
    </div>
  );
}

export default Landing;