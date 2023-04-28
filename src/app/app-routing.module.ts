import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TicketListComponent } from './ticket-list/ticket-list.component';
import { CreateTicketComponent } from './create-ticket/create-ticket.component';
import { UpdateTicketComponent } from './update-ticket/update-ticket.component';
import { ReponseListComponent } from './reponse-list/reponse-list.component';
import { CreateReponseComponent } from './create-reponse/create-reponse.component';
import { UpdateReponseComponent } from './update-reponse/update-reponse.component';

const routes: Routes = [

  {path:'tickets', component: TicketListComponent},
  {path:'reponses', component: ReponseListComponent},
  {path:'create-ticket',component: CreateTicketComponent},
  {path:'update-ticket/:id',component: UpdateTicketComponent},
  {path:'create-reponse',component: CreateReponseComponent},
  {path:'update-reponse/:id',component: UpdateReponseComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
