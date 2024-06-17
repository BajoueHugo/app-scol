import { Component } from '@angular/core';
import { EtudiantServiceService } from '../../services/etudiant-service.service';

@Component({
  selector: 'app-etudiant',
  templateUrl: './etudiant.component.html',
  styleUrl: './etudiant.component.css'
})
export class EtudiantComponent {
  listEtudiant : any = [];
  constructor(private etudiants : EtudiantServiceService) {
    this.listEtudiant = this.etudiants.etudiant
  }
}
