import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor(private _http: HttpClient) { }

  public quizzes() {
    return this._http.get(`${baseUrl}/quiz/`);
  }


  // add quiz

  public addQuiz(quiz: any) {
    return this._http.post(`${baseUrl}/quiz/`, quiz);
  }

  // Delete Quiz

  public deleteQuiz(qid: any) {
    return this._http.delete(`${baseUrl}/quiz/${qid}`, qid);
  }

  // get the single quiz

  public getQuiz(qid : any){
    return this._http.get(`${baseUrl}/quiz/${qid}`);
  }

  // Update Quiz

  public updateQuiz(quiz:any){
return this._http.put(`${baseUrl}/quiz/`, quiz)
  }

// get quizzes of category
public getQuizzesOfCategory(cid : any){
return this._http.get(`${baseUrl}/quiz/category/${cid}`);
}

// get Active quizes

public getActiveQuizes(){
  return this._http.get(`${baseUrl}/quiz/active`);
}

// get Active quizes of category

public getActiveQuizesOfCategory(cid : any){
  return this._http.get(`${baseUrl}/quiz/category/active/${cid}`);
}

}
