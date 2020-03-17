var axios={
  get:function(url){
    return new Promise((resolve,reject)=>{
      var xhr=new XMLHttpRequest()
      xhr.open('get',url,true)
      xhr.onreadystatechange=function(){
        if(xhr.readyState===4 && xhr.status===200){
          // readyStatus=4代表请求完成
          resolve(xhr.responseTest)
        }
      }
      xhr.send()
    })
  }
}
// 调用axios
axios.get(url).then(res=>{
  console.log(res)
}).catch(err=>{
  console.log(err)
})
