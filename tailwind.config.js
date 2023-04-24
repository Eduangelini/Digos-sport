tailwind.config = {
  theme: {
    extend: {
      screens: {
        'snartphone': '360px',
        'tablet': '768px',
        'laptop': '1024px',
        'desktop': '1440px',
      },
      colors: {
        'primary': '#F52321',
        'bg': '#FCFCFC',
        'bg-card': '#F2F5FF',
        'bg-footer': '#FFF2F2',

        'black': '#000000',
        'gray': '#DDDDDD',
        'white': '#ffffff',
      },
      fontFamily: {
        'serif': ['Poppins', 'serif'],
      },
    }
  }
}