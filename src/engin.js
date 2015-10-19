/**
 * Created by User on 01/10/2015.
 */
var engin ;
engin = function () {
    //function ma_function(p1, p2) {
        //return 0;
    //}

     var carre = new Array(3);
     var joueur ;
   //carre = new Array(["b","b","b"] , ["b","b","b"] );

    this.init = function() {

        var i;
        var j;
        var hehe = 1;
        for (i = 0; i < 3; i++) {
            carre[i] = new Array(3);
            for (j = 0; j < 3; j++) {
                //carre[i][j] = false;
                carre[i][j] = "vide" ;
                //hehe++;
                // return carre[i][j];
            }
        }

        //-----------------------------------------------

        joueur = "Blanc";

    };
    this.check_joueur = function() {
            return joueur;
    };
    this.start_blanc = function() {
        carre [0][0] = "b";

    };
    this.check_start_blanc = function(){
        return carre[0][0] ;
    };
    this.change_player = function(){
        if(joueur === "Blanc"){

            joueur = "Noir";
        }
        else if (joueur === "Noir"){

            joueur = "Blanc";
        }

    };
    this.display_carre = function(){
        var i ;
        var j ;

        for(i = 0 ; i < 3 ; i++){

            for(j = 0 ; j < 3 ; j++){

                console.log(carre [i][j] + " " + i + " " + j);



            }


        }


    };


    this.rotation_90_clockwise = function(){
        var pr = new Array(3);
        var i;
        var pivot;
        var j;
        for (i = 0; i < 3; i++) {
            pr[i] = new Array(3);
            for (j = 0; j < 3; j++) {
                pr[i][j] = "vide";

            }
        }

        for(i = 0 ; i < 3 ; i++){
            pivot = 0;
            for(j = 2 ; j > -1 ; j--){
                pr[pivot][i] = carre [i][j];
                pivot ++;


            }


        }


        for(i = 0 ; i < 3 ; i++){

            for(j = 0 ; j < 3 ; j++){

                carre [i][j] = pr[i][j];
            }


        }

        //this.display_carre();


    };
    this.rotation_90_counterclockwise = function(){

        var pr = new Array(3);
        var i;
        var pivot;
        var j;
        for (i = 0; i < 3; i++) {
            pr[i] = new Array(3);
            for (j = 0; j < 3; j++) {
                pr[i][j] = "vide";

            }
        }

        for(i = 0 ; i < 3 ; i++){
            pivot = 0;
            for(j = 2 ; j > -1 ; j--){
                pr[i][pivot] = carre [j][i];
                pivot ++;


            }


        }


        for(i = 0 ; i < 3 ; i++){

            for(j = 0 ; j < 3 ; j++){

                carre [i][j] = pr[i][j];
            }


        }
        //this.display_carre();


    };
    this.check_rotation_1 = function() {
        return carre [2][0];
    };
    this.check_rotation_black_2 = function() {
        return carre [0][2];
    };
    this.black_first_move = function(){
        carre [0][0] = "n";
    };
    this.check_black_first_move = function(){

        return carre[0][0];

    };
    this.check = function() {
        var i;
        var j;
        var num = 0;
        for (i = 0; i < 3; i++) {
            for (j = 0; j < 3; j++) {
                if (carre[i][j] != "vide") {
                    num++;
                }

                // return carre[i][j];
            }
        }
        return num;

    };
    this.not_empty_exception = function(){

        this.name = "not_empty";

    };

    this.blanc_play = function(a , b){

        if(carre [a][b] != "vide"){

            throw new this.not_empty_exception();


        }
        else
        {
            carre[a][b] = "b";

        }


    };
    this.black_play = function(a , b){

        if(carre [a][b] != "vide"){

            throw new this.not_empty_exception();


        }
        else
        {
            carre[a][b] = "n";

        }


    };

}
