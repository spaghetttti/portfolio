import { useEffect, useState } from 'react'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import AnimatedLetters from '../../components/animated-letters/animated-letter.component'
import './contact.styles.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faGithubSquare,
  faInstagramSquare,
  faTelegram,
} from '@fortawesome/free-brands-svg-icons'
import Loader from '../../components/loader/loader.component'


const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const form = useRef()

  useEffect(() => {
    const AnimateHover = setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 4000);
    return () => clearTimeout(AnimateHover);
  }, []);

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_f7gpwig',
        'template_1pdwbmh',
        form.current,
        'cTFusmlbbi6oj4dfP'
      )
      .then(
        () => {
          alert('Message successfully sent!')
          window.location.reload(false)
        },
        () => {
          alert('Failed to send the message, please try again')
        }
      )
  }

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            I am interested in freelance opportunities or full/part time
            positions. However, if you have other request or question, don't
            hesitate to contact me using below form either.
          </p>
          <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input placeholder="Name" type="text" name="name" required />
                </li>
                <li className="half">
                  <input
                    placeholder="Email"
                    type="email"
                    name="email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className="info-map">
          Asilbek,
          <br />
          Tashkent, Uzbekistan
          <br />
          Email: <span>asil9802mum@gmail.com</span>
          <br />
          Telegram: <span>@spaghetttti</span>
          <br />
          Postal Code: <span>100043</span>
          <br />
          <div className='list'>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://t.me/spaghetttti"
                >
                  <FontAwesomeIcon icon={faTelegram}  />
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/spaghetttti/"
                >
                  <FontAwesomeIcon icon={faGithubSquare}  />
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.instagram.com/spaghetttti_/"
                >
                  <FontAwesomeIcon icon={faInstagramSquare} />
                </a>

          </div>
        </div>
      </div>
      <Loader/>
    </>
  )
}

export default Contact
