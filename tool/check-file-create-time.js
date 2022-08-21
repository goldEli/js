var fs = require("fs");
var path = require("path");
var exec = require("child_process").exec;
function readFileList(dir, filesList = []) {
  const files = fs.readdirSync(dir);
  files.forEach((item, index) => {
    var fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      readFileList(path.join(dir, item), filesList); //递归读取文件
    } else {
      if (fullPath.indexOf(".html") !== -1) {
        filesList.push(fullPath);
      }
    }
  });
  return filesList;
}
var filesList = [];
readFileList(__dirname, filesList);

for (let i = 0; i < filesList.length; ++i) {
  var stat = fs.statSync(filesList[i]);
  if (stat.ctime.valueOf() > new Date("2022-08-07 20:00:00").valueOf()) {
    console.log(filesList[i]);
  }
}
