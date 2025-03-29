//2,05h
var slotsHTML = []; slotsHTML.length = 3;
var money;
var vals = []; vals.length = 3;
var money = 1000;
var spins = 0;
var spinsHTML;

window.onload = function() {  
    gettingElements();
}

function gettingElements() {
    for (i = 0; i < slotsHTML.length; i++) {
        slotsHTML[i] = document.getElementById("slot-" + i);
    }
    moneybox = document.getElementById("moneybox");
    spinsHTML = document.getElementById("counter");
}

function rollSlots() {
    money -= 10; updateMoney();
    spins++;
    spinsHTML.innerHTML = spins + " spins";
    
    for (i = 0; i < slotsHTML.length; i++) {
        vals[i] = spin();
        slotsHTML[i].innerHTML = vals[i];
    }

    console.log(vals);
    payouts();
   /*var same = {};   //more complex variation?
   vals.forEach(function (x) { same[x] = (same[x] || 0) + 1; });
   let arr = Object.values(same);
   let max = Math.max(...arr);
   console.log(max);*/
}

function payouts() { //optimize?
    if (arraysEqual(vals, ["🍒", "🍒", "🍒"]) || arraysEqual(vals, ["🔔", "🔔", "🔔"]) || arraysEqual(vals, ["🍈", "🍈", "🍈"]) || arraysEqual(vals, ["☀️", "☀️", "☀️"])){
        money += 70;
        updateMoney();
    }

    if (arraysEqual(vals, ["🔔", "☀️", "☀️"]) || arraysEqual(vals, ["☀️", "☀️", "🔔"])) {
        money += 150;
        updateMoney();
    }
}

function arraysEqual(a, b) {
    if (a === b) return true;
    if (a == null || b == null) return false;
    if (a.length !== b.length) return false;
  
    for (var i = 0; i < a.length; ++i) {
      if (a[i] !== b[i]) return false;
    }
    return true;
  }

function updateMoney() {
    moneybox.innerHTML = money + "$";
}

function sell(item) {
    if (item == "car") {
        money += 1000;
        document.getElementById("car").style.visibility = "hidden";
    }

    if (item == "house") {
        money += 5000;
        document.getElementById("house").style.visibility = "hidden";
    }

    if (item == "business") {
        money += 7000;
        document.getElementById("business").style.visibility = "hidden";
    }

    updateMoney();
}

function spin() {
    let rnd = random(1, 5);

    switch (rnd) {
        case 1:
            return "🍒";
        case 2:
            return "🔔";
        case 3:
            return "🍈";
        case 4:
            return "☀️";
    }
}

function random(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}
