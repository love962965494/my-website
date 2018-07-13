export interface InterfaceMenuList {
  [key: string]: InterfaceMenuItem
}

export interface InterfaceMenuItem {
  id: string,
  title: string
  icon?: string
  subs?: InterfaceMenuItem[]
}

export const MenuList: InterfaceMenuList = {
  JS: {
    id: '01',
    title: 'InterestingJS',
    icon: '',
    subs: []
  },
  CSS: {
    id: '02',
    title: 'InterestingCSS',
    icon: '',
    subs: [
      {
        id: '021',
        title: 'CSSReference',
        icon: ''
      },
      {
        id: '022',
        title: 'AmazingAnimation',
        icon: ''
      }
    ]
  },
  HTML: {
    id: '03',
    title: 'InterestingHTML',
    icon: '',
    subs: []
  },
  HTTP: {
    id: '04',
    title: 'InterestingHTTP',
    icon: '',
    subs: []
  },
  VUE: {
    id: '05',
    title: 'InterestingVUE',
    icon: '',
    subs: []
  },
  REACT: {
    id: '06',
    title: 'InterestingREACT',
    icon: '',
    subs: []
  }
}
