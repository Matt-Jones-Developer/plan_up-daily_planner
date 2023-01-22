// pseudo code

// colour coding

// how do we colour code each period, based on current hour?
// currentHour = 12
// if todoSlot < currentHour (addClass '.past')
// so 9, 10, and 11 should be past
// else if todoSlot > currentHour (addClass '.future')
// so 13,14,15,16 and 17 should be future
// else (its === currentHour) addClass '.present'
// so 12 only, is present 

// but how??

// tap into the data-index of each div ?
// if we can discover how to do that, 
// we can then compare the data-index for each div with the currentHour!

document.getElementById("todo").dataset["value"]

