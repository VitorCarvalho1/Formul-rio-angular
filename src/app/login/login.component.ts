import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  title = 'primeiro_projeto'

  mostrarSenha = false

  mostrarPassword(){

    this.mostrarSenha = !this.mostrarSenha
  }
  
}
