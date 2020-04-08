/* Your Code Here */

const createEmployeeRecord = (array) => {
    const answer = {
        firstName: array[0],
        familyName: array[1],
        title: array[2],
        payPerHour: array[3],
        timeInEvents: [],
        timeOutEvents: []
    }
    return answer
}

const createEmployeeRecords = (arrayOfArrays) => {
    const arr = arrayOfArrays.map(employee => createEmployeeRecord(employee))
    return arr
}

function createTimeInEvent(datestamp) {
    const date = datestamp.slice(0, 10)
    const hour = Number(datestamp.slice(11,15))
    const timeIn = {}
    timeIn.type = "TimeIn"
    timeIn.date = date
    timeIn.hour = hour
    // console.log(this)
    this.timeInEvents.push(timeIn)
    return this
}

function createTimeOutEvent(datestamp) {
    const date = datestamp.slice(0, 10)
    const hour = Number(datestamp.slice(11,15))
    const timeOut = {}
    timeOut.type = "TimeOut"
    timeOut.date = date
    timeOut.hour = hour
    this.timeOutEvents.push(timeOut)
    return this
}

function hoursWorkedOnDate(date) {
    const timeInEvent = this.timeInEvents.find(event => event.date === date)
    const timeOutEvent = this.timeOutEvents.find(event => event.date === date)
    const hoursWorked = (timeOutEvent.hour - timeInEvent.hour) / 100
    return hoursWorked
}

function wagesEarnedOnDate(date) {
    const hoursWorked = hoursWorkedOnDate.call(this, date)
    const pay = hoursWorked * this.payPerHour
    return pay
}

const findEmployeeByFirstName = (employeeRecords, firstName) => {
    const employee = employeeRecords.find(record => record.firstName === firstName)
    return employee
}

const calculatePayroll = (employeeRecords) => {
    const employeePay = employeeRecords.map(employee => allWagesFor.call(employee))
    const sumOfAllCompanyWages = employeePay.reduce( (acc, i) => {
        return acc + i
    })
    return sumOfAllCompanyWages
}





/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

let allWagesFor = function () {
    let eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    let payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}