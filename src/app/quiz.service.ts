import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root"
})
export class QuizService {
  score = 0;

  constructor(
    private http: HttpClient,
    private router: Router
  ) {}

  getQuestions() {
    return this.http.get("/api/questions", { responseType: "json" });
  }

  getScores(form, questions) {
    // return this.http.get("/api/scores", { responseType: "json" });
    let answerArray = Object.values(form.value);
    console.log(answerArray);
    let answerArray = Object.values(form.value);

    for( let i = 0; i < answerArray.length; i++){
      if (answerArray[i] === questions[i].answer) {
        this.score++
      }
    }
    
  }

  postScores(score) {
    return this.http.post("/api/scores", score, { responseType: "json" });
  }

  calculateScore(intialArray) {
    for (let i = 0; i < intialArray.length; i++) {
      if (intialArray == true) {
        this.score++;
      }
    }

    this.router.navigate(["/results"]);
  }
}
