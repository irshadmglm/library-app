const transactionHelper = require("../helper/transactionHelper");

module.exports = {
    borrowForm:(req,res)=>{
        res.render('borrowBook');
    },
    borrow: (req, res) => {
        let { bookNumber, studentId } = req.body;
        bookNumber = parseInt(bookNumber,10);
        transactionHelper.borrow(bookNumber, studentId)
            .then((message) => {
                res.status(200).json({ message }); 
            })
            .catch((error) => {
                res.status(400).json({ error }); 
            });
    },
    
    returnBook:(req,res)=>{
        transactionHelper.returnBook(req.body.bookNumber).then((response)=>{
            res.status(200).json({ response }); 
        }).catch((error) => {
            res.status(400).json({ error }); 
        });
    },
    borrowedBooks:(req,res)=>{
        transactionHelper.borrowedBooks().then((borrowedBooks)=>{
            res.render('borrowedList',{borrowedBooks});
        })
    }
}