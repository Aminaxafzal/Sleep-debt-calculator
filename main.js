/* 1. How many hours of sleep you get each night?

2. create a function that returns any given nights number hours of rest

3. create a function with 'day' as a parameter

4. use if/else statements to create conditions based on the day of the week

5. Get the total sleep hours that you actually slept

6. Get the ideal sleep hours that you prefer

7.Calculate the sleep debt, if any.


*/
const getSleepHours = day => {

    // if (day === 'monday') {
    //   return 8;
    // } 
    // else if (day === 'tuesday') {
    //   return 7;
    // } 
    // else if (day === 'wednesday') {
    //   return 6;
    // } 
    // else if (day === 'thursday') {
    //   return 5;
    // } 
    // else if (day === 'friday') {
    //   return 4;
    // } else if (day === 'saturday') {
    //   return 3;
    // } 
    // else if (day === 'sunday') {
    //   return 2;
    
    // }
  
    switch(day) {
      case 'monday' :
      return 8
      break;
  
      case 'tuesday' :
      return 8
      break;
  
      case 'wednesday' :
      return 8
      break;
  
      case 'thursday' :
      return 9
      break;
  
      case 'friday' :
      return 9
      break;
  
      case 'saturday' :
      return 9
      break;
  
      case 'sunday' :
      return 9
      break;
  
      default :
      return 'error'
      
    }
  };
  
  const getActualSleepHours = () => 
  getSleepHours('monday') +
  getSleepHours('tuesday') +
  getSleepHours('wednesday') +
  getSleepHours('thursday') +
  getSleepHours('friday') +
  getSleepHours('saturday') +
  getSleepHours('sunday') 
  
  
  
  const getIdealSleepHours = () => {
  let idealHours = 8;
  return idealHours * 7;
  };
  
  const calculateSleepDebt = () => {
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours()
  
  
  if (actualSleepHours === idealSleepHours) {
    console.log( 'you got some good sleep dude!')
  
  } else if (actualSleepHours > idealSleepHours) {
    console.log( 'You been sleeping about ' +(actualSleepHours - idealSleepHours ) + ' hours too much, bum.')
  } else if (actualSleepHours < idealSleepHours) {
    console.log('You got ' + (idealSleepHours - actualSleepHours) + ' hour(s) less sleep than you needed this week. Get some rest.');
  }
    
  }