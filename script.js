const secondHand = document.querySelector('.second-hand')

function setDate(){
    const now = new Date();
    const seconds = now.getSeconds();
    console.log(seconds)
    const secondsDegrees = ((seconds / 60 )* 360)
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
}
setInterval(setDate, 1000)

//#1 use function setDate pass SetDate into setInterval function 
//with time parameters 1000 = 1 second. 

//#2 Javascript date getSeconds() method returns the seconds in the 
//specified date according to local time. The value returned by 
//getSeconds() is an integer between 0 and 59.//

//