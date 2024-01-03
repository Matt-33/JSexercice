class Proprietaire {
    /**
     * Constructeur de la classe.
     * @param {string} nom - Le nom du propriétaire.
     * @param {string} prenom - Le prénom du propriétaire.
     * @param {number} argent - le nombre d'euro du proprietaire.
     */
    constructor(nom, prenom, argent) {
      this.nom = nom;
      this.prenom = prenom;
      this.vehicules = [];
      this.argent = argent;
    }
  
    /**
     * Ajoute un véhicule à la liste des véhicules du propriétaire si le propriétaire n'a pas déjà 5 véhicules et si le véhicule n'est pas déjà dans la liste.
     * @param {Vehicule} vehicule - Le véhicule à ajouter.
     * @returns {boolean} - True si le véhicule a été ajouté avec succès, sinon False.
     */


    ajouterVehicule(vehicule) {
        // Vérifier si le propriétaire a moins de 5 véhicules
        if (this.vehicules.length < 5){
            // Vérifier si le véhicule n'est pas déjà dans la liste
            if (!this.vehicules.includes(vehicule)) {
                this.vehicules.push(vehicule);// Ajouter véhicule
             return true;
            }
        } 
        return false;
    }
  
    /**
     * Retire un véhicule de la liste des véhicules du propriétaire si le véhicule est dans la liste.
     * @param {Vehicule} vehicule - Le véhicule à retirer.
     * @returns {boolean} - True si le véhicule a été retiré avec succès, sinon False.
     */


    retirerVehicule(vehicule) {
        const index = this.vehicules.indexOf(vehicule); // Trouver l'index du véhicule dans la liste
        // Vérifier si le véhicule est présent dans la liste
            if (index !== -1) {
                this.vehicules.splice(index, 1)
            return true;
            }
        return false;
    }
  
    /**
     * Fonction qui permet de payer un certain prix si le propriétaire a assez d'argent.
     * @param {number} prix - Le prix à payer.
     * @returns {boolean} - Retourne true si le paiement a été effectué avec succès, sinon false.
     */
    payer(prix) {
        if(this.argent >= prix){
            this.argent -= prix;
            return true;
        }
        return false;
    }
  
    /**
     * Effectue le plein d'un véhicule à une station de carburant si le véhicule appartient au propriétaire, si le véhicule n'a pas déjà le réservoir plein et si le propriétaire a assez d'argent.
     * @param {Vehicule} vehicule - Le véhicule à faire le plein.
     * @param {Station} station - La station de carburant où effectuer le plein.
     * @returns {boolean} - Retourne true si le plein a été effectué avec succès, sinon false.
     */
    faireLePlein(vehicule, station) {
       // Vérifier si le véhicule appartient au propriétaire et si le réservoir n'est pas plein
    if (this.vehicules.includes(vehicule) && !vehicule.reservoir.reservoirPlein()) {
        const prixPlein = vehicule.reservoir.carburantMax - vehicule.reservoir.carburant; // Calcul du prix pour remplir le réservoir

          // Vérifier si le propriétaire a assez d'argent pour le plein
          if (this.payer(prixPlein * station.prix)) {
            // Vérifier si la station a suffisamment de carburant
            if (station.reservoir.carburant >= prixPlein) {
                vehicule.reservoir.carburant = vehicule.reservoir.carburantMax; // Remplir le réservoir du véhicule
                station.reservoir.retirerCarburant(prixPlein); // Retirer le carburant de la station
                return true;
     }  
    }
  }
  return false;
}
}

 
export default Proprietaire;