import { Component } from '@angular/core';
import { Specialite } from '../../models/Specialite';
import { SpecServiceService } from '../../services/spec-service.service';

@Component({
  selector: 'app-form-specialite',
  templateUrl: './form-specialite.component.html',
  styles: ``
})
export class FormSpecialiteComponent {
  specialite: Specialite = new Specialite('', 0);

  constructor(private specialiteService: SpecServiceService) {}

  // Méthode pour soumettre le formulaire
  onSubmit() {
    this.specialiteService.ajouterSpecialite(this.specialite);
    // Réinitialiser le formulaire après soumission
    this.specialite = new Specialite('', 0);
  }
}
