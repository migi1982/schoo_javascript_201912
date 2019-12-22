import moment from 'moment';

const myBirthday = moment('1982-12-23');
const today = moment();
const diff = today.diff(myBirthday, 'day');

console.log(`私が生まれて${diff}日が経ちました。`);