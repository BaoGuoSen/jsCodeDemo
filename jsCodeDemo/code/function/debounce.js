function fn(){
    console.log("1");
  }
  function debounce(fn,wait)
  {
    var timeout = null;
    return function(){
      if(timeout) clearTimeout(timeout);
      timeout = setTimeout(function (){
        console.log(1,this)
        fn.apply(this,arguments);
      },wait);
    };
  }
  let test = debounce(fn,1500);
  test();
  test();
  test();
