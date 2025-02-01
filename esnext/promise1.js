function speakAfterSeconds(seconds, word) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        resolve(word);
      } catch (error) {
        reject(error, word);
      }
    }, seconds * 1000);
  });
}

speakAfterSeconds(3, "Hello World")
  .then(word => word.concat("!!!"))
  .then(anotherWord => console.log(anotherWord))
  .catch(error => console.log("error >> ", error));
