import { Component } from '@angular/core';

import { TicketService } from './services/ticket.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [TicketService]
})
export class AppComponent {
  title = 'project';
}
