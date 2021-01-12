
function myPromise(fn) {
	var self = this;
	self.state = "pending";
	self.data = "";
	self.resolvecb = [];
	self.rejectcb = [];

	resolve = function(v) {
		if(self.state === "pending") {
			self.state = "resolve";
			self.data = v;
			setTimeout(function() {
				self.resolvecb.forEach(fn => fn(v));
			});
		}
	}

	reject = function(e) {
		if(self.state === "pending") {
			self.state = "reject";
			self.data = e;
			setTimeout(function() {
				self.rejectcb.forEach(fn => fn(e));
			});
		}
	}

	try{
		fn(resolve,reject);
	} catch(e) {
		reject(e);
	}
}
myPromise.prototype.then = function(onresolve,onreject) {
	var self = this;

	if(self.state === "resolve") {
		return new myPromise(function(resolve,reject) {
			setTimeout(function() {
				try{
					let temp = onresolve(self.data);
					if(temp instanceof myPromise) {
						temp.then(resolve,reject);
					}else {
						resolve(temp);
					}
				} catch(e) {
					reject(e);
				}
			});
		});
	}

	if(self.state === "reject") {
		return new myPromise(function(resolve,reject) {
			setTimeout(function() {
				try{
					let temp = onreject(self.data);
					if(temp instanceof myPromise) {
						temp.then(resolve,reject);
					}else {
						reject(temp);
					}
				} catch(e) {
					reject(e);
				}
			});
		});
	}

	if(self.state === "pending") {
		return new myPromise(function(resolve,reject) {
			self.resolvecb.push(function() {
				setTimeout(function() {
					try{
						let temp = onresolve(self.data);
						if(temp instanceof myPromise) {
							temp.then(resolve,reject);
						}else {
							resolve(temp);
						}
					} catch(e) {
						reject(e);
					}
				});
			});

			self.rejectcb.push(function() {
				setTimeout(function() {
					try{
						let temp = onreject(self.data);
						if(temp instanceof myPromise) {
							temp.then(resolve,reject);
						}else {
							reject(temp);
						}
					} catch(e) {
						reject(e);
					}
				});
			});

		});
	}
}   

const p = new myPromise(function(resolve, reject) {
    setTimeout(function() {
      resolve(1);
    }, 2000);
  });
  
  p.then(function(v) {
    console.log(v);
    return 2;
  }).then(function(v) {
    console.log(v);
    return new myPromise(function(resolve, reject) {
      setTimeout(function() {
        resolve(3);
      }, 3000);
    });
  }).then(function(v) {
    console.log(v);
  });

function myPromise(fn) {
    let self = this;
    self.state = "pending";
    self.data = "";
    self.resolvecallbacks = [];
    self.rejectcallbacks = [];

    resolve = function(val) {
        if(self.state === "pending") {
            self.state = "resolve";
            self.data = val;
            setTimeout(() => {
                self.resolvecallbacks.forEach(fn => fn(val));
            });
        }
    }

    reject = function(e) {
        
    }
}