let global = this;
function copyDoubleValueToNextCell() {
}
(()=>{var l=(e,t)=>e*t;var o=2,n=2;function u(){let e=SpreadsheetApp.getActiveSheet(),t=e.getRange(o,n).getValue();e.getRange(o+1,n).setValue(l(t,2))}global.copyDoubleValueToNextCell=u;})();
