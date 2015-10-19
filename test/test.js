/**
 * Created by User on 01/10/2015.
 */
MonTestCase = TestCase("MonTestCase");

a = new engin();
a.init();


MonTestCase.prototype.testA = function() {

    assertTrue(a.check() === 0 );
};
MonTestCase.prototype.testB = function() {

    assertTrue(a.check_joueur() === "Blanc" );

};
MonTestCase.prototype.testC = function() {
    a.start_blanc();
    assertTrue(a.check_start_blanc() === "b" );

};

MonTestCase.prototype.testD = function() {
    a.start_blanc();
    assertTrue(a.check() === 1 );
};

MonTestCase.prototype.testE = function() {
    a.start_blanc();
    a.change_player();
    assertTrue(a.check_joueur() === "Noir" );
};

MonTestCase.prototype.testF = function() {
    a.start_blanc();
    a.rotation_90();

    assertTrue(a.check_rotation_1() === "b" );
};


