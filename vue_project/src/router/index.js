import Sushi from '@/components/Sushi'
import Maki from '@/components/Maki'
import Yakitori from '@/components/Yakitori'
import MenuBrochettes from '@/components/MenuBrochettes'
import MenuMaki from '@/components/MenuMaki'
import MenuSushi from '@/components/MenuSushi'
import Boissons from '@/components/Boissons'
import Desserts from '@/components/Desserts'
import APropos from '@/components/APropos'
import Contact from '@/components/Contact'
import Panier from '@/components/Panier'
import Authentification from '@/components/Authentification'
import Checkout from '@/components/Checkout'

export const routers = [
  {
    path: '/Sushi',
    name: 'Sushi',
    component: Sushi
  },
  {
    path: '/Maki',
    name: 'Maki',
    component: Maki
  },
  {
    path: '/Yakitori',
    name: 'Yakitori',
    component: Yakitori
  },
  {
    path: '/MenuBrochettes',
    name: 'Menu Brochettes',
    component: MenuBrochettes
  },
  {
    path: '/MenuMaki',
    name: 'Menu Maki',
    component: MenuMaki
  },
  {
    path: '/MenuSushi',
    name: 'Menu Sushi',
    component: MenuSushi
  },
  {
    path: '/Boissons',
    name: 'Boissons',
    component: Boissons
  },
  {
    path: '/Desserts',
    name: 'Desserts',
    component: Desserts
  },
  {
    path: '/APropos',
    name: 'A Propos',
    component: APropos
  },
  {
    path: '/Contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/Panier',
    name: 'Panier',
    component: Panier
  },
  {
    path: '/Authentification',
    name: 'Authentification',
    component: Authentification
  },
  {
    path: '/Checkout',
    name: 'Checkout',
    component: Checkout
  }
]
