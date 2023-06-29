const app = require("./app");
const solveSudoku = require("./solve");



app.get('/api/data', (req, res) => {
  res.json({ message: 'API endpoint response' });
});

// Catch-all route handler to serve the React app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../app/build', 'index.html'));
});


app.post('/solve', (req, res) => {
    const grid = req.body.grid; // Assuming the grid is passed in the request body
    // Solve the Sudoku puzzle
    const solution = solveSudoku(grid);
    res.json({ solution });
  });


app.listen(process.env.PORT,()=>{
    console.log(`Server is runing on PORT:${process.env.PORT}`);
});