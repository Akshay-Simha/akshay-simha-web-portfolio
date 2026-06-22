const RECYCLING_STORE_LOCATOR_SVG = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 562.5" width="100%" height="100%">
  <defs>
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#ecfdf5" />
      <stop offset="100%" stop-color="#d1fae5" />
    </linearGradient>
    <filter id="shadow" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="5" stdDeviation="5" flood-color="#059669" flood-opacity="0.1" />
    </filter>
    <filter id="softShadow" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="12" stdDeviation="15" flood-color="#022c22" flood-opacity="0.08" />
    </filter>
  </defs>

  <!-- Background and grid -->
  <rect width="1000" height="562.5" fill="url(#bgGrad)" />
  <g stroke="#10b981" stroke-width="0.5" stroke-dasharray="8 12" opacity="0.15">
    <path d="M 0 50 H 1000 M 0 100 H 1000 M 0 150 H 1000 M 0 200 H 1000 M 0 250 H 1000 M 0 300 H 1000 M 0 350 H 1000 M 0 400 H 1000 M 0 450 H 1000 M 0 500 H 1000" />
    <path d="M 100 0 V 562.5 M 200 0 V 562.5 M 300 0 V 562.5 M 400 0 V 562.5 M 500 0 V 562.5 M 600 0 V 562.5 M 700 0 V 562.5 M 800 0 V 562.5 M 900 0 V 562.5" />
  </g>

  <!-- Left Side Badge -->
  <g transform="translate(60, 60)">
    <rect width="260" height="30" rx="15" fill="#059669" fill-opacity="0.1" stroke="#059669" stroke-width="1.2" />
    <circle cx="20" cy="15" r="5" fill="#059669" />
    <text x="35" y="19" font-family="'Inter', sans-serif" font-size="11" font-weight="600" fill="#047857">Version 2.0 Live — Fully Interactive GPS Map</text>
  </g>

  <!-- Title Section -->
  <text x="60" y="160" font-family="'Inter', sans-serif" font-size="48" font-weight="800" fill="#064e3b" letter-spacing="-1.5">Recycling Drop-Off</text>
  <text x="60" y="215" font-family="'Inter', sans-serif" font-size="48" font-weight="800" fill="#059669" letter-spacing="-1.5">Store Locator</text>

  <!-- Description paragraph -->
  <text x="60" y="265" font-family="'Inter', sans-serif" font-size="14" fill="#065f46" opacity="0.85">
    <tspan x="60" dy="0">Our mission is to make recycling easy and convenient for everyone,</tspan>
    <tspan x="60" dy="22">creating a sustainable future. Find recycling centers near you, learn</tspan>
    <tspan x="60" dy="22">exact materials guidelines, and trace your community impact.</tspan>
  </text>

  <!-- Left Buttons container -->
  <g transform="translate(60, 360)">
    <rect width="180" height="46" rx="23" fill="#059669" filter="url(#shadow)" />
    <text x="90" y="27" font-family="'Inter', sans-serif" font-size="12" font-weight="bold" fill="#ffffff" text-anchor="middle">Find Nearby Centers</text>
    
    <rect x="195" y="0" width="168" height="46" rx="23" fill="#ffffff" filter="url(#shadow)" />
    <text x="279" y="27" font-family="'Inter', sans-serif" font-size="12" font-weight="700" fill="#047857" text-anchor="middle">Guidelines Reference</text>
  </g>

  <!-- Core stats -->
  <g transform="translate(60, 465)">
    <text x="0" y="20" font-family="'Inter', sans-serif" font-size="28" font-weight="800" fill="#064e3b">100%</text>
    <text x="0" y="38" font-family="'Inter', sans-serif" font-size="9" font-weight="bold" fill="#065f46" letter-spacing="1.5">ECO-FRIENDLY HUBS</text>

    <text x="140" y="20" font-family="'Inter', sans-serif" font-size="28" font-weight="800" fill="#064e3b">60+</text>
    <text x="140" y="38" font-family="'Inter', sans-serif" font-size="9" font-weight="bold" fill="#065f46" letter-spacing="1.5">BENGALURU LOCATIONS</text>

    <text x="280" y="20" font-family="'Inter', sans-serif" font-size="28" font-weight="800" fill="#064e3b">0 Cost</text>
    <text x="280" y="38" font-family="'Inter', sans-serif" font-size="9" font-weight="bold" fill="#065f46" letter-spacing="1.5">FREE PUBLIC ACCESS</text>
  </g>

  <!-- Right Mockup Screen -->
  <g transform="translate(530, 50)" filter="url(#softShadow)">
    <rect width="410" height="460" rx="24" fill="#ffffff" />
    
    <!-- Header of Mockup Tab -->
    <rect width="410" height="40" rx="20" fill="#f8fafc" />
    <circle cx="25" cy="20" r="5" fill="#f87171" />
    <circle cx="41" cy="20" r="5" fill="#fbbf24" />
    <circle cx="57" cy="20" r="5" fill="#34d399" />
    <rect x="270" y="12" width="124" height="16" rx="8" fill="#e2e8f0" opacity="0.4" />
    <text x="332" y="23" font-family="'Inter', sans-serif" font-size="7" font-weight="bold" fill="#475569" letter-spacing="0.5" text-anchor="middle">RECIPROCAL SAAS LOCATOR</text>

    <!-- App mockup branding -->
    <g transform="translate(24, 60)">
      <!-- Card: Tons Carbon Kept -->
      <rect width="362" height="80" rx="16" fill="#f0fdf4" stroke="#bbf7d0" stroke-width="1" />
      <text x="16" y="26" font-family="'Inter', sans-serif" font-size="9" font-weight="bold" fill="#15803d" letter-spacing="1">TONS CARBON KEPT</text>
      <text x="16" y="58" font-family="'Inter', sans-serif" font-size="30" font-weight="800" fill="#14532d">4,812.5 T</text>
      
      <!-- Circle Icon -->
      <circle cx="320" cy="40" r="18" fill="#059669" />
      <!-- Globe icon lines -->
      <circle cx="320" cy="40" r="8" fill="none" stroke="#ffffff" stroke-width="1.5" />
      <ellipse cx="320" cy="40" rx="3" ry="8" fill="none" stroke="#ffffff" stroke-width="1.2" />
      <line x1="312" y1="40" x2="328" y2="40" stroke="#ffffff" stroke-width="1.2" />
    </g>

    <!-- Map widget inside UI -->
    <g transform="translate(24, 156)">
      <rect width="362" height="190" rx="16" fill="#ffffff" stroke="#f1f5f9" stroke-width="1.5" />
      <text x="16" y="26" font-family="'Inter', sans-serif" font-size="9" font-weight="bold" fill="#64748b" letter-spacing="1">ZONE: BENGALURU CENTRAL</text>
      
      <!-- Mock Map Roads and Lines -->
      <rect x="16" y="40" width="330" height="110" rx="8" fill="#f8fafc" />
      <line x1="16" y1="95" x2="346" y2="95" stroke="#e2e8f0" stroke-width="3" />
      <line x1="120" y1="40" x2="120" y2="150" stroke="#e2e8f0" stroke-width="3" />
      <line x1="240" y1="40" x2="240" y2="150" stroke="#e2e8f0" stroke-width="3" />
      <line x1="16" y1="60" x2="346" y2="140" stroke="#cbd5e1" stroke-width="1.5" stroke-dasharray="3 3" />

      <!-- Map Pin 1 -->
      <g transform="translate(110, 85)">
        <circle cx="0" cy="0" r="12" fill="#059669" fill-opacity="0.1" />
        <circle cx="0" cy="0" r="3" fill="#059669" />
        <path d="M 0 -2 C 2 -2 4 -5 4 -9 C 4 -13 0 -16 0 -16 C 0 -16 -4 -13 -4 -9 C -4 -5 -2 -2 0 -2 Z" fill="#059669" />
        <circle cx="0" cy="-10" r="1.5" fill="#ffffff" />
        <text x="0" y="16" font-family="'Inter', sans-serif" font-size="9" font-weight="800" fill="#0f172a" text-anchor="middle">Malleswaram</text>
      </g>

      <!-- Map Pin 2 -->
      <g transform="translate(250, 85)">
        <circle cx="0" cy="0" r="12" fill="#059669" fill-opacity="0.1" />
        <circle cx="0" cy="0" r="3" fill="#059669" />
        <path d="M 0 -2 C 2 -2 4 -5 4 -9 C 4 -13 0 -16 0 -16 C 0 -16 -4 -13 -4 -9 C -4 -5 -2 -2 0 -2 Z" fill="#059669" />
        <circle cx="0" cy="-10" r="1.5" fill="#ffffff" />
        <text x="0" y="16" font-family="'Inter', sans-serif" font-size="9" font-weight="800" fill="#0f172a" text-anchor="middle">Indiranagar</text>
      </g>

      <!-- Map stats legend -->
      <text x="181" y="172" font-family="'Inter', sans-serif" font-size="8" font-weight="bold" fill="#94a3b8" letter-spacing="1">GPS FEED VERIFIED ACTIVE</text>
    </g>

    <!-- Bottom details indicators -->
    <g transform="translate(24, 362)">
      <rect width="172" height="66" rx="12" fill="#f8fafc" stroke="#f1f5f9" stroke-width="1" />
      <text x="12" y="24" font-family="'Inter', sans-serif" font-size="7" font-weight="bold" fill="#64748b" letter-spacing="1">E-GREENHUB</text>
      <text x="12" y="44" font-family="'Inter', sans-serif" font-size="10" font-weight="bold" fill="#0f172a">Mon-Sat: open until 5pm</text>

      <rect x="190" y="0" width="172" height="66" rx="12" fill="#f8fafc" stroke="#f1f5f9" stroke-width="1" />
      <text x="202" y="24" font-family="'Inter', sans-serif" font-size="7" font-weight="bold" fill="#64748b" letter-spacing="1">WASTECYCLE</text>
      <text x="202" y="44" font-family="'Inter', sans-serif" font-size="10" font-weight="bold" fill="#0f172a">Sat-Sun: Weekend drop</text>
    </g>
  </g>
</svg>
`.trim();

export const RECYCLING_STORE_LOCATOR_IMAGE = "data:image/svg+xml;utf8," + encodeURIComponent(RECYCLING_STORE_LOCATOR_SVG);
