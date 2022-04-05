import React, { useRef } from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_omzi64e",
        "template_uo3k4hm",
        form.current,
        "OCapNqypGP8cgqB6p"
      )
      .then(
        (result) => {
          alert("Message envoyé");
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };
  return (
    <section id="contact">
      <h5>Contact</h5>
      <h2>Contactez Moi</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>christophemas74@gmail.com</h5>
            <a href="mailto:christophemas74@gmail.com">Envoyer un Email</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>WhatsApp</h4>
            <h5>+33 627 883 153</h5>
            <a
              href="https://api.whatsapp.com/send?phone=+33627883153"
              target="_blank"
            >
              Envoyer un message
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Votre nom et votre prénom"
            required
          />
          <input type="email" name="email" placeholder="Votre Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Votre Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Envoyer le message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
