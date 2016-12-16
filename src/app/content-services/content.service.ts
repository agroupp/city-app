import { Injectable } from '@angular/core';

import { Language } from '../language';
import { LANGUAGES } from '../languages';
import { Label } from './label';
import { ComponentLabel } from './component-label';
import { componentsLabels } from './components-labels';
import { menuItems } from './menu-items';

@Injectable()
export class ContentService {
  constructor(){

  }
  getComponentLabel(componentName: String, lang: Language){
    let cmp = componentsLabels.filter(cmpLabel => cmpLabel.name === componentName);
    let label = cmp[0].labels.filter(label => label.langCode === lang.code)
    return label[0].label;
  }
  getMainMenu(category: String, lang: Language){
    let result = [];
    let categoryMenu = menuItems.filter(item => item.category === category);
    categoryMenu.forEach(
      i => {
        let res = {};
        res['routerLink'] = i.routerLink;
        res['label'] = i.labels.filter(label => label.langCode === lang.code)[0].label;
        result.push(res);
      }
    );
    return result;
  }
}