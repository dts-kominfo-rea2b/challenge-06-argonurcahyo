// TODO: import module bila dibutuhkan di sini
const fs = require('fs');

// ! JANGAN DIMODIFIKASI
let file1 = "./data1.json";
let file2 = "./data2.json";
let file3 = "./data3.json";

// ! JANGAN DIMODIFIKASI
let modifyFile1 = (val) => {
  file1 = val;
};
let modifyFile2 = (val) => {
  file2 = val;
};
let modifyFile3 = (val) => {
  file3 = val;
};

var resultArray = [];
// TODO: Kerjakan bacaData
// gunakan variabel file1, file2, dan file3
const bacaData = (fnCallback) => {
  fnCallback();
  console.log(read1(() => read2(() => read3())));
};

const read1 = (next) => {
  fs.readFile(file1, 'utf8', (err, data) => {
    if (err) {
      return console.log(`Error : ${err}`);
    }
    let d = JSON.parse(data).message;
    let s = d.split(" ")[1];
    
    resultArray.push(s);
    next();
  });
};

const read2 = (next) => {
  fs.readFile(file2, 'utf8', (err, data) => {
    if (err) {
      return console.log(`Error : ${err}`);
    }
    let d = JSON.parse(data)[0].message;
    let s = d.split(" ")[1];
    resultArray.push(s);
    next();
  });
}

const read3 = () => {
  fs.readFile(file3, 'utf8', (err, data) => {
    if (err) {
      return console.log(`Error : ${err}`);
    }
    let d = JSON.parse(data)[0].data.message;
    let s = d.split(" ")[1];
    resultArray.push(s);
  });
}

// ! JANGAN DIMODIFIKASI
module.exports = {
  modifyFile1,
  modifyFile2,
  modifyFile3,
  bacaData,
};