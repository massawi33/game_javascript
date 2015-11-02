/**
 * Created by User on 01/10/2015.
 */
MonTestCase = TestCase("MonTestCase");

var a = new engin();
a.init();


MonTestCase.prototype.testA = function () {

    assertTrue(a.check() === 0);
};
MonTestCase.prototype.testB = function () {

    assertTrue(a.check_joueur() === "Blanc");

};
MonTestCase.prototype.testC = function () {
    a.start_blanc();
    assertTrue(a.check_start_blanc() === "b");

};

MonTestCase.prototype.testD = function () {
    //a.start_blanc();
    assertTrue(a.check() === 1);
};

MonTestCase.prototype.testE = function () {
    //a.start_blanc();
    a.change_player();
    assertTrue(a.check_joueur() === "Noir");
};

MonTestCase.prototype.testF = function () {
    //a.start_blanc();
    a.rotation_90_clockwise(1);
    //a.rotation_90_counterclockwise()

    assertTrue(a.check_rotation_1() === "b");
};
MonTestCase.prototype.testG = function () {

    a.black_first_move();
    assertTrue(a.check() === 2);
    assertTrue(a.check_black_first_move() === "n");


};
MonTestCase.prototype.testH = function () {

    a.rotation_90_counterclockwise(1);
    assertTrue(a.check_start_blanc() === "b");
    assertTrue(a.check_rotation_black_2() === "n");


};
/*MonTestCase.prototype.testI = function () {

    //assertTrue(a.blanc_play(0,0) === "not_empty" );
    assertException(function () {
        a.blanc_play(0, 0);
    }, "not_empty");


};*/
MonTestCase.prototype.test10 = function () {

    //assertTrue(a.blanc_play(0,0) === "not_empty" );
    //a.blanc_play(0,0,1);
    //a.black_play(0,2,1);
    a.blanc_play(1, 0, 1);
    a.rotation_90_clockwise(1);
    a.black_play(0, 1, 1);
    a.rotation_90_counterclockwise(1);
    a.blanc_play(2, 0, 1);
    a.rotation_90_clockwise(1);
    a.black_play(0, 2, 1);
    a.rotation_90_counterclockwise(1);
    a.blanc_play(0, 0, 2);
    a.rotation_90_counterclockwise(2);
    a.black_play(2, 2, 2);
    a.rotation_90_clockwise(2);
    a.display_carre();
    a.display_carre2();



};


