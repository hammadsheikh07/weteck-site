/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'backimage1': "url('/assets/Weteck Homepage Assets/Component 4 – 1.svg')",
      },
      colors: {
        'backcolor': "#020E18",
        'textcolor': "#FFFFFF",
        'secbtnclr':'#FA4D4D',
        'learnmore':'#1F8EFF',
      },
      fontFamily: {
       'textfont': ['Poppins'],
      },
      fontSize:{
        'head2':'26px',
        'head3':'20px',
        'head1':'56px',
        'body1':'12px',
      },
      gradientColorStops:{
        'btnclr1':'#037BDB',
        'btnclr2':'#1A99FF',
        'conclr1':'#002A4D',
        'conclr2':'#043D6DFA',
      },
      width:{
        '100':'28rem',
      },
    },
  },
  plugins: [],
};
