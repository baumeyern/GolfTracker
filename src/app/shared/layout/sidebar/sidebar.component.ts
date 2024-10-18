import { Component } from '@angular/core';
import {HomeComponent} from '../../../components/home/home.component';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  protected readonly HomeComponent = HomeComponent;
}
