module.exports = function check(str, bracketsConfig) {
    let mass = arguments[1];
    let st = arguments[0];
    let col = Array(mass.length);
    let last = [];
    let ind = 0;

    for (let i = 0; i < col.length; i++) {
        col[i] = 0;
    }
    for (let i = 0; i < st.length; i++) {
        for (let j = 0; j < mass.length; j++) {
            if (st[i] == mass[j][0]) {
                col[j]++;
                last.push(mass[j][1]);
                ind++;
            }
            if (st[i] == mass[j][1] && col[j] > 0 && last[ind - 1] == st[i]) {
                col[j]--;
                ind--;
                last.splice(last.indexOf(last[ind]), 1);
            }
        }
    }
    console.log(col);
    console.log(st);
    for (let i = 0; i < col.length; i++) {
        if (col[i] != 0) return false;
    }
    return true;
}