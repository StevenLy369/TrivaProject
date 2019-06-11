import { Component, OnInit } from '@angular/core';
import { QuizService } from '../quiz.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
  questions:any;
  name:string;
  score:number;


  constructor(private quizService: QuizService) {


  this.questions = this.quizService.questions;
    this.name = this.quizService.name;
    this.score = this.quizService.score;


  }


  ngOnInit() {
  


  }

  
  



}
