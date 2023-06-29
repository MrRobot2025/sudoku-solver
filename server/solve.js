function solveSudoku(grid) {
    const N = 9; // Size of the Sudoku grid
  
    // Helper function to check if a value is valid in a specific position
    function isValid(grid, row, col, num) {
      // Check if the value exists in the same row
      for (let i = 0; i < N; i++) {
        if (grid[row][i] === num) {
          return false;
        }
      }
  
      // Check if the value exists in the same column
      for (let i = 0; i < N; i++) {
        if (grid[i][col] === num) {
          return false;
        }
      }
  
      // Check if the value exists in the same 3x3 subgrid
      const startRow = Math.floor(row / 3) * 3;
      const startCol = Math.floor(col / 3) * 3;
      for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
          if (grid[startRow + i][startCol + j] === num) {
            return false;
          }
        }
      }
  
      return true; // The value is valid in the given position
    }
  
    // Helper function to solve the Sudoku puzzle using backtracking
    function solve(grid) {
      for (let row = 0; row < N; row++) {
        for (let col = 0; col < N; col++) {
          if (grid[row][col] === 0) {
            // Empty cell found, try different numbers
            for (let num = 1; num <= N; num++) {
              if (isValid(grid, row, col, num)) {
                grid[row][col] = num; // Assign the number to the cell
  
                // Recursively solve the Sudoku puzzle
                if (solve(grid)) {
                  return true; // Solution found
                }
  
                grid[row][col] = 0; // Undo the assignment
              }
            }
  
            return false; // No solution found
          }
        }
      }
  
      return true; // All cells are filled, solution found
    }
  
    // Create a deep copy of the grid to avoid modifying the original grid
    const copyGrid = JSON.parse(JSON.stringify(grid));
  
    // Solve the Sudoku puzzle using backtracking
    if (solve(copyGrid)) {
      return copyGrid; // Return the solved grid
    } else {
      return null; // No solution found
    }
  }

  module.exports = solveSudoku;
  