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
Microsoft Windows 98 [Version 4.10.1998]
(C) Copyright Microsoft Corp 1981-1998.

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
Win98 [v4.10]

 ___       _ __
/   | ___ (_) /
/ /| |(__  / / 
/_/ |____/_/_/ 
          `}
          </PreNameMobile>
        </PreWrapper>
        <Seperator>----</Seperator>
        <div>Asilbek's Terminal Portfolio v1.0</div>
        <div>Software Engineer | Backend/DevSecOps @ Orange</div>
        <Seperator>----</Seperator>
        <div>
          <Link href="https://github.com/spaghetttti">
            GitHub
          </Link>
          {" | "}
          <Link href="https://linkedin.com/in/asil-muminov">
            LinkedIn
          </Link>
          {" | "}
          <Link href="mailto:asil9802mum@gmail.com">
            Email
          </Link>
        </div>
        <Seperator>----</Seperator>
        <div>
          Type '<Cmd>help</Cmd>' to see available commands.
        </div>
      </div>
    </HeroContainer>
  );
};

export default Welcome;
