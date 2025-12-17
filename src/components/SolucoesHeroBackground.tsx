const SolucoesHeroBackground = () => {
  return (
    <svg
      className="absolute inset-0 w-full h-full"
      viewBox="0 0 1920 1080"
      preserveAspectRatio="xMidYMid slice"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="solBgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="hsl(193, 80%, 8%)" />
          <stop offset="50%" stopColor="hsl(193, 70%, 14%)" />
          <stop offset="100%" stopColor="hsl(193, 80%, 6%)" />
        </linearGradient>
        
        <linearGradient id="solLineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="hsl(38, 92%, 55%)" stopOpacity="0" />
          <stop offset="50%" stopColor="hsl(38, 92%, 55%)" stopOpacity="1" />
          <stop offset="100%" stopColor="hsl(38, 92%, 55%)" stopOpacity="0" />
        </linearGradient>

        <radialGradient id="solNodeGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="hsl(38, 92%, 55%)" stopOpacity="0.5" />
          <stop offset="100%" stopColor="hsl(38, 92%, 55%)" stopOpacity="0" />
        </radialGradient>

        <radialGradient id="solCenterGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="hsl(42, 100%, 70%)" stopOpacity="0.4" />
          <stop offset="100%" stopColor="hsl(42, 100%, 70%)" stopOpacity="0" />
        </radialGradient>

        <filter id="solGlow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="4" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Background */}
      <rect width="100%" height="100%" fill="url(#solBgGradient)" />

      {/* Neural network nodes and connections */}
      <g filter="url(#solGlow)">
        {/* Layer 1 - Left */}
        {[180, 280, 380, 480, 580].map((y, i) => (
          <g key={`l1-${i}`}>
            <circle cx="200" cy={y} r="6" fill="hsl(38, 92%, 55%)" opacity="0.8">
              <animate attributeName="r" values="4;8;4" dur={`${2 + i * 0.3}s`} repeatCount="indefinite" />
            </circle>
            <circle cx="200" cy={y} r="20" fill="url(#solNodeGlow)" />
          </g>
        ))}

        {/* Layer 2 */}
        {[230, 380, 530].map((y, i) => (
          <g key={`l2-${i}`}>
            <circle cx="500" cy={y} r="8" fill="hsl(38, 92%, 55%)" opacity="0.9">
              <animate attributeName="r" values="6;10;6" dur={`${2.5 + i * 0.4}s`} repeatCount="indefinite" />
            </circle>
            <circle cx="500" cy={y} r="25" fill="url(#solNodeGlow)" />
          </g>
        ))}

        {/* Layer 3 - Center */}
        {[280, 430, 580].map((y, i) => (
          <g key={`l3-${i}`}>
            <circle cx="960" cy={y} r="10" fill="hsl(38, 92%, 55%)" opacity="1">
              <animate attributeName="r" values="8;14;8" dur={`${3 + i * 0.3}s`} repeatCount="indefinite" />
            </circle>
            <circle cx="960" cy={y} r="35" fill="url(#solCenterGlow)" />
          </g>
        ))}

        {/* Layer 4 */}
        {[230, 380, 530].map((y, i) => (
          <g key={`l4-${i}`}>
            <circle cx="1420" cy={y} r="8" fill="hsl(38, 92%, 55%)" opacity="0.9">
              <animate attributeName="r" values="6;10;6" dur={`${2.5 + i * 0.4}s`} repeatCount="indefinite" />
            </circle>
            <circle cx="1420" cy={y} r="25" fill="url(#solNodeGlow)" />
          </g>
        ))}

        {/* Layer 5 - Right */}
        {[180, 280, 380, 480, 580].map((y, i) => (
          <g key={`l5-${i}`}>
            <circle cx="1720" cy={y} r="6" fill="hsl(38, 92%, 55%)" opacity="0.8">
              <animate attributeName="r" values="4;8;4" dur={`${2 + i * 0.3}s`} repeatCount="indefinite" />
            </circle>
            <circle cx="1720" cy={y} r="20" fill="url(#solNodeGlow)" />
          </g>
        ))}

        {/* Connections L1 to L2 */}
        {[180, 280, 380, 480, 580].map((y1, i) =>
          [230, 380, 530].map((y2, j) => (
            <line
              key={`c1-${i}-${j}`}
              x1="200" y1={y1} x2="500" y2={y2}
              stroke="hsl(38, 92%, 55%)"
              strokeWidth="1"
              opacity="0.2"
            >
              <animate
                attributeName="opacity"
                values="0.1;0.4;0.1"
                dur={`${2 + ((i + j) % 4) * 0.5}s`}
                repeatCount="indefinite"
              />
            </line>
          ))
        )}

        {/* Connections L2 to L3 */}
        {[230, 380, 530].map((y1, i) =>
          [280, 430, 580].map((y2, j) => (
            <line
              key={`c2-${i}-${j}`}
              x1="500" y1={y1} x2="960" y2={y2}
              stroke="hsl(38, 92%, 55%)"
              strokeWidth="1.5"
              opacity="0.3"
            >
              <animate
                attributeName="opacity"
                values="0.15;0.5;0.15"
                dur={`${2.5 + ((i + j) % 3) * 0.6}s`}
                repeatCount="indefinite"
              />
            </line>
          ))
        )}

        {/* Connections L3 to L4 */}
        {[280, 430, 580].map((y1, i) =>
          [230, 380, 530].map((y2, j) => (
            <line
              key={`c3-${i}-${j}`}
              x1="960" y1={y1} x2="1420" y2={y2}
              stroke="hsl(38, 92%, 55%)"
              strokeWidth="1.5"
              opacity="0.3"
            >
              <animate
                attributeName="opacity"
                values="0.15;0.5;0.15"
                dur={`${2.5 + ((i + j) % 3) * 0.6}s`}
                repeatCount="indefinite"
              />
            </line>
          ))
        )}

        {/* Connections L4 to L5 */}
        {[230, 380, 530].map((y1, i) =>
          [180, 280, 380, 480, 580].map((y2, j) => (
            <line
              key={`c4-${i}-${j}`}
              x1="1420" y1={y1} x2="1720" y2={y2}
              stroke="hsl(38, 92%, 55%)"
              strokeWidth="1"
              opacity="0.2"
            >
              <animate
                attributeName="opacity"
                values="0.1;0.4;0.1"
                dur={`${2 + ((i + j) % 4) * 0.5}s`}
                repeatCount="indefinite"
              />
            </line>
          ))
        )}
      </g>

      {/* Data flow particles */}
      {[...Array(15)].map((_, i) => {
        const startX = 200 + (i % 5) * 380;
        const endX = startX + 300;
        return (
          <circle key={`flow-${i}`} r="3" fill="hsl(42, 100%, 70%)" opacity="0.8">
            <animate
              attributeName="cx"
              values={`${startX};${endX};${startX}`}
              dur={`${3 + i * 0.4}s`}
              repeatCount="indefinite"
            />
            <animate
              attributeName="cy"
              values={`${200 + (i % 5) * 80};${350 + (i % 3) * 60};${200 + (i % 5) * 80}`}
              dur={`${3 + i * 0.4}s`}
              repeatCount="indefinite"
            />
            <animate
              attributeName="opacity"
              values="0;0.8;0"
              dur={`${3 + i * 0.4}s`}
              repeatCount="indefinite"
            />
          </circle>
        );
      })}

      {/* Bottom wave pattern */}
      <g opacity="0.15">
        <path
          d="M0 850 Q480 800 960 850 T1920 850 V1080 H0 Z"
          fill="hsl(38, 92%, 55%)"
        >
          <animate
            attributeName="d"
            values="M0 850 Q480 800 960 850 T1920 850 V1080 H0 Z;M0 850 Q480 900 960 850 T1920 850 V1080 H0 Z;M0 850 Q480 800 960 850 T1920 850 V1080 H0 Z"
            dur="8s"
            repeatCount="indefinite"
          />
        </path>
      </g>
    </svg>
  );
};

export default SolucoesHeroBackground;
