
let date_edition_facture = prompt('Entrer la date d\'édition de la facture (jj/mm/aaaa)')

date_edition_facture = date_edition_facture.replace(/(\d{2})\/(\d{2})\/(\d{4})/, "$2/$1/$3");

let date_edit = new Date(date_edition_facture);

let nmbJours = date_edit.getDate()+ 15;

date_edit.setDate(nmbJours);

let date_limit = date_edit.toLocaleDateString();

document.writeln(`La Date limite de paiement est : ${date_limit}`);