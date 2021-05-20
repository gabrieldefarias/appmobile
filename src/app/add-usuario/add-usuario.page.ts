import { Component, OnInit } from '@angular/core';
import { promise } from 'protractor';
import { PostService } from './../../services/post.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-usuario',
  templateUrl: './add-usuario.page.html',
  styleUrls: ['./add-usuario.page.scss'],
})
export class AddUsuarioPage implements OnInit {
  id: string="";
  nome: string="";
  email: string="";
  telefone: string="";
  cidade: string="";
  cpf: string="";

  constructor(
    private service:PostService,
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

  cadastrar() {
    return new Promise(resolve => {
      let usuario = {
        requisicao: 'add',
        nome:this.nome,
        email:this.email,
        telefone:this.telefone,
        cidade:this.cidade,
        cpf:this.cpf
      };
      console.log(usuario);
      this.service.dadosApi(usuario, 'api.php').subscribe(data => {
        if(data['success']) {
          this.router.navigate(['lista-usuarios']);
          console.log(data);
          this.id = "";
          this.nome = "";
          this.email = "";
          this.telefone = "";
          this.cidade = "";
          this.cpf = "";
        }
      });
    });
  }

}
