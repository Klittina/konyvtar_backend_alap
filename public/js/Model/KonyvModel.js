class KonyvModel {
    #konyvekTomb = [];
     constructor(token) { this.token = token; }

    adatBe(vegpont,adat){
        fetch(vegpont,{
            method: "POST",
            headers:{
                "Content-Type":"application/json",
                "X-CSRF-TOKEN": this.token,
            },
            body:JSON.stringify(adat),
        })
        .then((response)=>response.json())
        .then((data)=>{
            console.log("Új adat"+data);
        })
        .catch((error)=>{
            console.error("Error:", error)
        })
    }

    adatModosit(vegpont,adat){
        console.log(adat);
        console.log("Módosít"+ vegpont);
        vegpont += "/" + adat.id;
        fetch(vegpont,{
            method: "PUT",
            headers:{
                "Content-Type":"application/json",
                "X-CSRF-TOKEN": this.token,
            },
            body:JSON.stringify(adat),
        })
        .then((response)=>response.json())
        .then((data)=>{
            console.log("MÓDOSÍTottam"+data.updatedAt);
        })
        .catch((error)=>{
            console.error("Error:", error)
        })
    }
    adatTorol(vegpont,adat){
        console.log("TÖRÖLTEM: ");
        console.log(adat);
        vegpont += "/" + this.adatModosit.id;
        console.log(vegpont);
        fetch(vegpont,{
            method: "DELETE",
            headers:{
                "X-CSRF-TOKEN": this.token,
            },
            body:JSON.stringify(adat),
        })
        .then()
        .then(()=>{
            console.log("Sikeres törlés");
        })
        .catch((error)=>{
            console.error("Error:", error)
        })
    }

   

    adaModosit(adat){
        console.log(adat,"modell");
    }
    adaTorol(adat){
        console.log(adat);
    }

    adahelp(adat){
        console.log(adat);
    }
    /*
    adatBe(vegpont, myCallBack) {
        fetch(vegpont, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        })
            .then((response) => response.json())
            .then((data) => {
                this.#konyvekTomb = data.konyv;
                console.log(this.#konyvekTomb);
                myCallBack(this.#konyvekTomb);
            })
            .catch((error) => {
                //console.error('Error:', error);
            });
    }
    */
}

export default KonyvModel;