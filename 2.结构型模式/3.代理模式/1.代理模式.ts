class Google {
    constructor() { }
    get() {
        return "google";
    }
}
class Proxy {
    google:any
    constructor() {
        this.google = new Google();
    }
    get() {
        return this.google.get();
    }
}
let proxy = new Proxy();
let ret = proxy.get();
console.log(ret);
