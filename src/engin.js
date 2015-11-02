/**
 * Created by User on 01/10/2015.
 */
var engin;
engin = function () {
    //function ma_function(p1, p2) {
    //return 0;
    //}

    'use strict';
    var carre = new Array(3), joueur, carre2 = new Array(3), carre3 = new Array(3), carre4 = new Array(3);
    //carre = new Array(["b","b","b"] , ["b","b","b"] );

    this.init = function () {

        var i, j;
        //var hehe = 1;
        for (i = 0; i < 3; i += 1) {
            carre[i] = new Array(3);
            carre2[i] = new Array(3);
            carre3[i] = new Array(3);
            carre4[i] = new Array(3);
            for (j = 0; j < 3; j += 1) {
                //carre[i][j] = false;
                carre[i][j] = "vide";
                carre2[i][j] = "vide";
                carre3[i][j] = "vide";
                carre4[i][j] = "vide";
                //hehe++;
                // return carre[i][j];
            }
        }


        //-----------------------------------------------

        joueur = "Blanc";

    };
    this.check_joueur = function () {
        return joueur;
    };
    this.start_blanc = function () {
        carre[0][0] = "b";

    };
    this.check_start_blanc = function () {
        return carre[0][0];
    };
    this.change_player = function () {
        if (joueur === "Blanc") {

            joueur = "Noir";
        } else if (joueur === "Noir") {

            joueur = "Blanc";
        }

    };
    this.display_carre = function () {
        var i, j;

        for (i = 0; i < 3; i += 1) {

            for (j = 0; j < 3; j += 1) {

                console.log(carre[i][j] + " " + i + " " + j);


            }


        }


    };
    this.display_carre2 = function () {
        var i, j;

        for (i = 0; i < 3; i += 1) {

            for (j = 0; j < 3; j += 1) {

                console.log(carre2[i][j] + " " + i + " " + j);


            }


        }


    };
    this.display_carre3 = function () {
        var i, j;

        for (i = 0; i < 3; i += 1) {

            for (j = 0; j < 3; j += 1) {

                console.log(carre3[i][j] + " " + i + " " + j);


            }


        }


    };
    this.display_carre4 = function () {
        var i, j;

        for (i = 0; i < 3; i += 1) {

            for (j = 0; j < 3; j += 1) {

                console.log(carre4[i][j] + " " + i + " " + j);


            }


        }


    };

    this.rotation_90_clockwise = function (cr) {
        var pr = new Array(3), i, pivot, j;
        for (i = 0; i < 3; i += 1) {
            pr[i] = new Array(3);
            for (j = 0; j < 3; j += 1) {
                pr[i][j] = "vide";

            }
        }
        if (cr === 1) {
            for (i = 0; i < 3; i += 1) {
                pivot = 0;
                for (j = 2; j > -1; j -= 1) {
                    pr[pivot][i] = carre[i][j];
                    pivot += 1;


                }


            }


            for (i = 0; i < 3; i += 1) {

                for (j = 0; j < 3; j += 1) {

                    carre[i][j] = pr[i][j];
                }


            }
        } else if (cr === 2) {
            for (i = 0; i < 3; i += 1) {
                pivot = 0;
                for (j = 2; j > -1; j -= 1) {
                    pr[pivot][i] = carre2[i][j];
                    pivot += 1;


                }


            }


            for (i = 0; i < 3; i += 1) {

                for (j = 0; j < 3; j += 1) {

                    carre2[i][j] = pr[i][j];
                }


            }
        } else if (cr === 3) {
            for (i = 0; i < 3; i += 1) {
                pivot = 0;
                for (j = 2; j > -1; j -= 1) {
                    pr[pivot][i] = carre3[i][j];
                    pivot += 1;


                }


            }


            for (i = 0; i < 3; i += 1) {

                for (j = 0; j < 3; j += 1) {

                    carre3[i][j] = pr[i][j];
                }


            }
        } else if (cr === 4) {
            for (i = 0; i < 3; i += 1) {
                pivot = 0;
                for (j = 2; j > -1; j -= 1) {
                    pr[pivot][i] = carre4[i][j];
                    pivot += 1;


                }


            }


            for (i = 0; i < 3; i += 1) {

                for (j = 0; j < 3; j += 1) {

                    carre4[i][j] = pr[i][j];
                }


            }
        }

        //this.display_carre();


    };
    this.rotation_90_counterclockwise = function (cr) {

        var pr = new Array(3), i, pivot, j;
        for (i = 0; i < 3; i += 1) {
            pr[i] = new Array(3);
            for (j = 0; j < 3; j += 1) {
                pr[i][j] = "vide";

            }
        }
        if (cr === 1) {
            for (i = 0; i < 3; i += 1) {
                pivot = 0;
                for (j = 2; j > -1; j -= 1) {
                    pr[i][pivot] = carre[j][i];
                    pivot += 1;


                }


            }


            for (i = 0; i < 3; i += 1) {

                for (j = 0; j < 3; j += 1) {

                    carre[i][j] = pr[i][j];
                }


            }
        } else if (cr === 2) {
            for (i = 0; i < 3; i += 1) {
                pivot = 0;
                for (j = 2; j > -1; j -= 1) {
                    pr[i][pivot] = carre2[j][i];
                    pivot += 1;


                }


            }


            for (i = 0; i < 3; i += 1) {

                for (j = 0; j < 3; j += 1) {

                    carre2[i][j] = pr[i][j];
                }


            }
        } else if (cr === 3) {
            for (i = 0; i < 3; i += 1) {
                pivot = 0;
                for (j = 2; j > -1; j -= 1) {
                    pr[i][pivot] = carre3[j][i];
                    pivot += 1;


                }


            }


            for (i = 0; i < 3; i += 1) {

                for (j = 0; j < 3; j += 1) {

                    carre3[i][j] = pr[i][j];
                }


            }
        } else if (cr === 4) {
            for (i = 0; i < 3; i += 1) {
                pivot = 0;
                for (j = 2; j > -1; j -= 1) {
                    pr[i][pivot] = carre4[j][i];
                    pivot += 1;


                }


            }


            for (i = 0; i < 3; i += 1) {

                for (j = 0; j < 3; j += 1) {

                    carre4[i][j] = pr[i][j];
                }


            }
        }
        //this.display_carre();


    };
    this.check_rotation_1 = function () {
        return carre[2][0];
    };
    this.check_rotation_black_2 = function () {
        return carre[0][2];
    };
    this.black_first_move = function () {
        carre[0][0] = "n";
    };
    this.check_black_first_move = function () {

        return carre[0][0];

    };
    this.check = function () {
        var i, j, num = 0;
        for (i = 0; i < 3; i += 1) {
            for (j = 0; j < 3; j += 1) {
                if (carre[i][j] !== "vide") {
                    num += 1;
                }

                // return carre[i][j];
            }
        }
        return num;

    };
    this.not_empty_exception = function () {

        this.name = "not_empty";

    };

    this.blanc_play = function (a, b, cr) {
        if (cr === 1) {
            if (carre[a][b] !== "vide") {

                throw new this.not_empty_exception();


            }
            carre[a][b] = "b";
        } else if (cr === 2) {
            if (carre2[a][b] !== "vide") {

                throw new this.not_empty_exception();


            }
            carre2[a][b] = "b";
        } else if (cr === 3) {
            if (carre3[a][b] !== "vide") {

                throw new this.not_empty_exception();


            }
            carre3[a][b] = "b";
        } else if (cr === 4) {
            if (carre4[a][b] !== "vide") {

                throw new this.not_empty_exception();


            }
            carre4[a][b] = "b";
        }




    };
    this.black_play = function (a, b, cr) {

        if (cr === 1) {
            if (carre[a][b] !== "vide") {

                throw new this.not_empty_exception();


            }
            carre[a][b] = "n";
        } else if (cr === 2) {
            if (carre2[a][b] !== "vide") {

                throw new this.not_empty_exception();


            }
            carre2[a][b] = "n";
        } else if (cr === 3) {
            if (carre3[a][b] !== "vide") {

                throw new this.not_empty_exception();


            }
            carre3[a][b] = "n";
        } else if (cr === 4) {
            if (carre4[a][b] !== "vide") {

                throw new this.not_empty_exception();


            }
            carre4[a][b] = "n";
        }



    };

};
