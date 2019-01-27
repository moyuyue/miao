

var moyuyue = function(){

  function chunk(ary, size = 1) {
  	if (ary.length == 0) return []

  	var result = []
  	var a = ary.slice(0,size);
  	var b = ary.slice(size);

  	result.push(a,b)
  	return result
  }


  function compact(ary) {
  	//数组过滤
  	return ary.filter(item => item)
  }

  function difference(array, ...values) {
  	var b = [].concat(...values)
  	return array.filter(item => b.indexOf(item) == -1)
  }

  return {
    chunk: chunk,
    compact: compact,
    difference: difference,
  }
}()