var str='92351441862'

var p=/^1[0-9]{10}$/
console.log(str.match(p)) //match匹配返回列表，不匹配则返回null
console.log(p.test(str)) //test直接返回true,false

var email='2640244372@fudan.edu.cn'
var py=/^(\w+)@(\w{2,5}\.)+(\w{2,3})$/
console.log(email.match(py))

