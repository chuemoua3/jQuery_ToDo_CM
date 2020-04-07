// ToDo lab assignment in jQuery
// Date: 4/7/2020

//setting html elements to some variables for jQuery
var input = $('#input');
var button = $('#addButton');
var list = $('#list');

//button function where new list items goes to the bottom
button.click(function(){
    var newInput = '<li>' + input.val() + '</li>';
    //this adds to the end of the list
    list.append(newInput);
    //clears the input
    input.val("");
});

//clearing the text function with a line strike
list.click(function(text){
    var target = $(text.target);
    if (target.is("li")){
        target.css('text-decoration','line-through','text-blur-out');
        
        //timer of how long it takes to disappear 
        setTimeout(function(){
            target.remove();
        }, 2500)
    }
});

//ENTER key function 
input.keyup(function(key){
    if (key.keyCode == 13){
        button.click();
    }
})