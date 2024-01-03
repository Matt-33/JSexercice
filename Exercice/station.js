import Reservoir from './reservoir.js';

class Station {
  /**
   * Constructeur de la classe.
   * @param {number} carburant - Le nombre de litre dans le reservoir.
   */
  constructor(carburant) {
    this.reservoir = new Reservoir(carburant, 5000);
    this.prix = 1.8;
    this.argent = 0;
  }


  /**
   * Effectue le plein d'un véhicule en carburant si le reservoir du véhicule n'est pas plein et que le propriétaire du véhicule a assez d'argent.
   * 
   * @param {Vehicule} vehicule - Le véhicule à faire le plein.
   * @param {Propriétaire} propriétaire - Le propriétaire du véhicule.
   * @returns {boolean} - Retourne true si le plein a été effectué avec succès, sinon false.
   */
  faireLePlein(vehicule, proprietaire) {
    const quantiteNecessaire = vehicule.reservoir.carburantMax - vehicule.reservoir.carburant;
    const prixPlein = quantiteNecessaire * this.prix;

    if (vehicule.reservoir.carburant < vehicule.reservoir.carburantMax && proprietaire.argent >= prixPlein)  {
      
      // Vérifier si la station a suffisamment de carburant
      if (this.reservoir.carburant >= quantiteNecessaire) {
        vehicule.reservoir.carburant = vehicule.reservoir.carburantMax; // Remplir le réservoir du véhicule
        this.reservoir.retirerCarburant(quantiteNecessaire); // Retirer le carburant de la station
        proprietaire.argent -= prixPlein; // Déduire le montant payé du propriétaire
        return true;
      }
    }
    return false;
  }
}

export default Station;