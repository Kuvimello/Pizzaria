menu_list_array = ["1.Pepperoni Pizza", "2(Final One).Margarita Pizza"]

var i = 0;

function getmenu(){
    document.getElementById("display_menu").innerHTML = menu_list_array[i];
    i++;
}