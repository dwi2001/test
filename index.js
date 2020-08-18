//use path module
const path = require('path');
//use express module
const express = require('express');
//use hbs view engine
const hbs = require('hbs');
//use bodyParser middleware
const bodyParser = require('body-parser');
//use mysql database
const mysql = require('mysql');
const app = express();
 
//konfigurasi koneksi
const conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'test'
});
 
//connect ke database
conn.connect((err) =>{
  if(err) throw err;
  console.log('Mysql Connected...');
});
 
//set views file
app.set('views',path.join(__dirname,'views'));
//set view engine
app.set('view engine', 'hbs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
//set folder public sebagai static folder untuk static file
app.use('/assets',express.static(__dirname + '/public'));
 
//route untuk homepage
app.get('/',(req, res) => {
  let sql = "SELECT * FROM tb_task";
  let query = conn.query(sql, (err, results) => {
    if(err) throw err;
    res.render('task_view',{
      results: results
    });
  });
});
 
//route untuk insert data
app.post('/save',  (req, res) => {
  let data = {task: req.body.task, sub_task: req.body.sub_task, tanggal_buat: req.body.tanggal_buat, tanggal_edit: req.body.tanggal_edit, status: req.body.status};
  let sql = "INSERT INTO tb_task SET ?";
  let query = conn.query(sql, data,(err, results) => {
    if(err) throw err;
    res.redirect('/');
  });
});
 
//route untuk update data
app.post('/update',(req, res) => { 
  console.log(req)
  let sql = "UPDATE tb_task SET status= '"+req.body.status+"', tanggal_edit='"+ req.body.tanggal_edit +"' WHERE task_id = "+req.body.task_id;
  let query = conn.query(sql, (err, results) => {
    if(err) throw err;
    res.redirect('/');
  });
});
 
//route untuk delete data
app.post('/delete',(req, res) => { 
  let sql = "DELETE FROM tb_task WHERE task_id= "+req.body.task_id+"";
  let query = conn.query(sql, (err, results) => {
    if(err) throw err;
      res.redirect('/');
  });
});
 
//server listening
app.listen(4000, () => {
  console.log('Server is running at port 4000');
});