let demo = document.querySelector("#demo");
let style = document.querySelector("style");
let string = `/*你好，我是一名前端新人
接下来我要加样式了
我要加的样式是*/
body{
    color: red;
}`;
let string2 = "";
let n = 0;

let step = () => {
  setTimeout(() => {
    if (string[n] === "\n") {
      string2 += "<br>";
    } else if (string[n] === " ") {
      string2 += "&nbsp;";
    } else {
      string2 += string[n];
    }
    demo.innerHTML = string2;
    style.innerHTML = string.substring(0, n);
    if (n < string.length - 1) {
      n += 1;
      step();
    } else {
    }
  }, 100);
};
step();
