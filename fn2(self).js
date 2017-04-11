/**
 * Created by JSK on 2017-04-10.
 */
function sum(num1,num2) {

   function add(v1,v2){
       return v1+v1+1
   }

   if(num1+1 == num2){
       return
   }
   return add(num1)

}

console.log(sum(1,10))