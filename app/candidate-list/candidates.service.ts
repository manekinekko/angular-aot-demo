import { Injectable } from '@angular/core';
import { Candidate } from '../shared/entities/candidate';

const candidates: Candidate[] = [
  {name: "Thomas KERAMBLOCH", skills: "Fullstack"},
  {name: "Christian Yacou", skills: "Java"},
  {name: "Yann CHENU", skills: "Java"},
  {name: "Thibault BRUHIERE", skills: "Front"},
  {name: "Abdelaziz Hmidi", skills: "Front"},
  {name: "Emmanuel Favre", skills: "Front"},
  {name: "Fabien LE FRAPPER", skills: "Front"},
  {name: "Cédric OUTREVILLE", skills: "Front"}
];

@Injectable()
export class CandidatesService {
  fetchCandidates(): Candidate[] {
    return candidates;
  }
}
