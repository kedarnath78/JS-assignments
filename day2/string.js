var txt = "abcdef";
//str.length
document.write("length of string abcdef is " + txt.length);

//finding string in a string
var str = "my name is priya";
var pos = str.indexOf("priya");

document.write("<br>" + `(using Indexof)location of priya in ${str} is ${pos}`);

//lastIndexOf()
var str = "Please locate where 'locate' occurs!";
var pos = str.lastIndexOf("locate");
document.write(
  "<br>" + `(using lastIndexOf)location of last locate in ${str} is ${pos}`
);

//search()
var str = "Please locate where 'locate' occurs!";
var pos = str.search("locate");
document.write(
  "<br>" + `(using search)location of last locate in ${str} is ${pos}`
);

//slice()
var str = "Apple, Banana, Kiwi";
var res = str.slice(7, 13);
document.write("<br>" + "Using slice() " + res);
var res = str.substring(7, 13);
document.write("<br>" + "Usingsubstring() " + res);

//replace()
str = "Please visit Microsoft and Microsoft!";
var n = str.replace("Microsoft", "Google");
document.write("<br>" + str);