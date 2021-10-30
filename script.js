let dt = [{
        "title": "Work",
        "timeframes": {
            "daily": {
                "current": 5,
                "previous": 7
            },
            "weekly": {
                "current": 32,
                "previous": 36
            },
            "monthly": {
                "current": 103,
                "previous": 128
            }
        }
    },
    {
        "title": "Play",
        "timeframes": {
            "daily": {
                "current": 1,
                "previous": 2
            },
            "weekly": {
                "current": 10,
                "previous": 8
            },
            "monthly": {
                "current": 23,
                "previous": 29
            }
        }
    },
    {
        "title": "Study",
        "timeframes": {
            "daily": {
                "current": 0,
                "previous": 1
            },
            "weekly": {
                "current": 4,
                "previous": 7
            },
            "monthly": {
                "current": 13,
                "previous": 19
            }
        }
    },
    {
        "title": "Exercise",
        "timeframes": {
            "daily": {
                "current": 1,
                "previous": 1
            },
            "weekly": {
                "current": 4,
                "previous": 5
            },
            "monthly": {
                "current": 11,
                "previous": 18
            }
        }
    },
    {
        "title": "Social",
        "timeframes": {
            "daily": {
                "current": 1,
                "previous": 3
            },
            "weekly": {
                "current": 5,
                "previous": 10
            },
            "monthly": {
                "current": 21,
                "previous": 23
            }
        }
    },
    {
        "title": "Self Care",
        "timeframes": {
            "daily": {
                "current": 0,
                "previous": 1
            },
            "weekly": {
                "current": 2,
                "previous": 2
            },
            "monthly": {
                "current": 7,
                "previous": 11
            }
        }
    }
]


let dailyButton = document.getElementById("daily")
let weeklyButton = document.getElementById("weekly")
let monthlyButton = document.getElementById("monthly")
let currentData = document.querySelectorAll(".current")
let previousData = document.querySelectorAll(".previous")

let dtidentifiers = ["Work", "Play", "Study", "Exercise", "Social", "Self Care"]

dailyButton.onclick = function() {
    for (let i = 0; i < currentData.length; i++) {
        currentData[i].textContent = `${dt[i]["timeframes"]["daily"]["current"]}hrs`
        previousData[i].textContent = `Last Day - ${dt[i]["timeframes"]["daily"]["previous"]}hrs`
    }
}
weeklyButton.onclick = function() {
    for (let i = 0; i < currentData.length; i++) {
        currentData[i].textContent = `${dt[i]["timeframes"]["weekly"]["current"]}hrs`
        previousData[i].textContent = `Last Week - ${dt[i]["timeframes"]["weekly"]["previous"]}hrs`
    }
}
monthlyButton.onclick = function() {
    for (let i = 0; i < currentData.length; i++) {
        currentData[i].textContent = `${dt[i]["timeframes"]["monthly"]["current"]}hrs`
        previousData[i].textContent = `Last Month - ${dt[i]["timeframes"]["daily"]["previous"]}hrs`
    }
}