import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuizService } from 'src/app/services/quiz.service';

@Component({
  selector: 'app-load-quiz',
  templateUrl: './load-quiz.component.html',
  styleUrls: ['./load-quiz.component.css']
})
export class LoadQuizComponent implements OnInit {

  catId: any;
  quizzes: any;

  constructor(private _route: ActivatedRoute, private _quiz: QuizService) { }

  ngOnInit(): void {
    this._route.params.subscribe((params) => {
      this.catId = params['catId'];
      if (this.catId == 0) {
        console.log("Load All the Quiz");
        this._quiz.getActiveQuizes().subscribe((data: any) => {
          this.quizzes = data;
          console.log(this.quizzes);
        }, (error) => {
          console.log(error);
          alert("Load Specific Quiz");
        }
        );
      } else {
        console.log("Load Specific Quiz");
        this._quiz.getActiveQuizesOfCategory(this.catId).subscribe((data: any) => {
          this.quizzes = data;
        }, (error) => {
          alert('Error in loading Quiz Data');
        })
      }
    })


  }

}
