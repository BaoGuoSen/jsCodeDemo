function fn(){
    console.log([...arguments]);
  }
  function debounce(fn,wait)
  {
    var timeout = null;
    return function(){
      if(timeout) clearTimeout(timeout);
      timeout = setTimeout(() => {
        fn.apply(this,arguments)
        console.log(this)
      },wait);
    };
  }
  let test = debounce(fn,150);
  test(3,3)
  test(1,2);
