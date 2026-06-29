// Theme configuration với chế độ sáng/tối
export const lightTheme = {
  background: {
    primary: '#faf8f5',
    secondary: '#f3eee3',
    tertiary: '#e7dfcc',
    card: '#ffffff',
    hover: '#efe9da',
  },
  text: {
    primary: '#111520',
    secondary: '#384252',
    tertiary: '#6b778c',
    accent: '#0d9488',
  },
  border: {
    primary: '#ebdcb9',
    secondary: '#d9c8a0',
  },
  accent: {
    primary: '#008080',
    secondary: '#d946ef',
    tertiary: '#4f46e5',
    gradient: 'linear-gradient(135deg, #008080 0%, #d946ef 100%)',
  },
  shadow: {
    sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
    md: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
    lg: '0 10px 15px -3px rgb(0 0 0 / 0.1)',
    xl: '0 20px 25px -5px rgb(0 0 0 / 0.1)',
  }
};

export const darkTheme = {
  background: {
    primary: '#03030c',
    secondary: '#090919',
    tertiary: '#131230',
    card: '#0c0b24',
    hover: '#1c1a45',
  },
  text: {
    primary: '#f2f3f9',
    secondary: '#a6a8c7',
    tertiary: '#71739c',
    accent: '#00f2fe',
  },
  border: {
    primary: '#1f1b4c',
    secondary: '#2f2b6e',
  },
  accent: {
    primary: '#00f2fe',
    secondary: '#d946ef',
    tertiary: '#22c55e',
    gradient: 'linear-gradient(135deg, #00f2fe 0%, #d946ef 100%)',
  },
  shadow: {
    sm: '0 1px 2px 0 rgb(0 0 0 / 0.3)',
    md: '0 4px 6px -1px rgb(0 0 0 / 0.3)',
    lg: '0 10px 15px -3px rgb(0 0 0 / 0.3)',
    xl: '0 20px 25px -5px rgb(0 0 0 / 0.3)',
  }
};

export type Theme = typeof lightTheme;
