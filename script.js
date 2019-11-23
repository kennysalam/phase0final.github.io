//function tambah list baru
function addNew() {
    var input = document.getElementById("input").value;
    if (input.length === 0){
        alert("Please write something!");
    } else {
        var ul = document.getElementById("ulList");
        var li = document.createElement("li");
        var remove = document.createElement("span");
        remove.setAttribute('class', 'remove')
        remove.innerHTML = "Remove";
        remove.onclick = removeList;
        li.appendChild(document.createTextNode(input));
        li.appendChild(remove);
        ul.appendChild(li);
        li.onclick = done;
        document.getElementById("input").value = "";
    }
}

//kalo pencet enter waktu posisi di input text
var inInput = document.getElementById("input");
inInput.onkeyup = function(enter) {
    if (enter.keyCode == 13) {
        addNew();
    }
};

//function remove list
function removeList(i) {
    i.target.parentNode.parentNode.removeChild(i.target.parentNode);
}

//function done list
function done(i) {
    i.target.setAttribute('class', 'done')
}