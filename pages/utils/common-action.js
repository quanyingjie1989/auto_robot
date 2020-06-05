import { Selector, t } from 'testcafe';


export default class commonAction {

  async strReplace (str) {
    var strReplace = str.replace(/(.{1})/g, "$1+");
    return strReplace;
  }


  async intRandom () {
    var Num = Math.floor(Math.random() * 9 + 1);
    return Num;
  }


  async strRandom (length) {
    var str = '';
    for (; str.length < length; str += Math.random().toString(36).substr(2));
    return str.substr(0, length);
  }

}