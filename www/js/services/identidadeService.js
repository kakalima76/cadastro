angular.module('starter.controller')
.service('identidadeService',[function(){
	
	var orgaos =
	[
		{sigla: 'DETRAN',	orgao:	'Departamento de Trânsito'},
		{sigla: 'DIC',		orgao: 	'Diretoria de Identificação Civil'},
		{sigla: 'SSP',		orgao: 	'Secretária de Segurança Pública'},
		{sigla: 'PM',		orgao:  'Polícia Militar'},
		{sigla: 'PC',		orgao:	'Policia Civil'},
		{sigla: 'CNT',		orgao:	'Carteira Nacional de Habilitação'},
		{sigla: 'CTPS',		orgao:	'Carteira de Trabaho e Previdência Social'},
		{sigla: 'FGTS',		orgao:	'Fundo de Garantia do Tempo de Serviço'},
		{sigla: 'IML',		orgao:	'Instituto Médico-Legal'},
		{sigla: 'MTE',		orgao:	'Ministério do Trabalho e Emprego'},
		{sigla: 'POF',		orgao:	'Polícia Federal'},
		{sigla: 'SES',		orgao:	'Carteira de Estrangeiro'},
		{sigla: 'SJS',		orgao:	'Secretaria da Justiça e Segurança'},
		{sigla: 'SJTS',		orgao:	'Secretaria da Justiça do Trabalho e Segurança'},
		{sigla: 'IFP',		orgao: 	'Instituto Félix Pacheco'},
		{sigla: 'IPF',		orgao: 	'Instituto Pereira Faustino'},
		{sigla: 'MA',		orgao: 	'Ministério da Aeronáutica'},
		{sigla: 'MM',		orgao: 	'Ministério da Marinha'},
		{sigla: 'ME',		orgao: 	'Ministério do Exército'},
		{sigla: 'MT',		orgao: 	'Ministério do Trabalho'},
		{sigla: 'OAB',		orgao: 	'Ordem dos Advogados do Brasil'},
		{sigla: 'CREA',		orgao: 	'Conselho Regional de Engenharia e Arquitetura'},
		{sigla: 'CRM',		orgao: 	'Conselho Regional de Medicina'},
		{sigla: 'CRA',		orgao: 	'Conselho Regional de Administração'},
		{sigla: 'CBM',		orgao: 	'Corpo de Bombeiros Militar'},
		{sigla: 'CRO',		orgao: 	'Conselho Regional de Odontologia'},
		{sigla: 'CRF',		orgao: 	'Conselho Regional de Farmácia'},
		{sigla: 'OO',		orgao:	'Outros'}	
	]

	var get = function(){
		return orgaos;
	}

	return {
		get: get
	}


}])
