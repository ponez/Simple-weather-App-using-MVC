const Weather = (data) => {
    this.data = data
    this.error = []
}

Weather.prototype.validateUserInput = () => {
    if (this.data =='') this.error.push("Please Enter Something!")
}

module.exports = Weather
