export interface NavLink {
  name: string;
  href: string;
}

export const navigation: NavLink[] = [
  { name: 'Новости', href: '/#news' },
  { name: 'Услуги', href: '/#services' },
  { name: 'О нас', href: '/about-us' },
  { name: 'Туристам', href: '/tourists' },
  { name: 'Контакты', href: '/contacts' },
];
