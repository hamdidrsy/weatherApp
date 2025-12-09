import { saatGuncelle } from "../helpers/digitalSaat.js";
import { dateGuncelleme } from "../helpers/digitalDate.js";

export function runEvents() {
    document.addEventListener("DOMContentLoaded", () => {
        setInterval(saatGuncelle, 1000);
        saatGuncelle(); // sayfa açılır açılmaz bir kere çalışsın
    });

    document.addEventListener("DOMContentLoaded",()=>{
        dateGuncelleme();
    });
}
