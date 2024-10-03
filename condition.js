const myPromise = new Promise(function (resolve, reject) {
  const sucsess = "octa";

  if (sucsess === "Octa") {
    resolve();
  } else {
    reject();
  }
});

myPromise
  .then(function () {
    console.log("nama saya benar");
  })
  .catch(function () {
    console.log("nama saya salah");
  })
  .finally(function () {
    console.log("sistem promise itu telah selesai membaca variable nama");
  });