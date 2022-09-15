/* 
	&& -> false && true => false.
	Qualquer operação falsa ja retorna toda operacao falsa.
	Todas as expressoes devem ser verdadeiras
	*/
console.log("ALucard" && "tudo certo, pode mostrar o Dracula ->" && "Dracula");
console.log("ALucard" && "" && "Dracula");

/*
	falsy -> false, 0 , "",'', null / undefined, NaN
	*/
function falaOi() {
  return "OI";
}

let vaiExecutar;
//const vaiExecutar = "Nao é FALSY, entao vai falar OI";
console.log(vaiExecutar && falaOi());

/*
	|| -> true && false => retorna "valor verdadeiro". Precisa de apenas uma expressao verdadeira
	*/
console.log(0 || false || null || "valor alucard" || true);

const corUsuario = undefined;
//const corUsuario = "vermelho";
const corPadrao = corUsuario || "preto";

console.log(corPadrao);
