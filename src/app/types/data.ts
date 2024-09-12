import { Navigation, Bets, Game, Banner } from '@/app/types';

export const navigationData: Navigation = {
  pages: [
    { name: 'Slots', href: '#', imgsrc: '/assets/images/slots.png' },
    { name: 'Mini Games', href: '#', imgsrc: '/assets/images/mini-games.png' },
    { name: 'Card Games', href: '#', imgsrc: '/assets/images/card-games.png' },
    { name: 'Board Games', href: '#', imgsrc: '/assets/images/board-games.png' },
    { name: 'Fishing', href: '#', imgsrc: '/assets/images/fishing.png' },
    { name: 'VIP Club', href: '#', imgsrc: '/assets/images/vip-club.png' },
    { name: 'Promos', href: '#', imgsrc: '/assets/images/promos.png' },
    { name: 'Wallet', href: '#', imgsrc: '/assets/images/wallet.png' },
    { name: 'Account', href: '#', imgsrc: '/assets/images/account.png' },
  ],
};

export const bestsData: Bets[] = [
  {
    game: "Game 1",
    nickname: "Nickname 1",
    betAmount: "$10,000",
    profit: "$10,000",
    odds: "2.5",
  },
  {
    game: "Game 2",
    nickname: "Nickname 2",
    betAmount: "$15,000",
    profit: "$12,000",
    odds: "3.0",
  },
  {
    game: "Game 3",
    nickname: "Nickname 3",
    betAmount: "$7,000",
    profit: "$8,000",
    odds: "1.8",
  },
  {
    game: "Game 4",
    nickname: "Nickname 4",
    betAmount: "$12,000",
    profit: "$10,000",
    odds: "2.2",
  },
  {
    game: "Game 5",
    nickname: "Nickname 5",
    betAmount: "$9,000",
    profit: "$9,500",
    odds: "2.1",
  },
];


export const popularGamesData: Game[] = [
  {
    name: "Fortune Dragon",
    href: "#",
    imgsrc: "/assets/images/game-covers/fortune-dragon.png",
  },
  {
    name: "Fortune Rabbit",
    href: "#",
    imgsrc: "/assets/images/game-covers/fortune-rabbit.png",
  },
  {
    name: "Green Chilli",
    href: "#",
    imgsrc: "/assets/images/game-covers/green-chilli.png",
  },
  {
    name: "Hawaiian Tiki",
    href: "#",
    imgsrc: "/assets/images/game-covers/hawaiian-tiki.png",
  },
  {
    name: "Fortune Ox",
    href: "#",
    imgsrc: "/assets/images/game-covers/fortune-ox.png",
  },
  {
    name: "Treasure Snipes",
    href: "#",
    imgsrc: "/assets/images/game-covers/treasure-snipe.png",
  },
];


export const liveGamesData: Game[] = [
  {
    name: "Auto Roulette",
    href: "#",
    imgsrc: "/assets/images/game-covers/auto-roullete.png",
  },
  {
    name: "RedBlack Poker",
    href: "#",
    imgsrc: "/assets/images/game-covers/redblack-poker.png",
  },
  {
    name: "Baccarat Deluxe",
    href: "#",
    imgsrc: "/assets/images/game-covers/baccarat-deluxe.png",
  },
  {
    name: "Roll the Dice",
    href: "#",
    imgsrc: "/assets/images/game-covers/roll-the-dice.png",
  },
  {
    name: "Big Small",
    href: "#",
    imgsrc: "/assets/images/game-covers/big-jili-small.png",
  },
];

export const bannersData: Banner[] = [
  {
    name: "",
    banner: "/assets/images/backgrounds/slot-machine.png",
    cover: "",
    caption: "FREE SPINS After your 1st Top Up!",
  },
  {
    name: "",
    banner: "/assets/images/backgrounds/casino-bg.png",
    cover: "/assets/images/backgrounds/pngtree-casino-girl-with-money-for-advertising-on-transparent-background-png-image_12489643.png",
    caption: "Join Live Games with other players.",
  },
  {
    name: "",
    banner: "/assets/images/backgrounds/join-vip-club.png",
    cover: "/assets/images/backgrounds/img-lottery-03.png.png",
    caption: "Join the VIP Club to avail Exclusive Perks.",
  },
  {
    name: "",
    banner: "/assets/images/backgrounds/casino-bg-C-a.png",
    cover: "/assets/images/backgrounds/casino-game-list.png",
    caption: "Choose from MANY GAMES!",
  },
];

