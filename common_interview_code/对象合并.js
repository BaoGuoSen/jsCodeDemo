function merger(...objs) {
  let res = {}

  const combie = (obj) => {
    for(let key in obj) {
      if (obj.hasOwnProperty(key)) {
        if (typeof obj[key] === 'object') {
          res[key] = merger(res[key],obj[key])
        } else {
          res[key] = obj[key]
        }
      }
    }
  }

  for(let i = 0;i<objs.length;i++) {
    combie(objs[i])
  }
  return res
}

let obj1 = {
  name: 'dk',
  age: '99',
  feature: 'stronge'
}

let obj2 = {
  name: 'tk',
  age: '99',
  feature1: 'noStronge',
  address: {
      city: '广州',
      address: {
      city: '深圳'
      }
  },
  skills: ['JavaScript', 'React', 'Node']
}

let res = merger(obj1, obj2);

console.log(res)