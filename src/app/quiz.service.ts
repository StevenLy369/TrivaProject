import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root"
})
export class QuizService {
  score = 0;
  questions:any;
  
  

  constructor(
    private http: HttpClient,
    private router: Router
  ) {}

  getQuestions() {
    return this.http.get("/api/questions", { responseType: "json" });
  }

  getScore(form, questions) {
    let answerArray = Object.values(form.value);

    for (let i = 1; i < answerArray.length; i++) {
      if (answerArray[0] === questions[0].answer) {
        console.log("Got one right!.");
        this.score++;
      }
    }
    this.router.navigate(["/results"]);
    console.log(this.score);
    

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
