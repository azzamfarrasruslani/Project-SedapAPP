import React from "react";

const Footer = () => {
  return (
    <footer className="pt-16 pb-8 bg-[#363636] text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap">
          {/* Left Section */}
          <div className="w-full lg:w-5/12 md:w-1/2 mb-8 md:mb-0">
            <div>
              <a href="index.html" className="block mb-4">
                <div id="sidebar-logo" className="flex flex-col">
                  <span
                    id="logo-title"
                    className="font-poppins-extrabold text-[48px] text-white"
                  >
                    Sedap{" "}
                    <b id="logo-dot" className="text-hijau">
                      .
                    </b>
                  </span>
                </div>
              </a>
              <h2 className="text-2xl font-semibold mb-2">
                The Best Restaurants in Your Home
              </h2>
              <p className="text-sm text-gray-300">
                Vitae congue mauris rhoncus aenean. Enim nulla aliquet porttitor
                lacus luctus accumsan tortor posuere. Tempus egestas sed sed
                risus pretium quam.
              </p>
            </div>
          </div>

          {/* Middle Section */}
          <div className="w-full lg:w-3/12 md:w-1/2 mb-8 md:mb-0">
            <div>
              <h4 className="text-xl font-semibold mb-4">Menu</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="index.html"
                    className="hover:underline flex items-center gap-2"
                  >
                    home<i className="fa-solid fa-arrow-right"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="about.html"
                    className="hover:underline flex items-center gap-2"
                  >
                    about us<i className="fa-solid fa-arrow-right"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="restaurants.html"
                    className="hover:underline flex items-center gap-2"
                  >
                    Restaurants<i className="fa-solid fa-arrow-right"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="contacts.html"
                    className="hover:underline flex items-center gap-2"
                  >
                    Contacts<i className="fa-solid fa-arrow-right"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Section */}
          <div className="w-full lg:w-4/12 md:w-full">
            <div>
              <h4 className="text-xl font-semibold mb-4">Contacts</h4>
              <div className="flex items-start gap-2 mb-4">
                <i className="fa-solid fa-location-dot mt-1"></i>
                <p className="text-sm text-gray-300">
                  1717 Harrison St, San Francisco, CA 94103, United States
                </p>
              </div>
              <div className="flex flex-col space-y-2">
                <a
                  href="mailto:quickeat@mail.net"
                  className="hover:underline flex items-center gap-2"
                >
                  <i className="fa-solid fa-envelope"></i>quickeat@mail.net
                </a>
                <a
                  href="callto:+14253261627"
                  className="hover:underline flex items-center gap-2"
                >
                  <i className="fa-solid fa-phone"></i>+1 425 326 16 27
                </a>
              </div>
              <ul className="flex gap-4 mt-4">
                <li>
                  <a href="#" className="hover:text-yellow-500">
                    <i className="fa-brands fa-facebook-f"></i>
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-yellow-500">
                    <i className="fa-brands fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-yellow-500">
                    <i className="fa-brands fa-twitter"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-700 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>Copyright © 2022. Quickeat. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="hover:underline">
              Privacy Policy
            </a>
            <a href="#" className="hover:underline">
              Terms & Services
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
