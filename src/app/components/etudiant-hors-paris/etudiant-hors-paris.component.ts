import { Component } from '@angular/core';
import { EtudiantServiceService } from '../../services/etudiant-service.service';

@Component({
  selector: 'app-etudiant-hors-paris',
  templateUrl: './etudiant-hors-paris.component.html',
  styleUrl: './etudiant-hors-paris.component.css'
})
export class EtudiantHorsParisComponent {
  listEtudiantHorsParis : any = [];
  constructor(private etudiants : EtudiantServiceService) {
    this.listEtudiantHorsParis = this.etudiants.etudiant.filter((etudiant: any) => etudiant._ville !== 'Paris');
  }
}
