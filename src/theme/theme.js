export const baseTheme = {
  fontFamily: '"Orbitron", "Arial", sans-serif',
  fontSizeDefault: '18px',
  lineHeight: '28px',
  maxPageWidth: '1440px',
  pagePadding: '0 60px',
  mainTransition: '0.3s ease',

  colors: {
    mainBgColor: '#222730',
    mainTextColor: '#ffffff',
    secondaryBgColor: '#000000',
    secondaryTextColor: '#999999',
    blue: '#57b8ff',
    grey: '#2a313c',
    currentLinkColor: '#fac422',
  },
  size: {
    mobile: '1023px',
  },
};

baseTheme.device = {
  mobile: `(max-width: ${baseTheme.size.mobile})`,
};
