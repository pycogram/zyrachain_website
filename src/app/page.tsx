"use client";
import Image from "next/image";

import logo1 from "../../public/logo/logo-named.png";
import twitter from "../../public/logo/Twitter.png";
import telegram from "../../public/logo/Telegram.png";
import discord from "../../public/logo/Discord.png";
import utilityPic from "../../public/pic/utility-pic.png";
import teamPic1 from "../../public/pic/team-pic-1.png";
import supportLogoPi from "../../public/pic/pi-network-logo.png";
import supportLogoProvena from "../../public/pic/provena-logo.png";
import zLogoCustom from "../../public/pic/z-logo-custom.png";
import zLogoMain from "../../public/pic/z-logo-main.png";
import xl from "../../public/pic/uil-tumblr-square.png";
import tl from "../../public/pic/uil-telegram.png";
import ll from "../../public/pic/uil-linkedin.png";
import gl from "../../public/pic/uil-github.png";
import ml from "../../public/pic/uil-medium-m.png";
import bl from "../../public/pic/uil-book-alt.png";
import { useState } from "react";

export default function Home() {
  let currentYear = new Date().getFullYear();
  let [isMenuActive, SetIsMenuActive] =  useState(false);

  let handleMenu = () => {
    console.log(isMenuActive);
    SetIsMenuActive(prev => !prev);
  }

  return (
    <>
      <header className="header-head">
        <nav>
          <div>
            <Image className={"img"} src={logo1} alt="logo-text" loading="lazy" />
          </div>
          <span></span>
          <div>
            <ul>
              <li><p>Docs</p></li>
              <li><p>News</p></li>
              <li><p>$Zera</p></li>
            </ul>
            <ul>
              <li>
                <Image className={"icon-x"} src={telegram} alt="telegram" loading="lazy" />
              </li>
              <li>
                <Image className={"icon-x"} src={twitter} alt="twitter" loading="lazy" />
              </li>
              <li>
                <Image className={"icon-x icon-x-discord"} src={discord} alt="discord" loading="lazy" />
              </li>
            </ul>
          </div>
          <span></span>
          <div>
            <button>
              <p>Start</p>
            </button>
            <div>
              <p className={isMenuActive ? "active-menu" : "inactive-menu"} onClick={handleMenu}></p>
            </div>
          </div>
        </nav>
        <div onClick={handleMenu} className={isMenuActive ? "menu-option-open" : "menu-option-close"}>
          <ul>
            <li><p>Docs</p></li>
            <li><p>News</p></li>
            <li><p>$Zera</p></li>
          </ul>
        </div>      
      </header>
      <main className="main-body">
        <section>
          <div>
            <div>
              <h1>The automated chain network on Pi</h1>
            </div>
            <div>
              <h4>Zyrachain is the foundation chain of zyra ecosystem, designed to power and connect all Zyra products.</h4>
              <button>
                <p>Explore</p>
              </button>
            </div>
          </div>

          <div>
            <h2>Vision and Mission</h2>
            <h4>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis, 
              molestias totam corrupti provident sunt, repudiandae tempora iusto 
              earum saepe porro ducimus itaque sequi eveniet fugiat quasi iste ut 
              vitae eaque! Voluptatum soluta nostrum, non distinctio iste ratione impedit? 
              Explicabo, quas. Tempore blanditiis quae unde rem excepturi totam, ab ipsam aliquid, 
              libero sint accusantium iste reiciendis placeat! Ab, saepe! Repellat, earum beatae 
              adipisci ipsa quisquam vel est molestiae dicta inventore tempore nobis repudiandae ab 
              voluptatum dolor alias pariatur suscipit, debitis asperiores sequi deleniti eius quaerat. 
              Officia adipisci, qui harum id molestiae eveniet. Explicabo neque saepe dicta consequatur 
              fugiat fuga, voluptas suscipit vel minus eaque libero voluptates nostrum voluptatem 
              repudiandae obcaecati rem molestiae repellendus eligendi consequuntur aspernatur vitae 
              dolorem delectus. 
            </h4>  
          </div>

          <div>
            <h2>Eco-system</h2>
            <div>
              <span>
                <h4>total user</h4>
                <h3>100,000 +</h3>
              </span>
              <span>
                <h4>products</h4>
                <h3>3 +</h3>
              </span>
              <span>
                <h4>market capitalization</h4>
                <h3>2 billion +</h3>
              </span>
              <span>
                <h4>wallets downloads</h4>
                <h3>2 million +</h3>
              </span>
            </div>
          </div>

          <div>
            <h2>zyrachain utilities</h2>
            <Image className={"utility-pic"} src={utilityPic} alt="utility-img" loading="lazy" />
          </div>

          <div>
            <h2>Core team</h2>
            <p>A dedicated team, constantly improving what we have to offer.</p>
            <div>
              <span>
                <Image className={"team-pic"} src={teamPic1} alt="team-pic-1" />
                <article>
                  <h6>TM</h6>
                  <h5>Software Developer</h5>
                </article>
              </span>
              <span>
                <Image className={"team-pic"} src={teamPic1} alt="team-pic-2" />
                <article>
                  <h6>TM</h6>
                  <h5>Software Developer</h5>
                </article>
              </span>
              <span>
                <Image className={"team-pic"} src={teamPic1} alt="team-pic-3" />
                <article>
                  <h6>TM</h6>
                  <h5>Software Developer</h5>
                </article>
              </span>
              <span>
                <Image className={"team-pic"} src={teamPic1} alt="team-pic-4" />
                <article>
                  <h6>TM</h6>
                  <h5>Software Developer</h5>
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
                  <h6>TM</h6>
                  <h5>Software Developer</h5>
                </article>
              </span>
            </div>
          </div>

          <div>
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
        </section>
      </main>
      <footer className="footer-foot">
        <div>
          <Image className={"logo-custom"} src={zLogoCustom} alt="zyrachain" loading="lazy"/>
        </div>
        <div>
          <div className="social-logo-box">
            <span><Image className={"social-logo-1"} src={tl} alt="zyralogo" loading="lazy"/></span>
            <span><Image className={"social-logo-1"} src={xl} alt="zyralogo" loading="lazy"/></span>
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
