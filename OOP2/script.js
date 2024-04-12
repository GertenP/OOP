btc_balance = 0
usd_balance = 100
bet_size_usd = 10
last_btc_price = 0


async function makeTrade() {
    const btc_price = Math.random() + 1000;
    if (btc_price < last_btc_price) {
        usd_balance += btc_balance * btc_price;
        btc_balance = 0;
        
    }
    else { // ostan
        btc_balance += bet_size_usd / btc_price;
        usd_balance -= bet_size_usd;
    }
    last_btc_price = btc_price;
    console.log("--------");
    console.log("bitcoin hind: ", btc_price);
    console.log("Rahakott (btc): ", btc_balance);
    console.log("Rahakott (usd): ", usd_balance);
}

setInterval(makeTrade, 3000)