var PENDING=0
var FULFILLED=1
var REJECTED=2

function Promise(){
  var state=PENDING
  var value=null
  var handlers=[]

  // 成功状态变化
  function fulfill(result){
    state=FULFILLED
    value=result
    handlers.forEach(handle)
    handlers=null
  }
  // 失败状态变化
  function reject(error){
    state=REJECTED
    value=error
    handlers.forEach(handle)
    handlers=null
  }


}
