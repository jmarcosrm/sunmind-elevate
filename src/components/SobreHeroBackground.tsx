const SobreHeroBackground = () => {
  return (
    <svg
      className="absolute inset-0 w-full h-full"
      viewBox="0 0 1920 1080"
      preserveAspectRatio="xMidYMid slice"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="sobreBgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="hsl(193, 80%, 6%)" />
          <stop offset="40%" stopColor="hsl(193, 70%, 12%)" />
          <stop offset="100%" stopColor="hsl(193, 80%, 8%)" />
        </linearGradient>

        <radialGradient id="sobreGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="hsl(38, 92%, 55%)" stopOpacity="0.6" />
          <stop offset="100%" stopColor="hsl(38, 92%, 55%)" stopOpacity="0" />
        </radialGradient>

        <radialGradient id="sunGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="hsl(42, 100%, 70%)" stopOpacity="0.5" />
          <stop offset="50%" stopColor="hsl(38, 92%, 55%)" stopOpacity="0.2" />
          <stop offset="100%" stopColor="hsl(38, 92%, 55%)" stopOpacity="0" />
        </radialGradient>

        <filter id="sobreBlur" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Background */}
      <rect width="100%" height="100%" fill="url(#sobreBgGradient)" />

      {/* Large sun/energy source */}
      <g>
        <ellipse cx="960" cy="350" rx="250" ry="180" fill="url(#sunGlow)">
          <animate attributeName="rx" values="240;260;240" dur="5s" repeatCount="indefinite" />
          <animate attributeName="ry" values="170;190;170" dur="5s" repeatCount="indefinite" />
        </ellipse>
        <ellipse cx="960" cy="350" rx="120" ry="90" fill="url(#sunGlow)" opacity="0.8">
          <animate attributeName="opacity" values="0.6;1;0.6" dur="3s" repeatCount="indefinite" />
        </ellipse>
      </g>

      {/* Energy rays emanating from center */}
      <g filter="url(#sobreBlur)" opacity="0.4">
        {[...Array(12)].map((_, i) => {
          const angle = (i * 30 * Math.PI) / 180;
          const x2 = 960 + Math.cos(angle) * 500;
          const y2 = 350 + Math.sin(angle) * 350;
          return (
            <line
              key={`ray-${i}`}
              x1="960"
              y1="350"
              x2={x2}
              y2={y2}
              stroke="hsl(38, 92%, 55%)"
              strokeWidth="2"
              opacity="0.5"
            >
              <animate
                attributeName="opacity"
                values="0.2;0.6;0.2"
                dur={`${3 + (i % 4) * 0.5}s`}
                repeatCount="indefinite"
              />
              <animate
                attributeName="stroke-width"
                values="1;3;1"
                dur={`${3 + (i % 4) * 0.5}s`}
                repeatCount="indefinite"
              />
            </line>
          );
        })}
      </g>

      {/* Orbiting elements - representing team/connection */}
      <g filter="url(#sobreBlur)">
        {/* Orbit path 1 */}
        <ellipse
          cx="960"
          cy="450"
          rx="400"
          ry="150"
          fill="none"
          stroke="hsl(38, 92%, 55%)"
          strokeWidth="1"
          opacity="0.2"
        />
        {/* Orbiting dot 1 */}
        <circle r="8" fill="hsl(38, 92%, 55%)" opacity="0.9">
          <animateMotion
            dur="12s"
            repeatCount="indefinite"
            path="M560,450 A400,150 0 1,1 1360,450 A400,150 0 1,1 560,450"
          />
          <animate attributeName="r" values="6;10;6" dur="2s" repeatCount="indefinite" />
        </circle>
        <circle r="20" fill="url(#sobreGlow)">
          <animateMotion
            dur="12s"
            repeatCount="indefinite"
            path="M560,450 A400,150 0 1,1 1360,450 A400,150 0 1,1 560,450"
          />
        </circle>

        {/* Orbit path 2 */}
        <ellipse
          cx="960"
          cy="450"
          rx="550"
          ry="200"
          fill="none"
          stroke="hsl(38, 92%, 55%)"
          strokeWidth="1"
          opacity="0.15"
        />
        {/* Orbiting dot 2 */}
        <circle r="6" fill="hsl(42, 100%, 70%)" opacity="0.8">
          <animateMotion
            dur="18s"
            repeatCount="indefinite"
            path="M410,450 A550,200 0 1,0 1510,450 A550,200 0 1,0 410,450"
          />
        </circle>
        <circle r="15" fill="url(#sobreGlow)">
          <animateMotion
            dur="18s"
            repeatCount="indefinite"
            path="M410,450 A550,200 0 1,0 1510,450 A550,200 0 1,0 410,450"
          />
        </circle>

        {/* Orbit path 3 */}
        <ellipse
          cx="960"
          cy="450"
          rx="300"
          ry="100"
          fill="none"
          stroke="hsl(38, 92%, 55%)"
          strokeWidth="1"
          opacity="0.25"
        />
        {/* Orbiting dot 3 */}
        <circle r="5" fill="hsl(38, 92%, 55%)" opacity="0.9">
          <animateMotion
            dur="8s"
            repeatCount="indefinite"
            path="M660,450 A300,100 0 1,1 1260,450 A300,100 0 1,1 660,450"
          />
        </circle>
      </g>

      {/* Connection points representing people/team */}
      <g filter="url(#sobreBlur)">
        {[
          { x: 250, y: 600 },
          { x: 450, y: 720 },
          { x: 350, y: 850 },
          { x: 1670, y: 600 },
          { x: 1470, y: 720 },
          { x: 1570, y: 850 },
        ].map((pos, i) => (
          <g key={`person-${i}`}>
            <circle cx={pos.x} cy={pos.y} r="12" fill="hsl(38, 92%, 55%)" opacity="0.7">
              <animate attributeName="r" values="10;14;10" dur={`${2 + (i % 3) * 0.5}s`} repeatCount="indefinite" />
            </circle>
            <circle cx={pos.x} cy={pos.y} r="30" fill="url(#sobreGlow)" />
            {/* Connection lines to center */}
            <line
              x1={pos.x}
              y1={pos.y}
              x2="960"
              y2="450"
              stroke="hsl(38, 92%, 55%)"
              strokeWidth="1"
              opacity="0.15"
              strokeDasharray="8,8"
            >
              <animate
                attributeName="stroke-dashoffset"
                values="0;16"
                dur="2s"
                repeatCount="indefinite"
              />
            </line>
          </g>
        ))}

        {/* Connect left points */}
        <path
          d="M250,600 Q350,660 450,720 Q400,785 350,850"
          fill="none"
          stroke="hsl(38, 92%, 55%)"
          strokeWidth="1"
          opacity="0.2"
        >
          <animate attributeName="opacity" values="0.1;0.3;0.1" dur="4s" repeatCount="indefinite" />
        </path>

        {/* Connect right points */}
        <path
          d="M1670,600 Q1570,660 1470,720 Q1520,785 1570,850"
          fill="none"
          stroke="hsl(38, 92%, 55%)"
          strokeWidth="1"
          opacity="0.2"
        >
          <animate attributeName="opacity" values="0.1;0.3;0.1" dur="4s" repeatCount="indefinite" />
        </path>
      </g>

      {/* Floating particles - energy */}
      {[...Array(25)].map((_, i) => (
        <circle
          key={`energy-${i}`}
          cx={100 + Math.random() * 1720}
          cy={200 + Math.random() * 700}
          r={1 + Math.random() * 2}
          fill="hsl(38, 92%, 55%)"
          opacity="0.3"
        >
          <animate
            attributeName="cy"
            values={`${300 + (i % 6) * 100};${250 + (i % 6) * 100};${300 + (i % 6) * 100}`}
            dur={`${4 + i * 0.2}s`}
            repeatCount="indefinite"
          />
          <animate
            attributeName="opacity"
            values="0.1;0.5;0.1"
            dur={`${3 + i * 0.15}s`}
            repeatCount="indefinite"
          />
        </circle>
      ))}

      {/* Bottom gradient fade */}
      <rect
        x="0"
        y="900"
        width="1920"
        height="180"
        fill="url(#sobreBgGradient)"
        opacity="0.5"
      />
    </svg>
  );
};

export default SobreHeroBackground;
