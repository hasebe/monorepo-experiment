import { multiply } from './calculate'

const TARGET_ROW = 2;
const TARGET_COLUMN = 2;

function copyDoubleValueToNextCell() {
    const sheet = SpreadsheetApp.getActiveSheet();
    const value = sheet.getRange(TARGET_ROW, TARGET_COLUMN).getValue();
    sheet.getRange(TARGET_ROW, TARGET_COLUMN + 1).setValue(multiply(value, 2));
};

(global as any).copyDoubleValueToNextCell = copyDoubleValueToNextCell;