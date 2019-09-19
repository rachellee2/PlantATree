var btn = document.getElementsByClassName('btn_del');

function remove_item(){
    event.currentTarget.parentNode.remove();
}

// var item = document.getElementById("item1");
// document.getElementById('item1').remove();
for (var i = 0; i < btn.length; i++) {
    btn[i].addEventListener('click', function() {
        e.currentTarget.parentNode.remove();
        //this.closest('.single').remove() // in modern browsers in complex dom structure
        //this.parentNode.remove(); //this refers to the current target element 
        //e.target.parentNode.parentNode.removeChild(e.target.parentNode);
    }, false);
}

function incrementQuantity(){
    
}
var btn = document.getElementsByClassName('remove')

for (var i = 0; i < btn.length; i++) {
  btn[i].addEventListener('click', function(e) {
    e.currentTarget.parentNode.remove();
  }, false);
}