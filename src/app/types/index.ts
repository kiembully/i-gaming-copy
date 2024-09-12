export interface Game {
  name: string;
  href: string;
  imgsrc: string;
}

export interface NavigationPage {
  name: string;
  href: string;
  imgsrc: string;
}

export interface Navigation {
  pages: NavigationPage[];
}

export interface NavbarProps {
  openDialog: (val: number) => void;
}

export interface Bets {
  game: string;
  nickname: string;
  betAmount: string;
  profit: string;
  odds: string;
}

export interface Banner {
  name: string;
  banner: string;
  cover: string;
  caption: string;
}
