class event2 {
    constructor() {
        this.events = {};
    }
    
    on(type,callback) {
        let callbacks = this.events[type] || [];
        if(callbacks.indexOf(callbacks) === -1) {
            callbacks.push(callback);
        }
        this.events[type] = callbacks;
        console.log(1, this);
        return this;
    }

    emit(type,data) {
        let fns = this.events[type];
        fns.forEach(fn => {
            fn(data);
        })
        return this;
    }

    off(type,callback) {
        let callbacks = this.events[type];
        if(callback) {
            let index = callbacks.indexOf(callback);
            if(index !== -1) {
                callbacks.splice(index,1);
            }
        } else {
            callbacks = [];
        }
        return this;
    }
}
var fn = () => {};
var event1 = new event2()
event1.on('click', fn);

class Event {
    constructor() {
        this.event = {}
    }

    on(type,callback) {
        let callbacks = this.event[type] || []
        if (callbacks.indexOf(callback) === -1) {
           callbacks.push(callback)
        }
        this.event[type] = callbacks
    }
    
    emit(type,data) {
        let callbacks = this.event[type]
        callbacks.forEach(fn => {
            fn(data)
        })
    }

    off(type,callback) {
        let callbacks = this.event[type]
        callbacks = callbacks.filters(fn => fn !== callback)
        this.event[type] = callbacks
    }

    once(type,callback) {
        const fn = () => {
            callback()
            this.off(type,callback)
        }
        this.on(type,fn)
    }
}