//Quiz: Writing a For...of Loop (1-4)
/*
 * Programming Quiz: Writing a For...of Loop (1-4)
 */

const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
for (const day of days) {
  var upperDay = day.charAt(0).toUpperCase() + day.slice(1);
  console.log(upperDay);
}

// your code goes here
