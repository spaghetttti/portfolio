import { useState, useEffect } from 'react'
import AnimatedLetters from '../../components/animated-letters/animated-letter.component'
import './about.styles.scss'
import Loader from '../../components/loader/loader.component'
import Cube1 from '../../components/cube/cube1.component'
import DownloadFiles from '../../components/download-files/download-files.component'

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
        <DownloadFiles/>
      </div>
      <Cube1/>
    </div>
    <Loader/>
    </>
  )
}

export default About
