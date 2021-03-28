// 1. perkurti 1 užduoties kodą šį kartą naudojant ES6 klases
// 2. pridėti getter metodą getInfo kuris konsolėje atspausdina tokį sakinį: this notebook has total pages of \totalPages\. Used pages: \usedPages\ (pasvirieji brūkšniai žymi kur rašomos kintamojo rekšmės)
// 3. pridėti setter metodą add kuris leidžia į notebook prie esamų pridėti naujus tuščius puslapius (puslapių skaičius perduodamas parametru), bei atspausdina totalPages;

class Notebook2 {
    constructor(totalPages, usedPages) {
        this.totalPages = totalPages;
        this.usedPages = usedPages;
    }

   getInfo = () => {
        console.log(`this notebook has total pages of ${this.totalPages}. Used pages: ${this.usedPages}`);
    }

    add = (pslSk) => {
        this.totalPages = this.totalPages + pslSk;
        console.log(this.totalPages);
    }
}

let knyga = new Notebook2(100, 40);
knyga.getInfo();
knyga.add(50);
knyga.getInfo();



