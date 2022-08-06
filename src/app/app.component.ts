import { Component } from '@angular/core';
import {groupData} from '../data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myangularproject';

  //JSON Data
  public listData: { [key: string]: Object }[] = groupData;

  public fieldsSettings: object = {id: "id", text: "text", groupBy: "category"};
}
