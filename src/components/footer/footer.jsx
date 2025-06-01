import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Send from "../../assets/icons/send.svg";
import Qr from "../../assets/icons/qrCode.svg";
import Google from "../../assets/icons/googlePlay.svg";
import Apple from "../../assets/icons/appStore.svg";
import Facebook from "../../assets/icons/facebook.svg";
import X from "../../assets/icons/twitter.svg";
import Link from "../../assets/icons/Vector.svg";

function Footer() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    navigate("/");
  };

  return (
    <div className="bg-gradient-to-br from-pink-700 via-purple-400 to-indigo-500 px-4 sm:px-6 lg:px-8 py-10 text-white">
      <div className="max-w-7xl mx-auto">
        {/* Mobile: Stack all columns vertically */}
        {/* Tablet: 2 columns per row */}
        {/* Desktop: All columns in one row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-10">
          
          {/* Column 1: Subscribe */}
          <div className="flex flex-col space-y-4 sm:col-span-2 lg:col-span-1">
            <h3 className="text-xl font-bold">Exclusive</h3>
            <p className="text-lg font-semibold">Subscribe</p>
            <p className="text-sm opacity-90">Get 10% off your first order</p>
            <form onSubmit={handleSubmit(onSubmit)} className="relative max-w-xs">
              <img
                src={Send}
                width={20}
                height={20}
                alt="Send"
                className="absolute left-3 top-1/2 transform -translate-y-1/2 z-10"
              />
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full pl-10 pr-4 py-3 rounded-md text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/50"
                {...register("email", { required: "Email is required" })}
              />
              {errors.email && (
                <p className="text-sm text-red-300 mt-1">
                  {errors.email.message}
                </p>
              )}
            </form>
          </div>

          {/* Column 2: Support */}
          <div className="flex flex-col space-y-3">
            <h3 className="text-xl font-semibold mb-1">Support</h3>
            <div className="space-y-2 text-sm opacity-90">
              <p>111 Bijoy Sarani,<br />Dhaka, Bangladesh</p>
              <p className="break-all">BMD@gmail.com</p>
              <p>+11115-111111-22222</p>
            </div>
          </div>

          {/* Column 3: Account */}
          <div className="flex flex-col space-y-3">
            <h3 className="text-xl font-semibold mb-1">Account</h3>
            <div className="space-y-2 text-sm">
              <p className="cursor-pointer hover:opacity-80 transition-opacity">
                My Account
              </p>
              <p 
                className="cursor-pointer hover:opacity-80 transition-opacity" 
                onClick={() => navigate("/login")}
              >
                Login / Register
              </p>
              <p className="cursor-pointer hover:opacity-80 transition-opacity">
                Cart
              </p>
              <p className="cursor-pointer hover:opacity-80 transition-opacity">
                Wishlist
              </p>
              <p className="cursor-pointer hover:opacity-80 transition-opacity">
                Shop
              </p>
            </div>
          </div>

          {/* Column 4: Quick Links */}
          <div className="flex flex-col space-y-3">
            <h3 className="text-xl font-semibold mb-1">Quick Links</h3>
            <div className="space-y-2 text-sm">
              <p 
                className="cursor-pointer hover:opacity-80 transition-opacity" 
                onClick={() => navigate("/")}
              >
                Privacy Policy
              </p>
              <p className="cursor-pointer hover:opacity-80 transition-opacity">
                Terms Of Use
              </p>
              <p className="cursor-pointer hover:opacity-80 transition-opacity">
                FAQ
              </p>
              <p className="cursor-pointer hover:opacity-80 transition-opacity">
                Contact
              </p>
            </div>
          </div>

          {/* Column 5: Download App */}
          <div className="flex flex-col space-y-4 sm:col-span-2 lg:col-span-1">
            <h3 className="text-xl font-semibold">Download App</h3>
            <p className="text-sm opacity-90">Save $3 with App New User Only</p>
            
            {/* QR Code and App Store buttons */}
            <div className="flex flex-col sm:flex-row lg:flex-col items-start gap-4">
              <div className="flex items-start space-x-4">
                <img 
                  src={Qr} 
                  width={80} 
                  height={80} 
                  alt="QR Code" 
                  className="w-16 h-16 sm:w-20 sm:h-20"
                />
                <div className="flex flex-col space-y-2">
                  <img 
                    src={Google} 
                    width={120} 
                    alt="Google Play" 
                    className="w-24 sm:w-28 cursor-pointer hover:opacity-80 transition-opacity"
                  />
                  <img 
                    src={Apple} 
                    width={120} 
                    alt="App Store" 
                    className="w-24 sm:w-28 cursor-pointer hover:opacity-80 transition-opacity"
                  />
                </div>
              </div>
            </div>

            {/* Social Media Icons */}
            <div className="flex space-x-4 pt-2">
              <img 
                src={Facebook} 
                width={24} 
                height={24}
                alt="Facebook" 
                className="cursor-pointer hover:opacity-80 transition-opacity"
              />
              <img 
                src={X} 
                width={24} 
                height={24}
                alt="X" 
                className="cursor-pointer hover:opacity-80 transition-opacity"
              />
              <img 
                src={Link} 
                width={24} 
                height={24}
                alt="LinkedIn" 
                className="cursor-pointer hover:opacity-80 transition-opacity"
              />
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-white/20 mt-10 pt-6 text-center text-sm text-white/70">
          <p>© Rimel 2022. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;