import AsciiWaterSimulation from "@/components/asciiwater" 

const ThemeStyles = () => (
  <style>
    {`
      @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&family=Orbitron:wght@400;700;900&display=swap');

      :root {
        /* New Color Palette from User */
        --bg-dark: #041f1e; /* Dark green */
        --bg-secondary: #1e2d2f; /* Gunmetal */
        --text-primary: #f7dba7; /* Peach yellow */
        --text-secondary: #c57b57; /* Brown sugar */
        --accent-primary: #f1ab86; /* Atomic tangerine */
        --accent-secondary: #f1ab86; /* Atomic tangerine */
        --accent-glow: rgba(241, 171, 134, 0.2);
        --line-dim: rgba(247, 219, 167, 0.1);
        --line-highlight: rgba(241, 171, 134, 0.25);

        /* Typography */
        --font-heading: 'Orbitron', sans-serif;
        --font-body: 'Inter', sans-serif;
      }
    `}
  </style>
);


const GeometricBackground = () => {
  return (
    // This is Layer 2, sitting behind the ASCII art and text
    <div className="absolute inset-0 z-20">
      <div
        id="spotlight"
        className="absolute top-0 left-1/2 -translate-x-1/2 h-[150vh] w-full"
        style={{
          background: 'radial-gradient(ellipse 80% 50% at 50% 0, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0) 60%)'
        }}
      ></div>
      {/* 4 lines creating 5 columns for desktop */}
      <div className="absolute inset-0 hidden md:block">
        <div className="absolute top-0 left-[20%] h-full w-px bg-[var(--line-dim)]"></div>
        <div className="absolute top-0 left-[40%] h-full w-px bg-[var(--line-dim)]"></div>
        <div className="absolute top-0 left-[60%] h-full w-px bg-[var(--line-dim)]"></div>
        <div className="absolute top-0 left-[80%] h-full w-px bg-[var(--line-dim)]"></div>
        
        {/* Highlights for the first 3 lines */}
        <div className="absolute left-[20%] top-[55vh] h-20 w-px bg-[var(--line-highlight)]"></div>
        <div className="absolute left-[40%] top-[55vh] h-20 w-px bg-[var(--line-highlight)]"></div>
        <div className="absolute left-[60%] top-[55vh] h-20 w-px bg-[var(--line-highlight)]"></div>
      </div>
    </div>
  );
};

const HeroContent = () => {
  return (
    <div className="relative h-[80vh] w-full font-[var(--font-body)]">
      <div className="absolute top-[30vh] w-full px-6 md:left-[20%] md:w-auto md:px-0 md:pl-4 md:pr-4">
        <div className="flex flex-col items-start text-left text-[var(--text-primary)]">
          <p className="text-sm lg:text-base uppercase tracking-widest text-[var(--accent-primary)] mb-2 font-sans">kolkata</p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-wider whitespace-nowrap font-[var(--font-heading)]">
            Lead Backend Engineer
          </h1>
          <p className="mt-2 text-lg lg:text-xl text-[var(--text-secondary)]">
          shinchan is my bff
          </p>
          <button 
            className="mt-8 rounded-lg px-6 py-3 text-sm lg:text-base lg:px-8 lg:py-4 font-semibold uppercase tracking-widest text-[var(--accent-secondary)] transition-all duration-300"
            style={{
                backgroundColor: 'rgba(241, 171, 134, 0.1)',
                boxShadow: '0 4px 14px 0 var(--accent-glow)',
            }}
          >
            Contact Now
          </button>
        </div>
      </div>
      <div className="hidden md:block absolute top-[55vh] w-full text-[var(--text-secondary)]">
        <div className="absolute left-[20%] w-1/5 text-left px-4 text-xs md:text-sm lg:text-base">
          <p className="font-semibold text-[var(--text-primary)]">200%</p>
          <p className="tracking-wide">rate to banging your mom</p>
        </div>
        <div className="absolute left-[40%] w-1/5 text-left px-4 text-xs md:text-sm lg:text-base">
          <p className="font-semibold text-[var(--text-primary)]">1.5+ yoe</p>
          <p className="tracking-wide">as a lead engineering pushing the startup</p>
        </div>
        <div className="absolute left-[60%] w-1/5 text-left px-4 text-xs md:text-sm lg:text-base">
          <p className="font-semibold text-[var(--text-primary)]">open source</p>
          <p className="tracking-wide">made the tools you use daily like <a href="https://github.com/nodejs/node/issues?q=author%3A%40me" target="_blank">@Nodejs</a> better</p>
        </div>
      </div>
      <div className="absolute top-3/4 w-full flex justify-around md:hidden text-[var(--text-secondary)]">
         <div className="text-center text-xs">
            <p className="font-semibold text-[var(--text-primary)]">200%</p>
            <p className="tracking-wide">conversion increase</p>
         </div>
         <div className="text-center text-xs">
            <p className="font-semibold text-[var(--text-primary)]">open source</p>
            <p className="tracking-wide">made the tools you use daily like <a href="https://github.com/nodejs/node/issues?q=author%3A%40me" target="_blank">@Nodejs</a> better</p>
         </div>
      </div>
    </div>
  );
};

const SecondPage = () => {
    const links = [
        { name: 'Blog', href: 'https://0hmx.hashnode.dev' },
        { name: 'X / Twitter', href: 'https://x.com/0hm_X' },
        { name: 'GitHub', href: 'https://github.com/0hmX' },
        { name: 'Instagram', href: '#', disabled: true },
        { name: 'Anime List', href: '#', disabled: true },
        { name: 'Email', href: 'mailto:8ankanroy@gmail.com' },
    ];

    return (
        <div className="relative min-h-screen w-full flex flex-col">
            <div className="flex-grow">
                <div className="pt-[15vh] text-center">
                    <h2 className="font-[var(--font-heading)] text-3xl lg:text-4xl text-[var(--text-primary)] mb-8">Link Tree</h2>
                </div>
                {/* Desktop Grid Layout */}
                <div className="hidden md:block">
                    <div className="grid grid-cols-5">
                        <div className="col-span-1" /> {/* Left Spacer */}
                        <div className="col-span-3 grid grid-cols-3 grid-rows-2">
                            {links.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.disabled ? undefined : link.href}
                                    target={link.disabled ? undefined : "_blank"}
                                    rel={link.disabled ? undefined : "noopener noreferrer"}
                                    className={`flex items-center justify-center h-28 text-center text-[var(--text-primary)] bg-black/20 border border-[var(--line-dim)] font-[var(--font-heading)] text-lg ${
                                        link.disabled
                                            ? 'opacity-50 cursor-not-allowed'
                                            : 'transition-colors duration-300 hover:bg-black/40'
                                    }`}
                                >
                                    {link.name}
                                </a>
                            ))}
                        </div>
                        <div className="col-span-1" /> {/* Right Spacer */}
                    </div>
                </div>

                {/* Mobile List Layout */}
                <div className="md:hidden">
                    <div className="w-full max-w-md mx-auto px-4">
                        {links.map((link) => (
                            <a
                                key={link.name}
                                href={link.disabled ? undefined : link.href}
                                target={link.disabled ? undefined : "_blank"}
                                rel={link.disabled ? undefined : "noopener noreferrer"}
                                className={`flex items-center justify-center w-full h-20 text-center text-[var(--text-primary)] bg-black/20 border-b border-[var(--line-dim)] transition-colors duration-300 font-[var(--font-heading)] text-lg first:border-t ${
                                    link.disabled
                                        ? 'opacity-50 cursor-not-allowed'
                                        : 'hover:bg-black/40'
                                }`}
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
            <footer className="w-full text-center py-8">
                <p className="text-xs text-[var(--text-secondary)]">
                    &copy; 2025 Anakn, India
                </p>
            </footer>
        </div>
    )
}

export default function Home() {
  return (
    <div className="relative w-screen bg-[var(--bg-dark)] overflow-hidden font-[var(--font-body)]">
      <ThemeStyles />
      <div className="absolute top-[80vh] left-0 h-full w-full bg-[var(--bg-secondary)] z-10"></div>
      <GeometricBackground />
      
      {/* Layer 3: ASCII Art Simulation */}
      {/* Desktop side columns */}
      <div className="absolute top-0 left-0 h-[80vh] w-[20%] z-30 pointer-events-none hidden md:block">
          <AsciiWaterSimulation />
      </div>
      <div className="absolute top-0 right-0 h-[80vh] w-[20%] z-30 pointer-events-none hidden md:block">
          <AsciiWaterSimulation />
      </div>
      {/* Mobile full screen */}
       <div className="absolute top-0 left-0 h-[80vh] w-full z-30 pointer-events-none md:hidden">
          <AsciiWaterSimulation />
      </div>

      <main className="relative z-40">
        <HeroContent />
        <SecondPage />
      </main>
    </div>
  );
}

