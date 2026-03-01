// نتأكد إننا في صفحة m.html
if (window.location.pathname.includes("index.html")) {

  var name = window.prompt("اكتب اسمك");

  if (name) {
    name = name.trim();
    window.alert("أهلا بك يا " + name + " في مشروع مصر الرقمية");
  }

}