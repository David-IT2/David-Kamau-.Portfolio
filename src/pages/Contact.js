import React, { useState } from "react";
import email from "../assets/icons/gmail.png";
import LinkedIn from "../assets/icons/linkedin.png";
import github from "../assets/icons/github.png";
import ContactForm from "../components/ContactForm";

function EmailWithCopy({ soc }) {
  const [copied, setCopied] = useState(false);
  const email = soc.link ? soc.link.replace("mailto:", "") : "";

  const handleCopy = async () => {
    if (!email) return;
    try {
      await navigator.clipboard.writeText(email);
    } catch (e) {
      const el = document.createElement("textarea");
      el.value = email;
      document.body.appendChild(el);
      el.select();
      document.execCommand("copy");
      document.body.removeChild(el);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="emailCopy">
      <div className="emailLeft">
        <img src={soc.image} alt="email icon" />
        <a className="emailAddress" href={soc.link} target="_blank" rel="noopener noreferrer">
          {email}
        </a>
      </div>
      <button
        className="copyButton"
        type="button"
        onClick={handleCopy}
        aria-label={`Copy ${email}`}
        title={copied ? "Copied" : "Copy email"}
      >
        {copied ? (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        ) : (
          <svg className="clipboard" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16 4h2a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <rect x="8" y="2" width="8" height="4" rx="1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        )}
      </button>
    </div>
  );
}

function Contact() {
  const mySocials = [    {
      image: email,
      title: "Gmail",
      link: "mailto:davidkamauw90@gmail.com",
    },
    {
      image: LinkedIn,
      title: "LinkedIn",
      link: "https://www.linkedin.com/in/david-kamau-82493b357",
    },
    {
      image: github,
      title: "Github",
      link: "https://github.com/David-IT2",
    },
  ];
  return (
    <div>
      <div className="contactIntro">
        <h1 className="animate__animated animate__backInDown">
          Let's Get in Touch
        </h1>
        <p className="animate__animated animate__backInLeft">
          Thank you for visiting my portfolio website! I appreciate your
          interest and would love to hear from you. Whether you have a question,
          a project proposal, or simply want to connect, this is the perfect
          place to get in touch.
        </p>
        <p className="animate__animated animate__backInLeft">
          Remember, no matter how big or small your query is, it is important to
          me. Let's embark on a productive and creative journey together!
        </p>
        <p className="animate__animated animate__backInLeft">
          Thank you once again for visiting my portfolio website. I look forward
          to hearing from you soon.
        </p>

        <div className="mySocials animate__animated animate__backInRight">
          
          <div className="socialsList">
            {mySocials.map((soc, index) => (
              <li key={index}>
                {soc.link && soc.link.startsWith("mailto:") ? (
                  <EmailWithCopy soc={soc} />
                ) : (
                  <>
                    <span>
                      <img src={soc.image} alt="socials" />
                    </span>
                    <a href={soc.link} target="_blank" rel="noopener noreferrer">
                      {soc.title}
                    </a>
                  </>
                )}
              </li>
            ))}
          </div>
        </div>
      </div>
      <div className="contactForm animate__animated animate__backInRight">
        <h2>Send me a message</h2>
        <ContactForm />
      </div>
    </div>
  );
}

export default Contact;
