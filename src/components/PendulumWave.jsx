const PendulumWave = ({ speedMultiplier = 1 }) => {
  const getAnimationDuration = (baseDuration) => `${baseDuration / speedMultiplier}s`;

  return (
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="100%"
      height="100vh"
      viewBox="-9 0 18 27"
      id="pendulum_wave"
    >
      <title>Pendulum wave animation</title>
      <desc>
        CSS3 animation of a pendulum wave, with the nearest ball making 60
        oscillations in two minutes, the next 61, the following one 62, and so
        forth. Tap or hover over a pendulum to pause the animation.
      </desc>
      <style>{`
        @keyframes rot { 
          from { transform: rotate(15deg); } 
          to { transform: rotate(-15deg); } 
        }
        @keyframes clk { 
          from { transform: rotate(0deg); } 
          to { transform: rotate(360deg); } 
        }
        .clk { animation: clk 120s linear infinite; }
        svg { 
          font-family: Helvetica, Arial, sans-serif; 
          font-weight: bold; 
          font-size: 6px; 
          text-anchor: middle; 
          stroke: #999; 
          stroke-width: 0.02; 
          cursor: crosshair; 
        }
        .main:hover * { animation-play-state: paused; }
      `}</style>
      <defs>
        <linearGradient id="gradient" x1="0.99993" y1="3001" x2="0" y2="3001">
          <stop stopColor="#6D6E71" />
          <stop offset="0.265" stopColor="#292D32" />
          <stop offset="0.5" stopColor="white" />
          <stop offset="0.715" stopColor="#292D32" />
          <stop offset="1" stopColor="#7D7D7D" />
        </linearGradient>
        <filter id="filter_blur">
          <feGaussianBlur stdDeviation="4" />
        </filter>
        <radialGradient id="grad_sphere" cx="50%" cy="50%" r="50%" fx="50%" fy="90%">
          <stop offset="0%" stopColor="#000000" stopOpacity="0" />
          <stop offset="99%" stopColor="#000000" stopOpacity="0.3" />
        </radialGradient>
        <linearGradient id="grad_highlight" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="10%" stopColor="#ffffff" stopOpacity="0.9" />
          <stop offset="99%" stopColor="#ffffff" stopOpacity="0" />
        </linearGradient>
        <g id="orb">
          <circle cx="0" cy="0" r="100" />
          <circle cx="0" cy="0" r="100" fill="url(#grad_sphere)" />
          <ellipse cx="0" cy="-45" rx="70" ry="50" fill="url(#grad_highlight)" stroke="none" />
        </g>
        <g id="pendulum">
          <path d="M 0,0 v 100" stroke="#5A5960" strokeWidth="0.2" />
          <use href="#orb" fill="currentColor" transform="translate(0,100) scale(0.07)" />
          {/* <image href="/images/rikersiv_ball.svg" transform="translate(-5,90) scale(0.06)" stroke="#fff" width="200" height="200" /> */}
        </g>
      </defs>
      <circle cx="0" cy="0" r="99999" fill="#020109" />
      <g className="main">
        <g transform="scale(0.17728)">
          <use
            className="rot71"
            xlinkHref="#pendulum"
            transform="rotate(7)"
            color="#5645bb"
            style={{ animation: `rot ${getAnimationDuration(0.84507)} ease-in-out alternate infinite` }}
          />
        </g>
        <g transform="scale(0.18238)">
          <use
            className="rot70"
            xlinkHref="#pendulum"
            transform="rotate(-7)"
            color="#5645bb"
            style={{ animation: `rot ${getAnimationDuration(0.85714)} ease-in-out alternate infinite` }}
          />
        </g>
        <g transform="scale(0.18770)">
          <use
            className="rot69"
            xlinkHref="#pendulum"
            transform="rotate(4)"
            color="#5645bb"
            style={{ animation: `rot ${getAnimationDuration(0.86957)} ease-in-out alternate infinite` }}
          />
        </g>
        <g transform="scale(0.19326)">
          <use
            className="rot68"
            xlinkHref="#pendulum"
            transform="rotate(-4)"
            color="#5645bb"
            style={{ animation: `rot ${getAnimationDuration(0.88235)} ease-in-out alternate infinite` }}
          />
        </g>
        <g transform="scale(0.19908)">
          <use
            className="rot67"
            xlinkHref="#pendulum"
            transform="rotate(-1)"
            color="#5645bb"
            style={{ animation: `rot ${getAnimationDuration(0.89552)} ease-in-out alternate infinite` }}
          />
        </g>
        <g transform="scale(0.20515)">
          <use
            className="rot66"
            xlinkHref="#pendulum"
            transform="rotate(1)"
            color="#5645bb"
            style={{ animation: `rot ${getAnimationDuration(0.90909)} ease-in-out alternate infinite` }}
          />
        </g>
        <g transform="scale(0.21152)">
          <use
            className="rot65"
            xlinkHref="#pendulum"
            transform="rotate(-6)"
            color="#5645bb"
            style={{ animation: `rot ${getAnimationDuration(0.92308)} ease-in-out alternate infinite` }}
          />
        </g>
        <g transform="scale(0.21818)">
          <use
            className="rot64"
            xlinkHref="#pendulum"
            transform="rotate(6)"
            color="#5645bb"
            style={{ animation: `rot ${getAnimationDuration(0.93750)} ease-in-out alternate infinite` }}
          />
        </g>
        <g transform="scale(0.22516)">
          <use
            className="rot63"
            xlinkHref="#pendulum"
            transform="rotate(-9)"
            color="#5645bb"
            style={{ animation: `rot ${getAnimationDuration(0.95238)} ease-in-out alternate infinite` }}
          />
        </g>
        <g transform="scale(0.23248)">
          <use
            className="rot62"
            xlinkHref="#pendulum"
            transform="rotate(9)"
            color="#5645bb"
            style={{ animation: `rot ${getAnimationDuration(0.96774)} ease-in-out alternate infinite` }}
          />
        </g>
        <g transform="scale(0.24016)">
          <use
            className="rot61"
            xlinkHref="#pendulum"
            transform="rotate(-8)"
            color="#5645bb"
            style={{ animation: `rot ${getAnimationDuration(0.98361)} ease-in-out alternate infinite` }}
          />
        </g>
        <g transform="scale(0.24824)">
          <use
            className="rot60"
            xlinkHref="#pendulum"
            transform="rotate(8)"
            color="#5645bb"
            style={{ animation: `rot ${getAnimationDuration(1.00000)} ease-in-out alternate infinite` }}
          />
        </g>
      </g>
    </svg>
  );
};

export default PendulumWave;