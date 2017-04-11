/**
 * Created by JSK on 2017-04-10.
 */
/**
 * Created by JSK on 2017-04-10.
 */
function add() {//가독성떄문에 파라미터를 잡는다.

    var result = 0;

    for (var i = 0, len = arguments.length; i < len; i++) {

        result += arguments[i];


    }

    return result;
}

console.log(add(1, 2, 3, 4, 5, 6, 7, 8, 9, 10))