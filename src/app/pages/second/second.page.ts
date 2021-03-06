import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { projetoService } from 'src/projetoService.service';
import { projetoModel } from 'src/projeto.model';
import { CarrinhoPage } from '../carrinho/carrinho.page';
import { Subscriber } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-second',
  templateUrl: './second.page.html',
  styleUrls: ['./second.page.scss'],
  providers:[projetoService],
})

export class SecondPage implements OnInit {
  listas?:projetoModel = {
    titulo: '',
    complemento: '',
    formaPagamento: '',
    status: false,
    produto_status: '',
    valor: '',
    pedido: '',
    ativo: false,
    orc: '',
    data: '',
    situacao: '',
    imagens: []
  };
  currentStatus:any

  constructor(
    private service:projetoService, 
    public route:ActivatedRoute
    ){}
    index:number

    ngOnInit() {
      this.route.queryParams.subscribe((params:any)=>{
        console.log(JSON.stringify(params.data))
        this.index = params.data
        this.getId(this.index);
      })
      
  }

  public getId(id:number):void{
    this.service.get(id).subscribe(data=>{
      this.listas = data;
      console.log(data);
    },
    error =>{
      console.log(error);
    })
  }
  
  public fecharModal(){
  }

  public pedidos = [
    "Recebido",
    "Aprovado",
    "Separado",
    "Em Transporte",
    "Entregue"
  ]
  public statusCompra = [
    "RECEBIDO",
    "APROVADO",
    "SEPARADO",
    "EM TRANSPORTE",
    "FOI ENTREGUE"
  ]
  public productInfo = [
    "Recebemos seu pedido e estamos processando o pagamento.",
    "Processamos seu pedido e logo iniciaremos a separação.",
    "Os itens do Seu Pedido Foram Separados E logo Saira Para Transporte.",
    "Seu pedido está em transporte.Tenha alguém no endereço para Recebê-lo.",
    "Pedido entregue.Agradecemos por escolher o DAG para Abastecer seu estoque."
  ]

  public imagem =[
    '../../../assets/img/progress2.png',
    '../../../assets/img/progress3.png',
    '../../../assets/img/progress4.png',
    '../../../assets/img/progress5.png',
    '../../../assets/img/progress6.png',
  ]

}