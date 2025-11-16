"use client";
import Image from "next/image";
import { StaticImageData } from "next/image";

import logo1 from "../../public/logo/logo-named.png";
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

import { useEffect, useState, useCallback } from "react";

import Link from "next/link";

import RandomMover from "./components/random-mover";
const WEBSITE_LOADER_TIME = 0;

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

export default function Home() {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, WEBSITE_LOADER_TIME * 1000);

    return () => clearTimeout(timer);
  }, []);

  const currentYear = new Date().getFullYear();
  const [isMenuActive, SetIsMenuActive] =  useState(false);

  const handleMenu = () => {
    console.log(isMenuActive);
    SetIsMenuActive(prev => !prev);
  }

  const [isMobile, setIsMobile] = useState<boolean | null>(null);

  useEffect(() => {
      const updateMobileStatus = () => {
          if(window.innerWidth <= 500){
              setIsMobile(true) 
          }else{
              setIsMobile(false); 
          };
      };
      updateMobileStatus(); // check on load
      window.addEventListener("resize", updateMobileStatus);
      return () => window.removeEventListener("resize", updateMobileStatus);
  }, []);

  const [show, setShow] = useState<boolean>(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = useCallback(() => {
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
        className="header-head">
        <motion.nav
          initial={{ scale: 0 }} animate={{ scale: 1 }}
      >
          <div>
            <Image className={"img"} src={logo1} alt="logo-text" loading="lazy" />
          </div>
          <span></span>
          <div>
            <ul>
              <li><p>Docs</p></li>
              <li><p>News</p></li>
              <li><p>$Zyra</p></li>
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
        
        <div className={isMenuActive ? "menu-option-open" : "menu-option-close" }>
          <ul>
            <li onClick={handleMenu}><p>Docs</p></li>
            <li onClick={handleMenu}><p>News</p></li>
            <li onClick={handleMenu}><p>$Zyra</p></li>
            <li onClick={handleMenu}><p>Whitepaper</p></li>
          </ul>
        </div>
        
        <div onClick={handleMenu} className={isMenuActive ? "overlay-open" : "overlay-close"}></div>     
      </motion.header>
      <main className="main-body">
        < RandomMover />
        < RandomMover />
        
        <section>
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
              <p>A dedicated team, constantly improving what we have to offer.</p>
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
