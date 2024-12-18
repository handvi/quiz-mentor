let buah =  ['apple', 'banana', 'kiwi', 'orange'];
function filterBuah(buahArr) {
    let hasil = [...buahArr];
    for (let i = 0; i < hasil.length - 1; i++) {
        for (let j = 0; j < hasil.length - i - 1; j++) {
            if (hasil[j].length > hasil[j + 1].length) {
                let a = hasil[j];
                hasil[j] = hasil[j + 1];
                hasil[j + 1] = a;
            }
        }
    }
    return hasil;
} 



console.log(filterBuah(buah));

