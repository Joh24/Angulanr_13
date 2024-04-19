import { Component, OnInit, TemplateRef, ViewChild, inject } from '@angular/core';
import { DataService } from '../service/data.service';
import { CalendarOptions, DateSelectArg, EventClickArg, EventInput } from '@fullcalendar/core';
import interactionPlugin from '@fullcalendar/interaction';
import timeGridPlugin from '@fullcalendar/timegrid';
import dayGridPlugin from '@fullcalendar/daygrid';
import frLocale from '@fullcalendar/core/locales/fr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mission',
  templateUrl: './mission.component.html',
  styleUrls: ['./mission.component.css'],
})
export class MissionComponent implements OnInit {

  constructor(public datas : DataService, private router : Router) { }

  ngOnInit(): void {
    this.datas.initData();
  }

  currentId : any = 0;
  currentName : any = "";
  currentStart : any = "";
  currentend : any = "";
  currentDescription : any = "";
  currentTitle : any = "";

  calendarOptions: CalendarOptions = {
    initialView: 'timeGridWeek',
    plugins: [timeGridPlugin, dayGridPlugin,interactionPlugin],
    locales: [ frLocale ],
    locale: 'fr',    eventContent:this.renderEventContent,
    themeSystem: 'bootstrap5',
    height: '100%',
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay,listMonth'
    },
    //select: this.handleDateSelect.bind(this),
    eventClick: this.handleEventClick.bind(this),
    weekNumbers: true,
    dayMaxEvents: true,
    events: this.datas.getData()
  };

renderEventContent(eventInfo : EventClickArg, createElement : EventInput) {
  var innerHtml;
        if (eventInfo.event._def.extendedProps['imageurl']) {
        innerHtml = "<div><img class='rounded-circle ms-1' style='width:40px;' src='"+eventInfo.event._def.extendedProps['imageurl']+"'></div><div class='ms-2'>"+eventInfo.event._def.extendedProps['personne'].nom+"<br>"+eventInfo.event._def.title+"</div>";
      }
        return createElement = { html: "<div class='d-flex'  data-bs-toggle='tooltip' data-bs-html='true' title='"+eventInfo.event._def.extendedProps['description']+"'>"+innerHtml+"<div>" }
      
  
  }

  displayStyle = "none"; 
  
  openPopup() { 
    this.displayStyle = "block"; 
  } 
  closePopup() { 
    this.displayStyle = "none"; 
  } 

/*
  handleDateSelect(selectInfo: DateSelectArg) {
    const title = prompt('Please enter a new title for your event');
    const calendarApi = selectInfo.view.calendar;

    calendarApi.unselect(); // clear date selection

    if (title) {
      calendarApi.addEvent({
        id: createEventId(),
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: selectInfo.allDay
      });
    }
  }*/

  handleEventClick(clickInfo: EventClickArg) {
    this.currentId = clickInfo.event.id;
    this.currentTitle = clickInfo.event.title;
    this.currentName = clickInfo.event._def.extendedProps['personne'].nom;
    this.currentStart = clickInfo.event.start;
    this.currentend = clickInfo.event.end;
    this.currentDescription = clickInfo.event._def.extendedProps['description'];

    console.log(clickInfo.event.id);
    this.openPopup();
  }

  supprimer(id:any){
    this.datas.delMission(id);
    this.closePopup();
    window.location.reload();
    this.router.navigate(['/'])
  }








  


}
