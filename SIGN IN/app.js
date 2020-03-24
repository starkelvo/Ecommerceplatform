new Vue(
{
  el: "#app",
data: {
    username: "",
    password: "",
    usernameValue: "",
    passwordValue : "",
    show: false

},
methods: {
    details(){
  if(this.username && this.password){
  this.usernameValue= this.username;
  this.passwordValue= this.password;
  this.show = true;
  this.username = "";
  this.password = ""
  }
}
}

})

