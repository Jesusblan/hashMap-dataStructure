class hashMap{
    constructor(size = 16, loadFactor = 0.8){
        this.size = size;
        this.loadFactor = loadFactor;
    }

    hash(key){
        
        let hashCode = 0;
               
        for (let i = 0; i < key.length; i++) {
            hashCode = 31 * hashCode + key.charCodeAt(i);
        }
         
        return hashCode % this.size;
    }


}



let test = new hashMap();



console.log(test.hash("231412235"));