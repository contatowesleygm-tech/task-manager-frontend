import { createContext, useContext, useLayoutEffect, useState, type ReactNode } from 'react';

export type ThemeMode = 'light' | 'dark';

interface ThemeContextValue {
  mode: ThemeMode;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextValue | null>(null);
const storageKey = 'task-manager-theme';

export function AppThemeProvider({ children }: { children: ReactNode }) {
  const [mode, setMode] = useState<ThemeMode>(() => (
    localStorage.getItem(storageKey) === 'dark' ? 'dark' : 'light'
  ));

  useLayoutEffect(() => {
    document.documentElement.dataset.theme = mode;
    document.querySelector<HTMLMetaElement>('meta[name="theme-color"]')
      ?.setAttribute('content', mode === 'dark' ? '#0B1120' : '#F8FAFC');
    localStorage.setItem(storageKey, mode);
  }, [mode]);

  function toggleTheme() {
    setMode(current => current === 'light' ? 'dark' : 'light');
  }

  return (
    <ThemeContext.Provider value={{ mode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useAppTheme() {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('useAppTheme must be used within AppThemeProvider');
  return context;
}
