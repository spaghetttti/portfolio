import {
  Cmd,
  HeroContainer,
  Link,
  PreName,
  PreNameMobile,
  PreWrapper,
  Seperator,
} from "../styles/Welcome.styled";

const Welcome = () => {
  return (
    <HeroContainer data-testid="welcome">
      <div className="info-section">
        <PreName>
          {`        
    ___         _  ____         __  
   /   | _____ (_)/ / /_  ___  / /__
  / /| |/ ___// / / / __ \\/ _ \\/ //_/
 / ___ (__  )/ / / / /_/ /  __/ ,<   
/_/  |_/____/_/_/_/_.___/\\___/_/|_|  
                                     
          `}
        </PreName>
        <PreWrapper>
          <PreNameMobile>
            {`
    ___         _  __
   /   | _____ (_)/ /
  / /| |/ ___// / / 
 / ___ (__  )/ / /  
/_/  |_/____/_/_/   
                    
          `}
          </PreNameMobile>
        </PreWrapper>
        <div>Welcome to my terminal portfolio.</div>
        <Seperator>----</Seperator>
        <div>
          Software Engineer with 4+ years of experience.{" "}
          <Link href="https://github.com/spaghetttti">
            GitHub
          </Link>
          {" | "}
          <Link href="https://linkedin.com/in/asil-muminov">
            LinkedIn
          </Link>
        </div>
        <Seperator>----</Seperator>
        <div>
          For a list of available commands, type `<Cmd>help</Cmd>`.
        </div>
        <div>
          Or type `<Cmd>gui</Cmd>` to go back to GUI mode.
        </div>
      </div>
    </HeroContainer>
  );
};

export default Welcome;
