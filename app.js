var http = require('http');
var formidable = require('formidable');
var fs = require('fs');

http.createServer(function (req, res) {
  if (req.url == '/fileupload') {
    var form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {

      let time = new Date().getTime();
      console.log(time);

      var oldpath = files.filetoupload.filepath;
      var newpath = 'C:/Users/CongTay/load/' + time +files.filetoupload. riginalFilename;
      fs.rename(oldpath, newpath, function (err) {
        if (err) throw err;
        res.write('Upload ok !');
        res.end();
      });
 });
  } else {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
    res.write('<input type="file" name="filetoupload"><br>');
    res.write('<input type="submit">');
    res.write('</form>');
    return res.end();
  }
}).listen(4000 ,()=>{
    console.log("Sever đang chạy !!!");
});