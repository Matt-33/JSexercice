class Reservoir {
    /**
     * Constructeur de la classe.
     * @param {number} carburant - Le nombre de litre dans le reservoir.
     * @param {number} [carburantMax=50] - La capacité maximale du réservoir de carburant.
     */
    constructor(carburant, carburantMax = 50) {
      this._carburant = carburant;
      this.carburantMax = carburantMax;
    }
  
    /**
     * Ajoute une quantité spécifiée de carburant au véhicule si le véhicule a assez de place dans le réservoir.
     * @param {number} carburant - La quantité de carburant à ajouter en litres.
     * @returns {boolean} - Returns true si le carburant a été ajouté avec succès, sinon false.
     */
    set carburant(quantite) {
        const espaceDisponible = this.carburantMax - this._carburant;
        if (quantite <= espaceDisponible) {
            this._carburant += quantite;
            return true;
        }
        return false;
    }
  
    /**
     * Get the carburant value.
     * @returns {number} The carburant value.
     */
    get carburant() {
      return this._carburant;
    }


    /**
     * Retire une quantité spécifiée de carburant du véhicule si le véhicule a assez de carburant.
     * @param {number} litre - La quantité de carburant à retirer.
     * @returns {boolean} - True si le carburant a été retiré avec succès, sinon False.
     */
    retirerCarburant(litre) {
        if (litre <= this._carburant) {
            this._carburant -= litre;
            return true;
        }
        return false;
    }

    reservoirPlein() {
        return this._carburant === this.carburantMax;
      }

  }

  export default Reservoir;