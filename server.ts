const  ExcelJS = require('exceljs');

const wb = new ExcelJS.Workbook();

const sheet = wb.addWorksheet('My Sheet');

const ws = wb.getWorksheet('My Sheet');


ws.addTable({
  name: 'MyTable',
  ref: 'A1',
  headerRow: true,
  totalsRow: true,
  style: {
    theme: 'TableStyleDark3',
    showRowStripes: true,
  },
  columns: [
    {name: 'Date', totalsRowLabel: 'Totals:', filterButton: true},
    {name: 'Amount', totalsRowFunction: 'sum', filterButton: false},
  ],
  rows: [
    [new Date('2019-07-20'), 70.10],
    [new Date('2019-07-21'), 70.60],
    [new Date('2019-07-22'), 70.10],
  ],
});


wb.xlsx.writeFile('exc.xlsx');