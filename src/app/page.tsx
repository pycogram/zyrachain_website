"use client";
import Image from "next/image";
import { StaticImageData } from "next/image";

import logo1 from "../../public/logo/new-zyrachain-logo-1.png";
import logo2Mobile from "../../public/logo/logo-named.png";
import twitter from "../../public/logo/Twitter.png";
import telegram from "../../public/logo/Telegram.png";
import discord from "../../public/logo/Discord.png";
import teamPic1 from "../../public/pic/team-pic-1.png";
import supportLogoPi from "../../public/pic/pi-network-logo.png";
import supportLogoProvena from "../../public/pic/provena-logo.png";
import zLogoCustom from "../../public/pic/z-logo-custom.png";
import xl from "../../public/pic/uil-tumblr-square.png";
import tl from "../../public/pic/uil-telegram.png";
import ll from "../../public/pic/uil-linkedin.png";
import gl from "../../public/pic/uil-github.png";
import ml from "../../public/pic/uil-medium-m.png";
import bl from "../../public/pic/uil-book-alt.png";
import middleImg from "../../public/pic/middle-img1.png";
import MotionWrapper from "./motion/motion-wrapper";
import zyrawalletPic from "../../public/pic/zyrawallet-pic.png";
import zyrawallet from "../../public/pic/zyrawallet.png";
import zyradexPic from "../../public/pic/zyradex-pic.png";
import zyradex from "../../public/pic/zyradex.png";
import zyraswapPic from "../../public/pic/zyraswap-pic.png";
import zyraswap from "../../public/pic/zyraswap.png";
import zyracoinPic from "../../public/pic/zyracoin-pic.png";
import zyracoin from "../../public/pic/zyracoin.png";
import zyrauserPic from "../../public/pic/zyrauser-pic.png";
import zyrauser from "../../public/pic/zyrauser.png";

import { motion} from "framer-motion";
const MotionImage = motion.create(Image);

import { useEffect, useState, useCallback, JSX, useRef } from "react";

import Link from "next/link";

import RandomMover from "./components/random-mover";

const WEBSITE_LOADER_TIME = 2;

type GroupImg = {
  up_m: StaticImageData;
  up_d: StaticImageData;
};

const groupImgMobile: GroupImg[] = [
  { up_m: zyrawalletPic, up_d: zyrawallet },
  { up_m: zyradexPic, up_d: zyradex },
  { up_m: zyraswapPic, up_d: zyraswap },
  { up_m: zyracoinPic, up_d: zyracoin },
  { up_m: zyrauserPic, up_d: zyrauser },
];

const menuContents = [
  "ZyraWallet", "ZyraDex", "$Zyra Token", "Feature", "Roadmap", "Whitepaper", "About us", "Contact", "Security", "Supports" 
];

const navContents = [
  "Wallet", "Dex", "$Zyra", "RM", "Feature"
];

export default function Home() {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, WEBSITE_LOADER_TIME * 2000);

    return () => clearTimeout(timer);
  }, []);

  const currentYear = new Date().getFullYear();
  const [isMenuActive, SetIsMenuActive] =  useState(false);

  const handleMenu = () => {
    console.log(isMenuActive);
    setShowOptionLang(null);
    setShowOptionMode(null);
    SetIsMenuActive(prev => !prev);
  }

  const [isMobile, setIsMobile] = useState<boolean | null>(true);
  const [isMobileLogo, setIsMobileLogo] = useState<boolean | null>(null);

  useEffect(() => {
      const updateMobileStatus = () => {
          if(window.innerWidth <= 500){
              setIsMobile(true) 
          }else{
              setIsMobile(false); 
          };

          if(window.innerWidth < 767){
              setIsMobileLogo(true);
              SetIsMenuActive(false);
          }else{
              setIsMobileLogo(false); 
          };
      };
      updateMobileStatus(); // check on load
      window.addEventListener("resize", updateMobileStatus);
      return () => window.removeEventListener("resize", updateMobileStatus);
  }, []);

  const [show, setShow] = useState<boolean>(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = useCallback(() => {
    setShowOptionLang(null);
    setShowOptionMode(null);
    
    if(window.scrollY > lastScrollY && window.scrollY > 50) {
      SetIsMenuActive(false);
      setShow(false); 
    } else {
      setShow(true);
    }
    setLastScrollY(window.scrollY);
  }, [lastScrollY]);

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => window.removeEventListener("scroll", controlNavbar);
  }, [controlNavbar]);

  const [showOptionMode, setShowOptionMode] = useState<boolean | null>(false);
  const [countOptionModeClicked, setCountOptionModeClicked] = useState<number>(0);

  const modeLogoTextArray = [

    {
      name: "light mode",
      logo: <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="M480-360q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35Zm0 80q-83 0-141.5-58.5T280-480q0-83 58.5-141.5T480-680q83 0 141.5 58.5T680-480q0 83-58.5 141.5T480-280ZM200-440H40v-80h160v80Zm720 0H760v-80h160v80ZM440-760v-160h80v160h-80Zm0 720v-160h80v160h-80ZM256-650l-101-97 57-59 96 100-52 56Zm492 496-97-101 53-55 101 97-57 59Zm-98-550 97-101 59 57-100 96-56-52ZM154-212l101-97 55 53-97 101-59-57Zm326-268Z"/></svg>,
    },
    {
      name: "device mode",
      logo: <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="M40-120v-80h880v80H40Zm120-120q-33 0-56.5-23.5T80-320v-440q0-33 23.5-56.5T160-840h640q33 0 56.5 23.5T880-760v440q0 33-23.5 56.5T800-240H160Zm0-80h640v-440H160v440Zm0 0v-440 440Z"/></svg>,
    },
    {
      name: "dark mode",
      logo: <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="M480-120q-150 0-255-105T120-480q0-150 105-255t255-105q14 0 27.5 1t26.5 3q-41 29-65.5 75.5T444-660q0 90 63 153t153 63q55 0 101-24.5t75-65.5q2 13 3 26.5t1 27.5q0 150-105 255T480-120Zm0-80q88 0 158-48.5T740-375q-20 5-40 8t-40 3q-123 0-209.5-86.5T364-660q0-20 3-40t8-40q-78 32-126.5 102T200-480q0 116 82 198t198 82Zm-10-270Z"/></svg>,
    }
  ]

  const [modeTL, setModeTL] = useState<any>(modeLogoTextArray[2]);
  const hideTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const modeBtnclick = () => {
    setShowOptionLang(null);
    if(hideTimeoutRef.current){
      clearTimeout(hideTimeoutRef.current);
    }
    
    if(countOptionModeClicked > 2){
      setCountOptionModeClicked(0);
      setShowOptionMode(null);
      setModeTL(modeLogoTextArray[2]);
      return;
    }
    
    setCountOptionModeClicked(item => item + 1);
    setShowOptionMode(true);
    setModeTL(modeLogoTextArray[countOptionModeClicked]);

    hideTimeoutRef.current = setTimeout(() => {
        setShowOptionMode(false);
      }, 5 * 1000);
  }

  const [showOptionLang, setShowOptionLang] = useState<boolean | null>(false);
  const langBtnclick = () => {
    setShowOptionMode(null);
    setShowOptionLang(prev => !prev);
  }

  const listOfLang = [
    "English", "Chinese", "Portugese", "French", "Igbo"
  ]
  const [optionSelected, setOptionSelected] = useState<string | null>(null);

  const optionLangClicked = (lang: string) => {
    setOptionSelected(lang)
    langBtnclick();
  }

  return (
    isLoading ?
    <>
      <motion.div 
        initial={{ scale: 0 }} 
        animate={{ scale: 1 }} 
        className={"w-full h-[100vh] place-content-center place-items-center relative"}>
        <Image className={"size-20 md:size-30 lg:size-40 animate-bounce ease-in-out transition"} src={zLogoCustom} alt="zyrachain" loading="lazy"/>
      </motion.div>
    </> :
    <>
      <motion.header 
        initial={{ y: 0 }}
        animate={{ y: show ? 0 : "-1000%" }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="header-head"
      >
        <motion.nav initial={{ scale: 0 }} animate={{ scale: 1 }}>
          <div>
            <Image className={isMobileLogo ? "img-mobile" :"img"} src={isMobileLogo ? logo2Mobile : logo1} alt="logo-text" loading="lazy" />
          </div>
          <span></span>
          <div>
            <ul>
              {
                navContents.map((item) => (
                  <>
                    <li>
                      <p>{item}</p>
                    </li>
                  </>
                ))
              }
            </ul>
            <ul>
              <li>
                 <Link href={"https://t.me/zyrachains"} target="_blank">
                  <Image className={"icon-x"} src={telegram} alt="telegram" loading="lazy" />
                </Link>
              </li>
              <li>
                <Link href={"https://x.com/zyradex"} target="_blank">
                  <Image className={"icon-x"} src={twitter} alt="twitter" loading="lazy" />
                </Link>
              </li>
              <li>
                <Image className={"icon-x icon-x-discord"} src={discord} alt="discord" loading="lazy" />
              </li>
            </ul>
          </div>
          <span></span>
          <div>
              <button>
                <p>Whitepaper</p>
              </button>
            <div>
              <p onClick={handleMenu} className={isMenuActive ? "active-menu" : "inactive-menu"}></p>
            </div>
          </div>
        </motion.nav>
        
        <div onClick={handleMenu} className={isMenuActive ? "overly-menu-close-icon" : ""}>
        </div>

        <div className={isMenuActive ? "menu-option-open" : "menu-option-close" }>

          <ul>
            {
              menuContents.map((item) => (
                <>
                  <li onClick={handleMenu}>
                    <p>{item}</p>
                  </li>
                </>
              ))
            }
          </ul>
        </div>
        
        <div onClick={handleMenu} className={isMenuActive ? "overlay-open" : "overlay-close"}></div>  
        
      </motion.header>
      <main className="main-body">
        < RandomMover />
        < RandomMover />
                      
        <section>
          
          <motion.div 
            initial={{ x: 0 }}
            animate={{ opacity: show ? 1 : 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="lang-mode-option"
          >
            <div className="lang-mode">
              <span onClick={modeBtnclick}> {modeTL && modeTL.logo} </span>
              <span onClick={langBtnclick}> 
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="M480-100q-78.15 0-147.5-29.96t-120.96-81.58q-51.62-51.61-81.58-120.96T100-480q0-78.77 29.96-147.81t81.58-120.65q51.61-51.62 120.96-81.58T480-860q78.77 0 147.81 29.96t120.65 81.58q51.62 51.61 81.58 120.65T860-480q0 78.15-29.96 147.5t-81.58 120.96q-51.61 51.62-120.65 81.58T480-100Zm0-60.85q30.62-40.61 51.54-81.92 20.92-41.31 34.08-90.31H394.38q13.93 50.54 34.47 91.85 20.53 41.31 51.15 80.38Zm-77.46-11q-23-33-41.31-75.03-18.31-42.04-28.46-86.2H197.08q31.69 62.31 85 104.7 53.31 42.38 120.46 56.53Zm154.92 0q67.15-14.15 120.46-56.53 53.31-42.39 85-104.7H627.23q-12.08 44.54-30.39 86.58-18.3 42.04-39.38 74.65ZM171.92-393.08h148.7q-3.77-22.3-5.47-43.73-1.69-21.42-1.69-43.19 0-21.77 1.69-43.19 1.7-21.43 5.47-43.73h-148.7q-5.77 20.38-8.84 42.38-3.08 22-3.08 44.54t3.08 44.54q3.07 22 8.84 42.38Zm208.69 0h198.78q3.76-22.3 5.46-43.34 1.69-21.04 1.69-43.58t-1.69-43.58q-1.7-21.04-5.46-43.34H380.61q-3.76 22.3-5.46 43.34-1.69 21.04-1.69 43.58t1.69 43.58q1.7 21.04 5.46 43.34Zm258.77 0h148.7q5.77-20.38 8.84-42.38 3.08-22 3.08-44.54t-3.08-44.54q-3.07-22-8.84-42.38h-148.7q3.77 22.3 5.47 43.73 1.69 21.42 1.69 43.19 0 21.77-1.69 43.19-1.7 21.43-5.47 43.73Zm-12.15-233.84h135.69Q730.85-690 678.5-731.62q-52.35-41.61-121.04-56.92 23 34.92 40.92 76.39 17.93 41.46 28.85 85.23Zm-232.85 0h171.24q-13.93-50.16-35.04-92.43-21.12-42.27-50.58-79.8-29.46 37.53-50.58 79.8-21.11 42.27-35.04 92.43Zm-197.3 0h135.69q10.92-43.77 28.85-85.23 17.92-41.47 40.92-76.39-69.08 15.31-121.23 57.12-52.16 41.8-84.23 104.5Z"/></svg> 
              </span>
            </div>
            <div className={showOptionMode ? "option-mode-show" : "option-mode-hide"}>
                <span onClick={modeBtnclick}>
                  {modeTL && modeTL.logo}
                  <p>{modeTL && modeTL.name}</p>
                </span>
            </div>
            <div className={showOptionLang ? "option-lang-show" : "option-lang-hide"}>
                <span>
                    {
                      listOfLang.map(item => (
                        <>
                          <p 
                            onClick={() => optionLangClicked(item)} 
                            className={optionSelected && optionSelected === item ? "option-lang-selected" : "option-lang-selected-not"}>
                              {item}
                          </p>
                        </>
                      ))
                    }
                </span>
            </div>

          </motion.div> 

          <MotionWrapper>
            <div className="banner-img">
              <div>
                <h1>The automated chain network on Pi</h1>
              </div>
              <Image className={"middle-pic"} src={middleImg} alt="middle logo pic 1" />
              <div>
                <h4>Zyrachain is the foundation chain of zyra ecosystem, designed to power and connect all Zyra products.</h4>
                <button>
                  <p>Explore</p>
                </button>
              </div>
            </div>
          </MotionWrapper>

          <MotionWrapper>
            <div className="vision-mission">
              <h2>Vision and Mission</h2>
              <div>
                <article>
                 
                  <h4>
                    Zyrachain envisions a decentralized ecosystem where innovators, creators, 
                    and pioneers collaborate to shape the future of Web3. Our goal is to empower 
                    individuals and communities globally giving them the tools, opportunities, 
                    and incentives to build, experience, and grow within a unified blockchain-powered network.
                  </h4>
                </article>
                <article>
                  <h4>
                    Our mission is to create a dynamic and interconnected environment 
                    where users, KOLs, and ecosystem partners actively co-create value. 
                    Through structured experience programs, transparent rewards, and 
                    meaningful engagement, Zyrachain aims to:
                  </h4>
                  <ul>
                    <li> Accelerate the adoption of decentralized products and services </li>
                    <li> Foster user-generated growth through community-driven participation </li>
                    <li> Build long-term collaboration with creators, KOLs, and project ambassadors </li>
                    <li> Deliver real utility by converting experience points into tangible ecosystem benefits </li>
                    <li> Strengthen the network effect across all Provena Labs sub-brands </li>
                  </ul>
                </article>

              </div>  
            </div>
          </MotionWrapper>

          <MotionWrapper>
            <div className="eco-system">
              <h2>Eco-system</h2>
              <div>
                <span>
                  <h4>Total User</h4>
                  <h3>100,000 +</h3>
                </span>
                <span>
                  <h4>Products</h4>
                  <h3>3 +</h3>
                </span>
                <span>
                  <h4>Market Capitalization</h4>
                  <h3>2 billion +</h3>
                </span>
                <span>
                  <h4>Wallets Downloads</h4>
                  <h3>2 million +</h3>
                </span>
              </div>
            </div>
          </MotionWrapper>

          <MotionWrapper>
            <div className="vision-mission">
              <h2>About Zyrachain</h2>
              <div>
                <article>
                  <h4>
                    Zyrachain is a next-generation decentralized ecosystem built to unify creators, 
                    users, developers, and innovators under one collaborative framework. 
                    Powered by Provena Labs, Zyrachain serves as the backbone for multiple 
                    sub-brands including ZyraDEX, ZyraWallet, ZyraPay, Zyra, USDP, 
                    and more offering a wide range of blockchain experiences from finance to social interaction.
                  </h4>
                </article>
                <article>
                  <h4>
                      The platform leverages a multi-layer community structure that connects official teams, 
                      sub-brand projects, KOLs, and everyday pioneers. Through this structure, Zyrachain 
                      enables seamless communication, ecosystem participation, and decentralized growth.
                  </h4>
                </article>
                <article>
                  <h4>
                    At its core, Zyrachain introduces the Provena Experience Points (PEP) system, 
                    allowing participants to earn real rewards such as tokens, badges, NFTs, and 
                    early access by completing tasks, promoting projects, and contributing to the community. 
                    This creates a sustainable loop of engagement, where every contribution leads to meaningful value.
                  </h4>
                </article>
                <article>
                  <h4>
                    Zyrachain is more than just a brand it&apos;s a community-driven movement designed to elevate 
                    Web3 engagement through collaboration, co-creation, and shared success.
                  </h4>
                </article>
              </div>  
            </div>
          </MotionWrapper>

          <MotionWrapper>
            <div className="utility-part">
              <h2>zyrachain utilities</h2>
              <p>
                ZyraChain utilities form the foundational layer of the network, delivering essential 
                blockchain tools and services that enable secure data exchange, efficient transaction 
                processing, scalable application development, and transparent on-chain operations, 
                all while supporting long-term sustainability and real-world adoption across 
                multiple industries and use cases.
              </p>
              <div
                className="img-container">
                {
                  groupImgMobile.map((item : GroupImg, index: number) => (
                    <MotionImage 
                      key={index} 
                      className={"utility-pic"} 
                      src={isMobile ?  item.up_m : item.up_d} 
                      alt="utility-img" loading="lazy"
                      initial={{ y: 150, opacity: 0 }}
                      whileInView={{y: 0, opacity: 1}} 
                      transition={{
                        duration: 0.2,
                        delay: 0.2,
                        type: "spring",
                        stiffness: 100
                      }}
                      animate={{ scale: 1 }}
                    />
                  ))
                }
              </div>
            </div>
          </MotionWrapper>

          <MotionWrapper>
            <div className="core-team">
              <h2>Core team</h2>
              <p>
                ZyraChain is built and guided by a committed team of engineers, researchers, 
                designers, and strategists who collaborate to develop secure, scalable, 
                and future-ready blockchain solutions, ensuring continuous innovation, 
                responsible network growth, and alignment with real-world blockchain needs.
              </p>
              <div>
                <span>
                  <Image className={"team-pic"} src={teamPic1} alt="team-pic-1" />
                  <article>
                    <h6>Soleil Rukundo</h6>
                    <h5>Lead Backend Dev</h5>
                  </article>
                </span>
                <span>
                  <Image className={"team-pic"} src={teamPic1} alt="team-pic-2" />
                  <article>
                    <h6>Junman</h6>
                    <h5>Manager & Dev</h5>
                  </article>
                </span>
                <span>
                  <Image className={"team-pic"} src={teamPic1} alt="team-pic-3" />
                  <article>
                    <h6>Justin Lee</h6>
                    <h5>Community Manager</h5>
                  </article>
                </span>
                <span>
                  <Image className={"team-pic"} src={teamPic1} alt="team-pic-4" />
                  <article>
                    <h6>TM</h6>
                    <h5>Full stack dev</h5>
                  </article>
                </span>
                <span>
                  <Image className={"team-pic"} src={teamPic1} alt="team-pic-5" />
                  <article>
                    <h6>TM</h6>
                    <h5>Software Developer</h5>
                  </article>
                </span>
                <span>
                  <Image className={"team-pic"} src={teamPic1} alt="team-pic-6" />
                  <article>
                    <h6>Nguyen .T.T</h6>
                    <h5>Marketing Expert</h5>
                  </article>
                </span>
              </div>
            </div>
          </MotionWrapper>

          <MotionWrapper>
            <div className="explore-sec">
              <h2>Explore Zyrachain</h2>
              <div>
                {
                  menuContents.map((item) => (
                    <>
                      <span>
                        <h4>{item}</h4>
                      </span>
                    </>
                  ))
                }
              </div>
            </div>
          </MotionWrapper>

          <MotionWrapper>
            <div className="support">
              <h2>supports</h2>
              <div>
                <span>
                  <Image className={"support-logo1"} src={supportLogoPi} alt="pi-network-official-logo" />
                </span>
                <span>
                  <Image className={"support-logo2"} src={supportLogoProvena} alt="provena-official-logo" />
                </span>
              </div>
              <p></p>
            </div>
          </MotionWrapper>

        </section>
      </main>
      <footer className="footer-foot">
        <div>
          <Image className={"logo-custom"} src={zLogoCustom} alt="zyrachain" loading="lazy"/>
        </div>
        <div>
          <div className="social-logo-box">
            <span>
              <Link href={"https://t.me/zyrachains"} target="_blank"> 
                <Image className={"social-logo-1"} src={tl} alt="zyralogo" loading="lazy"/>
              </Link>
            </span>
            <span>
              <Link href={"https://x.com/zyradex"} target="_blank">
                <Image className={"social-logo-1"} src={xl} alt="zyralogo" loading="lazy"/>
              </Link>
            </span>
            <span><Image className={"social-logo-1"} src={ll} alt="zyralogo" loading="lazy"/></span>
            <span><Image className={"social-logo-1"} src={gl} alt="zyralogo" loading="lazy"/></span>
            <span><Image className={"social-logo-1"} src={ml} alt="zyralogo" loading="lazy"/></span>
            <span><Image className={"social-logo-1"} src={bl} alt="zyralogo" loading="lazy"/></span>
          </div>
          <h6></h6>
          <p>ZYRATEAM @ {currentYear}. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}
