import { useState, useEffect } from "react";
import "./boot-screen.styles.scss";

const asciiArt = `                                                                                                                                                    
                                                                                    @@    @@@@@@@@@@@@@@@@@@@@@@@@@@@@@                             
                                                                                    @                                 @@@@                          
                                                                                    @  @@@@@@@@@@@@@@@@@@@@           @   @@                        
                                                                                    @    @     @@@@@@@@@@@@@@@@@@@@@  @ @ @                         
                                                                                    @ @ @@ @@@                    @@  @ @ @@@                       
                                                                                    @ @ @  @                     @ @  @ @ @  @@                     
                                                      @@     @@@    @@@@@          @@ @ @                        @    @ @ @    @                    
                                               @@@@@@            @        @@       @  @ @ @                      @   @@ @      @                    
                                         @@@@@@@   @           @    @@   @@ @@@@@@@@  @ @ @                      @   @  @      @                    
                                    @@@@    @  @@     @@@@@ @@@@ @      @@ @@  @   @  @ @                        @   @ @       @                    
                                 @@@      @@   @   @@       @  @      @@    @@@ @@ @  @ @                        @   @ @      @@                    
                            @@@@@       @@  @@    @          @ @@@@@@@       @@ @  @ @  @                       @    @ @      @@                    
                          @@@        @@@  @ @   @           @                 @@ @@@ @ @                        @ @  @ @      @                     
                    @@@    @@@@    @  @ @  @ @  @@@@@@@@@@@@         @@      @@ @    @  @@@@@@@@                @ @  @ @      @                     
                @@@    @@@@      @@ @@  @ @ @@                           @@@ @   @@  @@@        @@@@@@@@@@@@@@  @ @          @@                     
                       @@        @ @ @  @ @ @ @@ @@@                    @@  @@    @                @@               @ @   @@                        
                   @@@@ @@@@   @@@  @@@@@       @@  @@@@@@@@@    @@ @@@@@ @ @@@@@@@@@@@@@@@                      @  @ @   @@@@@                     
              @@@  @@@@@       @ @@ @    @@@@@@    @@@ @    @@@@@@  @    @ @  @ @       @@@@@@@@@@@@@@@         @   @   @@@    @@@                  
              @@@      @@@@@  @       @ @  @  @ @@@   @ @  @  @@  @@@@@ @@@@@@  @  @@@           @@ @@@@@@@@@@@@@@  @@@@   @@   @@                  
                   @@@@@@     @@ @@ @@@@ @@  @ @@@@@@@   @@ @@  @@@@          @@@                                @@@@   @@      @@                  
                @@     @ @@@@  @@@ @@@  @  @@    @      @@@   @@@      @@@@@@     @@@@@@@@@          @@@@@@@ @@       @        @@                   
                       @@       @@  @ @@   @  @ @@ @@@@    @@@@     @@@@@@    @@@           @@@@@@@@        @@@@@@@@  @     @@  @                   
                    @@@ @@@@@@   @@  @   @@  @         @@@@@@  @@@@@  @@     @ @ @ @@ @ @ @ @        @@@@@@@            @@@  @  @                   
                   @@@  @@@        @@  @@    @@@@@@@@@  @@@   @@@@@@@  @@@@@  @ @ @  @ @ @   @@@@ @ @@       @@@@@@@@@@@  @@  @@                    
                           @@        @@@@@@@  @  @@        @@@@  @@       @@@@@@      @@@ @  @ @       @@@ @@  @       @@   @                       
                            @@@         @@@ @    @@  @@@@@@@      @      @@       @@@@@@@ @  @  @@@   @@  @     @ @  @ @ @@                         
                               @@@           @@@@@@@@@  @           @@@@@@                @@@@ @   @@@   @@@@@@@@  @   @@                           
                                 @@@@               @@@@@@@@@@@@@@@@@@@@@  @@@@@@      @@        @@@  @@     @   @   @@                             
                                     @@@@@                                        @@@@@@      @@@              @  @@@                               
                                         @@@@@@@@                            @@@@@@@@    @@@@@@       @@@@   @  @@                                  
                                               @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@                 @@@@@@@     @ @@                                    
                                                                                                       @@@@@@@                                      
                                                                    @@@@                      @@@     @@@     @@@     @@@    @@@@                   
                                                                @@@ @@@@                      @@@     @@@     @@@     @@@                           
                    @@@@@@@    @@@@@@@@@    @@@@@@@@     @@@@@@@@   @@@@ @@@@@     @@@@@@   @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ @@@@                   
                   @@@    @@@  @@@@  @@@@  @@@    @@@  @@@@    @@@  @@@@@ @@@@@  @@@    @@@ @@@@@ @  @@@@    @@@@ @   @@@ @  @@@@                   
                   @@@@@@      @@@    @@@       @@@@@  @@@@   @@@@  @@@@   @@@  @@@@ @@ @@@   @@@     @@@     @@@     @@@    @@@@                   
                     @@@@@@@@  @@@    @@@  @@@@@@ @@@    @@@@@@@    @@@@   @@@  @@@@@@@@  @   @@@     @@@     @@@     @@@    @@@@                   
                          @@@  @@@    @@@  @@@    @@@  @@@          @@@@   @@@  @@@@     @@   @@@     @@@     @@@     @@@    @@@@                   
                   @@@@@@@@@   @@@@@@@@@   @@@@@@@@@@  @@@@@@@@@@@  @@@@   @@@@  @@@@@@@@@    @@@@@@  @@@@@@  @@@@@@  @@@@@@ @@@@                   
                       @@      @@@           @@        @@@      @@@                  @@         @@@     @@@      @@     @@@                         
                               @@@                    @@@@     @@@@                                                                                 
                               @@@                       @@@@@@@                                                                                    `;

const bootLogs = [
  "BIOS Date 06/25/98 Ver: 1.0",
  "CPU: Intel Pentium II @ 233MHz",
  "Memory Test: 65536K OK",
  "",
  "Detecting Primary Master... WDC AC26400B",
  "Detecting Primary Slave... None",
  "Detecting Secondary Master... ATAPI CD-ROM",
  "Detecting Secondary Slave... None",
  "",
  "Starting Windows 98 Parody...",
  "",
  "HIMEM is testing extended memory...",
  "Loading WIN.COM...",
  "Loading system drivers...",
  "[OK] Mouse driver loaded",
  "[OK] Keyboard driver loaded", 
  "[OK] Display adapter initialized",
  "[OK] Sound Blaster 16 detected",
  "[OK] Network adapter initialized",
  "",
  "Compiling SPAGHETTTTI OS...",
  "[OK] React runtime loaded",
  "[OK] Window manager initialized",
  "[OK] Desktop icons loaded",
  "[OK] Native Applications loaded",
  "",
  "System ready.",
];

const BOOT_CACHE_KEY = "spaghetttti_os_booted";
const CACHE_EXPIRATION_MS = 30 * 1000; // 30 seconds

// Check if boot screen should be skipped
export const shouldSkipBoot = () => {
  // Check for ?boot=true URL parameter to force boot screen
  const urlParams = new URLSearchParams(window.location.search);
  if (urlParams.get("boot") === "true") {
    return false; // Don't skip, show boot screen
  }

  const cached = localStorage.getItem(BOOT_CACHE_KEY);
  if (!cached) return false;
  
  const timestamp = parseInt(cached, 10);
  const now = Date.now();
  
  // Check if cache is still valid (within 30 seconds)
  if (now - timestamp < CACHE_EXPIRATION_MS) {
    return true;
  }
  
  // Cache expired, remove it
  localStorage.removeItem(BOOT_CACHE_KEY);
  return false;
};

// Set boot cache
const setBootCache = () => {
  localStorage.setItem(BOOT_CACHE_KEY, Date.now().toString());
};

const BootScreen = ({ onComplete }) => {
  const [visibleLines, setVisibleLines] = useState([]);
  const [showCursor, setShowCursor] = useState(true);
  const [phase, setPhase] = useState("booting"); // "booting" | "ascii" | "waiting"

  // Boot logs phase
  useEffect(() => {
    if (phase !== "booting") return;

    const totalTime = 2500;
    const delayPerLine = totalTime / bootLogs.length;

    let lineIndex = 0;
    const interval = setInterval(() => {
      if (lineIndex < bootLogs.length - 1) {
        setVisibleLines((prev) => [...prev, bootLogs[lineIndex]]);
        lineIndex++;
      } else {
        clearInterval(interval);
        setTimeout(() => {
          setPhase("ascii");
        }, 300);
      }
    }, delayPerLine);

    return () => clearInterval(interval);
  }, [phase]);

  // Cursor blink
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  // ASCII to waiting transition
  useEffect(() => {
    if (phase === "ascii") {
      const timer = setTimeout(() => {
        setPhase("waiting");
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [phase]);

  // Handle key/click in waiting phase
  useEffect(() => {
    if (phase !== "waiting") return;

    const handleInteraction = () => {
      setBootCache(); // Cache the boot completion
      onComplete();
    };

    window.addEventListener("keydown", handleInteraction);
    window.addEventListener("click", handleInteraction);
    window.addEventListener("touchstart", handleInteraction);

    return () => {
      window.removeEventListener("keydown", handleInteraction);
      window.removeEventListener("click", handleInteraction);
      window.removeEventListener("touchstart", handleInteraction);
    };
  }, [phase, onComplete]);

  // ASCII art / waiting screen
  if (phase === "ascii" || phase === "waiting") {
    return (
      <div className="boot-screen ascii-phase">
        <div className="ascii-content">
          <pre className="ascii-art">{asciiArt}</pre>
          {phase === "waiting" && (
            <div className={`press-key ${showCursor ? "visible" : ""}`}>
              Press any key to start...
            </div>
          )}
        </div>
      </div>
    );
  }

  // Boot logs screen
  return (
    <div className="boot-screen">
      <div className="boot-content">
        {visibleLines.map((line, index) => (
          <div key={index} className={`boot-line ${line.startsWith("[OK]") ? "success" : ""}`}>
            {line}
          </div>
        ))}
        <span className={`cursor ${showCursor ? "visible" : ""}`}>_</span>
      </div>
    </div>
  );
};

export default BootScreen;
