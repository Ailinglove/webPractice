/**
 * jsonp原理：<script>元素不受同源策略的影响，可以进行ajax传输。当script元素
 * 访问时，返回由回调函数进行包裹对的json数据。再回调函数中获取数据进行处理。
 *
 *
 * 1. send a request to the url ,like http://www.baidu.com?name='ll'&'age'=18&'callback'=callbackName
 * 2. the erver of you request will call the cakkbackName to process the responseed data
 * @param url
 * @param data
 * @param callback
 * @returns {Promise<unknown>}
 */
function jsonp(url,data={},callback='callback'){

  // process the param, callback name is unique, so we should random a number to fix the callback
  var num= Math.round(100000*Math.random())
  let callbackName=callback+'_'+num

  data.callback=callbackName
  // the unique of the callbackName id due to if we sned sever request, the later callback function will
  // cover the previous callback function

  let param=[]
  for(let key in data){
    param.push(key+'='+data[key])
  }
  console.log(param.join("&"))

  //创建script标签

  let script=document.createElement('script')
  script.src=url+'?'+param.join("&")
  // the dynamic of the script tag could not block the page
  // if I insert a script tag into the page with the src immediatly,when the program excute here
  // the brower will wait it ,then go on the next
  // $ajax.get(url)

  document.body.appendChild(script)  // insert the script tag into the HTML page

  return new Promise(((resolve, reject) => {
    window[callbackName]=(data)=>{
      try{
        resolve(data)
      }catch(e){
        reject(e)
      }finally {
        script.parentNode.removeChild(script)
        console.log(script)
      }
    }
  }))

}

jsonp('http://photo.sina.cn/aj/index',{
  page:1,
  cate:'recommend'
},'jsoncallback').then(data=>{
  console.log(data)
})
