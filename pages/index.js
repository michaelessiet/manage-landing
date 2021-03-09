import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useState } from "react";

export default function Home() {
  const [input, setInput] = useState("");
  const [error, setError] = useState("");

  const logosrc = "/images/logo.svg";
  const navbaricon = ["/images/icon-hamburger.svg", "/images/icon-close.svg"];
  const [navbarToggleState, setnavbarToggleState] = useState(false);
  const socialicons = [
    "/images/icon-facebook.svg",
    "/images/icon-twitter.svg",
    "/images/icon-instagram.svg",
    "/images/icon-youtube.svg",
    "/images/icon-pinterest.svg",
  ];
  const avatar_urls = [
    "/images/avatar-ali.png",
    "/images/avatar-anisha.png",
    "/images/avatar-richard.png",
    "/images/avatar-shanai.png",
  ];

  const avatar = (index) => {
    return <Image src={avatar_urls[index]} height={90} width={90} />;
  };
  const handleChange = (event) => {
    setInput(event.target.value);
  };
  const toggleNav = () => {
    setnavbarToggleState(!navbarToggleState);
  };
  const selectNavIcon = () => {
    if (navbarToggleState == true) return navbaricon[1];
    return navbaricon[0];
  };
  const displayNav = () => {
    if (navbarToggleState == false) return styles.navbarflex;
    return styles.navbaropen;
  };
  const lockScroll = () => {
    if (navbarToggleState == true) return styles.containernavopen;
    return styles.container;
  };
  const handleSubmit = (event) => {
    if (
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
        input
      )
    )
      return event.preventDefault();
    event.preventDefault();
    console.log("something is wrong");
    return setError("Please input a valid email address");
  };
  return (
    <div>
      <Head>
        <link rel="icon" href="/images/favicon-32x32.png" sizes="32x32" />
        <title>Frontend Mentor | Manage landing page</title>
      </Head>
      <div className={lockScroll()}>
        <div className={styles.tabletsvgcontainer1}>
          <img
            src="/images/bg-tablet-pattern.svg"
            className={styles.tabletsvg1}
            alt=""
          />
        </div>
        <div className={styles.tabletsvgcontainer2}>
          <img
            src="/images/bg-tablet-pattern.svg"
            className={styles.tabletsvg2}
            alt=""
          />
        </div>
        <img src={logosrc} className={styles.mobilelogo} alt="" />
        <div onClick={toggleNav} className={styles.navbariconcontainer}>
          <img src={selectNavIcon()} className={styles.navbaricon} alt="" />
        </div>
        <div className={styles.navbarcontainer}>
          <div className={displayNav()}>
            <div className={styles.navbarrow}>
              <img src={logosrc} className={styles.navbarlogo} alt="" />
              <ul className={styles.navbarlinklist}>
                <li>
                  <a className={styles.navbaritem} href="">
                    Pricing
                  </a>
                </li>
                <li>
                  <a className={styles.navbaritem} href="">
                    Products
                  </a>
                </li>
                <li>
                  <a className={styles.navbaritem} href="">
                    About Us
                  </a>
                </li>
                <li>
                  <a className={styles.navbaritem} href="">
                    Careers
                  </a>
                </li>
                <li>
                  <a className={styles.navbaritem} href="">
                    Community
                  </a>
                </li>
              </ul>
              <button className={styles.getstartedbutton}>Get Started</button>
            </div>
          </div>
        </div>
        <section className={styles.firstsection}>
          <div className={styles.bringeverybody}>
            <h1>Bring everyone together to build better products.</h1>
            <p>
              Manage makes it simple for software teams to plan day-to-day tasks
              while keeping the larger team goals in view.
            </p>
            <button className={styles.getstartedbutton}>Get Started</button>
          </div>
          <div className={styles.firstcharts}>
            <img src="/images/illustration-intro.svg" alt="" />
          </div>
        </section>
        <section className={styles.secondsection}>
          <div className={styles.whatsdifferent}>
            <h2>What's different about manage?</h2>
            <p>
              Manage provides all the functionality your team needs, without the
              complexity. Our software is tailor-made for modern digital product
              teams.
            </p>
          </div>
          <div className={styles.listgrid}>
            <div className={styles.listgriditem}>
              <h3>01</h3>
              <div className={styles.listgriddef}>
                <h3>Track company-wide progress</h3>
                <p>
                  See how your day-to-day tasks fit into the wider vision. Go
                  from tracking progress at the milestone level all the way done
                  to the smallest of details. Never lose sight of the bigger
                  picture again.
                </p>
              </div>
            </div>
            <div className={styles.listgriditem}>
              <h3>02</h3>
              <div className={styles.listgriddef}>
                <h3>Advanced built-in reports</h3>
                <p>
                  Set internal delivery estimates and track progress toward
                  company goals. Our customisable dashboard helps you build out
                  the reports you need to keep key stakeholders informed.
                </p>
              </div>
            </div>
            <div className={styles.listgriditem}>
              <h3>03</h3>
              <div className={styles.listgriddef}>
                <h3>Everything you need in one place</h3>
                <p>
                  Stop jumping from one service to another to communicate, store
                  files, track tasks and share documents. Manage offers an
                  all-in-one team productivity solution.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.testimonysection}>
          <h2>What they've said</h2>
          <div className={styles.testimonycontainer}>
            <div className={styles.testimony}>
              {avatar(0)}
              <h3>Ali Bravo</h3>
              <p>
                “We have been able to cancel so many other subscriptions since
                using Manage. There is no more cross-channel confusion and
                everyone is much more focused.”
              </p>
            </div>
            <div className={styles.testimony}>
              {avatar(1)}
              <h3>Anisha Li</h3>
              <p>
                “Manage has supercharged our team’s workflow. The ability to
                maintain visibility on larger milestones at all times keeps
                everyone motivated.”
              </p>
            </div>
            <div className={styles.testimony}>
              {avatar(2)}
              <h3>Richard Watts</h3>
              <p>
                “Manage allows us to provide structure and process. It keeps us
                organized and focused. I can’t stop recommending them to
                everyone I talk to!”
              </p>
            </div>
            <div className={styles.testimony}>
              {avatar(3)}
              <h3>Shanai Gough</h3>
              <p>
                “Their software allows us to track, manage and collaborate on
                our projects from anywhere. It keeps the whole team in-sync
                without being intrusive.”
              </p>
            </div>
          </div>
          <button className={styles.getstartedbutton}>Get Started</button>
        </section>
        <section className={styles.simplify}>
          <h1>Simplify how your team works today.</h1>
          <button className={styles.inversegetstarted}>Get Started</button>
        </section>
        <footer className={styles.footer}>
          <div className={styles.footer1}>
            <img src={logosrc} alt="" />
            <span className={styles.socialrow}>
              {socialicons.map((value, index) => {
                return (
                  <img
                    src={value}
                    key={index}
                    className={styles.socialicon}
                    alt=""
                  />
                );
              })}
            </span>
          </div>
          <div className={styles.footerlinks}>
            <div className={styles.footer2}>
              <ul>
                <li>
                  <a href="">Home</a>
                </li>
                <li>
                  <a href="">Pricing</a>
                </li>
                <li>
                  <a href="">Products</a>
                </li>
                <li>
                  <a href="">About Us</a>
                </li>
              </ul>
            </div>
            <div className={styles.footer3}>
              <ul>
                <li>
                  <a href="">Careers</a>
                </li>
                <li>
                  <a href="">Community</a>
                </li>
                <li>
                  <a href="">Privacy Policy</a>
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.footer4}>
            <form
              onSubmit={handleSubmit}
              action=""
              className={styles.emailform}
            >
              <input
                type="text"
                required
                placeholder="Input E-mail here"
                className={styles.input}
                value={input}
                onChange={handleChange}
              />
              <button
                onSubmit={handleSubmit}
                type="submit"
                className={styles.getstartedbutton}
              >
                Go
              </button>
              <p className={styles.errorMessage}>{error}</p>
            </form>
            <p className={styles.copyright}>
              Copyright 2020. All Rights Reserved
            </p>
          </div>
          <p className={styles.outcopyright}>
            Copyright 2020. All Rights Reserved
          </p>
          <div className={styles.attribution}>
            Challenge by{" "}
            <a
              href="https://www.frontendmentor.io?ref=challenge"
              target="_blank"
            >
              Frontend Mentor
            </a>
            . Coded by{" "}
            <a href="https://twitter.com/emsaa2002" target="_blank">
              Michael Essiet
            </a>
            .
          </div>
        </footer>
      </div>
    </div>
  );
}
