const mongoose = require('mongoose');
mongoose.connect(
    'mongodb+srv://reactnative18052020:Xuanthao@a@cluster0.kwuk0.mongodb.net/daiphucan?retryWrites=true&w=majority', 
    {useNewUrlParser: true, useUnifiedTopology: true}
);

const Word = mongoose.model('Word',{ 
    en : {type : String , require : true , trim : true , unique : true},
    vn : {type : String , require : true , trim : true},
    isMemorized : {type : Boolean , require : true , default : false}
});

module.exports = {Word}

// const kitty = new Cat({ name: 'Zildjian' });
// kitty.save().then(() => console.log('meow'));

//Select
// Word.find()
// .then(word => console.log(word))
// .catch(error => console.log(error.message))

// INSERT
// const word = new Word({en : 'One' , vn : 'Mot'})
// word.save()
// .then(newWord => console.log(newWord))
// .catch(error => console.log(error.message))

// UPDATE
// Word.findByIdAndUpdate(
//     '5eff1f069c006004920d2ed4' , 
//     {isMemorized : true} , 
//     {new : true}
// )
// .then(newWord => console.log(newWord))
// .catch(error => console.log(error.message))

//Delete
// Word.findByIdAndDelete('5eff1f069c006004920d2ed4')
// .then(word => console.log(word))
// .catch(error => console.log(error))

