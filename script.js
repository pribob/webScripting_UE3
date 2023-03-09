
$(function() {
    $("#add").on("click", addItem);
    });  
$(()=>{$("#listStart").on("click", handleDeleteItem)});

function addItem() {
        console.log("clicked");
        e = $("#item").val();
        console.log(e);
        $("ol").append("<li>" + e + "</li>");
        // instead of class add eventlistener?
        $("li:contains('" + e + "')").click(
            handleDeleteItem);
        $("#item").val("");
        console.log("element added");
    }

function handleDeleteItem () {
    console.log(this);
    $(this).remove();
}

    
    