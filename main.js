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
        
        createCard("fase de grupos", "21/11", "segunda", 
        createGame("england", "10:00", "iran") +
        createGame("senegal", "13:00", "netherlands") +
        createGame("usa", "16:00", "wales")
        ) +
        
        createCard("fase de grupos", "22/11", "terça", 
        createGame("argentina", "07:00", "saudi-arabia") +
        createGame("denmark", "10:00", "tunisia") +
        createGame("mexico", "13:00", "poland") +
        createGame("france", "16:00", "australia")
        ) +   

        createCard("fase de grupos", "23/11", "quarta", 
        createGame("morocco", "07:00", "croatia") +
        createGame("germany", "10:00", "japan") +
        createGame("spain", "13:00", "costa-rica") +
        createGame("belgium", "16:00", "canada")
        ) +
        
        createCard("fase de grupos", "24/11", "quinta", 
        createGame("switzerland", "07:00", "camaroon") +
        createGame("uruguay", "10:00", "south-korea") +
        createGame("portugal", "13:00", "ghana") +
        createGame("brazil", "16:00", "serbia")
        ) +
        
        createCard("fase de grupos", "25/11", "sexta", 
        createGame("wales", "07:00", "iran") +
        createGame("qatar", "10:00", "senegal") +
        createGame("netherlands", "13:00", "ecuador") +
        createGame("england", "16:00", "usa")
        ) +

        createCard("fase de grupos", "26/11", "sábado", 
        createGame("tunisia", "07:00", "australia") +
        createGame("poland", "10:00", "saudi-arabia") +
        createGame("france", "13:00", "denmark") +
        createGame("argentina", "16:00", "mexico")
        ) +

        createCard("fase de grupos", "27/11", "domingo", 
        createGame("japan", "07:00", "costa-rica") +
        createGame("belgium", "10:00", "morocco") +
        createGame("croatia", "13:00", "canada") +
        createGame("spain", "16:00", "germany")
        ) +
        
        createCard("fase de grupos", "28/11", "segunda", 
        createGame("camaroon", "07:00", "serbia") +
        createGame("south-korea", "10:00", "ghana") +
        createGame("brazil", "13:00", "switzerland") +
        createGame("portugal", "16:00", "uruguay")
        ) +
       
        createCard("fase de grupos", "29/11", "terça", 
        createGame("ecuador", "12:00", "senegal") +
        createGame("netherlands", "12:00", "qatar") +
        createGame("iran", "16:00", "usa") +
        createGame("wales", "16:00", "england")
        ) +
        
        createCard("fase de grupos", "30/11", "quarta", 
        createGame("tunisia", "12:00", "france") +
        createGame("australia", "12:00", "denmark") +
        createGame("poland", "16:00", "argentina") +
        createGame("saudi-arabia", "16:00", "mexico")
        ) +
        
        createCard("fase de grupos", "01/12", "quinta", 
        createGame("croatia", "12:00", "belgium") +
        createGame("canada", "12:00", "morocco") +
        createGame("japan", "16:00", "spain") +
        createGame("costa-rica", "16:00", "germany")
        ) +
        
        createCard("fase de grupos", "02/12", "sexta", 
        createGame("south-korea", "12:00", "portugal") +
        createGame("ghana", "12:00", "uruguay") +
        createGame("serbia", "16:00", "switzerland") +
        createGame("camaroon", "16:00", "brazil")
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