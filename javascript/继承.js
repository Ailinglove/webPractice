function User(name,age){
  this.name=name
  this.age=age
}

User.prototype.sayName=function(){
  console.log(this.name)
}
User.prototype.sayAge=function(){
  console.log(this.age)
}

function VipUser(name,age,level){
  User.call(this,name,age)
  this.level=level
}
VipUser.prototype=new User()
VipUser.prototype.constructor=VipUser

VipUser.prototype.sayLevel=function(){
  console.log(this.level)
}

var g=new User('txr',23)

var vip=new VipUser('ll',24,2)

vip.sayLevel()
vip.sayAge()
vip.sayName()


console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++")
class Person{
  constructor(name,age){
    this.name=name
    this.age=age
  }
  sayName(){
    console.log(this.name)
  }
  sayAge(){
    console.log(this.age)
  }
}

class vipPerson extends Person{
  constructor(name,age,level){
    super(name,age)
    this.level=level
  }
  sayLevel(){
    console.log(this.level)
  }
  delaySay(){
    var _that=this
    setTimeout(()=>{
      console.log('delay',_that.name)
    })
  }
}

var pvip=new vipPerson('lll',34,3)
pvip.sayAge()
pvip.sayName()
pvip.delaySay()
pvip.sayLevel()
