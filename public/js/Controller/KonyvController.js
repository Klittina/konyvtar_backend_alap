/*import KonyvekView from "../View/KonyvekView.js";
import KonyvModel from "../Model/KonyvModel.js";
import KonyvekPublicView from "../View/konyvekPublicView.js"
import KonyvPublicView from "../View/KonyvPublicView.js";
import KosarModel from "../Model/KosarModel.js";
*/

import KonyvekView from "../View/KonyvekView.js";
import KonyvModel from "../Model/KonyvModel.js";
import KonyvekPublicView from "../View/konyvekPublicView.js"
import KonyvPublicView from "../View/konyvPublicView.js";
import KosarModel from "../Model/KosarModel.js";

class KonyvController {
    constructor() {
        console.log("KonyvController");

        const token = $('meta[name="csrf-token"]').attr("content");

        this.vegpont = "konyvtar";
        //new KonyvekView();
        const konyvmodel = new KonyvModel(token);
        const kosarmodel = new KosarModel();

        

        $("#admin").on("click", ()=>{
            konyvmodel.adatBe(this.vegpont,this.konyvAdatok)
        })
        $("#pub").on("click", ()=>{
            konyvmodel.adatBe(this.vegpont,this.konyvPublicAdatok)
        })
        $("#kosar").on("click", ()=>{
            konyvmodel.adatBe(this.vegpont,this.kosarMegjelenit)
        })



        $(window).on("modositElem",(event)=>{
            //console.log("controllerben modosit", event.detail);
            //konyvmodel.adaModosit(event.detail);
            konyvmodel.adaModosit(this.vegpont,event.detail);
        })

        $(window).on("megveszElem",(event)=>{
            //console.log("Controllerbe módosit",event.detail);
            //kosarmodel.adahelp(event.detail);
            kosarmodel.adahelp(this.vegpont,event.detail);
        })
    }

    konyvAdatok(tomb) {
        const szuloelem=$("main");
        new KonyvekView(tomb,szuloelem);
    }
    konyvPublicAdatok(tomb) {
        const szuloelem=$("main");
        new KonyvekPublicView(tomb,szuloelem);
    }
    kosarMegjelenit(tomb) {
        const szuloelem=$("main");
        new  KosarView(tomb,szuloelem);
    }


}

export default KonyvController;