import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.page.html',
  styleUrls: ['./lista-usuarios.page.scss'],
})
export class ListaUsuariosPage implements OnInit {
  id: string="";
  nome: string="";
  email: string="";
  telefone: string="";
  cidade: string="";
  cpf: string="";

  constructor(
    private router:Router,
    private actRoute:ActivatedRoute
  ) { }

  ngOnInit() {
    this.actRoute.params.subscribe((dadosdarota:any)=>{
      this.id = dadosdarota.id;
      this.nome = dadosdarota.nome;
      this.email = dadosdarota.email;
      this.telefone = dadosdarota.telefone;
      this.cidade = dadosdarota.cidade;
      this.cpf = dadosdarota.cpf;
    });
  }

  addUsuario() {
    this.router.navigate(["add-usuario"]);
  }

}
