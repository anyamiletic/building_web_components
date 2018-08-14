module exampleMod {
  export function addNum(x: number): number{
    return x + 19;
  }
}

// you dont have to use the module keyword
// if the export keyword is used outside any block
// the ompiler will recognize the entire file as a module
// and name the module like the file name
// example:
export function addNum1(x: number): number {
  return x + 19;
} //the module would be set to modules (the file name)

// importing:
// import {feature_name} from module_name
export default function addnum2(x: number): number {
  return x;
}
// default functions are imported without {}

// to set aliases for features that arent default:
// import {feature_name as alias} from module_name
