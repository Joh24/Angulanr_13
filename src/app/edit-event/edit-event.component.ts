import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { DataService } from '../service/data.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-event',
  templateUrl: './edit-event.component.html',
  styleUrls: ['./edit-event.component.css']
})
export class EditEventComponent implements OnInit {

  isUpdate : boolean = false;
  id : any = 0;
  mission : any = {};
  TmpRef : any

  constructor(private datas : DataService,private route: ActivatedRoute, private router : Router, private eventsForm: FormBuilder) { 
    this.route.params.subscribe( async (params:any) =>  {
      if(params.id){
        this.isUpdate = true;
        this.id = params.id;
        this.mission = this.datas.findMission(this.id);
        await this.delay(100);
      }
  });
 
  }

  delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }


  ngOnInit(): void {
    this.datas.initData();
    if(this.isUpdate) {
      this.mission = this.datas.findMission(this.id);
      this.setFormVal();
    }
    

  }


  events_form = this.eventsForm.group({
    personne: [(this.isUpdate) ? this.mission.personne.id : ''],
    titre: [this.isUpdate ? this.mission.title :''],
    couleur: [this.isUpdate ? this.mission.backgroundColor : '#712cf9'],
    debut: [this.isUpdate ? this.mission.start :''],
    fin: [this.isUpdate ? this.mission.end :''],
    description: [this.isUpdate ? this.mission.description : ''],
  });


  setFormVal(){
    this.events_form.controls['titre'].setValue(this.mission.title);
    this.events_form.controls['personne'].setValue(this.mission.personne.id);
    this.events_form.controls['couleur'].setValue(this.mission.backgroundColor);
    this.events_form.controls['debut'].setValue(this.mission.start);
    this.events_form.controls['fin'].setValue(this.mission.end);
    this.events_form.controls['description'].setValue(this.mission.description);
  }

  getFormValue(){
    return {
      id: this.datas.newId(),
      title: this.events_form.get('titre')?.value ,
      backgroundColor: this.events_form.get('couleur')?.value,
      start: this.events_form.get('debut')?.value ,
      end: this.events_form.get('fin')?.value ,
      description: this.events_form.get('description')?.value,
      imageurl: this.datas.findPersonne(this.events_form.get('personne')?.value).photo,
      personne: this.datas.findPersonne(this.events_form.get('personne')?.value) ,
    };
  }

  onSubmit(){
      console.log('------------ Save -----------');

      console.log(this.getFormValue());
      if(!this.isUpdate){
        this.datas.nouveauMission(this.getFormValue());
      }else{
        this.datas.modiffMission(this.id,this.getFormValue())
      }
      console.log('-----------------------');
      this.router.navigate(['/'])
      
  }


}
