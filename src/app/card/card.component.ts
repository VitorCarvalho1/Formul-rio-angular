import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  listaAlunos = [
    {
      nome: "Lucas",
      idade: "21",
      cidade: "Arco Iris",
      time: "Sem time",
      src: "./../../assets/22-223941_transparent-avatar-png-male-avatar-icon-transparent-png.png"
    },

    {
      nome: "Vitor",
      idade: "22",
      cidade: "Tupã",
      time: "Corinthians",
      src: "./../../assets/22-223941_transparent-avatar-png-male-avatar-icon-transparent-png.png"
    },

    {
      nome: "Giovana",
      idade: "21",
      cidade: "Pompéia",
      time: "São Paulo",
      src: "./../../assets/avatarF.png"
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
