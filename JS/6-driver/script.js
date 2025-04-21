const hasLicence = true;
const isDrunk = false;
const age = 18;

const canDrive = (hasLicence && !isDrunk && age >= 18) ? 'Может':'Не может';
console.log(canDrive)