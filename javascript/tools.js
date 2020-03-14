function addHandler(el,type,handler){
  /**
   * event：要添加的事件名称或者事件处理器的名称
   * handler：事件处理程序
   * type：事件冒泡或者事件捕获,默认为事件冒泡阶段
   *
   * 这个函数的主要功能是区分 DOM0级，DOM2级，IE浏览器
   *
   * 使用方法：
   *    addHandler(div,'click',handler)
   */
  if(el.addEventListener){
    el.addEventListener(type,handler,false)
  }else if(el.attachEvent){
    el.attachEvent("on"+type,handler)
  }else{
    el["on"+type]=handler
  }

}

function removeHandler(el,type,handler){
  if(el.removeEventListener){
    el.removeEventListener(type,handler,false)
  }else if(el.detachEvent){
    el.detachEvent("on"+type,handler)
  }else{
    el["on"+type]=null
  }
}
