/* Operadores de Comparação
> maior do que
< menor do que
>= maior ou igual a
<= menor ou igual a
== igual
!= diferente */

const a = 1;
const b = 2;

console.log(a < b);
console.log(a > b);
console.log(a <= b);
console.log(a >= b);
console.log(a == b);
console.log(a != b);

/* Operadores Lógicos
&& operador 'e'
|| operador 'ou'
! operador 'não' que reverte o valor
*/

console.log(a < b && a > b);
console.log(a < b && a != b);
console.log(a < b || a > b);
console.log(! (a == b));