import { Component } from '@angular/core';
import { EtudiantServiceService } from '../../services/etudiant-service.service';

@Component({
  selector: 'app-etudiant-paris',
  templateUrl: './etudiant-paris.component.html',
  styleUrl: './etudiant-paris.component.css'
})
export class EtudiantParisComponent {
  listEtudiantParis : any = [];
  constructor(private etudiants : EtudiantServiceService) {
    this.listEtudiantParis = this.etudiants.etudiant.filter((etudiant: any) => etudiant._ville === 'Paris');
  }
}
