type ScientificCoverProps = {
  variant?: "spacetime" | "bayesian" | "minimal";
};

export function ScientificCover({ variant = "minimal" }: ScientificCoverProps) {
  if (variant === "bayesian") {
    return (
      <div className="scientific-cover relative mb-5 overflow-hidden rounded-md border border-slate-200 bg-slate-950">
        <svg
          aria-hidden="true"
          className="h-44 w-full"
          preserveAspectRatio="none"
          viewBox="0 0 520 220"
        >
          <defs>
            <linearGradient id="bayesGradient" x1="0" x2="1" y1="0" y2="1">
              <stop offset="0%" stopColor="#0f172a" />
              <stop offset="55%" stopColor="#164e63" />
              <stop offset="100%" stopColor="#0f172a" />
            </linearGradient>
          </defs>
          <rect fill="url(#bayesGradient)" height="220" width="520" />
          {Array.from({ length: 9 }).map((_, index) => (
            <path
              className="data-path"
              d={`M0 ${190 - index * 14} C110 ${110 - index * 5} 230 ${
                170 - index * 18
              } 520 ${70 + index * 8}`}
              fill="none"
              key={index}
              opacity={0.16 + index * 0.055}
              stroke={index % 2 === 0 ? "#67e8f9" : "#f8fafc"}
              strokeWidth="1.4"
            />
          ))}
          <circle cx="116" cy="110" fill="#67e8f9" opacity="0.9" r="5" />
          <circle cx="252" cy="138" fill="#e0f2fe" opacity="0.8" r="4" />
          <circle cx="382" cy="92" fill="#67e8f9" opacity="0.75" r="5" />
        </svg>
      </div>
    );
  }

  if (variant === "spacetime") {
    return (
      <div className="scientific-cover relative mb-5 overflow-hidden rounded-md border border-slate-200 bg-slate-950">
        <svg
          aria-hidden="true"
          className="h-44 w-full"
          preserveAspectRatio="none"
          viewBox="0 0 520 220"
        >
          <defs>
            <radialGradient id="spaceGlow" cx="50%" cy="45%" r="65%">
              <stop offset="0%" stopColor="#155e75" />
              <stop offset="55%" stopColor="#0f172a" />
              <stop offset="100%" stopColor="#020617" />
            </radialGradient>
          </defs>
          <rect fill="url(#spaceGlow)" height="220" width="520" />
          {[0, 1, 2, 3].map((layer) => (
            <g key={layer} opacity={0.95 - layer * 0.13}>
              <path
                d={`M72 ${60 + layer * 32} L182 ${42 + layer * 28} L300 ${
                  72 + layer * 18
                } L424 ${48 + layer * 30}`}
                fill="none"
                stroke="#67e8f9"
                strokeWidth="1.5"
              />
              <path
                d={`M90 ${100 + layer * 22} L206 ${86 + layer * 20} L330 ${
                  118 + layer * 14
                } L450 ${96 + layer * 20}`}
                fill="none"
                stroke="#cbd5e1"
                strokeDasharray="7 9"
                strokeWidth="1"
              />
              {[72, 182, 300, 424].map((x, node) => (
                <circle
                  className="node-pulse"
                  cx={x}
                  cy={
                    [60 + layer * 32, 42 + layer * 28, 72 + layer * 18, 48 + layer * 30][
                      node
                    ]
                  }
                  fill={node % 2 === 0 ? "#67e8f9" : "#f8fafc"}
                  key={`${layer}-${x}`}
                  r="4.5"
                />
              ))}
            </g>
          ))}
        </svg>
      </div>
    );
  }

  return (
    <div className="scientific-cover relative mb-5 h-32 overflow-hidden rounded-md border border-slate-200 bg-[radial-gradient(circle_at_20%_20%,#cffafe,transparent_26%),linear-gradient(135deg,#f8fafc,#e2e8f0)]">
      <div className="absolute inset-0 research-grid opacity-30" />
    </div>
  );
}

