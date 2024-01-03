import Reservoir from './reservoir.js';

class Vehicule {
    /**
     * Constructeur de la classe.
     * @param {string} immatriculation - L'immatriculation du véhicule.
     * @param {number} carburant - Le nombre de litre dans le reservoir.
     */
    constructor(immatriculation, carburant) {
      this.immatriculation = immatriculation;
      this.reservoir = new Reservoir(carburant);
    }
  
    /**
     * Fonction qui permet de faire rouler le véhicule en retirant une certaine quantité de carburant du réservoir si le véhicule a assez de carburant.
     * @param {number} litre - La quantité de carburant à retirer en litres.
     */
    rouler(litre) {
        if (this.reservoir.carburant >= litre) {
            this.reservoir.retirerCarburant(litre);
            console.log(`Le véhicule a roulé pendant ${litre} litres.`);
        } else {
            console.log(`Impossible de rouler, pas assez de carburant.`);
        }
    }
  }


  export default Vehicule;