import 'styled-components';
import { ThemeObject } from '@paljs/theme';
declare module 'styled-components' {
  export interface DefaultTheme extends ThemeObject {
    name: 'cosmic';
    dir: 'ltr';
    sidebarHeaderGap: string;
    gridSize: number;
  }
}
