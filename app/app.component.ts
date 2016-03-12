import {Component} from 'angular2/core';

@Component({
    selector: 'my-app',
    template: '<h1>{{title}}</h1><h2>{{name}} details!</h2>'
})
export class AppComponent {
  private title = 'Tour of Heroes';
  private name = 'Windstorm';
}
