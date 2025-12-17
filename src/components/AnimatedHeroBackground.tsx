const AnimatedHeroBackground = () => {
  return (
    <svg
      className="absolute inset-0 w-full h-full"
      viewBox="0 0 1920 1080"
      preserveAspectRatio="xMidYMid slice"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        {/* Gradients */}
        <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="hsl(193, 80%, 6%)" />
          <stop offset="50%" stopColor="hsl(193, 70%, 12%)" />
          <stop offset="100%" stopColor="hsl(193, 80%, 8%)" />
        </linearGradient>
        
        <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="hsl(38, 92%, 55%)" stopOpacity="0" />
          <stop offset="50%" stopColor="hsl(38, 92%, 55%)" stopOpacity="1" />
          <stop offset="100%" stopColor="hsl(38, 92%, 55%)" stopOpacity="0" />
        </linearGradient>

        <linearGradient id="lineGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="hsl(42, 100%, 70%)" stopOpacity="0" />
          <stop offset="50%" stopColor="hsl(42, 100%, 70%)" stopOpacity="0.8" />
          <stop offset="100%" stopColor="hsl(42, 100%, 70%)" stopOpacity="0" />
        </linearGradient>

        <radialGradient id="glowGradient" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="hsl(38, 92%, 55%)" stopOpacity="0.3" />
          <stop offset="100%" stopColor="hsl(38, 92%, 55%)" stopOpacity="0" />
        </radialGradient>

        <radialGradient id="centerGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="white" stopOpacity="0.8" />
          <stop offset="30%" stopColor="white" stopOpacity="0.3" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </radialGradient>

        {/* Filters */}
        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="3" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        <filter id="softGlow" x="-100%" y="-100%" width="300%" height="300%">
          <feGaussianBlur stdDeviation="8" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Background */}
      <rect width="100%" height="100%" fill="url(#bgGradient)" />

      {/* Center light source */}
      <ellipse cx="960" cy="400" rx="300" ry="200" fill="url(#centerGlow)" opacity="0.4">
        <animate attributeName="opacity" values="0.3;0.5;0.3" dur="4s" repeatCount="indefinite" />
      </ellipse>

      {/* Light rays from center */}
      <g opacity="0.15">
        {[...Array(8)].map((_, i) => (
          <line
            key={`ray-${i}`}
            x1="960"
            y1="400"
            x2={960 + Math.cos((i * Math.PI) / 4) * 600}
            y2={400 + Math.sin((i * Math.PI) / 4) * 400}
            stroke="white"
            strokeWidth="1"
            opacity="0.5"
          >
            <animate
              attributeName="opacity"
              values="0.2;0.6;0.2"
              dur={`${3 + i * 0.5}s`}
              repeatCount="indefinite"
            />
          </line>
        ))}
      </g>

      {/* Left side circuit patterns */}
      <g className="left-circuits" filter="url(#glow)">
        {/* Panel grid - left */}
        <g stroke="hsl(38, 92%, 55%)" strokeWidth="1" fill="none" opacity="0.4">
          {/* Horizontal lines */}
          {[700, 750, 800, 850, 900, 950].map((y, i) => (
            <g key={`left-h-${i}`}>
              <line x1="0" y1={y} x2="450" y2={y} opacity="0.3" />
              <line x1="0" y1={y} x2="450" y2={y} stroke="url(#lineGradient)" strokeWidth="2">
                <animate
                  attributeName="stroke-dasharray"
                  values="0,500;250,250;500,0"
                  dur={`${4 + i * 0.3}s`}
                  repeatCount="indefinite"
                />
              </line>
            </g>
          ))}
          
          {/* Vertical lines */}
          {[50, 120, 190, 260, 330, 400].map((x, i) => (
            <g key={`left-v-${i}`}>
              <line x1={x} y1="650" x2={x} y2="1000" opacity="0.3" />
              <line x1={x} y1="650" x2={x} y2="1000" stroke="url(#lineGradient)" strokeWidth="2">
                <animate
                  attributeName="stroke-dasharray"
                  values="0,400;200,200;400,0"
                  dur={`${3.5 + i * 0.4}s`}
                  repeatCount="indefinite"
                />
              </line>
            </g>
          ))}

          {/* Diagonal accent lines - left */}
          <path d="M 0 650 L 150 750 L 300 700 L 450 800" strokeWidth="1.5" opacity="0.5">
            <animate
              attributeName="stroke-dasharray"
              values="0,800;400,400;800,0"
              dur="6s"
              repeatCount="indefinite"
            />
          </path>
        </g>

        {/* Circuit traces - left */}
        <g stroke="hsl(38, 92%, 55%)" strokeWidth="1.5" fill="none">
          <path d="M 50 900 L 150 900 L 180 870 L 280 870" opacity="0.6">
            <animate attributeName="stroke-dasharray" values="0,300;150,150;300,0" dur="3s" repeatCount="indefinite" />
          </path>
          <path d="M 100 950 L 200 950 L 230 920 L 350 920 L 380 890" opacity="0.6">
            <animate attributeName="stroke-dasharray" values="0,400;200,200;400,0" dur="4s" repeatCount="indefinite" />
          </path>
          <path d="M 0 800 L 80 800 L 120 760 L 220 760 L 260 720 L 400 720" opacity="0.5">
            <animate attributeName="stroke-dasharray" values="0,500;250,250;500,0" dur="5s" repeatCount="indefinite" />
          </path>
        </g>

        {/* Nodes/dots - left */}
        {[
          { x: 150, y: 900 }, { x: 280, y: 870 }, { x: 200, y: 950 },
          { x: 350, y: 920 }, { x: 120, y: 760 }, { x: 260, y: 720 },
          { x: 50, y: 750 }, { x: 190, y: 800 }, { x: 330, y: 850 },
          { x: 400, y: 720 }, { x: 80, y: 850 }
        ].map((pos, i) => (
          <g key={`left-node-${i}`}>
            <circle cx={pos.x} cy={pos.y} r="4" fill="hsl(38, 92%, 55%)" opacity="0.8">
              <animate
                attributeName="r"
                values="3;5;3"
                dur={`${1.5 + (i % 3) * 0.5}s`}
                repeatCount="indefinite"
              />
              <animate
                attributeName="opacity"
                values="0.5;1;0.5"
                dur={`${1.5 + (i % 3) * 0.5}s`}
                repeatCount="indefinite"
              />
            </circle>
            <circle cx={pos.x} cy={pos.y} r="8" fill="url(#glowGradient)">
              <animate
                attributeName="r"
                values="6;12;6"
                dur={`${1.5 + (i % 3) * 0.5}s`}
                repeatCount="indefinite"
              />
            </circle>
          </g>
        ))}
      </g>

      {/* Right side circuit patterns */}
      <g className="right-circuits" filter="url(#glow)">
        {/* Panel grid - right */}
        <g stroke="hsl(38, 92%, 55%)" strokeWidth="1" fill="none" opacity="0.4">
          {/* Horizontal lines */}
          {[700, 750, 800, 850, 900, 950].map((y, i) => (
            <g key={`right-h-${i}`}>
              <line x1="1470" y1={y} x2="1920" y2={y} opacity="0.3" />
              <line x1="1470" y1={y} x2="1920" y2={y} stroke="url(#lineGradient2)" strokeWidth="2">
                <animate
                  attributeName="stroke-dasharray"
                  values="500,0;250,250;0,500"
                  dur={`${4 + i * 0.3}s`}
                  repeatCount="indefinite"
                />
              </line>
            </g>
          ))}
          
          {/* Vertical lines */}
          {[1520, 1590, 1660, 1730, 1800, 1870].map((x, i) => (
            <g key={`right-v-${i}`}>
              <line x1={x} y1="650" x2={x} y2="1000" opacity="0.3" />
              <line x1={x} y1="650" x2={x} y2="1000" stroke="url(#lineGradient2)" strokeWidth="2">
                <animate
                  attributeName="stroke-dasharray"
                  values="400,0;200,200;0,400"
                  dur={`${3.5 + i * 0.4}s`}
                  repeatCount="indefinite"
                />
              </line>
            </g>
          ))}

          {/* Diagonal accent lines - right */}
          <path d="M 1920 650 L 1770 750 L 1620 700 L 1470 800" strokeWidth="1.5" opacity="0.5">
            <animate
              attributeName="stroke-dasharray"
              values="800,0;400,400;0,800"
              dur="6s"
              repeatCount="indefinite"
            />
          </path>
        </g>

        {/* Circuit traces - right */}
        <g stroke="hsl(38, 92%, 55%)" strokeWidth="1.5" fill="none">
          <path d="M 1870 900 L 1770 900 L 1740 870 L 1640 870" opacity="0.6">
            <animate attributeName="stroke-dasharray" values="300,0;150,150;0,300" dur="3s" repeatCount="indefinite" />
          </path>
          <path d="M 1820 950 L 1720 950 L 1690 920 L 1570 920 L 1540 890" opacity="0.6">
            <animate attributeName="stroke-dasharray" values="400,0;200,200;0,400" dur="4s" repeatCount="indefinite" />
          </path>
          <path d="M 1920 800 L 1840 800 L 1800 760 L 1700 760 L 1660 720 L 1520 720" opacity="0.5">
            <animate attributeName="stroke-dasharray" values="500,0;250,250;0,500" dur="5s" repeatCount="indefinite" />
          </path>
        </g>

        {/* Nodes/dots - right */}
        {[
          { x: 1770, y: 900 }, { x: 1640, y: 870 }, { x: 1720, y: 950 },
          { x: 1570, y: 920 }, { x: 1800, y: 760 }, { x: 1660, y: 720 },
          { x: 1870, y: 750 }, { x: 1730, y: 800 }, { x: 1590, y: 850 },
          { x: 1520, y: 720 }, { x: 1840, y: 850 }
        ].map((pos, i) => (
          <g key={`right-node-${i}`}>
            <circle cx={pos.x} cy={pos.y} r="4" fill="hsl(38, 92%, 55%)" opacity="0.8">
              <animate
                attributeName="r"
                values="3;5;3"
                dur={`${1.5 + (i % 3) * 0.5}s`}
                repeatCount="indefinite"
              />
              <animate
                attributeName="opacity"
                values="0.5;1;0.5"
                dur={`${1.5 + (i % 3) * 0.5}s`}
                repeatCount="indefinite"
              />
            </circle>
            <circle cx={pos.x} cy={pos.y} r="8" fill="url(#glowGradient)">
              <animate
                attributeName="r"
                values="6;12;6"
                dur={`${1.5 + (i % 3) * 0.5}s`}
                repeatCount="indefinite"
              />
            </circle>
          </g>
        ))}
      </g>

      {/* Floating particles */}
      {[...Array(20)].map((_, i) => (
        <circle
          key={`particle-${i}`}
          cx={200 + Math.random() * 1520}
          cy={600 + Math.random() * 400}
          r="2"
          fill="hsl(38, 92%, 55%)"
          opacity="0.4"
        >
          <animate
            attributeName="cy"
            values={`${700 + (i % 4) * 80};${650 + (i % 4) * 80};${700 + (i % 4) * 80}`}
            dur={`${3 + i * 0.3}s`}
            repeatCount="indefinite"
          />
          <animate
            attributeName="opacity"
            values="0.2;0.6;0.2"
            dur={`${2 + i * 0.2}s`}
            repeatCount="indefinite"
          />
        </circle>
      ))}

      {/* Connecting horizontal lines in middle */}
      <g stroke="hsl(38, 92%, 55%)" strokeWidth="1" opacity="0.2">
        <line x1="450" y1="800" x2="1470" y2="800">
          <animate attributeName="opacity" values="0.1;0.3;0.1" dur="4s" repeatCount="indefinite" />
        </line>
        <line x1="500" y1="850" x2="1420" y2="850">
          <animate attributeName="opacity" values="0.1;0.3;0.1" dur="5s" repeatCount="indefinite" />
        </line>
      </g>
    </svg>
  );
};

export default AnimatedHeroBackground;
