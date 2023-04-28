import { Component, OnInit } from '@angular/core';
import { Ticket } from '../entity/ticket';
import { TicketService } from '../services/ticket.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-ticket',
  templateUrl: './create-ticket.component.html',
  styleUrls: ['./create-ticket.component.css']
})
export class CreateTicketComponent implements OnInit {
  ticket: Ticket = new Ticket();
  constructor(private ticketService:TicketService,
    private router:Router
    ) { }

  ngOnInit(): void {
  }

saveTicket(){
  this.ticket.id_user=1;
  this.ticket.status="PENDING";
  this.ticketService.addTicket(this.ticket).subscribe( data => {
console.log(data);
this.gototicketList();
  },
  error => console.log(error));
}

gototicketList(){
this.router.navigate(['/tickets']);
}

  onSubmit(){
    console.log(this.ticket);
    this.saveTicket();
  }

}
