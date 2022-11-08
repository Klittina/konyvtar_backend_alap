class KonyvPublicView {

    #elem;

    constructor(elem, szuloElem) {
        this.#elem = elem;
        //egy sort megkell jeleníteni
        szuloElem.append(`<div>
        <h2>${elem.cim}</h2>
        <h4>Szerző: </h4> <p>${elem.szerzo}</p>
        <h4>Ár: ${elem.ar} FT</h4>
        <h4>Cikkszám: ${elem.id} </h4>
        <td><button id="megvesz${elem.id}">Kosárba</button></td>
        </tr></div>`);
        this.tablaElem = szuloElem.children("table:last-child");
    
        //gombok eseménykezelői

        this.sorElem=szuloElem.children("tr:last-child");
        this.megveszElem=$(`#megvesz${elem.id}`);

        this.megveszElem.on("click", ()=>{
            this.kattintasTrigger("megveszElem");
        })
    }

    kattintasTrigger(esemenynev){
        const esemeny=new CustomEvent(esemenynev,{detail:this.#elem});
        window.dispatchEvent(esemeny);
    }


}

export default KonyvPublicView;