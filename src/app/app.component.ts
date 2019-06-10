import { Component } from '@angular/core';
import { QuizService } from "./quiz.service"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'triviaproject';
  questions: any;





constructor(private apiService: QuizService) {
  this.apiService.getQuestions().subscribe(response => {
    this.questions = response;
    console.log(this.questions);
  })
}

}
