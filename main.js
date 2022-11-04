function createGame(player1, hour, player2) {
    return `
    <li>
        <img src="./assets/icon-${player1}.svg" alt="Bandeira ${player1}" />
        <strong>${hour}</strong>
        <img src="./assets/icon-${player2}.svg" alt="Bandeira ${player2}" />
    </li>
    `
}

let delay = -0.4;
function createCard(title, date, day, game) {
    delay = delay + 0.1;
    return `
    <div class="card" style="animation-delay: ${delay}s">
        <h4>${title}</h4>
        <h2>${date} <span>${day}</span></h2>
        <ul>
            ${game}
        </ul>
    </div>
    `
}

function createTitle(title) {
    return `
    <h2>${title}</h2>
    `
}

document.querySelector('#cards').innerHTML = 

//        createTitle("Fase de Grupos") +
      
        createCard("fase de grupos", "20/11", "domingo", 
        createGame("qatar", "13:00", "ecuador")
        ) +
        
        createCard("fase de grupos", "21/11", "quarta", 
        createGame("netherlands", "13:00", "senegal")
        ) +
        
        createCard("fase de grupos", "24/11", "quinta", 
        createGame("brazil", "16:00", "serbia")
        ) +
        
        createCard("fase de grupos", "25/11", "sexta", 
        createGame("ecuador", "13:00", "netherlands")
        ) +

        createCard("fase de grupos", "26/11", "sábado", 
        createGame("tunisia", "07:00", "australia") +
        createGame("poland", "10:00", "saudi-arabia") +
        createGame("france", "13:00", "denmark") +
        createGame("argentina", "16:00", "mexico")
        ) +

        createCard("fase de grupos", "27/11", "domingo", 
        createGame("japan", "16:00", "costa-rica") +
        createGame("belgium", "10:00", "morocco") +
        createGame("croatia", "13:00", "canada") +
        createGame("spain", "16:00", "germany")
        ) +
        
        createCard("fase de grupos", "28/11", "segunda", 
        createGame("switzerland", "16:00", "brazil")
        ) +
       
        createCard("fase de grupos", "29/11", "terça", 
        createGame("qatar", "16:00", "netherlands")
        ) +
        
        createCard("fase de grupos", "02/12", "sexta", 
        createGame("brazil", "16:00", "camaroon")
        ) +

//        createTitle("Oitavas de final") +
        
        createCard("oitavas de final", "03/12", "sábado", 
        createGame("tbd", "12:00", "tbd") +
        createGame("tbd", "16:00", "tbd")
        ) +

        createCard("oitavas de final", "04/12", "domingo", 
        createGame("tbd", "12:00", "tbd") +
        createGame("tbd", "16:00", "tbd")
        ) +

        createCard("oitavas de final", "05/12", "segunda", 
        createGame("tbd", "12:00", "tbd") +
        createGame("tbd", "16:00", "tbd")
        ) +

        createCard("oitavas de final", "06/12", "terça", 
        createGame("tbd", "12:00", "tbd") +
        createGame("tbd", "16:00", "tbd")
        ) +

//        createTitle("Quartas de Final") +

        createCard("quartas de final", "09/12", "sexta", 
        createGame("tbd", "12:00", "tbd") +
        createGame("tbd", "16:00", "tbd")
        ) +

        createCard("quartas de final", "10/12", "sábado", 
        createGame("tbd", "12:00", "tbd") +
        createGame("tbd", "16:00", "tbd")
        ) +

//        createTitle("Semifinais") +

        createCard("semifinal", "13/12", "terça", 
        createGame("tbd", "16:00", "tbd")
        ) +

        createCard("semifinal", "14/12", "quarta", 
        createGame("tbd", "16:00", "tbd")
        ) +

//        createTitle("Final") +

        createCard("final", "18/12", "domingo", 
        createGame("tbd", "12:00", "tbd")
        )