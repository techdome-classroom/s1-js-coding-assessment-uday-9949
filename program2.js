const decodeTheRing = function (s, p) {
    const doubleS = s + s;
    return doubleS.includes(p);
};

module.exports = decodeTheRing;
