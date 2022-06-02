const path = require('path')
const fs = require('fs')
const os = require('os')
const myPath = 'C:/Users/Rubel/Desktop/nodeservercoremodules/index.js'


// console.log(path.basename(myPath)) //এই পাথে কোন ফাইল আছে তা দিয়ে দিবে 
// console.log(path.dirname(myPath)) //কোন ডিরেক্টরি তে আমাদের ফাইল টা আছে সেটাই দিয়ে দিবে  
// console.log(path.extname(myPath)) //extrantion এর নাম দিয়ে দিবে 
// console.log(path.parse(myPath)) //প্রথমে আমরা পেয়ে যাচ্ছি রুট ফোল্ডার টা , তার পরে ডিরেক্টোরি এক্সটেনশন এবং ফাইল নেইম


// console.log(os.platform()) // কোন প্লাট ফর্মে আছি সেটা সো করবে 
// console.log(os.homedir()) //হোম ডিরেক্টরি সো করবে 
// console.log(os.freemem()) //আমার অপারেটিং সিস্টেমে মেমরি কতোটুকু ফ্রি আছে তা দেখাবে 
// console.log(os.cpus()) // আমার পিসি তে চার টা কোর আছে তা সো করবে 


// fs.writeFileSync('extrafilecreate.js','hello world')//নতুন একটা ফাইল বানিয়ে নেওয়ার নিওম 
// fs.writeFileSync('extrafilecreate.js','hello world')//যেহেতু ফাইলের নাম এক, তাই ভেলু চেঞ্জ হবে 
// fs.appendFileSync('extrafilecreate.js','hello world')//যেহেতু ফাইলের নাম এক, তাই ভেলু চেঞ্জ হবে 

// const data = fs.readFileSync('extrafilecreate.js')// সিংক্রোনাস অয়ে তে কাজ হচ্ছে 
// console.log(data) // কনসল আমাদের একটা বাফার দিবে , এইটা নোডে একটা ডাটা টাইপের মতো কল্পনা করা যায় 
// console.log(data.toString()) // বাফার কে স্ট্রিং য়ে কনভার্ট করে আমরা দেখতে পারলাম আমাদের অই ফাইলে কি কি আছে 

// fs.readFile('extrafilecreate.txt',(err,data)=>{
//     console.log(data.toString())
// })
// console.log('who i am ')

