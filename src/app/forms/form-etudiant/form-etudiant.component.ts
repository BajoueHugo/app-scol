import { Component } from '@angular/core';
import { EtudiantServiceService } from '../../services/etudiant-service.service';
import { Etudiant } from '../../models/Etudiant';

@Component({
  selector: 'app-form-etudiant',
  templateUrl: './form-etudiant.component.html',
  styles: ``
})
export class FormEtudiantComponent {
  etudiant: Etudiant = new Etudiant('', '', '', '', '', '', '', 0, 0);

  constructor(private etudiantService: EtudiantServiceService) {}

  // Méthode pour soumettre le formulaire
  onSubmit() {
    this.etudiantService.ajouterEtudiant(this.etudiant);
    // Réinitialiser le formulaire après soumission
    this.etudiant = new Etudiant('', '', '', '', '', '', '', 0, 0);
  }
}
