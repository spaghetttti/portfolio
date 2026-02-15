import { useEffect, useState } from 'react'
import AnimatedLetters from '../../components/animated-letters/animated-letter.component'
import Logo from '../../components/logo/logo.component'
import LogoAwhite from '../../assets/Awhite.svg'

import './home.styles.scss'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const nameArray = ['s', 'i', 'l', ',']
  const jobArray1 = ['a', ' ', 'w', 'e', 'b', ' ']
  const jobArray2 = ['d', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r', '.']

  useEffect(() => {

    const AnimateHover = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000);
    return () => clearTimeout(AnimateHover)
  }, [])

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>e</span>
            <span className={`${letterClass} _13`}>l</span>
            <span className={`${letterClass} _14`}>l</span>
            <span className={`${letterClass} _15`}>o,</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>
            <img src={LogoAwhite} alt="A" />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            <br />
            <AnimatedLetters letterClass={letterClass} strArray={jobArray1} idx={19}/>
            <div className="new-line"></div>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray2}
              idx={25}
            />
          </h1>
          <h2> Full Stack Developer</h2>
          <a href="mailto:asil9802mum@gmail.com" className="flat-button">
            CONTACT ME
          </a>
        </div>
        <div className="overall-logo">
        <Logo />
        <svg
          id="logo1"
          width="448"
          height="620"
          viewBox="0 0 448 620"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M225.258 2L331.145 79.4348L445.491 457.83L388.992 498.563L328.56 457.363L312.483 400.723L274.402 428.177L272.988 582.197L223.746 617.698L170.252 579.132V426.132L97.0976 373.391L60.0352 496.912L60.3127 497.307L58.5123 498.573L2 457.83L116.349 79.424L224.37 2.63095L224.376 2.62668L225.258 2ZM118.464 82.7953L5.49101 456.649L57.692 494.283L95.4348 368.494L173.252 424.596V577.596L222.246 612.919V157.617L118.464 82.7953ZM223.75 154.997L327.302 80.3406L225.238 5.70176L121.305 80.3578L223.75 154.997ZM329.027 82.7953L225.246 157.617V612.919L270.002 580.651L271.417 426.631L352.056 368.494L389.799 494.283L442 456.649L329.027 82.7953ZM386.314 493.107L350.393 373.391L315.072 398.856L331.149 455.497L386.314 493.107ZM295.702 180.679L335.841 314.451L272.043 358.476L273.526 196.938L295.702 180.679ZM275.841 271.537L275.761 280.256L277.882 278.808L275.841 271.537ZM279.649 281.234L275.728 283.911L275.096 352.724L331.369 313.892L279.649 281.234ZM331.501 310.427L280.905 278.479L275.94 260.786L276.513 198.468L294.05 185.61L331.501 310.427ZM151.679 181.044L173.252 196.729V355.993L112.186 312.665L151.679 181.044ZM153.336 185.959L115.679 311.464L170.252 350.186V264.691L169.851 264.584L170.252 263.073V198.257L153.336 185.959Z"
            fill="#722929"
            stroke="#722929"
            stroke-width="3"
          />
        </svg>
        </div>
      </div>
      {/* <div className="box">
        <div className="plane"></div>
      </div> */}
      {/* <Loader/> */}
    </>
  )
}

export default Home
