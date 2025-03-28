function anotherEventListener(typeOfEvent, callback) {
    var eventThatHappened = {
        eventType: "keypress",
        key: "p",
        durationOfKeyPress: 2
    }
    
    if (eventThatHappened.eventType === typeOfEvent) {
        callback(eventThatHappened);
    }
}

anotherEventListener("keydown", function(event) { console.log(event); });

document.addEventListener("keydown", function (event) {
    console.log(event);
})