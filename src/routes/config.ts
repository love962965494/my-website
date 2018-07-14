import { Component } from 'react';
import __dev_import__ from './_import_development'
import __pro_import__ from './_import_production'

const importComponent = process.env.NODE_ENV === 'production' ? __pro_import__ : __dev_import__

export interface IMenuList {
  [key: string]: IMenuItem
}

export interface IMenuItem {
  id: string
  title: string
  component? : Component
  icon?: string
  subs?: IMenuItem[]
}

export const MenuList: IMenuList = {
  JS: {
    id: '01',
    title: 'InterestingJS',
    component: importComponent(''),
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
