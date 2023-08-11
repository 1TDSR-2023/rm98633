const salarios = [1500, 2200, 1800, 2500, 1900, 2800, 2100, 1950, 2300, 3000];

const salariosComAumento = salarios.map(salario => {
  if (salario <= 2000) {
    return salario * 1.15; // Aumento de 15%
  } else {
    return salario * 1.1; // Aumento de 10%
  }
});

console.log(salariosComAumento);

const salariosAcima2500 = salariosComAumento.filter(salario => salario > 2500);

console.log(salariosAcima2500);

const somaSalariosAcima2500 = salariosAcima2500.reduce((acumulador, salario) => acumulador + salario, 0);

console.log(somaSalariosAcima2500);
