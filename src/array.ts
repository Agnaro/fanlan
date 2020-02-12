// apply :: forall a b. f (a -> b) -> f a -> f b
// ap :: Array (a -> b) -> Array a -> Array b
function ap(fnArr,arr){
    const out = [];
    for(let f=0; f < fnArr.length; f++){
      for(let d=0; d < arr.length; d++){
        out.push(fnArr[f](arr[d]))
      }
    }
    return out;
  }
  
  // type Apply <= Applicative
  // of/pure :: 