export const digitalSaat = document.querySelector(".time");

export function ekle(deger) {
    return deger.toString().padStart(2, "0");
    //tek satırla aynı işlevi göre kod
    // const stringYap = deger.toString();
    // const uzunlu = stringYap.length;
    // if(uzunlu === 1){
    //     return "0" + stringYap;
    // }else{
    //     return stringYap
    // }
}

export function saatGuncelle() {
    const zaman = new Date();
    const saat = ekle(zaman.getHours());
    const dakika = ekle(zaman.getMinutes());
    const saniye = ekle(zaman.getSeconds());

    digitalSaat.textContent = `${saat}:${dakika}:${saniye}`;
}
