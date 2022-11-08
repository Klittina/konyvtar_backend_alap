//import KonyvView from "./KonyvView.js";
import KonyvView from "../View/KonyvView.js";

class KonyvekView {
    constructor(tomb, szuloElem) {
        szuloElem.html(`<table>
        <thead>
        <tr>
        <th>ID</th>
        <th>Cím</th>
        <th>Szerző</th>
        <th>Ár</th>
        </tr>
        </thead>
        <tbody></tbody>
        </table>`);
        this.tablaElem = szuloElem.children("table:last-child");
        this.tbodyElem = this.tablaElem.children("tbbody");

        tomb.forEach(konyv => {
            const konyvem = new KonyvView(konyv,this.tablaElem);
        });
    }
}

export default KonyvekView;