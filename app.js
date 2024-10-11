let mining = false;
let coins = 0;
let progress = 0;

function startMining() {
    if (!mining) {
        mining = true;
        progress = 0;
        coins = 0;
        document.getElementById('counter').innerHTML = coins + " Criptomonedas";
        document.getElementById('progress').style.width = "0%";
        mineCoins();
    }
}

function mineCoins() {
    if (progress < 100) {
        progress++;
        document.getElementById('progress').style.width = progress + "%";
        if (progress % 10 === 0) {
            coins++;
            document.getElementById('counter').innerHTML = coins + " Criptomonedas";
        }
        setTimeout(mineCoins, 100);
    } else {
        mining = false;
        alert("Minería completada. ¡Has minado " + coins + " criptomonedas!");
    }
}
