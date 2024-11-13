//Here we adding an function in Number Object to Formate the amount
// eslint-disable-next-line
Number.prototype.NumberFormate = function () {
    return this.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}
