interface InterfaceMenuList {
  [key: string]: InterfaceMenuItem;
}

interface InterfaceMenuItem {
  title: string;
  icon?: string;
  subs?: InterfaceMenuItem[]
}

export const MenuList: InterfaceMenuList = {
  JS: {
    title: 'InterestingJS',
    icon: '',
    subs: [
      
    ]
  },
  CSS: {
    title: 'InterestingCSS',
    icon: '',
    subs: []
  },
  HTML: {
    title: 'InterestingHTML',
    icon: '',
    subs: []
  },
  HTTP: {
    title: 'InterestingHTTP',
    icon: '',
    subs: []
  },
  VUE: {
    title: 'InterestingVUE',
    icon: '',
    subs: []
  },
  REACT: {
    title: 'InterestingREACT',
    icon: '',
    subs: []
  }
}