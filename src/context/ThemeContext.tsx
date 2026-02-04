/* eslint-disable react-refresh/only-export-components */
import type { ReactNode } from 'react';
import { createContext, useMemo, useContext, useEffect, useState } from 'react';

/** 라이트/다크 테마 타입 */
type Theme = 'light' | 'dark';

/** 테마 컨텍스트에서 제공하는 값 */
interface ThemeContextType {
  /** 현재 테마 ('light' | 'dark') */
  theme: Theme;
  /** 테마 전환 (light ↔ dark) */
  toggleTheme: () => void;
  /** 다크 모드 여부 */
  isDark: boolean;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

/**
 * 앱 전역에 테마(라이트/다크)를 제공하는 Provider.
 * localStorage 및 prefers-color-scheme을 사용해 초기값을 결정하고,
 * document.documentElement에 'light' | 'dark' 클래스를 적용합니다.
 *
 * @param props - React 노드 children
 */
export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<Theme>(() => {
    const savedTheme = localStorage.getItem('theme') as Theme | null;
    if (savedTheme) return savedTheme;
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) return 'dark';
    return 'light';
  });

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  const value = useMemo(
    () => ({
      theme,
      toggleTheme,
      isDark: theme === 'dark',
    }),
    [theme],
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

/**
 * ThemeContext 값을 반환하는 훅. ThemeProvider 밖에서 사용 시 에러를 던집니다.
 *
 * @returns {ThemeContextType} theme, toggleTheme, isDark
 * @throws {Error} ThemeProvider 외부에서 호출된 경우
 */
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
