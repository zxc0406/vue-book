let http=require('http');
let fs=require('fs');
let url=require('url');

//获取轮播图接口
let sliders = require('./sliders.js');

http.createServer((req,res)=>{
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type,Content-Length,Authorization,Accept,X-Requested-With");
  res.setHeader("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
  res.setHeader("X-Powered-By",' 3.2.1');


  if(req.method=='OPTIONS') return res.end();
  let {pathname,query} = url.parse(req.url);


  if(pathname === '/sliders'){
    res.setHeader('Content-Type','application/json;charset=utf8');
    res.end(JSON.stringify(sliders));
  }
}).listen(3000);
/*http.createServer((req,res)=>{
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
  res.setHeader("Access-Control-Allow-Methods","*");
  res.setHeader("X-Powered-By",' 3.2.1')
  if(req.method=='OPTIONS') return res.end();


  let {pathname,query}=url.parse(req.url,true);//true把query转换成对象
  console.log({pathname,query})
  if(pathname=="/page"){
    let offset=parseInt(query.offset)||0;
    read(function(books){
      let result=books.slice(offset,offset+pageSize);
      let hasMore=true;
      if(books.length<=(offset+pageSize)){
        hasMore=false;
      }
      res.setHeader('Content-Type','application/json;charser=utf8');
      res.end(JSON.stringify({hasMore,books:result}));
    })
    return
  }
  if(pathname=='/sliders'){
    console.log('s')
    res.setHeader('Content-Type','application/json;charser=utf8')
    return res.end(JSON.stringify(sliders));
  }
  if(pathname=="/hot"){
    read(function(books){
      let hot=books.reverse().slice(0,4);
      res.setHeader('Content-Type','application/json;charser=utf8');
      res.end(JSON.stringify(hot))
    });
    return
  }
  if(pathname==="/book"){ //对书的增删改查'
    let id=parseInt(query.id);
    switch (req.method){
      case 'GET':
        if(!isNaN(id)){
          read(function(books){
            let book=books.find(item=>item.bookId===id);
            if(!book) book={};
            res.setHeader('Content-Type','application/json;charser=utf8');
            res.end(JSON.stringify(book));
          })
        }else{ //获取所有图书
          read(function(books){
            res.setHeader('Content-Type','application/json;charser=utf8');
            res.end(JSON.stringify(books.reverse()))
          })
        }
        break;
      case 'POST':
        let str='';
        req.on('data',chunk=>{
          str+=chunk;
        });
        req.on('end',()=>{
          let book=JSON.parse(str);
          read(function(books){
            book.bookId=books.length?books.length:1;
            books.push(book);
            write(books,function(){
              res.end(JSON.stringify(book))
            })
          })
        })
        break;
      case 'PUT':
        if(id){
          let str='';
          req.on('data',chunk=>{
            str+=chunk;
          })
          req.on('end',()=>{
            let book=JSON.parse(str);
            read(function(books){
              books=books.map(item=>{
                if(item.bookId===id){
                  return book;
                }
                return item;
              });
              write(books,function(){
                res.end(JSON.stringify(book))
              })
            })
          })
        }
        break;
      case 'DELETE':
        read(function(books){
          books=books.filter(item=>item.bookId!==id);
          write(books,function(){
            console.log(books);
            res.end(JSON.stringify([])); //删除返回空对象
          })
        })
        break;
    }
    return
  }

  fs.stat('.'+pathname,function(err,stats){
    if(err){
      res.statusCode=404;
      res.end('NOT FOUND');
    }else{
      if(stats.isDirectory()){
        let p=require('path').join('.'+pathname,'./index.html')
        fs.createReadStream(p).pipe(res);
      }else{
        fs.createReadStream('.'+pathname).pipe(res);
      }

    }
  });
}).listen(3000)*/
