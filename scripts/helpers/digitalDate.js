export const digitalDate = document.querySelector(".date");

const gunler = [
    "Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"
];
const aylar = [
    "Ocak","Şubat","Mart","Nisan","Mayıs","Haziran","Temmuz","Ağustos","Eylül","Ekim","Kasım","Aralık"
];

export function ekle(deger) {
    return deger.toString().padStart(2, "0");
}
export function dateGuncelleme(){
    const date = new Date();

    const dayName = gunler[date.getDay()]
    const day = ekle(date.getDate())
    const mounth = aylar[date.getMonth()];
    const year = date.getFullYear();

    //gün ismi-gün-ay(ay ismi) yıl işlemlerini tamamladık
    digitalDate.textContent = `${dayName} — ${day} ${mounth} ${year}`;
    runAtMidnight()
}
function runAtMidnight(){
    const simdi = new Date();

    const yarin = new Date(
        simdi.getFullYear(),
        simdi.getMonth(),
        simdi.getDate() + 1,
        0, 0, 0, 0
    );

    //amaç kurduğum timer ile kod milisaniye cinsinden sıfırlanınca fonksiyon tetiklenecek ve ve bir sonraki güne tetiklenecek
    const kalanSure = yarin - simdi; // milisaniye cinsinden
    console.log(kalanSure)
    setTimeout(dateGuncelleme, kalanSure);
}