import {
  AboutWrapper,
  HighlightAlt,
  HighlightSpan,
} from "../styles/About.styled";

const About = () => {
  return (
    <AboutWrapper data-testid="about">
      <p>
        Hi, my name is <HighlightSpan>Asilbek Muminov</HighlightSpan>!
      </p>
      <p>
        I'm <HighlightAlt>a Software Engineer</HighlightAlt> based in Paris,
        France.
      </p>
      <p>
        With 4+ years of experience in full-stack development, <br />
        I build scalable systems and user-focused applications.
      </p>
    </AboutWrapper>
  );
};

export default About;
