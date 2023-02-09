import { Component, OnInit } from '@angular/core';
import { QuizService } from 'src/app/services/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-quizzes',
  templateUrl: './view-quizzes.component.html',
  styleUrls: ['./view-quizzes.component.css']
})
export class ViewQuizzesComponent implements OnInit {

  qid: any;
  title: any;

  quizzes = [
    {
      category: {
        title: '',
      },
      qid: '',
      title: '',
      description: '',
      maxMarks: '',
      numberOfQuestions: '',
      active: true,

      // {
      //   qId: 123,
      //   title: 'Basic Java Quizzes',
      //   description: 'This is test purpose',
      //   maxMarks: '50',
      //   numberOfQuestions: '20',
      //   active: '',
      //   category: {
      //     title: 'Programming',
      //   }
      // },
      // {
      //   qId: 123,
      //   title: 'Basic Java Quizzes',
      //   description: 'This is test purpose',
      //   maxMarks: '50',
      //   numberOfQuestions: '20',
      //   active: '',
      //   category: {
      //     title: 'Programming',
      //   }
      // },
    },
  ];

  constructor(private _quiz: QuizService) { }

  ngOnInit(): void {

    this._quiz.quizzes().subscribe(
      (data: any) => {
        this.quizzes = data;
        console.log(data);
      },
      (error) => {
        console.log(error);
        Swal.fire('Error !! ', "Error in Loading Data", 'error');
      });
  }

  // Delete Quiz

  deleteQuiz(qid: any) {

    Swal.fire({
      icon: 'info',
      title: "Are You sure ?",
      confirmButtonText: 'Delete',
      showCancelButton: true,
    }).then((result) => {

      if (result.isConfirmed) {
        // delete
        // alert(qid);
        this._quiz.deleteQuiz(qid).subscribe(
          (data: any) => {
            this.quizzes = this.quizzes.filter((quiz) => quiz.qid != qid)

            Swal.fire('Success', "Quiz Deleted Successfully", 'success');
          },
          (error) => {
            console.log(error);
            Swal.fire('Error !! ', "Error in Deleting Quiz", 'error');
          });
      }
    });
  }
}
