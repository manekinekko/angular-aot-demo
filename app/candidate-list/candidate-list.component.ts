import { Component, Input, OnInit } from '@angular/core';
import {CandidatesService} from "./candidates.service.ts";
import {Candidate} from "../shared/entities/candidate";

@Component({
  selector: 'candidate-list',
  templateUrl: 'candidate-list.component.html',
})

export class CandidateListComponent implements OnInit{
  candidates: Candidate[];

  constructor(private candidatesService:CandidatesService) {

  }

  ngOnInit(): void{
    this.candidates = this.candidatesService.fetchCandidates();
  }
}
