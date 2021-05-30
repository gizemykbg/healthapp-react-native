  import { action, observable, makeAutoObservable } from 'mobx';

class Store {
    //nutrition breakfast
    @observable breakfast = []
    @action addBreakfast = (item) => {
        console.log(item)
        item.map((val, index) => {
            if (this.breakfast.length === 0) {
                this.breakfast.push(val)
            } else {
                 this.breakfast.map(value => {
                   if (val.id !== value.id) {
                       this.breakfast.push(val)
                   }
                   this.breakfast
                })
            }
        })
        console.log(this.breakfast)
    }
    //nutrition breakfast
    @observable lunch = []
    @action addLunch = (item) => {
        console.log(item)
        item.map((val, index) => {
            if (this.lunch.length === 0) {
                this.lunch.push(val)
            } else {
                 this.lunch.map(value => {
                   if (val.id !== value.id) {
                       this.lunch.push(val)
                   }
                   this.lunch
                })
            }
        })
        console.log(this.lunch)
    }
    //nutrition snack
    @observable snack = []
    @action addSnack = (item) => {
        console.log(item)
        item.map((val, index) => {
            if (this.snack.length === 0) {
                this.snack.push(val)
            } else {
                 this.snack.map(value => {
                   if (val.id !== value.id) {
                       this.snack.push(val)
                   }
                   this.snack
                })
            }
        })
        console.log(this.snack)
    }
    //nutrition dinner
    @observable dinner = []
    @action addDinner = (item) => {
        console.log(item)
        item.map((val, index) => {
            if (this.dinner.length === 0) {
                this.dinner.push(val)
            } else {
                 this.dinner.map(value => {
                   if (val.id !== value.id) {
                       this.dinner.push(val)
                   }
                   this.dinner
                })
            }
        })
        console.log(this.dinner)
    }
    //testekle
    @observable test = []
    @action addTest = (item) => {
        console.log(item)
        item.map((val, index) => {
            if (this.test.length === 0) {
                this.test.push(val)
            } else {
                 this.test.map(value => {
                   if (val.id !== value.id) {
                       this.test.push(val)
                   }
                   this.test
                })
            }
        })
        console.log(this.test)
    }



    //rate
    @observable rate = 2;
    //water hedef
    @observable water = 6;
    //water water sayaç
    @observable waterCounter = 0;
    constructor() {
        makeAutoObservable(this)
    }
    @action waterAdd = (value) => {
        console.log('çalıştı', value)
        if (this.waterCounter < this.water) {
            console.log('water', this.waterCounter)
            this.waterCounter = this.waterCounter + value
            console.log('if water', this.waterCounter)
        }
        else {
            this.waterCounter = this.water
            console.log('else water', this.waterCounter)
            alert('hedef tamamlandı')
        }
    }


}

export default new Store()


// //arrow function kullanmıyorsak @action.bound kullanmalıyız
 