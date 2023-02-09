import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CategoryService } from 'src/app/services/category.service';
import { QuizService } from 'src/app/services/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-quiz',
  templateUrl: './add-quiz.component.html',
  styleUrls: ['./add-quiz.component.css']
})
export class AddQuizComponent implements OnInit {

  hidden = false;

  toggleBadgeVisibility() {
    this.hidden = !this.hidden;
  }

  categories = [
    {
      cid: '',
      title: '',
    },
    // {
    //   cid:23,
    //   title:'Programming',
    // },
    // {
    //   cid:22,
    //   title:'Programming',
    // },
  ];

  quizData = {
    title: '',
    description: '',
    maxMarks: '',
    numberOfQuestions: '',
    active: true,
    category: {
      cid: '',
    },
  };

  constructor(private _cat: CategoryService, private _snack: MatSnackBar, private _quiz: QuizService) {

  }

  ngOnInit(): void {


    this._cat.categories().subscribe(
      (data: any) => {
        // categories load
        this.categories = data;
        console.log('');

      },
      (error) => {
        console.log(error);
        Swal.fire('Error', "Error in loading data from server", 'error');
      }

    );
  }
  // Add Quiz

  addQuiz() {
    console.log(this.quizData);

    if (this.quizData.title.trim() == '' || this.quizData.title == null) {

      this._snack.open("Title Required !!", '', {
        duration: 3000,
      });
      return;
    }
    // validation ....

    // call server to link 

    this._quiz.addQuiz(this.addQuiz).subscribe(
      (data) => {
        Swal.fire('Success', "Quiz is Added", 'success');
        console.log(data);
        this.quizData = {
          title: '',
          description: '',
          maxMarks: '',
          numberOfQuestions: '',
          active: true,
          category: {
            cid: '',
          },
       };
      },
      (error) => {
        Swal.fire('error', "Error While adding quiz !!", 'error');
        console.log(error);
      });
  }
}
