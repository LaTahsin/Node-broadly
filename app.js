// const log=require('./logger');
// const path=require('path');
// const pathobj=path.parse(__filename);
// log(pathobj);



// const os=require('os');
// console.log(`total memory: ${os.totalmem}`);
// console.log(`free memory: ${os.freemem}`);



// const fs=require('fs');
// console.log(fs.readdirSync('./'));

// fs.readdir('./',function(err,result){
//     console.log(err);
//     console.log(result);
// });



// const EventEmitter=require('events');
// const emitter=new EventEmitter();
// emitter.on('EventEmitted',function(arg){
//     console.log('emitted',arg);
// });
// emitter.emit('EventEmitted',{id:1,name:'labeba'});


// const http=require('http');

// const server=http.createServer((req,res)=>{

//     if(req.url === '/'){
//         res.write('Hello World');
//         res.end();
//     }

//     if(req.url === '/api/courses'){
//         res.write(JSON.stringify([1,2,3]));
//         res.end();
//     }

// });

// server.listen(3000);
// console.log('Listening on port 3000');

const _=require('underscore');
console.log(_.contains([1, 2, 3], 3));
