import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Formatos',
    icon: 'clipboard-outline',
    children: [
        {
            title: 'Entrega de silabo',
            link: '/Inicio/Formatos/silabos'
        },
        {
            title: 'Eleccion de Delegado',
            link: '/Inicio/Formatos/delegados'
        },
        {
            title: 'Informes fin de ciclo',
            link: '/Inicio/Formatos/informes'
        },
    ]

  },
  {
    title: 'Cursos',
    icon: 'book-open-outline',
    link: '/Inicio/Cursos',
  },
  {
    title: 'Reportes',
    icon: 'keypad-outline',
    link: '/Inicio/Reportes',
  },
]