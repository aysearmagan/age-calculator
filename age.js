const newAge = () => {
  const birthday = document.querySelector("#birthday").value;
  const currentDate = new Date();
  const birthdayDate = new Date(birthday);
  let newAge = currentDate.getFullYear() - birthdayDate.getFullYear();

  if (newAge < 11) {
    document.querySelector("#result").innerHTML = "You are a young child";
  }
  if (newAge > 12 && newAge < 20) {
    document.querySelector("#result").innerHTML = "You are a teenager.";
  }
  if (newAge > 20 && newAge <= 30) {
    document.querySelector("#result").innerHTML = "You are young.";
  }
  if (newAge > 30 && newAge <= 40) {
    document.querySelector("#result").innerHTML = "You are in middle age.";
  }
  if (newAge > 40 && newAge <= 60) {
    document.querySelector("#result").innerHTML = "You are getting old.";
  }
  if (newAge > 60) {
    document.querySelector("#result").innerHTML = "You are an old person";
  }
};
document.querySelector("#btn").addEventListener("click", newAge);
