const bookHelper = require("../helper/bookHelper")

module.exports = {
    getBooks:(req,res)=>{
       bookHelper.getBooks().then((books)=>{
        res.render('books',{books})
       })
    },
    addBookForm:(req,res)=>{
        res.render('addBook');
    },
    addBook: (req, res) => {
        bookHelper.addBook(req.body)
            .then((response) => {
                if (response.success) {
                    res.status(200).json({ message: response.message, insertedId: response.insertedId });
                }
            })
            .catch((error) => {
                res.status(400).json({ error: error.error });
            });
    },
     
    updateBookForm:(req,res)=>{
        res.render('addBook');
    },
    updateBook:(req,res)=>{
        bookHelper.updateBook().then(()=>{
        
        })
    },
    deleteBook:(req,res)=>{
        bookHelper.deleteBook().then(()=>{
        
        })
    }
}