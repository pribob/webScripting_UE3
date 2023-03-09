
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

function enableDragSort(listClass) {
    const sortableLists = document.getElementsByClassName(listClass);
    Array.prototype.map.call(sortableLists, (list) => {enableDragList(list)});
  }
  
  function enableDragList(list) {
    Array.prototype.map.call(list.children, (item) => {enableDragItem(item)});
  }
  
  function enableDragItem(item) {
    item.setAttribute('draggable', true)
    item.ondrag = handleDrag;
    item.ondragend = handleDrop;
  }
  
  function handleDrag(item) {
    const selectedItem = item.target,
          list = selectedItem.parentNode,
          x = event.clientX,
          y = event.clientY;
    
    selectedItem.classList.add('drag-sort-active');
    let swapItem = document.elementFromPoint(x, y) === null ? selectedItem : document.elementFromPoint(x, y);
    
    if (list === swapItem.parentNode) {
      swapItem = swapItem !== selectedItem.nextSibling ? swapItem : swapItem.nextSibling;
      list.insertBefore(selectedItem, swapItem);
    }
  }
  
  function handleDrop(item) {
    item.target.classList.remove('drag-sort-active');
  }
  
  (()=> {enableDragSort('drag-sort-enable')})();

    
    