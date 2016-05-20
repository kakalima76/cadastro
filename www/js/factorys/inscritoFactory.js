angular.module('starter.controller')
.factory('inscritoFactory', [function(){

var inscrito = {}

	var setInicial = function(inscricao, processo){
		inscrito.inscricao = inscricao;
		inscrito.processo = processo;
	}

	var setTitular = function(cpf, nome, identidade, expeditor){
		inscrito.cpf = cpf;
		inscrito.nome = nome;
		inscrito.identidade = identidade;
		inscrito.expeditor = expeditor;
	}

	var setSecundaria = function
	(
	telResidencial,
	telCelular,
	radio,
	email,
	cep,
	endereco,
	bairro,
	cidade,
	numero,
	complemento
	)
	{
		inscrito.telResidencial = telResidencial || '';
		inscrito.telCelular = telCelular || '';
		inscrito.radio = radio || '';
		inscrito.email = email || '';
		inscrito.cep = cep || '';
		inscrito.endereco = endereco || '';
		inscrito.bairro = bairro || '';
		inscrito.cidade = cidade || '';
		inscrito.numero = numero || '';
		inscrito.complemento = complemento || '';
	}

	var setProdutos = function(produto){
		inscrito.produto = produto;
	}

	var setAuxiliar = function(cpfPreposto, nomePreposto, identidadePreposto, expeditorPreposto){
		inscrito.cpfPreposto = cpfPreposto;
		inscrito.nomePreposto = nomePreposto;
		inscrito.identidadePreposto = identidadePreposto;
		inscrito.expeditorPreposto = expeditorPreposto;
	}

	var get = function(){
		return inscrito;
	}

	var reseta = function(){
		inscrito = {}
	}

	return {
		setInicial: setInicial,
		setTitular: setTitular,
		setSecundaria: setSecundaria,
		setProdutos: setProdutos,
		setAuxiliar: setAuxiliar,
		get: get,
		reseta: reseta
	}
		
	
}]);