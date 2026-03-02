// Theme configuration với chế độ sáng/tối
export const lightTheme = {
  background: {
    primary: '#FFFFFF',
    secondary: '#F8FAFC',
    tertiary: '#F1F5F9',
    card: '#FFFFFF',
    hover: '#F1F5F9',
  },
  text: {
    primary: '#0F172A',
    secondary: '#475569',
    tertiary: '#64748B',
    accent: '#0EA5E9',
  },
  border: {
    primary: '#E2E8F0',
    secondary: '#CBD5E1',
  },
  accent: {
    primary: '#0EA5E9',
    secondary: '#06B6D4',
    tertiary: '#8B5CF6',
    gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
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
    primary: '#0F172A',
    secondary: '#1E293B',
    tertiary: '#334155',
    card: '#1E293B',
    hover: '#334155',
  },
  text: {
    primary: '#F8FAFC',
    secondary: '#CBD5E1',
    tertiary: '#94A3B8',
    accent: '#38BDF8',
  },
  border: {
    primary: '#334155',
    secondary: '#475569',
  },
  accent: {
    primary: '#38BDF8',
    secondary: '#22D3EE',
    tertiary: '#A78BFA',
    gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  },
  shadow: {
    sm: '0 1px 2px 0 rgb(0 0 0 / 0.3)',
    md: '0 4px 6px -1px rgb(0 0 0 / 0.3)',
    lg: '0 10px 15px -3px rgb(0 0 0 / 0.3)',
    xl: '0 20px 25px -5px rgb(0 0 0 / 0.3)',
  }
};

export type Theme = typeof lightTheme;
