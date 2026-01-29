window.onload = function () {
  fetch('./employees.json')
    .then(response => response.json())
    .then(employees => {
      const sortedEmployees = employees.sort((a, b) => a.age - b.age);
      console.log(sortedEmployees);
    })
    .catch(error => console.error(error));
};
