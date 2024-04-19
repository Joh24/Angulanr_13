import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MissionComponent } from './mission/mission.component';
import { EditEventComponent } from './edit-event/edit-event.component';

const routes: Routes = [
  {path : '', component : MissionComponent },
  {path : 'mission', component : EditEventComponent },
  {path : 'mission/:id', component : EditEventComponent },
  {path : '**', component : MissionComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
