import Proprietaire from './proprietaire.js';
import Vehicule from './vehicule.js';
import Station from './station.js';

const proprietaire = new Proprietaire('Ray', 'Desfesse', 100);

const vehicule = new Vehicule('BA123PQ', 20); // Immatriculation et carburant initial

const station = new Station(1000); // 1000 litres de carburant dans la station

proprietaire.ajouterVehicule(vehicule);

vehicule.rouler(10); //10 litres de carburant

// Faire le plein si le réservoir n'est pas plein
if (!vehicule.reservoir.reservoirPlein()) {
    // Faire le plein du véhicule à la station
    const pleinEffectue = station.faireLePlein(vehicule, proprietaire);

    if (pleinEffectue) {
        console.log('Le plein a été effectué avec succès.');
      } else {
        console.log('Impossible de faire le plein.');
      }
    }

