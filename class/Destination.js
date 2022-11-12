class Destination{
    /**
     * 
     * @param {String} destination 
     * @param {URL} photo 
     * @param {String} circuit 
     * @param {int} tarif 
     * @param {int} id
     */
    
    constructor(destination, photo, circuit, tarif, id) {
        this.destination = destination;
        this.photo       = photo;
        this.circuit     = circuit;
        this.tarif       = tarif;
        this.id          = id;
    }

    get getDestination(){
        return this.destination;
    }

    set setDestination(value){
        this.destination = value;
    }

    get getPhoto(){
        return this.photo;
    }

    set setPhoto(value){
        this.photo = value;
    }

    get getCircuit(){
        return this.circuit;
    }

    set setCircuit(value){
        this.circuit = value;
    }

    get getTarif(){
        return this.tarif;
    }

    set setTarif(value){
        this.tarif = value;
    }

    get getId(){
        return this.id;
    }

    set setId(id){
        this.id = id;
    }
    // Returns the current object under a JSON shape
    toJSObject() {
        return {
            destination : this.getDestination,
            photo       : this.getPhoto,
            circuit     : this.getCircuit,
            tarif       : this.getTarif,
            id          : this.id
        }
    }
}
