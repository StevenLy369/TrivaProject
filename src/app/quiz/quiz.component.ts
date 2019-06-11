import { Component, OnInit } from "@angular/core";
import { QuizService } from "../quiz.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "quiz",
  templateUrl: "./quiz.component.html",
  styleUrls: ["./quiz.component.css"]
})
export class QuizComponent implements OnInit {
  questions: any;
  
 
  initialArray: any[] = [
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false
  ];

  constructor(private quizService: QuizService) {}

  ngOnInit() {
      this.quizService.getQuestions().subscribe(response => {
      this.questions = response;
      this.quizService.setQuestions(response)
      // console.log(response);

     });

    
  }
  check(choice, answer, index) {
    if (choice === answer) {
      this.initialArray[index] = true;
    } else {
      this.initialArray[index] = false;
    }

    // console.log("Hello");
  }

  submitQuiz(form) {
  
    this.quizService.getScore(form, this.questions);
    console.log(form.value);
    
    

    // console.log("yees");
  }
}
