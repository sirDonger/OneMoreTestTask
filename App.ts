import findFieldValue from "./mainFunc";

const field = [
    [0, 0, 0, 1, 1, 0, 0, 0],
    [0, 1, 0, 0, 1, 1, 1, 0],
    [0, 1, 1, 0, 0, 0, 1, 0],
    [0, 0, 0, 0, 0, 0, 1, 0],
    [1, 0, 1, 1, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 1, 0],
  ];

  let filteredField = 0;
  let left = 0;
  let up = 0;

  findFieldValue({ field, left, filteredField, up });