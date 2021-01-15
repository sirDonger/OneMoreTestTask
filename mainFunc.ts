import { Props } from "./interface";

const findFieldValue = ({ field, left, filteredField, up }: Props): Number => {
    let arrT: Array<number> = [];
    for (let row = 0; row < field.length; row++) {
      for (let col = 0; col < field[0].length; col++) {
        if (!field[row][col]) {
          continue;
        }
        left = col > 0 ? field[row][col - 1] : 0;
  
        up = row > 0 ? field[row - 1][col] : 0;
        if (!left && !up) {
          filteredField++;
          field[row][col] = filteredField;
        } else if (left && up && left !== up) {
          field[row][col] = left;
          arrT.push(up);
        } else if (left) {
          field[row][col] = left;
        } else if (up) {
          field[row][col] = up;
        }
      }
    }
    const result = filteredField - arrT.length;
    console.log(result);
    return result;
  };
  export default findFieldValue;

  