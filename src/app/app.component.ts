import { Component } from '@angular/core';
import { NewsApiService } from './news-api.service';
import { DatePipe } from '@angular/common';
import {formatDate} from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DatePipe]
})
export class AppComponent {

  
  
  Articles:Array<any>;
  Sources:Array<any>;

  date = new Date();
  constructor(private newsapi:NewsApiService,private datePipe: DatePipe){
    //this.date = this.datePipe.transform(this.date, 'yyyy-MM-dd')      
  }

  ngOnInit() {
        //load articles
      this.newsapi.getArticles().subscribe(data => this.Articles = data['articles']);
    //load news sources
    this.newsapi.getSources().subscribe(data=> this.Sources = data['sources']);  
    }

  searchArticles(source){
    console.log("selected source is: "+source);
    this.newsapi.getArticlesByID(source).subscribe(data => this.Articles = data['articles']);
  }


  startDate: Date;

  searchFor() {
   console.log(this.startDate.toString());
   };

}
