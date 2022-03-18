import "./App.scss";
import Photo from "./images/photo2.jpg";
import NeonLogo from "./images/neon-logo.png";
import Project1Image from "./images/project-1c.png";
import Project2Image from "./images/project-2.png";
import Project3Image from "./images/project-3b.png";
import SingleProject from "./SingleProject";
import html5Image from "./images/tools/html5.png";
import jsImage from "./images/tools/js.png";
import bootstrapImage from "./images/tools/bootstrap.png";
import gimpImage from "./images/tools/gimp.png";
import gitImage from "./images/tools/git.png";
import npmImage from "./images/tools/npm.png";
import reactImage from "./images/tools/react.png";
import sassImage from "./images/tools/sass.png";
import typescriptImage from "./images/tools/typescript.png";
import SingleTool from "./SingleTool";
import { send } from "emailjs-com";
import { useState, useEffect } from "react";
import { Modal } from "react-bootstrap";
import FacebookIcon from "./images/facebookIcon";
import TwitterIcon from "./images/twitterIcon";
import InstagramIcon from "./images/instagramIcon";
import hamburgerIcon from "./images/hamburger.svg";

const projects = [
  {
    name: "Fifi Store",
    desc: "Single page app of a store with clothes made with HTML5, SCSS, JS",
    image: Project1Image,
    live: "https://fifi-store.netlify.app/",
    code: "https://github.com/FilipKrolikowski/fifi-store",
  },
  {
    name: "Todo App",
    desc: "Simple app to create your to-do list",
    image: Project2Image,
    live: "https://filipkrolikowski.github.io/todo-list-app/",
    code: "https://github.com/FilipKrolikowski/todo-list-app",
  },
  {
    name: "Creator.menu",
    desc: "Complex app to create beautiful web pages for user's restaurants, available to print menu cards and special event projects based on thousands designs and styles",
    image: Project3Image,
    live: "https://creator.menu/",
    code: "",
  },
];

const tools = [
  {
    name: "HTML5",
    logo: html5Image,
  },
  {
    name: "JAVASCRIPT",
    logo: jsImage,
  },
  {
    name: "CSS/SCSS",
    logo: sassImage,
  },
  {
    name: "REACT",
    logo: reactImage,
  },
  {
    name: "TYPESCRIPT",
    logo: typescriptImage,
  },
  {
    name: "BOOTSTRAP",
    logo: bootstrapImage,
  },
  {
    name: "GIT",
    logo: gitImage,
  },
  {
    name: "NPM",
    logo: npmImage,
  },
  {
    name: "GIMP",
    logo: gimpImage,
  },
];

const sections = [
  {
    href: "#about-me",
    name: "About me",
  },
  {
    href: "#my-projects",
    name: "My projects",
  },
  {
    href: "#what-i-use",
    name: "What I use",
  },
  {
    href: "#contact",
    name: "Contact",
  },
];

function App() {
  const [showModal, setShowModal] = useState(false);
  const [toSend, setToSend] = useState({
    from_name: "",
    message: "",
    reply_to: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [animateHeader, setAnimateHeader] = useState(false);
  const [showNav, setShowNav] = useState(false);
  const [isContentLoaded, setIsContentLoaded] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    send("service_6eht945", "template_ni2rimf", toSend, "OUXhlS0hyXbd98Ype")
      .then(() => {
        setToSend({
          from_name: "",
          message: "",
          reply_to: "",
        });
        setShowModal(true);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  const balls = () => {
    const shadows = [
      "0 0 40px 20px #fff, 0 0 100px 50px #ff0",
      "0 0 40px 20px #fff, 0 0 100px 50px #f0f",
      "0 0 40px 20px #fff, 0 0 100px 50px #0ff",
    ];

    const numBalls = 130;
    const balls = [];

    for (let i = 0; i < numBalls; i++) {
      let ball = document.createElement("div");
      ball.classList.add("ball");
      ball.style.boxShadow = shadows[Math.floor(Math.random() * shadows.length)];
      ball.style.background = "#fff";
      ball.style.left = `${Math.floor(Math.random() * 100)}vw`;
      ball.style.top = `${Math.floor(Math.random() * 100)}vh`;
      ball.style.transform = `scale(${Math.random()})`;
      ball.style.width = `${Math.random() * 4}em`;
      ball.style.height = ball.style.width;

      balls.push(ball);
      document.querySelector(".background-video-container").append(ball);
    }

    balls.forEach((el, i, ra) => {
      let to = {
        x: Math.random() * (i % 2 === 0 ? -11 : 11),
        y: Math.random() * 12,
      };

      let anim = el.animate([{ transform: "translate(0, 0)" }, { transform: `translate(${to.x}rem, ${to.y}rem)` }], {
        duration: (Math.random() + 1) * 1400,
        direction: "alternate",
        fill: "both",
        iterations: Infinity,
        easing: "ease-in-out",
      });
    });
  };

  const animate = () => {
    const elementsToShow = document.querySelectorAll(".animated-element");
    elementsToShow.forEach((el) => {
      if (isElementInViewport(el)) {
        el.classList.add("animate-element");
      }
    });
  };

  const isElementInViewport = (el) => {
    const rect = el.getBoundingClientRect();
    return (
      (rect.top <= 0 && rect.bottom >= 0) ||
      (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.top <= (window.innerHeight || document.documentElement.clientHeight)) ||
      (rect.top >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
    );
  };

  const closeNav = (e) => {
    if (!e.target.classList.contains("nav-link-container") || !e.target.classList.contains("side-nav")) {
      setShowNav(false);
    }
  };

  useEffect(() => {
    document.body.style.overflowY = "hidden";
    balls();
    window.onload = () => {
      setIsContentLoaded(true);
      document.body.style.overflowY = "auto";
      setTimeout(() => {
        setAnimateHeader(true);
      }, 1300);
    };
    window.addEventListener("scroll", animate);
  }, []);

  useEffect(() => {
    if (showNav) {
      window.addEventListener("click", closeNav);
    }
    return () => {
      window.removeEventListener("click", closeNav);
    };
  }, [showNav]);

  return (
    <>
      <div>
        <div
          className={`spinner text-center d-flex align-items-center justify-content-center ${
            isContentLoaded ? "hide-loading" : "show-loading"
          }`}
        >
          <div>
            <p>l</p>
            <p>o</p>
            <p>a</p>
            <p>d</p>
            <p>i</p>
            <p>n</p>
            <p>g</p>
          </div>
        </div>
      </div>
      <div className="portfolio">
        <div
          onClick={() => setShowNav(true)}
          className={`hamburger-btn-container d-block d-lg-none ${showNav ? "invisible" : "visible"}`}
        >
          <img src={hamburgerIcon} alt="" className="hamburger-btn" />
        </div>
        <Modal show={showModal} size="lg" centered onHide={handleClose}>
          <Modal.Header className="border-0 pb-0 portfolio-modal" closeButton></Modal.Header>
          <Modal.Body className="portfolio-modal">
            <div className="portfolio-modal-content text-center w-100">
              Thank you for contacting me, I will answer as soon as possible! :)
            </div>
          </Modal.Body>
          <Modal.Footer className="border-0 portfolio-modal"></Modal.Footer>
        </Modal>
        <div className={`side-nav d-flex flex-column ${showNav ? "show-side-nav" : "hide-side-nav"}`}>
          <span className="close-btn ms-auto" onClick={() => setShowNav(false)}>
            &#x2715;
          </span>
          {sections.map((section) => (
            <div key={section.name} className="my-4 nav-link-container">
              <a className="text-decoration-none side-nav-link" href={section.href} onClick={() => setShowNav(false)}>
                {section.name}
              </a>
              <div className="side-nav-border"></div>
            </div>
          ))}
        </div>
        <div className="header">
          <div className="background-video-container d-none d-md-block"></div>
          <div className="mobile-overlay d-block d-md-none"></div>
          <div className="video-overlay"></div>
          <div className={`text-container text-uppercase text-nowrap ${animateHeader ? "show-header" : "hide-header"}`}>
            <div className="title">
              front-end <br /> developer
              <div className="small-title">
                front end <br /> developer
              </div>
            </div>
            <div className="name text-center">Filip Królikowski</div>
            <div className="d-flex justify-content-center mt-5">
              <a href="#contact" className="text-decoration-none">
                <button type="button" className="custom-btn">
                  hire me
                </button>
              </a>
            </div>
          </div>
        </div>
        <div id="about-me" className="section d-flex flex-column align-items-center py-5 my-5">
          <div className="logo-container mt-4">
            <img src={NeonLogo} alt="" className="logo" />
          </div>
          <div className="logo-text mt-2">
            <span className="about">About</span>
            <span className="me"> me</span>
          </div>
          <div className="about-title mt-5 text-center w-75 animated-element">
            <span>front-end</span> developer
          </div>
          <div className="text-and-photo mt-5 align-items-center d-flex flex-column align-items-center">
            <div className="photo-container my-5 animated-element">
              <img src={Photo} alt="" className="photo" />
            </div>
            <div className="text mt-4 animated-element">
              Hi, my name is Filip Królikowski. I'm a 24 years old, full of enthusiasm, self-taught coding, Front End
              Developer. Highly skilled in HTML/CSS/JavaScript/React and working knowledge of Typescript, Photoshop and
              Gimp.
              <div className="mt-3">
                I started learning how to code in 2020, while studying National Security. After half year I really liked
                it and I decided that this is the thing I want to do for living and dropped out of university to have a
                full time job.
              </div>
              <div className="mt-3">
                Today I have 1.5 year of commercial experience building complex apps, working in team and I am looking
                for new challenges!
              </div>
            </div>
          </div>
        </div>
        <div className="small-section d-flex flex-column justify-content-center text-center">
          <div>
            creativity <span className="d-none d-md-inline-block">•</span> passion{" "}
            <span className="d-none d-md-inline-block">•</span> loyalty
          </div>
          <div className="my-3">
            high standards <span className="d-none d-md-inline-block">•</span> self-taught{" "}
            <span className="d-none d-md-inline-block">•</span> ambitious{" "}
          </div>
          <div>
            enthusiasm for work <span className="d-none d-md-inline-block">•</span> efficient{" "}
            <span className="d-none d-md-inline-block">•</span> reliable{" "}
          </div>
        </div>
        <div id="my-projects" className="section d-flex flex-column align-items-center py-5">
          <div className="section-title">my projects</div>
          <div className="row mx-auto mt-3 mt-md-5">
            {projects.map((item) => (
              <SingleProject project={item} key={item.name} />
            ))}
          </div>
        </div>
        <div id="what-i-use" className="section d-flex flex-column align-items-center pb-5">
          <div className="section-title">what i use</div>
          <div className="tools-container mt-5">
            {tools.map((tool) => (
              <SingleTool tool={tool} key={tool.name} />
            ))}
          </div>
        </div>
        <div id="contact" className="section mt-5 d-flex flex-column align-items-center pb-5">
          <div className="section-title">Contact</div>
          <form onSubmit={onSubmit} className="d-flex flex-column contact-form mt-4">
            <label htmlFor="from_name">Name</label>
            <input
              required
              type="text"
              name="from_name"
              placeholder="Name"
              value={toSend.from_name}
              onChange={handleChange}
            />
            <label htmlFor="reply_to">E-mail</label>
            <input
              required
              type="email"
              name="reply_to"
              placeholder="Your email"
              value={toSend.reply_to}
              onChange={handleChange}
            />
            <label htmlFor="message">Message</label>
            <textarea
              required
              type="text"
              name="message"
              placeholder="Your message"
              className="message-input"
              value={toSend.message}
              onChange={handleChange}
            />

            <button
              className="custom-btn mt-3 w-50 mx-auto d-flex align-items-center justify-content-center"
              type="submit"
            >
              {isLoading && <span className="loader me-3"></span>}
              Submit
            </button>
          </form>
        </div>
        <div className="social-icons d-flex justify-content-center mt-4">
          <a href="https://www.facebook.com/filip.krolikowski.391/" target="_blank" className="text-decoration-none">
            <FacebookIcon className="social-icon" />
          </a>
          <a href="https://twitter.com/Filip44636126" target="_blank" className="text-decoration-none">
            <TwitterIcon className="social-icon mx-5" />
          </a>
          <a href="https://www.instagram.com/fit_fifi97/" target="_blank" className="text-decoration-none">
            <InstagramIcon className="social-icon" />
          </a>
        </div>
        <div className="pb-4 footer text-center">
          © 2022 <span>Filip Królikowski</span>
        </div>
      </div>
    </>
  );
}

export default App;
