import { useState, useEffect } from 'react'
import AnimatedLetters from '../../components/animated-letters/animated-letter.component'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faNode,
    faSass,
    faGitAlt,
    faHtml5,
    faJsSquare,
    faReact,
  } from '@fortawesome/free-brands-svg-icons'

import './about.styles.scss'
import Loader from '../../components/loader/loader.component'

const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        const AnimateHover = setTimeout(() => {
            setLetterClass('text-animate-hover')
          }, 4000);
          return () => clearTimeout(AnimateHover)
    }, [])


  return (
    <>
    <div className="container about-page">
      <div className="text-zone">
        <h1>
            <AnimatedLetters
            letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
        </h1>
        <p>
          Highly organized and attentive to details 4th year student of the
          branch of "National Research Nuclear University MEPhI" in Tashkent, 
          with a degree in "Nuclear Power Engineering and Thermal Physics",
          seeking an entry-level position as a web developer.
        </p>
        <p>
            I'm confident, naturally curious, highly motivated and constantly
            working on improving my programming skills 
        </p>
        <p>
            Currently working as a freelance full stack web developer, but 
            happy to work and collaborate on more complex projects with other 
            engineers.
        </p>
      </div>

      <div className="stage-cube-cont">
        <div className="cubespinner">
            <div className="face1">
                <FontAwesomeIcon icon={faReact} />
            </div>
            <div className="face2">
                <FontAwesomeIcon icon={faHtml5} />
            </div>
            <div className="face3">
                <FontAwesomeIcon icon={faSass} />
            </div>
            <div className="face4">
                <FontAwesomeIcon icon={faJsSquare} />
            </div>
            <div className="face5">
                <FontAwesomeIcon icon={faGitAlt} />
            </div>
            <div className="face6">
                <FontAwesomeIcon icon={faNode} />
            </div>
        </div>
      </div>
    </div>
    <Loader/>
    </>
  )
}

export default About
