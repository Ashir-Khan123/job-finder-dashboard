import { FaFacebookF, FaInstagram, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import { SiWebmoney } from "react-icons/si";
import { Link } from "react-router-dom";

function AppFooter() {
  return (
    <footer class="bg-cyan-950 text-white px-6 md:px-10 lg:px-12 pt-8">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
        <div class="flex flex-col items-center lg:items-start">
          <div class="flex items-center justify-center md:justify-start gap-2 text-2xl font-semibold mb-5">
            <SiWebmoney />
            <span>Job<span className="text-cyan-600">Finder</span></span>
          </div>
          <p class="text-gray-300 text-sm leading-7 text-center lg:text-left">
            Connecting talent with opportunity. Your dream job is just a search
            away.
          </p>
          <div class="flex justify-center md:justify-start gap-2 mt-6">
            <Link
              class="w-10 h-10 flex items-center justify-center bg-white/10 rounded-full hover:bg-cyan-600 transition-all duration-300"
            >
              <FaLinkedinIn/>
            </Link>
            <Link
              class="w-10 h-10 flex items-center justify-center bg-white/10 rounded-full hover:bg-cyan-600 transition-all duration-300"
            >
             <FaFacebookF/>
            </Link>
            <Link
              class="w-10 h-10 flex items-center justify-center bg-white/10 rounded-full hover:bg-cyan-600 transition-all duration-300"
            >
              <FaXTwitter/>
            </Link>
            <Link
              class="w-10 h-10 flex items-center justify-center bg-white/10 rounded-full hover:bg-cyan-600 transition-all duration-300"
            >
              <FaInstagram />
            </Link>
          </div>
        </div>
        <div class="text-center lg:text-left lg:ml-6">
          <h5 class="font-semibold mb-5">For Job Seekers</h5>
          <ul class="flex flex-col gap-3 text-sm text-gray-300">
            <li>
              <a href="#" class="hover:text-white">
                Browse Jobs
              </a>
            </li>
            <li>
              <a href="#" class="hover:text-white">
                Career Advice
              </a>
            </li>
            <li>
              <a href="#" class="hover:text-white">
                Create Resume
              </a>
            </li>
            <li>
              <a href="#" class="hover:text-white">
                Job Alerts
              </a>
            </li>
          </ul>
        </div>
        <div class="text-center lg:text-left">
          <h5 class="font-semibold mb-5">For Employers</h5>
          <ul class="flex flex-col gap-3 text-sm text-gray-300">
            <li>
              <a href="#" class="hover:text-white">
                Post a Job
              </a>
            </li>
            <li>
              <a href="#" class="hover:text-white">
                Browse Candidates
              </a>
            </li>
            <li>
              <a href="#" class="hover:text-white">
                Pricing
              </a>
            </li>
            <li>
              <a href="#" class="hover:text-white">
                Employer Login
              </a>
            </li>
          </ul>
        </div>
        <div class="text-center lg:text-left">
          <h5 class="font-semibold mb-5">Company</h5>
          <ul class="flex flex-col gap-3 text-sm text-gray-300">
            <li>
              <a href="#" class="hover:text-white">
                About Us
              </a>
            </li>
            <li>
              <a href="#" class="hover:text-white">
                Contact
              </a>
            </li>
            <li>
              <a href="#" class="hover:text-white">
                Terms of Service
              </a>
            </li>
            <li>
              <a href="#" class="hover:text-white">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>
        <div class="text-center lg:text-left md:col-span-2 md:w-[50%] md:mx-auto lg:col-span-1 lg:w-auto">
          <h5 class="font-semibold mb-5">Newsletter</h5>
          <p class="text-sm text-gray-300 leading-6 mb-5">
            Get the latest job updates and career tips.
          </p>
          <input
            type="email"
            placeholder="Enter your email"
            class="w-full border border-gray-500 rounded-md px-4 py-3 bg-transparent outline-none text-sm placeholder:text-gray-500 focus:border-cyan-600"
          />
          <button class="w-full mt-3 bg-cyan-600 py-3 rounded-md font-medium cursor-pointer hover:bg-cyan-700 transition-all duration-300">
            Subscribe
          </button>
        </div>
      </div>
      <div class="border-t border-white/20 mt-7 py-4 text-center">
        <p class="text-sm text-gray-300">
          © 2026 JobFinder. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default AppFooter;
