function mycall(content) {
  if(typeof this!=='function'){
    throw new TypeError('error')
  }

  content=content||window
  content.fn=this

  const args=[...arguments].split(0)
  const result=content.fn(...args)

  return result

}

function myapply(content){
  if (typeof this !== 'function') {
    throw new TypeError('Error')
  }
  context = context || window
  context.fn = this
  let result
  // 处理参数和 call 有区别
  if (arguments[1]) {
    result = context.fn(...arguments[1])
  } else {
    result = context.fn()
  }
  delete context.fn
  return result
}

function mybind(content){
  // 返回一个函数
  if (typeof this !== 'function') {
    throw new TypeError('Error')
  }
  const _this = this //this就是指向的函数
  const args = [...arguments].slice(1) //参数和call的一样
  // 返回一个函数
  return function F() {
    // 因为返回了一个函数，我们可以 new F()，所以需要判断
    if (this instanceof F) {
      return new _this(...args, ...arguments)
    }
    return _this.apply(context, args.concat(...arguments))
  }
}
