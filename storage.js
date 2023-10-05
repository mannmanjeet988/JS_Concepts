// document.cookie = "firstName = Manjeet"
// document.cookie = "lastName = Maan"

// //console.log(document.cookie)

function setCookie(name, value, daysToLive) {
  var todaysDate = new Date();
  //console.log(todaysDate)
  var expiryDate = todaysDate.setDate(todaysDate.getDate() + daysToLive);
  document.cookie = `${name}=${value};${expiryDate};path=/;`;
}

// setCookie("saksham" , "singh", 20)
// setCookie("rahul" , "maan", 27)
// //console.log(document.cookie)

function deleteCookie(name) {
  document.cookie = `${name}=; expires=01 Jan 2020 00:00:00 UTC; path=/;`;
}

function getCookie(name) {
  const cookies = document.cookie.split(";");
  // cookies.forEach((cookie)=>{
  //    if( cookie.trim().startsWith(name+"=")){
  //         return cookie.substring(name.length+1,cookie.length)
  //    }
  // })
  //return ""
  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i].trim();
    if (cookie.startsWith(name + "=")) {
      return cookie.substring(name.length + 1, cookie.length);
    }
  }
}

setCookie("surbhi", "nirwania", 32);
// const ans = getCookie("surbhi")
// console.log(ans)

const submitBtn = document
  .getElementById("click-me-btn")
  .addEventListener("click", () => {
    let userName = document.getElementById("userName").value;

    setCookie("USERNAME", userName, 20);
    console.log(document.cookie);
  });

// window.addEventListener("load", function () {
//   const savedUserName = getCookie("USERNAME");
//   if (savedUserName) {
//     // document.getElementById("userName").textContent= `Hi there, ${savedUserName}!`
//     this.alert(`Hi there, ${savedUserName}!`);
//   }
// });

console.log(document.cookie);
deleteCookie("saksham");
console.log(document.cookie);
