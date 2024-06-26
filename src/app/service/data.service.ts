import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  missions : any =  [{
                            id : 1,
                            title : "Mission 1",
                            start: "2024-04-20 05:30:00",
                            end: "2024-04-20 07:30:00",
                            description : "Description mission 1",
                            backgroundColor: "#9a0",
                            imageurl : "assets/1.PNG",
                            personne : {
                                id : 1,
                                nom : "Jeanne Marie",
                                photo : "assets/1.PNG"
                            }
                        },{
                            id : 2,
                            title : "Mission 2",
                            start: "2024-04-18 11:30:00",
                            end: "2024-04-18 13:30:00",
                            description : "Description mission 1",
                            backgroundColor: "#450",
                            imageurl : "assets/1.PNG",
                            personne : {
                                id : 1,
                                nom : "Jeanne Marie",
                                photo : "assets/1.PNG"
                            }
                        },{
                            id : 3,
                            title : "Mission 3",
                            start: "2024-04-19 10:30:00",
                            end: "2024-04-19 11:30:00",
                            description : "Description mission 2",
                            backgroundColor: "#380",
                            imageurl : "assets/2.PNG",
                            personne : {
                                id : 2,
                                nom : "Jean Luc",
                                photo : "assets/2.PNG"
                            }
                        },{
                            id : 4,
                            title : "Mission 3",
                            start: "2024-04-19 08:20:00",
                            end: "2024-04-19 10:20:00",
                            description : "Description mission 2",
                            backgroundColor: "#380",
                            imageurl : "assets/2.PNG",
                            personne :{
                                id : 4,
                                nom : "Jean Petit",
                                photo : "assets/4.PNG"
                            }
                        },{
                            id :5,
                            title : "Mission 1",
                            start: "2024-04-23 05:30:00",
                            end: "2024-04-23 07:30:00",
                            description : "Description mission 1",
                            backgroundColor: "#9a0",
                            imageurl : "assets/1.PNG",
                            personne : {
                                id : 1,
                                nom : "Jeanne Marie",
                                photo : "assets/1.PNG"
                            }
                        },{
                            id : 6,
                            title : "Mission 2",
                            start: "2024-04-30 11:30:00",
                            end: "2024-04-30 13:30:00",
                            description : "Description mission 1",
                            backgroundColor: "#450",
                            imageurl : "assets/1.PNG",
                            personne : {
                                id : 1,
                                nom : "Jeanne Marie",
                                photo : "assets/1.PNG"
                            }
                        },{
                            id : 7,
                            title : "Mission 2",
                            start: "2024-04-29 11:30:00",
                            end: "2024-04-29 13:30:00",
                            description : "Description mission 1",
                            backgroundColor: "#450",
                            imageurl : "assets/1.PNG",
                            personne : {
                                id : 1,
                                nom : "Jeanne Marie",
                                photo : "assets/1.PNG"
                            }
                        },{
                            id : 8,
                            title : "Mission 1",
                            start: "2024-05-02 05:30:00",
                            end: "2024-05-02 07:30:00",
                            description : "Description mission 1",
                            backgroundColor: "#9a0",
                            imageurl : "assets/1.PNG",
                            personne : {
                                id : 1,
                                nom : "Jeanne Marie",
                                photo : "assets/1.PNG"
                            }
                        },{
                            id : 9,
                            title : "Mission 2",
                            start: "2024-05-02 11:30:00",
                            end: "2024-05-02 13:30:00",
                            description : "Description mission 1",
                            backgroundColor: "#450",
                            imageurl : "assets/1.PNG",
                            personne : {
                                id : 1,
                                nom : "Jeanne Marie",
                                photo : "assets/1.PNG"
                            }
                        },{
                            id : 10,
                            title : "Mission 3",
                            start: "2024-05-03 10:30:00",
                            end: "2024-05-03 11:30:00",
                            description : "Description mission 2",
                            backgroundColor: "#380",
                            imageurl : "assets/2.PNG",
                            personne : {
                                id : 2,
                                nom : "Jean Luc",
                                photo : "assets/2.PNG"
                            }
                        },{
                            id : 11,
                            title : "Mission 3",
                            start: "2024-05-08 08:20:00",
                            end: "2024-05-08 10:20:00",
                            description : "Description mission 2",
                            backgroundColor: "#380",
                            imageurl : "assets/2.PNG",
                            personne :{
                                id : 4,
                                nom : "Jean Petit",
                                photo : "assets/4.PNG"
                            }
                        },{
                            id :12,
                            title : "Mission 1",
                            start: "2024-05-08 05:30:00",
                            end: "2024-05-08 07:30:00",
                            description : "Description mission 1",
                            backgroundColor: "#9a0",
                            imageurl : "assets/1.PNG",
                            personne : {
                                id : 1,
                                nom : "Jeanne Marie",
                                photo : "assets/1.PNG"
                            }
                        },{
                            id : 13,
                            title : "Mission 2",
                            start: "2024-05-09 11:30:00",
                            end: "2024-05-09 13:30:00",
                            description : "Description mission 1",
                            backgroundColor: "#450",
                            imageurl : "assets/1.PNG",
                            personne : {
                                id : 1,
                                nom : "Jeanne Marie",
                                photo : "assets/1.PNG"
                            }
                        },{
                            id : 14,
                            title : "Mission 2",
                            start: "2024-05-15 11:30:00",
                            end: "2024-05-15 13:30:00",
                            description : "Description mission 1",
                            backgroundColor: "#450",
                            imageurl : "assets/1.PNG",
                            personne : {
                                id : 1,
                                nom : "Jeanne Marie",
                                photo : "assets/1.PNG"
                            }
                        },{
                            id : 15,
                            title : "Mission 2",
                            start: "2024-05-16 11:30:00",
                            end: "2024-05-16 13:30:00",
                            description : "Description mission 1",
                            backgroundColor: "#450",
                            imageurl : "assets/1.PNG",
                            personne : {
                                id : 1,
                                nom : "Jeanne Marie",
                                photo : "assets/1.PNG"
                            }
                        },{
                            id : 16,
                            title : "Mission 2",
                            start: "2024-05-17 11:30:00",
                            end: "2024-05-17 13:30:00",
                            description : "Description mission 1",
                            backgroundColor: "#450",
                            imageurl : "assets/1.PNG",
                            personne : {
                                id : 1,
                                nom : "Jeanne Marie",
                                photo : "assets/1.PNG"
                            }
                        },{
                            id : 17,
                            title : "Mission 2",
                            start: "2024-05-22 11:30:00",
                            end: "2024-05-22 13:30:00",
                            description : "Description mission 1",
                            backgroundColor: "#450",
                            imageurl : "assets/1.PNG",
                            personne : {
                                id : 1,
                                nom : "Jeanne Marie",
                                photo : "assets/1.PNG"
                            }
                        },{
                            id : 18,
                            title : "Mission 2",
                            start: "2024-05-31 11:30:00",
                            end: "2024-05-31 13:30:00",
                            description : "Description mission 1",
                            backgroundColor: "#450",
                            imageurl : "assets/1.PNG",
                            personne : {
                                id : 1,
                                nom : "Jeanne Marie",
                                photo : "assets/1.PNG"
                            }
                        },{
                            id : 19,
                            title : "Mission 2",
                            start: "2024-05-23 11:30:00",
                            end: "2024-05-23 13:30:00",
                            description : "Description mission 1",
                            backgroundColor: "#450",
                            imageurl : "assets/1.PNG",
                            personne : {
                                id : 1,
                                nom : "Jeanne Marie",
                                photo : "assets/1.PNG"
                            }
                        },{
                            id : 20,
                            title : "Mission 2",
                            start: "2024-05-29 16:30:00",
                            end: "2024-05-29 17:30:00",
                            description : "Description mission 1",
                            backgroundColor: "#450",
                            imageurl : "assets/1.PNG",
                            personne : {
                                id : 1,
                                nom : "Jeanne Marie",
                                photo : "assets/1.PNG"
                            }
                        }]

  personne : any  = [{
                        id : 1,
                        nom : "Jeanne Marie",
                        photo : "assets/1.PNG"
                    },{
                        id : 2,
                        nom : "Jean Luc",
                        photo : "assets/2.PNG"
                    },{
                        id : 3,
                        nom : "Alexia Fer",
                        photo : "assets/3.PNG"
                    },{
                        id : 4,
                        nom : "Jean Petit",
                        photo : "assets/4.PNG"
                    }]


    initData(){
        if(!localStorage.getItem('dataCal')) localStorage.setItem('dataCal',JSON.stringify(this.missions))
    }

    getData(){
        return localStorage.getItem('dataCal')? JSON.parse(localStorage.getItem('dataCal')+'') : this.missions;
    }

    nouveauMission(nouveauMission : any){
        let mission = JSON.parse(localStorage.getItem('dataCal')+'');
        mission.push(nouveauMission);
        localStorage.setItem('dataCal',JSON.stringify(mission));
    }

    findMission(id:any){
        let mission = {};
        let missions = JSON.parse(localStorage.getItem('dataCal')+'');
        for(let index = 0; index < missions.length; index++){
            if(missions[index].id == id) mission = missions[index]
        }
        return mission;
    }

    findPersonne(id:any){
        let personne :any;
        for(let index = 0; index < this.personne.length; index++){
            if(this.personne[index].id == id) personne = this.personne[index]
        }
        return personne;
    }

    delMission(id:any){
        let mission2:any = [];
        let missions = JSON.parse(localStorage.getItem('dataCal')+'');
        for(let index = 0; index < missions.length; index++){
            if(!(missions[index].id == id)){ mission2.push(missions[index]);}
        }
        localStorage.setItem('dataCal',JSON.stringify(mission2));
    }

    modiffMission(id:any,mission:any){
        let missions = JSON.parse(localStorage.getItem('dataCal')+'');
        for(let index = 0; index < missions.length; index++){
            if(missions[index].id == id)missions[index] = mission;
        }
        localStorage.setItem('dataCal',JSON.stringify(missions));
    }

    newId(){
        let missions = JSON.parse(localStorage.getItem('dataCal')+'');
        return (missions[missions.length - 1].id + 1);
    }

}
