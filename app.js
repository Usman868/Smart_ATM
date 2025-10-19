var display = document.getElementById("display");
var errorMsg = document.getElementById("errorMsg");
var resultBox = document.getElementById("result");
var denomBox = document.getElementById("denominations");
var totalNotes = document.getElementById("totalNotes");
var denominations = [5000, 1000, 500, 100, 50, 20, 10];
var amount = "";
var resultDispalayed = false

// keypad event handling
var keys = document.getElementsByClassName("key");
for (var i = 0; i < keys.length; i++) {
    keys[i].addEventListener("click", function () {
        if (resultDispalayed) {
            amount = "";
            display.textContent = "0";
            hideResults();
            resultDispalayed = false
        }
        else {
            var value = this.textContent.trim();

            if (this.classList.contains("number")) {
                amount += value;
                display.textContent = amount;
            }

            if (this.classList.contains("clear")) {
                amount = "";
                display.textContent = "0";
                hideResults();
            }

            if (this.classList.contains("enter")) {
                if (amount === "" || isNaN(amount)) return;
                withdraw(parseInt(amount));
                resultDispalayed = true
            }
        }
    });
}
// main withdrawal function
function withdraw(A) {
    var D = [5000, 1000, 500, 100, 50, 20, 10];

    if (A % 10 !== 0) {
        showError("Cannot dispense the exact amount with available denominations.");
        return;
    }

    // exact-match check
    for (var i = 0; i < D.length; i++) {
        if (A === D[i]) {
            var res = [];
            for (var j = 0; j < D.length; j++) {
                res.push(0);
            }
            res[i] = 1;

            // build result array
            var result = [];
            for (var k = 0; k < D.length; k++) {
                result.push(res[k])
                // result[D[k]] = res[k];
            }

            showResult(result);
            return;
        }
    }

    // calculate total of smaller denominations
    var S_small = 0;
    for (var i = 1; i < D.length; i++) {
        S_small += D[i];
    }

    var R = Math.min(A, S_small);
    var A1 = A - R;
    var c = [];
    for (var i = 0; i < D.length; i++) {
        c.push(0);
    }

    // greedy on large denominations
    for (var i = 0; i < D.length; i++) {
        if (A1 <= 0) { break };
        c[i] = Math.floor(A1 / D[i]);
        A1 -= c[i] * D[i];
    }

    // ensure one of each smaller denomination if possible
    for (var i = 1; i < D.length; i++) {
        if (R >= D[i]) {
            c[i] = c[i] + 1;
            R -= D[i];
        }
    }

    // use remaining reservation small-first
    for (var i = 1; i < D.length; i++) {
        if (R <= 0) { break };
        var extra = Math.floor(R / D[i]);
        c[i] = c[i] + extra;
        R -= extra * D[i];
    }

    // check if total matches the requested amount
    var total = 0;
    for (var i = 0; i < D.length; i++) {
        total += c[i] * D[i];
    }

    if (total !== A) {
        showError("Cannot form exact amount with this combination.");
        return;
    }

    // build result array
    var result = [];
    for (var i = 0; i < D.length; i++) {
        result.push(c[i])
        // result[D[i]] = c[i];
    }

    showResult(result);
}

// show results on screen
function showResult(notes) {
    denomBox.innerHTML = "";
    var totalNotesCount = 0;

    for (var i = 0; i < denominations.length; i++) {
        var note = denominations[i];
        var count = notes[i];

        denomBox.innerHTML += "<div class='note'>" + note + ": " + count + "</div>";
        totalNotesCount += count;
    }

    totalNotes.textContent = "Total notes: " + totalNotesCount;
    resultBox.style.display = "block";
    errorMsg.style.display = "none";
}

// show error message
function showError(msg) {
    errorMsg.textContent = msg;
    errorMsg.style.display = "block";
    resultBox.style.display = "none";
}

// hide result and error
function hideResults() {
    errorMsg.style.display = "none";
    resultBox.style.display = "none";
}
