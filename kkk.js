let playerHP = 50;
let enemyHP = 50;

function atacar() {
    if (playerHP > 0 && enemyHP > 0) {
        enemyHP -= 10; // O jogador ataca
        addLog("Você atacou o Soviéticos Ball! (-10 HP)");

        if (enemyHP <= 0) {
            enemyHP = 0;
            addLog("Você venceu!");
        } else {
            playerHP -= 10; // O Soviéticos Ball revida
            addLog("Soviéticos Ball te atacou! (-10 HP)");

            if (playerHP <= 0) {
                playerHP = 0;
                addLog("Você perdeu!");
            }
        }

        atualizarStatus();
    }
}

function atualizarStatus() {
    document.getElementById("player-health").innerText = playerHP;
    document.getElementById("enemy-health").innerText = enemyHP;
}

function addLog(message) {
    let log = document.getElementById("battle-log");
    log.innerHTML += "<p>" + message + "</p>";
    log.scrollTop = log.scrollHeight;
}
