//LOOP WHILE É UM CICLO DE REPETIÇÃO QUE PODE SER PARADO ATRAVÉS DE UMA CONDIÇÃO
//O SETINTERVAL É UM CICLO DE REPETIÇÃO QUE EXECUTA UM CÓDIGO TEMPO EM TEMPOS (INTERVALO EM MILISEGUNDOS)
while(true){
  console.log('Oi!!!!')
//}
const intervalo = setInterval (function () {
  //DEFINO FUNÇÃO INTERVALO
  //LET N = (MATH.ROMDOM()* 60).toFixed(1)
  let n =Math.round(Math.ramdom()*60); // UM NÚMERO ALEATÓRIO ATÉ 60
  console.clear(); //LIMPO A TELA
  console.log('FPS: ${n}'); //imprimo o resultado
}, 1000) //1 segundo em milessegundos

  //clearInterval(intervalo) consigo parar
  