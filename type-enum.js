var SimpsonsJobs;
(function (SimpsonsJobs) {
    SimpsonsJobs[SimpsonsJobs["Policier"] = 0] = "Policier";
    SimpsonsJobs[SimpsonsJobs["Professeur"] = 1] = "Professeur";
    SimpsonsJobs[SimpsonsJobs["HommeAbeille"] = 2] = "HommeAbeille";
    SimpsonsJobs[SimpsonsJobs["InspecteurSecuriteNucleaire"] = 3] = "InspecteurSecuriteNucleaire";
    SimpsonsJobs[SimpsonsJobs["DirecteurEcole"] = 4] = "DirecteurEcole";
})(SimpsonsJobs || (SimpsonsJobs = {}));
console.log(SimpsonsJobs.Policier);
// 0
console.log(SimpsonsJobs.DirecteurEcole);
// 4
