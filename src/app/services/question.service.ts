import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private _http : HttpClient) { }
  
  // get Question of quiz

  public getQuestionsOfQuiz(qid: any){
    return this._http.get(`${baseUrl}/question/quiz/all/${qid}`);
  }

  // Question For User
  public getQuestionsOfQuizForTest(qid: any){
    return this._http.get(`${baseUrl}/question/quiz/all/${qid}`);
  }

  // get question

  public addQuestion(question : any){
return this._http.post(`${baseUrl}/question/`, question)
  }

// Delete Question

public deleteQuestion(questionId : any){
  return this._http.delete(`${baseUrl}/question/${questionId}`,questionId);
}

// Evaluating Quiz

public evalQuiz(questions : any){
  return this._http.post(`${baseUrl}/question/eval-quiz`, questions)
}

}
