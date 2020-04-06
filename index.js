/* Your Code Here */

const createEmployeeRecord = (employeeData) => {
    return {firstName: employeeData[0],
        familyName: employeeData[1],
        title: employeeData[2],
        payPerHour: employeeData[3],
        timeInEvents: [],
        timeOutEvents: []
    }
}

const createEmployeeRecords = (employees) => employees.map(employee => createEmployeeRecord(employee))

const createTimeInEvent = function(dateTime){
    const [day, time] = dateTime.split(" ")
    this.timeInEvents.push({ type: "TimeIn", date: day, hour: parseInt(time) })
    return this
}


const createTimeOutEvent = function(dateTime){
    const [day, time] = dateTime.split(" ");
    this.timeOutEvents.push({type: "TimeOut", date: day, hour: parseInt(time)})
    return this
}

const hoursWorkedOnDate = function(date){
    const clockIn = this.timeInEvents.find(ins => ins.date === date)
    const clockOut = this.timeOutEvents.find(outs => outs.date === date)

    return (clockOut.hour - clockIn.hour) / 100
}

const wagesEarnedOnDate = function(date){
    return hoursWorkedOnDate.call(this, date) * this.payPerHour
}

const findEmployeeByFirstName = (employees, name) => {return employees.find(employee => employee.firstName === name)}

const calculatePayroll = (employees) => employees.map(employee => allWagesFor.call(employee)).reduce((memo, wage) => memo + wage)

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable

    // const wages = this.timeInEvents.map(timeIn => wagesEarnedOnDate.call(this, timeIn.date))

    // const total = wages.reduce((wage, memo) => memo + wage)
 
    // return total 

    // my solution also works here not sure why I can't use it but I haven't because the lab says not too.
}