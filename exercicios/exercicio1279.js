function exercicio1279(ano) {
    var results = [];

    if (ano % 4 == 0 && (ano % 400 == 0 || ano % 100 != 0)) {
        results.push("This is leap year.");

        if (ano % 55 == 0) {
            results.push("This is bulukulu festival year.");
        }
    }

    if (ano % 15 == 0) {
        results.push("This is huluculu festival year.");
    }

    if (results.length == 0) {
        results.push("This is an ordinary year.");
    }

    return results;
}

module.exports = exercicio1279;