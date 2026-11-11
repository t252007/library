
document.getElementById("bookForm").onsubmit = function(e) {
    e.preventDefault();

    let book = document.getElementById("bookName").value;

    document.getElementById("result").innerHTML =
        "Successfully added: <b>" + book + "</b>";
};
