import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root"
})
export class QuizService {
  score = 0;
  questions:any;
  quizQuestions:any=[];
  name: any;
  
  

  constructor(
    private http: HttpClient,
    private router: Router
  ) {}

  getQuestions() {
    return this.http.get("/api/questions", { responseType: "json" });
  }

  setQuestions(questions) {
    this.questions = questions;
  }

  getScore(form, questions) {
    let answerArray = Object.values(form.value);
    this.name = answerArray[0];
    console.log(this.name);

    for (let i = 1; i < answerArray.length; i++) {
      if (answerArray[i] === questions[i - 1].answer) {
        console.log("Got one right!.");
        console.log(answerArray);
        this.score++;
        
      }
    }
    this.router.navigate(["/results"]);
    console.log(this.score);
    

  }

  getResult() {
    return this.http.get("/scores", { responseType: "json"});
  }

   getResults() {
     return this.score;
   }

  postScores(score) {
    return this.http.post("/api/scores", score, { responseType: "json" });
  };




  // calculateScore(form) {
  //   console.log(form);
  // let answerArray = Object.values(form.value);
  //  console.log(answerArray);
  //     for( let i = 0; i < answerArray.length; i++){
  //       if (answerArray[i] === this.questions[i].answer) {
  //         this.score++
  //      }
  //    }
  

  //   this.router.navigate(["/results"]);
  // }
}
