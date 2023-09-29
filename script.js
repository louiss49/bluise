const comptes_twitter = ["MutaChronicle", "MassaLabs"];
const tableBody = document.getElementById('table-body');

function fetchData() {
    console.log("Récupération des données...");
    
    comptes_twitter.forEach(compte => {
        fetch(`http://34.118.108.156/api/followers?username=${compte}`)
            .then(response => response.json())
            .then(data => {
                const row = tableBody.insertRow();
                const cell1 = row.insertCell(0);
                const cell2 = row.insertCell(1);
                cell1.textContent = data.username;
                cell2.textContent = data.followers_count;
            })
            .catch(error => console.error(`Erreur lors de la récupération des données pour ${compte}: ${error}`));
    });
}

window.onload = function () {
    fetchData();

    setInterval(() => {
        tableBody.innerHTML = '';
        fetchData();
    }, 7200000);
};
