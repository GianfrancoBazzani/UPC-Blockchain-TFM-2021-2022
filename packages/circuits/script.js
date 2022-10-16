import { poseidon } from "circomlibjs";

const input1 = "1";
const input2 = "2";
const input3 = "3";

const hash = poseidon([input1,input2,input3]);

console.log(hash)