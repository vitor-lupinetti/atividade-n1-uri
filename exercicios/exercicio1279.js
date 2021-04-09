function exercicio1279(ano) {
    var results = [];

    if (ano % 4 == 0 && ano % 400 == 0 && ano % 100 != 0) {
        results[0] = "This is leap year.";

        if (ano % 55 == 0) {
            results[2] = "This is bulukulu festival year.";
        }
    }

    if (ano % 15 == 0) {
        results[1] = "This is huluculu festival year.";
    }

    var maxResults = results.length;

    for (var x = 0; x < maxResults; x++) {
        console.log(results[x]);
    }

    if (!results) {
        console.log("This is an ordinary year.");
    }
}

module.exports = exercicio1279;