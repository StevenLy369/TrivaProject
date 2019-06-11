import { Component, OnInit } from '@angular/core';
import { QuizService } from '../quiz.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
  answerArray:any;



  constructor(private quizService: QuizService, private route: Router) {}


  ngOnInit() {
  }

  getResult():any {
    console.log(this.answerArray);
    return this.answerArray;
    

  }




}
