import { Component } from '@angular/core';
import * as hljs from 'highlight.js';

import 'style-loader!../../../../../node_modules/highlight.js/styles/dracula.css';

import 'style-loader!./demo.scss';

@Component({
  selector: 'demo',
  templateUrl: 'demo.html',
})
export class DemoComponent {

  snippets = {
    install: require('raw-loader!./snippets/install.md'),
    require: require('raw-loader!./snippets/require.md'),
    directive: require('raw-loader!./snippets/directive.md'),
    settings: require('raw-loader!./snippets/settings.md'),
    template: require('raw-loader!./snippets/template.md'),
    array: require('raw-loader!./snippets/array.md'),
    dataTemplate: require('raw-loader!./snippets/data-template.md'),
    basicFull: require('raw-loader!./snippets/basic-full.md'),
  };

  constructor() {
  }

  ngAfterViewInit(): void {
    hljs.initHighlighting();
  }
}
