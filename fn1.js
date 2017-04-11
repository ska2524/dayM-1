/**
 * Created by JSK on 2017-04-10.
 */
function doA() {//가독성떄문에 파라미터를 잡는다.

    console.log("----------------------")
    // console.log(num1)
    // console.log(num2)
    console.log(arguments)
    console.log("----------------------")
}

// function doA(num1, num2) {
//
//     console.log("AAAAAAAAAAAAAAAAAAAAAA")
//     console.log(num1)
//     console.log(num2)
//     console.log("AAAAAAAAAAAAAAAAAAAAAAA")
// }

// console.log(doA(100));
// doA(100);
// doA(100,200);
doA(100,200,300);

//overloading이 안된다. 자바의 생성자같은 기능은 못함. 왜냐면 파라미터를 맞출 필요가 없기떄문
//window.doA -> window.doA override가 되는것이다.(덮어쓰기가능)
//undefined 선언은 했는데 할당이 되지않았다.