class Solution {
  solve(matrix) {
    matrix = [
      [1, 3],
      [1, 0],
    ];

    if (!matrix) return 0;
    let MAX_I = matrix.length - 1;
    let MAX_J = matrix[0].length - 1;
    const _visit = (i, j) => {
      let sum = matrix[i][j];
      let bottom_sum = 0;
      let right_sum = 0;
      if (i < MAX_I) {
        bottom_sum = _visit(i + 1, j);
      }
      if (j < MAX_J) {
        right_sum = _visit(i, j + 1);
      }
      return sum + Math.max(bottom_sum, right_sum);
    };

    return _visit(0, 0, 0);
  }
}

let sol = new Solution();

console.log(sol.solve());
