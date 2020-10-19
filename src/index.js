
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (matrix === undefined) return [];
  if ( matrix.length === 1 && matrix[0] === undefined) return matrix;
  let result = [];
  matrix.map( (item, index) => {
    if ( index % 2 !== 0){
      return result.push(...item.reverse()) 
    }

     return result.push(...item) 
  })

  return result;
}
