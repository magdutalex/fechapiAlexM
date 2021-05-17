fetch("https://sharo-me.herokuapp.com/api/fruits", {
  headers: {
    Accept: "application/json, text/plain, */*",
    "Content-Type": "application/json;",
  },
  method: "get",
})
  .then((response) => response.json())
  .then((data) => {
    let i = 1;
    console.log(data);
    data.forEach((fruct) => {
      document.querySelector("#l" + i).innerHTML = fruct.name;
      i++;
      document.querySelector("#l" + i).innerHTML = fruct.color;
      i++;
      document.querySelector("#l" + i).innerHTML = fruct.weight;
      i++;
    });
  });

   fetch("https://sharo-me.herokuapp.com/api/getProducts", {
    headers: {
      Accept:"application/json, text/plain, */*",
      "Content-Type": "application/json",
    },
    method: "post",
    body: JSON.stringify({
      type: cars,
    }),
   }).then((response)) => response.json())
  })  
  