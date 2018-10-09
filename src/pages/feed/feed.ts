import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MovieProvider } from '../../providers/movie/movie';

/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
  providers: [
    MovieProvider
  ]
})
export class FeedPage {
  public objeto_feed = {
    name: "Guilherme Mariano JSON",
    date: "October 08, 2018",
    description: "Testando uma descrição com JSON",
    qtde_likes: 13,
    qtde_comments: 5,
    time_comment: "12h ago"

  }

  public lista_filmes = new Array<any>();


  public nome_usuario:string = "Guilherme Mariano dos Santos";
  // ou
  //public nome_usuario:any = "Guilherme Mariano dos Santos";
  //o tipo any aceita qualquer tipo de valor para variavel, seja string, numerico, etc...

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private movieProvider: MovieProvider 
    ) {
  }

  public somaDoisNumeros(num1: number, num2: number): void{
    alert(num1 + num2);
  }

  ionViewDidLoad() {
    this.movieProvider.getLatestMovies().subscribe(
      data=>{
        const response = (data as any);
        const objeto_retorno = JSON.parse(response._body);
        this.lista_filmes = objeto_retorno.results;
        console.log(objeto_retorno);
      }, error => {
        console.log(error);
      }
    )
  }

}
