import Icon from "./Icon";
import { Link, NavLink } from "react-router-dom";
export default function NotFound() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center rounded-xl min-h-screen bg-white px-4 md:px-20">
      <div className="w-full md:w-1/2 text-center md:text-left space-y-4">
   
        <h1 className="text-4xl font-bold text-black">Oops....</h1>
        {/* <h2 className="text-2xl font-semibold text-gray-700">Page not found</h2> */}
        <div className="text-5xl font-bold text-black right-0 top-[-40px]">Error 404</div>
        <p className="text-gray-600 max-w-md">
          This Page doesn’t exist or was removed! <br />
          We suggest you back to home.
        </p>
        <Link
          to="/"
          className="bg-hijau text-white inline-flex items-center font-bold px-5 py-3 rounded-lg hover:bg-green-700 transition"
        >
          <Icon name="leftArrow" className="text-xl mr-2" />
          Back to dashboard
        </Link>
      </div>

      <div className="w-full md:w-1/2 mt-10 md:mt-0 flex justify-center">
        <div className="relative">
          {/* <div className="absolute text-[100px] font-bold text-black right-0 top-[-40px]">404</div> */}
          <img
            src="/img/404.png"
            alt="404 Illustration"
            className="max-w-[300px] md:max-w-[400px]"
          />
        </div>
      </div>
    </div>
  );
}
