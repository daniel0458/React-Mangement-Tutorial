const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:true}));

/* app.get('/api/customers', (req, res)=> {
   res.send({message: 'Hello Express!'}); 
}); */
app.get('/api/customers', (req, res)=> {
   res.send([
      {
        'id': 1,
        'image': 'https://placeimg.com/64/64/1',
        'name': '홍길동',
        'birthday': '961222',
        'gender': '남자',
        'job': '대학생'
      },
      {
        'id': 2,
        'image': 'https://placeimg.com/64/64/2',
        'name': '김성현',
        'birthday': '940607',
        'gender': '남자',
        'job': '취준생'
      },
      {
        'id': 3,
        'image': 'https://placeimg.com/64/64/3',
        'name': '김의현',
        'birthday': '990111',
        'gender': '남자',
        'job': '구닌'
      }
    
    ]); 
});
app.get('/hi', function(req, res) {
   res.sendFile('app/hello.html'); 
});

app.listen(port, () => console.log(`Listening on port ${port}`));

