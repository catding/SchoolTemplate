var myNameSpace2 = myNameSpace2 || {};

//somehow we defined a class in here which it's name is sideNav

myNameSpace2.sideNav = function(color2){
    //constructor is here
    //how to have variables for each instance

};

myNameSpace2.sideNav.prototype = function(){
    //private part



    return  {
        //public part

    }
}();
    myNameSpace2.formValidating = function () {

    };
    myNameSpace2.formValidating.prototype = function () {
        this.currentInputContainer;

        //WE MUST FIRST SET CURRENT INPUT
        var setCurrentInput = function (inputFieldId) {
                this.currentInputContainer = inputFieldId;
        },
         checkEmpty = function () {


           if (document.querySelector("#" + this.currentInputContainer + " input").value === ""){
               document.querySelector("#" + this.currentInputContainer + " i:last-child").className
                   = "fa fa-lightbulb-o bulbChecker";
           } else{

               document.querySelector("#" + this.currentInputContainer + " i:last-child").className
                   = "fa fa-lightbulb-o bulbChecker yellow-text";

           }
        },
        getCurrentInput = function () {
            return document.querySelector("#" + this.currentInputContainer + " input");

        } 

        return {
            checkEmpty : checkEmpty,
            setCurrentInput : setCurrentInput,
            getCurrentInput : getCurrentInput


        }
    }();
