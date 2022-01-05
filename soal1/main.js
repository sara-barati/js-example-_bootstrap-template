function timeToEat(timeStr) {
    let timeArr = [7, 12, 19]
    let hour = timeStr.slice(0, timeStr.indexOf(":"))
    let minutes = timeStr.slice(timeStr.indexOf(":")+1, timeStr.indexOf(":")+3)
    hour = (timeStr.split(" "))[1][0] === "a" ? hour : +hour + 12
    let nextTime = timeArr.find(t => t >= hour)

    let resulte = []
    resulte.push(minutes ==0 ? nextTime - hour : (nextTime - 1) - hour)
    resulte.push(minutes == 0 ? 0 : 60 - minutes)
    return resulte
}

console.log(timeToEat("2:00 p.m."))
console.log(timeToEat("5:50 a.m."))