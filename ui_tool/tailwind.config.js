/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'primary': {
        950: '#EE7D00',
        900: '#FF8B0A',
        800: '#FF9724',
        700: '#FFA33D',
        600: '#FFAF57',
        500: '#FFBB70',
        400: '#FFC78A',
        300: '#FFD3A3',
        200: '#FFDFBD',
        100: '#FFEBD6',
        50: '#FFF8F0',
      },
      'grayscale': {
        950: '#030303',
        900: '#1a1a1a',
        800: '#333333',
        700: '#4d4d4d',
        600: '#666666',
        500: '#808080',
        400: '#999999',
        300: '#b3b3b3',
        200: '#cccccc',
        100: '#e6e6e6',
        50: '#f3f3f3',
      },
      'meaning': '#ef4565',
    },
    fontFamily: {
      'basic': 'Pretendard',
    },
    fontSize: {
      h1: [
        '32px', {lineHeight: '38.4px'}
      ],
      h2: [
        '28px', {lineHeight: '33.6px'}
      ],
      h3: [
        '24px', {lineHeight: '28.8px'}
      ],
      h4: [
        '20px', {lineHeight: '24px'}
      ],
      body1B: [
        '20px', {lineHeight: '24px', fontWeight: '700'}
      ],
      body2B: [
        '18px', {lineHeight: '21.6px', fontWeight: '700'}
      ],
      body3B: [
        '16px', {lineHeight: '19.2px', fontWeight: '700'}
      ],
      body4B: [
        '14px', {lineHeight: '16.8px', fontWeight: '700'}
      ],
      body5B: [
        '12px', {lineHeight: '14.4px', fontWeight: '700'}
      ],
      body1m: [
        '20px', {lineHeight: '24px', fontWeight: '500'}
      ],
      body2m: [
        '18px', {lineHeight: '21.6px', fontWeight: '500'}
      ],
      body3m: [
        '16px', {lineHeight: '19.2px', fontWeight: '500'}
      ],
      body4m: [
        '14px', {lineHeight: '16.8px', fontWeight: '500'}
      ],
      body5m: [
        '12px', {lineHeight: '14.4px', fontWeight: '500'}
      ],
      body1r: [
        '20px', {lineHeight: '24px', fontWeight: '400'}
      ],
      body2r: [
        '18px', {lineHeight: '21.6px', fontWeight: '400'}
      ],
      body3r: [
        '16px', {lineHeight: '19.2px', fontWeight: '400'}
      ],
      body4r: [
        '14px', {lineHeight: '16.8px', fontWeight: '400'}
      ],
      body5r: [
        '12px', {lineHeight: '14.4px', fontWeight: '400'}
      ],
      caption10m: [
        '10px', {lineHeight: '11.93px', fontWeight: '500'}
      ],
      caption10r: [
        '10px', {lineHeight: '11.93px', fontWeight: '400'}
      ]
    },
  },
  plugins: [],
}

