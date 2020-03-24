function createPromsie(url){
  return new Promise(function(resolve, reject){
    $ajax({url,data:'json',success:function(data){
      resolve(data)
      },error:function(err){
      reject(err)
      }})
  })
}

let p=Promise.all([createPromsie(url1),createPromsie(url2),createPromsie(url3)])
  .then((arr)=>{
    //arr是几个promise成功时取到的值
    console.log(arr)
  },()=>{
    console.log('失败了')
  })


//promsie.race([])  //只要有一个resolve,就直接返回resolve
