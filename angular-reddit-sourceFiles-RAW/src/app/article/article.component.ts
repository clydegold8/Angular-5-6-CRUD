import { Component, OnInit, HostBinding, Input } from '@angular/core';
import { Article } from './article.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  @HostBinding('attr.class') cssClass = 'row';
  @Input() article: Article;
  @Input() index;
  @Input() arrayOfArticle;


  constructor() {
   }

   voteUp(): boolean {
     this.article.voteUp();
     return false;
    }

    voteDown(): boolean {
      this.article.voteDown();
      return false;
    }

    deleteThread(index): boolean {
      this.arrayOfArticle.splice(index, 1);
      return false;
    }

  ngOnInit() {
  }

}
