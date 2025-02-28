class hashMap{
    constructor(size = 16, loadFactor = 0.8){
        this.size = size;
        this.loadFactor = loadFactor;
        this.data = [];
    }

    //take the key and return a hash code to index the new value
    hash(key){
        let hashCode = 0;
               
        for (let i = 0; i < key.length; i++) {
            hashCode = 31 * hashCode + key.charCodeAt(i);
        }
         
        return hashCode % this.size;
    }

    //put an item in the hashed index
    setItem(key, value){
        let index = this.hash(key);

        if (!this.data[index]){
            this.data[index] = [];
        }
        this.data[index].push([key, value])
    }

    //get an item from a desired key
    getItem(key){
        let index = this.hash(key);

        if (!this.data[index]){
            return null;
        }

        for (let item of this.data[index]){
            if (item[0] === key){
                return item[1]
            }
        }
    }


}



let test = new hashMap();
test.setItem("pedro", "picapiedra")

console.log("here we are using hash function to get hash code from (pedro) key: "+test.hash("pedro"));

console.log("this function is geting an element from the key(pedro): "+test.getItem("pedro"))

console.log(test.data)