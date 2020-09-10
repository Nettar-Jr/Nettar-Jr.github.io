const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

const { Question } = require('./schemas/question');
const { User } = require('./schemas/user');


mongoose.connect(
    'mongodb://localhost:27017/quiz-app',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
);

const db = mongoose.connection;

db.on('error', (error) => {
    console.error('Could not connect to mongo see error details below');
    console.error(error)
});

db.once('open', () => {
    console.log('We are connected to mongo');
});

const app = express();


app.use(express.static(path.resolve(__dirname,'..', 'public')));


app.use(express.json());

// app.get('/', (req, res) => {
//     res.sendFile(__dirname +'/public/index.html');
// });

//question api for get
app.get('/questions', (req, res) => {
    Question.find()
        .then(questions => {
            res.json(questions); 
        })
});

//question api for post
app.post('/questions', (req, res) => {
    const newQuestion = req.body;
    console.log(newQuestion);

    Question.create(newQuestion)
        .then(question => {
            res.json({
                success: true,
                message: 'Question created successfully',
                question
            })
        })
        .catch(error => {
            console.error(error);
            res.json({
                success: false,
                message: error.message,
                question: newQuestion
            })
        });
})


app.post('/login', (req, res) => {
    const checkUser = req.body;

    console.log('user to find>>>', checkUser);
    User.findOne(checkUser)
        .then((foundUser) => {
            console.log('found user>>>>>>>>>>>>>>>>>>>>>', foundUser)
            if (foundUser){
                res.json({
                    success: true,
                    message: 'Login successful',
                    user: foundUser
                });
            } else {
                    res.json({
                        success: false,
                        message: 'Wrong email or password',
                        user: foundUser
                    });
            }
        })
        .catch((error) => {
            res.json({
                success: false,
                message: 'Wrong email or password',
                user: foundUser
            });
        })
})

//user api for post 
app.post('/users', (req, res) => {
    const newUser = req.body;
    console.log(newUser);

    User.create(newUser)
    .then(user => {
        res.json({
            success: true,
            message: 'Account created!!!!',
            user
        })
    })
    .catch(error => {
        res.status(401).json({
            success: false,
            message: error.message,
            user: newUser
        })
    })
})

app.get('*', (_, res) => {
    res.send('404 Not found')
})

app.listen(3000, () => console.log('starting server at port 3000'));
