const xl = require('excel4node');

const wb = new xl.Workbook();
const ws = wb.addWorksheet(1);

const datas = [
  {
    "name": "teste",
    "email": "test@gmail.com",
    "phone": "123-456"
  },
  {
    "name": "teste2",
    "email": "test2@gmail.com",
    "phone": "1412-456"
  },
  {
    "name": "teste2",
    "email": "test2@gmail.com",
    "phone": "12123-456"
  }
];

const headers = [
  "nome",
  "email",
  "phone"
]
let i = 1;
headers.forEach(line => {
  ws.cell(1, i++).string(line);
})

let rowIndex = 2;

datas.forEach(line => {
  let columIndex = 1;
  Object.keys(line).forEach(ColumnName => {
    ws.cell(rowIndex, columIndex++).string(line[ColumnName])
  })
  rowIndex++;
})

wb.write("arquivo.xlsx");