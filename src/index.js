function reseter(st, mass) {
    for (let i = 0; i < st.length - 1; i++)
        for (let j = 0; j < mass.length; j++) {
            if (st[i] == mass[j][0] && st[i + 1] == mass[j][1]) {
                st = st.slice(0, i) + st.slice(i + 2);
                return st;
            }
        }
    return st;
}
module.exports = function check(str, bracketsConfig) {
    let mass = arguments[1];
    let st = arguments[0];
    while (st.length > 0) {
        if (st == reseter(st, mass)) return false;
        st = reseter(st, mass);
    }
    return true;
}