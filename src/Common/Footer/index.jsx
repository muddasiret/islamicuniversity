import { FiMail } from "react-icons/fi";
import { FiFacebook } from "react-icons/fi";
import { FiInstagram } from "react-icons/fi";
import { FiYoutube } from "react-icons/fi";
import { FiTwitter } from "react-icons/fi";
import { MdNavigateNext } from 'react-icons/md'

const Footer = () => {
  return (
    <>
      <div className="py-5 px-5 bg-sky-900	 text-left">
        <p className="text-white text-sm">
          NAVIGATE TO
        </p>
        <div className="w-1/3">
            <a href="www.facebook.com" className="flex items-center py-2 border-b-2">
                <MdNavigateNext color="white"/>
                <p className="text-white text-xs">ABOUT</p>
            </a>
            <a href="www.facebook.com" className="flex items-center py-2 border-b-2">
                <MdNavigateNext color="white"/>
                <p className="text-white text-xs">PROGRAMMES</p>
            </a>
            <a href="www.facebook.com" className="flex items-center py-2">
                <MdNavigateNext color="white"/>
                <p className="text-white text-xs">RESEARCH</p>
            </a>
        </div>
      </div>
      <div className="flex justify-between py-5 px-5 h-10 items-center bg-gray-800">
        <p className="text-white text-xs">
          Cambridge Muslim College | Registered UK Charity No. 1137219
        </p>
        <div className="flex justify-end items-center">
          <a className="px-3" href="www.facebook.com" target="_blank">
            <FiMail color="white" />
          </a>
          <a className="px-3" href="www.facebook.com" target="_blank">
            <FiFacebook color="white" />
          </a>
          <a className="px-3" href="www.facebook.com" target="_blank">
            <FiInstagram color="white" />
          </a>
          <a className="px-3" href="www.facebook.com" target="_blank">
            <FiTwitter color="white" />
          </a>
          <a className="px-3" href="www.facebook.com" target="_blank">
            <FiYoutube color="white" />
          </a>
        </div>
      </div>
    </>
  );
};

export default Footer;
