let txt = document.getElementsByName("abdalla")[0];
let valueText = txt.value;
let mainDiv = document.getElementsByClassName("main");
document.forms[0].onsubmit = function (e) {
    e.preventDefault();
    document.querySelectorAll(".sec").forEach((el) => el.remove());
    for(let i = 0; i < txt.value; i++) {
        let div = document.createElement("div");
        div.className = "sec";
        let textDiv = document.createTextNode(`I Love You Haboba`);
        div.appendChild(textDiv)
        document.body.appendChild(div)
        div.style.cssText = "color: red;display: flex;justify-content: center;align-items: center"
        
    }
      txt.value = ""
  }












// fetch("./article.json").then((result) => {
//   let myData = result.json();
//   console.log(myData);
//   return myData;
// }).then((myData) => {
//   myData.length = 3;
//   return myData;
// }).then((a) => {
//   let mainDiv = document.createElement("div");
//   mainDiv.id = "data";
//   document.body.appendChild(mainDiv)
//   for(let i = 0; i < a.length; i++) {
//       let main2Div = document.createElement("div");
//       let title = document.createElement("h2")
//       let article = document.createElement("p")
//       let author = document.createElement("p")
//       let catogary = document.createElement("p")
//       let titleText = document.createTextNode(a[i].title)
//       let articleText = document.createTextNode(a[i].body)
//       let authorText = document.createTextNode(a[i].author)
//       let catogaryText = document.createTextNode(a[i].category)
//       title.appendChild(titleText)
//       article.appendChild(articleText)
//       author.appendChild(authorText)
//       catogary.appendChild(catogaryText)
//       main2Div.appendChild(title)
//       main2Div.appendChild(article)
//       main2Div.appendChild(author)
//       main2Div.appendChild(catogary)
//       mainDiv.appendChild(main2Div)
//   }
// })

// // const  a = function (apilink) {
// //   return new Promise((res,rej) => {
// //    let myReq1 = new XMLHttpRequest();
// //    myReq1.onload = function () {
// //      if (this.readyState == 4 && this.status == 200) {
// //        res(JSON.parse(this.responseText))
// //      } else {
// //        rej(Error("Not Found Api"))
// //      }
// //    }
// //    myReq1.open("GET" , apilink);
// //    myReq1.send();
// //   })
// // }
// // a("./article.json").then(
// //   (result) => {
// //     result.length = 3;
// //     console.log(result);
// //   }
// // )
// // let myReq = new XMLHttpRequest();
// // myReq.open("GET","/article.json");
// // myReq.send();
// // console.log(myReq);
// //   let mainDiv = document.createElement("div");
// //   mainDiv.id = "data";
// //   document.body.appendChild(mainDiv)
// // myReq.onreadystatechange = function () {
// //   if (this.readyState == 4 && this.status == 200) {
// //     let mainData = JSON.parse(this.responseText)
// //     for (let i = 0; i < mainData.length ;i++) {
// //       let main2Div = document.createElement("div");
// //       let title = document.createElement("h2")
// //       let article = document.createElement("p")
// //       let author = document.createElement("p")
// //       let catogary = document.createElement("p")
// //       let titleText = document.createTextNode(mainData[i].title)
// //       let articleText = document.createTextNode(mainData[i].body)
// //       let authorText = document.createTextNode(mainData[i].author)
// //       let catogaryText = document.createTextNode(mainData[i].category)
// //       title.appendChild(titleText)
// //       article.appendChild(articleText)
// //       author.appendChild(authorText)
// //       catogary.appendChild(catogaryText)
// //       main2Div.appendChild(title)
// //       main2Div.appendChild(article)
// //       main2Div.appendChild(author)
// //       main2Div.appendChild(catogary)
// //       mainDiv.appendChild(main2Div)
// //     }
// //         console.log(mainData);
// //   }
// // }

// for(let i = 0; i < 100; i++) {
// let myDiv = document.createElement("h1");
// let myText = document.createTextNode("حسبي الله")
// myDiv.appendChild(myText);
// document.body.appendChild(myDiv);
// }

