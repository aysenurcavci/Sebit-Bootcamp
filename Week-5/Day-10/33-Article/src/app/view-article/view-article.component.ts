import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticleService } from '../services/article.service';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-view-article',
  templateUrl: './view-article.component.html',
  styleUrls: ['./view-article.component.css'],
})
export class ViewArticleComponent implements OnInit {
  articleId: any;
  articleData: Array<any> = [];
  username: string = '';
  comment: string = '';

  constructor(
    private route: ActivatedRoute,
    private articleService: ArticleService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.articleId = this.route.snapshot.paramMap.get('articleIndex');
    this.articleService.getArticles().subscribe((res) => {
      this.articleData = res;
    });
  }

  addComment() {

    if(this.username == '' || this.comment == '' )
    {
      this.snackBar.open('Liütfen tüm alanları doldurunuz','Kapat')
    }
    else{
      let obj = {
        username : this.username,
        comment : this.comment
      };
      this.articleData[this.articleId].comment.push(obj);
      this.articleService.updateArticle(this.articleData[this.articleId]).subscribe((res)=>{
        // inputları sıfırlamak için
        this.username = '';
        this.comment = ''
      })
    }
  }
}
