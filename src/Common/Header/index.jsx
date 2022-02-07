import { NAV_LINKS } from "./constants";
import { FiMail } from 'react-icons/fi';
import { FiFacebook } from 'react-icons/fi';
import { FiInstagram } from 'react-icons/fi';
import { FiYoutube } from 'react-icons/fi';
import { FiTwitter } from 'react-icons/fi';

const Header = () => {
  return (
    <>
      <div className="container flex justify-end items-center	py-5 px-5 bg-blue-800 h-10">
        <a className="px-3" href="www.facebook.com" target="_blank">
          <FiMail color="white"/>
        </a>
        <a className="px-3" href="www.facebook.com" target="_blank">
          <FiFacebook color="white"/>
        </a>
        <a className="px-3" href="www.facebook.com" target="_blank">
          <FiInstagram color="white"/>
        </a>
        <a className="px-3" href="www.facebook.com" target="_blank">
          <FiTwitter color="white"/>
        </a>
        <a className="px-3" href="www.facebook.com" target="_blank">
          <FiYoutube color="white"/>
        </a>
      </div>
      <div className="container flex justify-between items-center	py-5 px-5 border-b-2">
        <img
          src="https://479141-1506839-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2020/04/logo-cmc_retina500px.png"
          className="w-auto h-20"
          alt="logo_university"
        />
        <nav className="flex sm:justify-center space-x-4">
          {Object.keys(NAV_LINKS).map((key, index) => (
            // <a
            //   href={NAV_LINKS[key].link}
            //   className="uppercase rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900 group relative"
            // >
            //   {NAV_LINKS[key].label}
            // </a>
            <div class="relative group">
              <a
                href={NAV_LINKS[key].link}
                className="uppercase rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900 group relative"
              >
                {NAV_LINKS[key].label}
              </a>
              {NAV_LINKS[key].sub && (
                <div class="absolute hidden bg-grey-200 group-hover:block">
                  <div class="bg-white bg-gray-200 shadow-lg">
                    <div class="flex-col flex">
                      {Object.keys(NAV_LINKS[key].sub).map(
                        (sub_key, key_index) => (
                          <a
                            href={NAV_LINKS[key].sub[key_index].link}
                            className="uppercase px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900 group relative w-100 text-xs text-left"
                          >
                            {NAV_LINKS[key].sub[key_index].label}
                          </a>
                        )
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>
      </div>
    </>
  );
};

export default Header;
