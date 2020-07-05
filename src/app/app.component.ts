import { Component } from '@angular/core';
import { Model, ToDoItem } from './model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  model: Model = new Model();
  isDisplay: boolean = false;

  getName(): string {
    return this.model.user;
  }

  getItems(): ToDoItem[] {
    
    return this.isDisplay 
      ? this.model.items
      : this.model.items.filter(item=>!item.action);
  }

  addItem(value: string): void{
    if(value != ''){
      this.model.items.push(new ToDoItem(value,false));
    }
  }
}

