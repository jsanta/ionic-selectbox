/*jslint nomen: true */
/*global _ */
(function (angular) {
	'use strict';

	angular.module('app.services', [])

	/**
	* Cities and departments from Colombia.
	* Both values are threated as angular.value.
	* Cities are passed through a decorator to obtain a better json structure.
	* This is done only once.
	*/
		.value('geoDepartments', [{
			"departmentCode": "91",
			"departmentName": "Amazonas"
		}, {
			"departmentCode": "05",
			"departmentName": "Antioquia"
		}, {
			"departmentCode": "81",
			"departmentName": "Arauca"
		}, {
			"departmentCode": "88",
			"departmentName": "Archipiélago de San Andrés, Providencia y Santa Catalina"
		}, {
			"departmentCode": "08",
			"departmentName": "Atlántico"
		}, {
			"departmentCode": "11",
			"departmentName": "Bogotá D.C"
		}, {
			"departmentCode": "13",
			"departmentName": "Bolívar"
		}, {
			"departmentCode": "15",
			"departmentName": "Boyacá"
		}, {
			"departmentCode": "17",
			"departmentName": "Caldas"
		}, {
			"departmentCode": "18",
			"departmentName": "Caquetá"
		}, {
			"departmentCode": "85",
			"departmentName": "Casanare"
		}, {
			"departmentCode": "19",
			"departmentName": "Cauca"
		}, {
			"departmentCode": "20",
			"departmentName": "Cesar"
		}, {
			"departmentCode": "27",
			"departmentName": "Chocó"
		}, {
			"departmentCode": "23",
			"departmentName": "Córdoba"
		}, {
			"departmentCode": "25",
			"departmentName": "Cundinamarca"
		}, {
			"departmentCode": "94",
			"departmentName": "Guainía"
		}, {
			"departmentCode": "95",
			"departmentName": "Guaviare"
		}, {
			"departmentCode": "41",
			"departmentName": "Huila"
		}, {
			"departmentCode": "44",
			"departmentName": "La Guajira"
		}, {
			"departmentCode": "47",
			"departmentName": "Magdalena"
		}, {
			"departmentCode": "50",
			"departmentName": "Meta"
		}, {
			"departmentCode": "52",
			"departmentName": "Nariño"
		}, {
			"departmentCode": "54",
			"departmentName": "Norte de Santander"
		}, {
			"departmentCode": "86",
			"departmentName": "Putumayo"
		}, {
			"departmentCode": "63",
			"departmentName": "Quindio"
		}, {
			"departmentCode": "66",
			"departmentName": "Risaralda"
		}, {
			"departmentCode": "68",
			"departmentName": "Santander"
		}, {
			"departmentCode": "70",
			"departmentName": "Sucre"
		}, {
			"departmentCode": "73",
			"departmentName": "Tolima"
		}, {
			"departmentCode": "76",
			"departmentName": "Valle del Cauca"
		}, {
			"departmentCode": "97",
			"departmentName": "Vaupés"
		}, {
			"departmentCode": "99",
			"departmentName": "Vichada"
		}])

		.value('geoCities',
			{
				"11": {
					"deptName": "Bogotá D.C",
					"cities": [{
						"cityCode": "11001",
						"cityName": "BOGOTÁ, D.C."
					}]
				},
				"13": {
					"deptName": "Bolívar",
					"cities": [{
						"cityCode": "13006",
						"cityName": "ACHÍ"
					}, {
						"cityCode": "13030",
						"cityName": "ALTOS DEL ROSARIO"
					}, {
						"cityCode": "13042",
						"cityName": "ARENAL"
					}, {
						"cityCode": "13052",
						"cityName": "ARJONA"
					}, {
						"cityCode": "13062",
						"cityName": "ARROYOHONDO"
					}, {
						"cityCode": "13074",
						"cityName": "BARRANCO DE LOBA"
					}, {
						"cityCode": "13140",
						"cityName": "CALAMAR"
					}, {
						"cityCode": "13160",
						"cityName": "CANTAGALLO"
					}, {
						"cityCode": "13001",
						"cityName": "CARTAGENA DE INDIAS"
					}, {
						"cityCode": "13188",
						"cityName": "CICUCO"
					}, {
						"cityCode": "13222",
						"cityName": "CLEMENCIA"
					}, {
						"cityCode": "13212",
						"cityName": "CÓRDOBA"
					}, {
						"cityCode": "13244",
						"cityName": "EL CARMEN DE BOLÍVAR"
					}, {
						"cityCode": "13248",
						"cityName": "EL GUAMO"
					}, {
						"cityCode": "13268",
						"cityName": "EL PEÑÓN"
					}, {
						"cityCode": "13300",
						"cityName": "HATILLO DE LOBA"
					}, {
						"cityCode": "13430",
						"cityName": "MAGANGUÉ"
					}, {
						"cityCode": "13433",
						"cityName": "MAHATES"
					}, {
						"cityCode": "13440",
						"cityName": "MARGARITA"
					}, {
						"cityCode": "13442",
						"cityName": "MARÍA LA BAJA"
					}, {
						"cityCode": "13468",
						"cityName": "MOMPÓS"
					}, {
						"cityCode": "13458",
						"cityName": "MONTECRISTO"
					}, {
						"cityCode": "13473",
						"cityName": "MORALES"
					}, {
						"cityCode": "13490",
						"cityName": "NOROSÍ"
					}, {
						"cityCode": "13549",
						"cityName": "PINILLOS"
					}, {
						"cityCode": "13580",
						"cityName": "REGIDOR"
					}, {
						"cityCode": "13600",
						"cityName": "RÍO VIEJO"
					}, {
						"cityCode": "13620",
						"cityName": "SAN CRISTÓBAL"
					}, {
						"cityCode": "13647",
						"cityName": "SAN ESTANISLAO"
					}, {
						"cityCode": "13650",
						"cityName": "SAN FERNANDO"
					}, {
						"cityCode": "13654",
						"cityName": "SAN JACINTO"
					}, {
						"cityCode": "13655",
						"cityName": "SAN JACINTO DEL CAUCA"
					}, {
						"cityCode": "13657",
						"cityName": "SAN JUAN NEPOMUCENO"
					}, {
						"cityCode": "13667",
						"cityName": "SAN MARTÍN DE LOBA"
					}, {
						"cityCode": "13670",
						"cityName": "SAN PABLO"
					}, {
						"cityCode": "13673",
						"cityName": "SANTA CATALINA"
					}, {
						"cityCode": "13683",
						"cityName": "SANTA ROSA"
					}, {
						"cityCode": "13688",
						"cityName": "SANTA ROSA DEL SUR"
					}, {
						"cityCode": "13744",
						"cityName": "SIMITÍ"
					}, {
						"cityCode": "13760",
						"cityName": "SOPLAVIENTO"
					}, {
						"cityCode": "13780",
						"cityName": "TALAIGUA NUEVO"
					}, {
						"cityCode": "13810",
						"cityName": "TIQUISIO"
					}, {
						"cityCode": "13836",
						"cityName": "TURBACO"
					}, {
						"cityCode": "13838",
						"cityName": "TURBANÁ"
					}, {
						"cityCode": "13873",
						"cityName": "VILLANUEVA"
					}, {
						"cityCode": "13894",
						"cityName": "ZAMBRANO"
					}]
				},
				"15": {
					"deptName": "Boyacá",
					"cities": [{
						"cityCode": "15022",
						"cityName": "ALMEIDA"
					}, {
						"cityCode": "15047",
						"cityName": "AQUITANIA"
					}, {
						"cityCode": "15051",
						"cityName": "ARCABUCO"
					}, {
						"cityCode": "15087",
						"cityName": "BELÉN"
					}, {
						"cityCode": "15090",
						"cityName": "BERBEO"
					}, {
						"cityCode": "15092",
						"cityName": "BETÉITIVA"
					}, {
						"cityCode": "15097",
						"cityName": "BOAVITA"
					}, {
						"cityCode": "15104",
						"cityName": "BOYACÁ"
					}, {
						"cityCode": "15106",
						"cityName": "BRICEÑO"
					}, {
						"cityCode": "15109",
						"cityName": "BUENAVISTA"
					}, {
						"cityCode": "15114",
						"cityName": "BUSBANZÁ"
					}, {
						"cityCode": "15131",
						"cityName": "CALDAS"
					}, {
						"cityCode": "15135",
						"cityName": "CAMPOHERMOSO"
					}, {
						"cityCode": "15162",
						"cityName": "CERINZA"
					}, {
						"cityCode": "15172",
						"cityName": "CHINAVITA"
					}, {
						"cityCode": "15176",
						"cityName": "CHIQUINQUIRÁ"
					}, {
						"cityCode": "15232",
						"cityName": "CHÍQUIZA"
					}, {
						"cityCode": "15180",
						"cityName": "CHISCAS"
					}, {
						"cityCode": "15183",
						"cityName": "CHITA"
					}, {
						"cityCode": "15185",
						"cityName": "CHITARAQUE"
					}, {
						"cityCode": "15187",
						"cityName": "CHIVATÁ"
					}, {
						"cityCode": "15236",
						"cityName": "CHIVOR"
					}, {
						"cityCode": "15189",
						"cityName": "CIÉNEGA"
					}, {
						"cityCode": "15204",
						"cityName": "CÓMBITA"
					}, {
						"cityCode": "15212",
						"cityName": "COPER"
					}, {
						"cityCode": "15215",
						"cityName": "CORRALES"
					}, {
						"cityCode": "15218",
						"cityName": "COVARACHÍA"
					}, {
						"cityCode": "15223",
						"cityName": "CUBARÁ"
					}, {
						"cityCode": "15224",
						"cityName": "CUCAITA"
					}, {
						"cityCode": "15226",
						"cityName": "CUÍTIVA"
					}, {
						"cityCode": "15238",
						"cityName": "DUITAMA"
					}, {
						"cityCode": "15244",
						"cityName": "EL COCUY"
					}, {
						"cityCode": "15248",
						"cityName": "EL ESPINO"
					}, {
						"cityCode": "15272",
						"cityName": "FIRAVITOBA"
					}, {
						"cityCode": "15276",
						"cityName": "FLORESTA"
					}, {
						"cityCode": "15293",
						"cityName": "GACHANTIVÁ"
					}, {
						"cityCode": "15296",
						"cityName": "GÁMEZA"
					}, {
						"cityCode": "15299",
						"cityName": "GARAGOA"
					}, {
						"cityCode": "15317",
						"cityName": "GUACAMAYAS"
					}, {
						"cityCode": "15322",
						"cityName": "GUATEQUE"
					}, {
						"cityCode": "15325",
						"cityName": "GUAYATÁ"
					}, {
						"cityCode": "15332",
						"cityName": "GÜICÁN"
					}, {
						"cityCode": "15362",
						"cityName": "IZA"
					}, {
						"cityCode": "15367",
						"cityName": "JENESANO"
					}, {
						"cityCode": "15368",
						"cityName": "JERICÓ"
					}, {
						"cityCode": "15380",
						"cityName": "LA CAPILLA"
					}, {
						"cityCode": "15403",
						"cityName": "LA UVITA"
					}, {
						"cityCode": "15401",
						"cityName": "LA VICTORIA"
					}, {
						"cityCode": "15377",
						"cityName": "LABRANZAGRANDE"
					}, {
						"cityCode": "15425",
						"cityName": "MACANAL"
					}, {
						"cityCode": "15442",
						"cityName": "MARIPÍ"
					}, {
						"cityCode": "15455",
						"cityName": "MIRAFLORES"
					}, {
						"cityCode": "15464",
						"cityName": "MONGUA"
					}, {
						"cityCode": "15466",
						"cityName": "MONGUÍ"
					}, {
						"cityCode": "15469",
						"cityName": "MONIQUIRÁ"
					}, {
						"cityCode": "15476",
						"cityName": "MOTAVITA"
					}, {
						"cityCode": "15480",
						"cityName": "MUZO"
					}, {
						"cityCode": "15491",
						"cityName": "NOBSA"
					}, {
						"cityCode": "15494",
						"cityName": "NUEVO COLÓN"
					}, {
						"cityCode": "15500",
						"cityName": "OICATÁ"
					}, {
						"cityCode": "15507",
						"cityName": "OTANCHE"
					}, {
						"cityCode": "15511",
						"cityName": "PACHAVITA"
					}, {
						"cityCode": "15514",
						"cityName": "PÁEZ"
					}, {
						"cityCode": "15516",
						"cityName": "PAIPA"
					}, {
						"cityCode": "15518",
						"cityName": "PAJARITO"
					}, {
						"cityCode": "15522",
						"cityName": "PANQUEBA"
					}, {
						"cityCode": "15531",
						"cityName": "PAUNA"
					}, {
						"cityCode": "15533",
						"cityName": "PAYA"
					}, {
						"cityCode": "15537",
						"cityName": "PAZ DE RÍO"
					}, {
						"cityCode": "15542",
						"cityName": "PESCA"
					}, {
						"cityCode": "15550",
						"cityName": "PISBA"
					}, {
						"cityCode": "15572",
						"cityName": "PUERTO BOYACÁ"
					}, {
						"cityCode": "15580",
						"cityName": "QUÍPAMA"
					}, {
						"cityCode": "15599",
						"cityName": "RAMIRIQUÍ"
					}, {
						"cityCode": "15600",
						"cityName": "RÁQUIRA"
					}, {
						"cityCode": "15621",
						"cityName": "RONDÓN"
					}, {
						"cityCode": "15632",
						"cityName": "SABOYÁ"
					}, {
						"cityCode": "15638",
						"cityName": "SÁCHICA"
					}, {
						"cityCode": "15646",
						"cityName": "SAMACÁ"
					}, {
						"cityCode": "15660",
						"cityName": "SAN EDUARDO"
					}, {
						"cityCode": "15664",
						"cityName": "SAN JOSÉ DE PARE"
					}, {
						"cityCode": "15667",
						"cityName": "SAN LUIS DE GACENO"
					}, {
						"cityCode": "15673",
						"cityName": "SAN MATEO"
					}, {
						"cityCode": "15676",
						"cityName": "SAN MIGUEL DE SEMA"
					}, {
						"cityCode": "15681",
						"cityName": "SAN PABLO DE BORBUR"
					}, {
						"cityCode": "15690",
						"cityName": "SANTA MARÍA"
					}, {
						"cityCode": "15693",
						"cityName": "SANTA ROSA DE VITERBO"
					}, {
						"cityCode": "15696",
						"cityName": "SANTA SOFÍA"
					}, {
						"cityCode": "15686",
						"cityName": "SANTANA"
					}, {
						"cityCode": "15720",
						"cityName": "SATIVANORTE"
					}, {
						"cityCode": "15723",
						"cityName": "SATIVASUR"
					}, {
						"cityCode": "15740",
						"cityName": "SIACHOQUE"
					}, {
						"cityCode": "15753",
						"cityName": "SOATÁ"
					}, {
						"cityCode": "15757",
						"cityName": "SOCHA"
					}, {
						"cityCode": "15755",
						"cityName": "SOCOTÁ"
					}, {
						"cityCode": "15759",
						"cityName": "SOGAMOSO"
					}, {
						"cityCode": "15761",
						"cityName": "SOMONDOCO"
					}, {
						"cityCode": "15762",
						"cityName": "SORA"
					}, {
						"cityCode": "15764",
						"cityName": "SORACÁ"
					}, {
						"cityCode": "15763",
						"cityName": "SOTAQUIRÁ"
					}, {
						"cityCode": "15774",
						"cityName": "SUSACÓN"
					}, {
						"cityCode": "15776",
						"cityName": "SUTAMARCHÁN"
					}, {
						"cityCode": "15778",
						"cityName": "SUTATENZA"
					}, {
						"cityCode": "15790",
						"cityName": "TASCO"
					}, {
						"cityCode": "15798",
						"cityName": "TENZA"
					}, {
						"cityCode": "15804",
						"cityName": "TIBANÁ"
					}, {
						"cityCode": "15806",
						"cityName": "TIBASOSA"
					}, {
						"cityCode": "15808",
						"cityName": "TINJACÁ"
					}, {
						"cityCode": "15810",
						"cityName": "TIPACOQUE"
					}, {
						"cityCode": "15814",
						"cityName": "TOCA"
					}, {
						"cityCode": "15816",
						"cityName": "TOGÜÍ"
					}, {
						"cityCode": "15820",
						"cityName": "TÓPAGA"
					}, {
						"cityCode": "15822",
						"cityName": "TOTA"
					}, {
						"cityCode": "15001",
						"cityName": "TUNJA"
					}, {
						"cityCode": "15832",
						"cityName": "TUNUNGUÁ"
					}, {
						"cityCode": "15835",
						"cityName": "TURMEQUÉ"
					}, {
						"cityCode": "15837",
						"cityName": "TUTA"
					}, {
						"cityCode": "15839",
						"cityName": "TUTAZÁ"
					}, {
						"cityCode": "15842",
						"cityName": "ÚMBITA"
					}, {
						"cityCode": "15861",
						"cityName": "VENTAQUEMADA"
					}, {
						"cityCode": "15407",
						"cityName": "VILLA DE LEYVA"
					}, {
						"cityCode": "15879",
						"cityName": "VIRACACHÁ"
					}, {
						"cityCode": "15897",
						"cityName": "ZETAQUIRA"
					}]
				},
				"17": {
					"deptName": "Caldas",
					"cities": [{
						"cityCode": "17013",
						"cityName": "AGUADAS"
					}, {
						"cityCode": "17042",
						"cityName": "ANSERMA"
					}, {
						"cityCode": "17050",
						"cityName": "ARANZAZU"
					}, {
						"cityCode": "17088",
						"cityName": "BELALCÁZAR"
					}, {
						"cityCode": "17174",
						"cityName": "CHINCHINÁ"
					}, {
						"cityCode": "17272",
						"cityName": "FILADELFIA"
					}, {
						"cityCode": "17380",
						"cityName": "LA DORADA"
					}, {
						"cityCode": "17388",
						"cityName": "LA MERCED"
					}, {
						"cityCode": "17001",
						"cityName": "MANIZALES"
					}, {
						"cityCode": "17433",
						"cityName": "MANZANARES"
					}, {
						"cityCode": "17442",
						"cityName": "MARMATO"
					}, {
						"cityCode": "17444",
						"cityName": "MARQUETALIA"
					}, {
						"cityCode": "17446",
						"cityName": "MARULANDA"
					}, {
						"cityCode": "17486",
						"cityName": "NEIRA"
					}, {
						"cityCode": "17495",
						"cityName": "NORCASIA"
					}, {
						"cityCode": "17513",
						"cityName": "PÁCORA"
					}, {
						"cityCode": "17524",
						"cityName": "PALESTINA"
					}, {
						"cityCode": "17541",
						"cityName": "PENSILVANIA"
					}, {
						"cityCode": "17614",
						"cityName": "RIOSUCIO"
					}, {
						"cityCode": "17616",
						"cityName": "RISARALDA"
					}, {
						"cityCode": "17653",
						"cityName": "SALAMINA"
					}, {
						"cityCode": "17662",
						"cityName": "SAMANÁ"
					}, {
						"cityCode": "17665",
						"cityName": "SAN JOSÉ"
					}, {
						"cityCode": "17777",
						"cityName": "SUPÍA"
					}, {
						"cityCode": "17867",
						"cityName": "VICTORIA"
					}, {
						"cityCode": "17873",
						"cityName": "VILLAMARÍA"
					}, {
						"cityCode": "17877",
						"cityName": "VITERBO"
					}]
				},
				"18": {
					"deptName": "Caquetá",
					"cities": [{
						"cityCode": "18029",
						"cityName": "ALBANIA"
					}, {
						"cityCode": "18094",
						"cityName": "BELÉN DE LOS ANDAQUÍES"
					}, {
						"cityCode": "18150",
						"cityName": "CARTAGENA DEL CHAIRÁ"
					}, {
						"cityCode": "18205",
						"cityName": "CURILLO"
					}, {
						"cityCode": "18247",
						"cityName": "EL DONCELLO"
					}, {
						"cityCode": "18256",
						"cityName": "EL PAUJÍL"
					}, {
						"cityCode": "18001",
						"cityName": "FLORENCIA"
					}, {
						"cityCode": "18410",
						"cityName": "LA MONTAÑITA"
					}, {
						"cityCode": "18460",
						"cityName": "MILÁN"
					}, {
						"cityCode": "18479",
						"cityName": "MORELIA"
					}, {
						"cityCode": "18592",
						"cityName": "PUERTO RICO"
					}, {
						"cityCode": "18610",
						"cityName": "SAN JOSÉ DEL FRAGUA"
					}, {
						"cityCode": "18753",
						"cityName": "SAN VICENTE DEL CAGUÁN"
					}, {
						"cityCode": "18756",
						"cityName": "SOLANO"
					}, {
						"cityCode": "18785",
						"cityName": "SOLITA"
					}, {
						"cityCode": "18860",
						"cityName": "VALPARAÍSO"
					}]
				},
				"19": {
					"deptName": "Cauca",
					"cities": [{
						"cityCode": "19022",
						"cityName": "ALMAGUER"
					}, {
						"cityCode": "19050",
						"cityName": "ARGELIA"
					}, {
						"cityCode": "19075",
						"cityName": "BALBOA"
					}, {
						"cityCode": "19100",
						"cityName": "BOLÍVAR"
					}, {
						"cityCode": "19110",
						"cityName": "BUENOS AIRES"
					}, {
						"cityCode": "19130",
						"cityName": "CAJIBÍO"
					}, {
						"cityCode": "19137",
						"cityName": "CALDONO"
					}, {
						"cityCode": "19142",
						"cityName": "CALOTO"
					}, {
						"cityCode": "19212",
						"cityName": "CORINTO"
					}, {
						"cityCode": "19256",
						"cityName": "EL TAMBO"
					}, {
						"cityCode": "19290",
						"cityName": "FLORENCIA"
					}, {
						"cityCode": "19300",
						"cityName": "GUACHENÉ"
					}, {
						"cityCode": "19318",
						"cityName": "GUAPÍ"
					}, {
						"cityCode": "19355",
						"cityName": "INZÁ"
					}, {
						"cityCode": "19364",
						"cityName": "JAMBALÓ"
					}, {
						"cityCode": "19392",
						"cityName": "LA SIERRA"
					}, {
						"cityCode": "19397",
						"cityName": "LA VEGA"
					}, {
						"cityCode": "19418",
						"cityName": "LÓPEZ DE MICAY"
					}, {
						"cityCode": "19450",
						"cityName": "MERCADERES"
					}, {
						"cityCode": "19455",
						"cityName": "MIRANDA"
					}, {
						"cityCode": "19473",
						"cityName": "MORALES"
					}, {
						"cityCode": "19513",
						"cityName": "PADILLA"
					}, {
						"cityCode": "19517",
						"cityName": "PÁEZ"
					}, {
						"cityCode": "19532",
						"cityName": "PATÍA"
					}, {
						"cityCode": "19533",
						"cityName": "PIAMONTE"
					}, {
						"cityCode": "19548",
						"cityName": "PIENDAMÓ"
					}, {
						"cityCode": "19001",
						"cityName": "POPAYÁN"
					}, {
						"cityCode": "19573",
						"cityName": "PUERTO TEJADA"
					}, {
						"cityCode": "19585",
						"cityName": "PURACÉ"
					}, {
						"cityCode": "19622",
						"cityName": "ROSAS"
					}, {
						"cityCode": "19693",
						"cityName": "SAN SEBASTIÁN"
					}, {
						"cityCode": "19701",
						"cityName": "SANTA ROSA"
					}, {
						"cityCode": "19698",
						"cityName": "SANTANDER DE QUILICHAO"
					}, {
						"cityCode": "19743",
						"cityName": "SILVIA"
					}, {
						"cityCode": "19760",
						"cityName": "SOTARA"
					}, {
						"cityCode": "19780",
						"cityName": "SUÁREZ"
					}, {
						"cityCode": "19785",
						"cityName": "SUCRE"
					}, {
						"cityCode": "19807",
						"cityName": "TIMBÍO"
					}, {
						"cityCode": "19809",
						"cityName": "TIMBIQUÍ"
					}, {
						"cityCode": "19821",
						"cityName": "TORIBÍO"
					}, {
						"cityCode": "19824",
						"cityName": "TOTORÓ"
					}, {
						"cityCode": "19845",
						"cityName": "VILLA RICA"
					}]
				},
				"20": {
					"deptName": "Cesar",
					"cities": [{
						"cityCode": "20011",
						"cityName": "AGUACHICA"
					}, {
						"cityCode": "20013",
						"cityName": "AGUSTÍN CODAZZI"
					}, {
						"cityCode": "20032",
						"cityName": "ASTREA"
					}, {
						"cityCode": "20045",
						"cityName": "BECERRIL"
					}, {
						"cityCode": "20060",
						"cityName": "BOSCONIA"
					}, {
						"cityCode": "20175",
						"cityName": "CHIMICHAGUA"
					}, {
						"cityCode": "20178",
						"cityName": "CHIRIGUANÁ"
					}, {
						"cityCode": "20228",
						"cityName": "CURUMANÍ"
					}, {
						"cityCode": "20238",
						"cityName": "EL COPEY"
					}, {
						"cityCode": "20250",
						"cityName": "EL PASO"
					}, {
						"cityCode": "20295",
						"cityName": "GAMARRA"
					}, {
						"cityCode": "20310",
						"cityName": "GONZÁLEZ"
					}, {
						"cityCode": "20383",
						"cityName": "LA GLORIA"
					}, {
						"cityCode": "20400",
						"cityName": "LA JAGUA DE IBIRICO"
					}, {
						"cityCode": "20621",
						"cityName": "LA PAZ"
					}, {
						"cityCode": "20443",
						"cityName": "MANAURE"
					}, {
						"cityCode": "20517",
						"cityName": "PAILITAS"
					}, {
						"cityCode": "20550",
						"cityName": "PELAYA"
					}, {
						"cityCode": "20570",
						"cityName": "PUEBLO BELLO"
					}, {
						"cityCode": "20614",
						"cityName": "RÍO DE ORO"
					}, {
						"cityCode": "20710",
						"cityName": "SAN ALBERTO"
					}, {
						"cityCode": "20750",
						"cityName": "SAN DIEGO"
					}, {
						"cityCode": "20770",
						"cityName": "SAN MARTÍN"
					}, {
						"cityCode": "20787",
						"cityName": "TAMALAMEQUE"
					}, {
						"cityCode": "20001",
						"cityName": "VALLEDUPAR"
					}]
				},
				"23": {
					"deptName": "Córdoba",
					"cities": [{
						"cityCode": "23068",
						"cityName": "AYAPEL"
					}, {
						"cityCode": "23079",
						"cityName": "BUENAVISTA"
					}, {
						"cityCode": "23090",
						"cityName": "CANALETE"
					}, {
						"cityCode": "23162",
						"cityName": "CERETÉ"
					}, {
						"cityCode": "23168",
						"cityName": "CHIMÁ"
					}, {
						"cityCode": "23182",
						"cityName": "CHINÚ"
					}, {
						"cityCode": "23189",
						"cityName": "CIÉNAGA DE ORO"
					}, {
						"cityCode": "23300",
						"cityName": "COTORRA"
					}, {
						"cityCode": "23350",
						"cityName": "LA APARTADA"
					}, {
						"cityCode": "23417",
						"cityName": "LORICA"
					}, {
						"cityCode": "23419",
						"cityName": "LOS CÓRDOBAS"
					}, {
						"cityCode": "23464",
						"cityName": "MOMIL"
					}, {
						"cityCode": "23466",
						"cityName": "MONTELÍBANO"
					}, {
						"cityCode": "23001",
						"cityName": "MONTERÍA"
					}, {
						"cityCode": "23500",
						"cityName": "MOÑITOS"
					}, {
						"cityCode": "23555",
						"cityName": "PLANETA RICA"
					}, {
						"cityCode": "23570",
						"cityName": "PUEBLO NUEVO"
					}, {
						"cityCode": "23574",
						"cityName": "PUERTO ESCONDIDO"
					}, {
						"cityCode": "23580",
						"cityName": "PUERTO LIBERTADOR"
					}, {
						"cityCode": "23586",
						"cityName": "PURÍSIMA DE LA CONCEPCIÓN"
					}, {
						"cityCode": "23660",
						"cityName": "SAHAGÚN"
					}, {
						"cityCode": "23670",
						"cityName": "SAN ANDRÉS DE SOTAVENTO"
					}, {
						"cityCode": "23672",
						"cityName": "SAN ANTERO"
					}, {
						"cityCode": "23675",
						"cityName": "SAN BERNARDO DEL VIENTO"
					}, {
						"cityCode": "23678",
						"cityName": "SAN CARLOS"
					}, {
						"cityCode": "23682",
						"cityName": "SAN JOSÉ DE URÉ"
					}, {
						"cityCode": "23686",
						"cityName": "SAN PELAYO"
					}, {
						"cityCode": "23807",
						"cityName": "TIERRALTA"
					}, {
						"cityCode": "23815",
						"cityName": "TUCHÍN"
					}, {
						"cityCode": "23855",
						"cityName": "VALENCIA"
					}]
				},
				"25": {
					"deptName": "Cundinamarca",
					"cities": [{
						"cityCode": "25001",
						"cityName": "AGUA DE DIOS"
					}, {
						"cityCode": "25019",
						"cityName": "ALBÁN"
					}, {
						"cityCode": "25035",
						"cityName": "ANAPOIMA"
					}, {
						"cityCode": "25040",
						"cityName": "ANOLAIMA"
					}, {
						"cityCode": "25599",
						"cityName": "APULO"
					}, {
						"cityCode": "25053",
						"cityName": "ARBELÁEZ"
					}, {
						"cityCode": "25086",
						"cityName": "BELTRÁN"
					}, {
						"cityCode": "25095",
						"cityName": "BITUIMA"
					}, {
						"cityCode": "25099",
						"cityName": "BOJACÁ"
					}, {
						"cityCode": "25120",
						"cityName": "CABRERA"
					}, {
						"cityCode": "25123",
						"cityName": "CACHIPAY"
					}, {
						"cityCode": "25126",
						"cityName": "CAJICÁ"
					}, {
						"cityCode": "25148",
						"cityName": "CAPARRAPÍ"
					}, {
						"cityCode": "25151",
						"cityName": "CÁQUEZA"
					}, {
						"cityCode": "25154",
						"cityName": "CARMEN DE CARUPA"
					}, {
						"cityCode": "25168",
						"cityName": "CHAGUANÍ"
					}, {
						"cityCode": "25175",
						"cityName": "CHÍA"
					}, {
						"cityCode": "25178",
						"cityName": "CHIPAQUE"
					}, {
						"cityCode": "25181",
						"cityName": "CHOACHÍ"
					}, {
						"cityCode": "25183",
						"cityName": "CHOCONTÁ"
					}, {
						"cityCode": "25200",
						"cityName": "COGUA"
					}, {
						"cityCode": "25214",
						"cityName": "COTA"
					}, {
						"cityCode": "25224",
						"cityName": "CUCUNUBÁ"
					}, {
						"cityCode": "25245",
						"cityName": "EL COLEGIO"
					}, {
						"cityCode": "25258",
						"cityName": "EL PEÑÓN"
					}, {
						"cityCode": "25260",
						"cityName": "EL ROSAL"
					}, {
						"cityCode": "25269",
						"cityName": "FACATATIVÁ"
					}, {
						"cityCode": "25279",
						"cityName": "FÓMEQUE"
					}, {
						"cityCode": "25281",
						"cityName": "FOSCA"
					}, {
						"cityCode": "25286",
						"cityName": "FUNZA"
					}, {
						"cityCode": "25288",
						"cityName": "FÚQUENE"
					}, {
						"cityCode": "25290",
						"cityName": "FUSAGASUGÁ"
					}, {
						"cityCode": "25293",
						"cityName": "GACHALÁ"
					}, {
						"cityCode": "25295",
						"cityName": "GACHANCIPÁ"
					}, {
						"cityCode": "25297",
						"cityName": "GACHETÁ"
					}, {
						"cityCode": "25299",
						"cityName": "GAMA"
					}, {
						"cityCode": "25307",
						"cityName": "GIRARDOT"
					}, {
						"cityCode": "25312",
						"cityName": "GRANADA"
					}, {
						"cityCode": "25317",
						"cityName": "GUACHETÁ"
					}, {
						"cityCode": "25320",
						"cityName": "GUADUAS"
					}, {
						"cityCode": "25322",
						"cityName": "GUASCA"
					}, {
						"cityCode": "25324",
						"cityName": "GUATAQUÍ"
					}, {
						"cityCode": "25326",
						"cityName": "GUATAVITA"
					}, {
						"cityCode": "25328",
						"cityName": "GUAYABAL DE SÍQUIMA"
					}, {
						"cityCode": "25335",
						"cityName": "GUAYABETAL"
					}, {
						"cityCode": "25339",
						"cityName": "GUTIÉRREZ"
					}, {
						"cityCode": "25368",
						"cityName": "JERUSALÉN"
					}, {
						"cityCode": "25372",
						"cityName": "JUNÍN"
					}, {
						"cityCode": "25377",
						"cityName": "LA CALERA"
					}, {
						"cityCode": "25386",
						"cityName": "LA MESA"
					}, {
						"cityCode": "25394",
						"cityName": "LA PALMA"
					}, {
						"cityCode": "25398",
						"cityName": "LA PEÑA"
					}, {
						"cityCode": "25402",
						"cityName": "LA VEGA"
					}, {
						"cityCode": "25407",
						"cityName": "LENGUAZAQUE"
					}, {
						"cityCode": "25426",
						"cityName": "MACHETÁ"
					}, {
						"cityCode": "25430",
						"cityName": "MADRID"
					}, {
						"cityCode": "25436",
						"cityName": "MANTA"
					}, {
						"cityCode": "25438",
						"cityName": "MEDINA"
					}, {
						"cityCode": "25473",
						"cityName": "MOSQUERA"
					}, {
						"cityCode": "25483",
						"cityName": "NARIÑO"
					}, {
						"cityCode": "25486",
						"cityName": "NEMOCÓN"
					}, {
						"cityCode": "25488",
						"cityName": "NILO"
					}, {
						"cityCode": "25489",
						"cityName": "NIMAIMA"
					}, {
						"cityCode": "25491",
						"cityName": "NOCAIMA"
					}, {
						"cityCode": "25513",
						"cityName": "PACHO"
					}, {
						"cityCode": "25518",
						"cityName": "PAIME"
					}, {
						"cityCode": "25524",
						"cityName": "PANDI"
					}, {
						"cityCode": "25530",
						"cityName": "PARATEBUENO"
					}, {
						"cityCode": "25535",
						"cityName": "PASCA"
					}, {
						"cityCode": "25572",
						"cityName": "PUERTO SALGAR"
					}, {
						"cityCode": "25580",
						"cityName": "PULÍ"
					}, {
						"cityCode": "25592",
						"cityName": "QUEBRADANEGRA"
					}, {
						"cityCode": "25594",
						"cityName": "QUETAME"
					}, {
						"cityCode": "25596",
						"cityName": "QUIPILE"
					}, {
						"cityCode": "25612",
						"cityName": "RICAURTE"
					}, {
						"cityCode": "25645",
						"cityName": "SAN ANTONIO DEL TEQUENDAMA"
					}, {
						"cityCode": "25649",
						"cityName": "SAN BERNARDO"
					}, {
						"cityCode": "25653",
						"cityName": "SAN CAYETANO"
					}, {
						"cityCode": "25658",
						"cityName": "SAN FRANCISCO"
					}, {
						"cityCode": "25662",
						"cityName": "SAN JUAN DE RIOSECO"
					}, {
						"cityCode": "25718",
						"cityName": "SASAIMA"
					}, {
						"cityCode": "25736",
						"cityName": "SESQUILÉ"
					}, {
						"cityCode": "25740",
						"cityName": "SIBATÉ"
					}, {
						"cityCode": "25743",
						"cityName": "SILVANIA"
					}, {
						"cityCode": "25745",
						"cityName": "SIMIJACA"
					}, {
						"cityCode": "25754",
						"cityName": "SOACHA"
					}, {
						"cityCode": "25758",
						"cityName": "SOPÓ"
					}, {
						"cityCode": "25769",
						"cityName": "SUBACHOQUE"
					}, {
						"cityCode": "25772",
						"cityName": "SUESCA"
					}, {
						"cityCode": "25777",
						"cityName": "SUPATÁ"
					}, {
						"cityCode": "25779",
						"cityName": "SUSA"
					}, {
						"cityCode": "25781",
						"cityName": "SUTATAUSA"
					}, {
						"cityCode": "25785",
						"cityName": "TABIO"
					}, {
						"cityCode": "25793",
						"cityName": "TAUSA"
					}, {
						"cityCode": "25797",
						"cityName": "TENA"
					}, {
						"cityCode": "25799",
						"cityName": "TENJO"
					}, {
						"cityCode": "25805",
						"cityName": "TIBACUY"
					}, {
						"cityCode": "25807",
						"cityName": "TIBIRITA"
					}, {
						"cityCode": "25815",
						"cityName": "TOCAIMA"
					}, {
						"cityCode": "25817",
						"cityName": "TOCANCIPÁ"
					}, {
						"cityCode": "25823",
						"cityName": "TOPAIPÍ"
					}, {
						"cityCode": "25839",
						"cityName": "UBALÁ"
					}, {
						"cityCode": "25841",
						"cityName": "UBAQUE"
					}, {
						"cityCode": "25845",
						"cityName": "UNE"
					}, {
						"cityCode": "25851",
						"cityName": "ÚTICA"
					}, {
						"cityCode": "25506",
						"cityName": "VENECIA"
					}, {
						"cityCode": "25862",
						"cityName": "VERGARA"
					}, {
						"cityCode": "25867",
						"cityName": "VIANÍ"
					}, {
						"cityCode": "25843",
						"cityName": "VILLA DE SAN DIEGO DE UBATÉ"
					}, {
						"cityCode": "25871",
						"cityName": "VILLAGÓMEZ"
					}, {
						"cityCode": "25873",
						"cityName": "VILLAPINZÓN"
					}, {
						"cityCode": "25875",
						"cityName": "VILLETA"
					}, {
						"cityCode": "25878",
						"cityName": "VIOTÁ"
					}, {
						"cityCode": "25885",
						"cityName": "YACOPÍ"
					}, {
						"cityCode": "25898",
						"cityName": "ZIPACÓN"
					}, {
						"cityCode": "25899",
						"cityName": "ZIPAQUIRÁ"
					}]
				},
				"27": {
					"deptName": "Chocó",
					"cities": [{
						"cityCode": "27006",
						"cityName": "ACANDÍ"
					}, {
						"cityCode": "27025",
						"cityName": "ALTO BAUDÓ"
					}, {
						"cityCode": "27050",
						"cityName": "ATRATO"
					}, {
						"cityCode": "27073",
						"cityName": "BAGADÓ"
					}, {
						"cityCode": "27075",
						"cityName": "BAHÍA SOLANO"
					}, {
						"cityCode": "27077",
						"cityName": "BAJO BAUDÓ"
					}, {
						"cityCode": "27099",
						"cityName": "BOJAYÁ"
					}, {
						"cityCode": "27150",
						"cityName": "CARMEN DEL DARIÉN"
					}, {
						"cityCode": "27160",
						"cityName": "CÉRTEGUI"
					}, {
						"cityCode": "27205",
						"cityName": "CONDOTO"
					}, {
						"cityCode": "27135",
						"cityName": "EL CANTÓN DEL SAN PABLO"
					}, {
						"cityCode": "27245",
						"cityName": "EL CARMEN DE ATRATO"
					}, {
						"cityCode": "27250",
						"cityName": "EL LITORAL DEL SAN JUAN"
					}, {
						"cityCode": "27361",
						"cityName": "ISTMINA"
					}, {
						"cityCode": "27372",
						"cityName": "JURADÓ"
					}, {
						"cityCode": "27413",
						"cityName": "LLORÓ"
					}, {
						"cityCode": "27425",
						"cityName": "MEDIO ATRATO"
					}, {
						"cityCode": "27430",
						"cityName": "MEDIO BAUDÓ"
					}, {
						"cityCode": "27450",
						"cityName": "MEDIO SAN JUAN"
					}, {
						"cityCode": "27491",
						"cityName": "NÓVITA"
					}, {
						"cityCode": "27495",
						"cityName": "NUQUÍ"
					}, {
						"cityCode": "27001",
						"cityName": "QUIBDÓ"
					}, {
						"cityCode": "27580",
						"cityName": "RÍO IRÓ"
					}, {
						"cityCode": "27600",
						"cityName": "RÍO QUITO"
					}, {
						"cityCode": "27615",
						"cityName": "RIOSUCIO"
					}, {
						"cityCode": "27660",
						"cityName": "SAN JOSÉ DEL PALMAR"
					}, {
						"cityCode": "27745",
						"cityName": "SIPÍ"
					}, {
						"cityCode": "27787",
						"cityName": "TADÓ"
					}, {
						"cityCode": "27800",
						"cityName": "UNGUÍA"
					}, {
						"cityCode": "27810",
						"cityName": "UNIÓN PANAMERICANA"
					}]
				},
				"41": {
					"deptName": "Huila",
					"cities": [{
						"cityCode": "41006",
						"cityName": "ACEVEDO"
					}, {
						"cityCode": "41013",
						"cityName": "AGRADO"
					}, {
						"cityCode": "41016",
						"cityName": "AIPE"
					}, {
						"cityCode": "41020",
						"cityName": "ALGECIRAS"
					}, {
						"cityCode": "41026",
						"cityName": "ALTAMIRA"
					}, {
						"cityCode": "41078",
						"cityName": "BARAYA"
					}, {
						"cityCode": "41132",
						"cityName": "CAMPOALEGRE"
					}, {
						"cityCode": "41206",
						"cityName": "COLOMBIA"
					}, {
						"cityCode": "41244",
						"cityName": "ELÍAS"
					}, {
						"cityCode": "41298",
						"cityName": "GARZÓN"
					}, {
						"cityCode": "41306",
						"cityName": "GIGANTE"
					}, {
						"cityCode": "41319",
						"cityName": "GUADALUPE"
					}, {
						"cityCode": "41349",
						"cityName": "HOBO"
					}, {
						"cityCode": "41357",
						"cityName": "ÍQUIRA"
					}, {
						"cityCode": "41359",
						"cityName": "ISNOS"
					}, {
						"cityCode": "41378",
						"cityName": "LA ARGENTINA"
					}, {
						"cityCode": "41396",
						"cityName": "LA PLATA"
					}, {
						"cityCode": "41483",
						"cityName": "NÁTAGA"
					}, {
						"cityCode": "41001",
						"cityName": "NEIVA"
					}, {
						"cityCode": "41503",
						"cityName": "OPORAPA"
					}, {
						"cityCode": "41518",
						"cityName": "PAICOL"
					}, {
						"cityCode": "41524",
						"cityName": "PALERMO"
					}, {
						"cityCode": "41530",
						"cityName": "PALESTINA"
					}, {
						"cityCode": "41548",
						"cityName": "PITAL"
					}, {
						"cityCode": "41551",
						"cityName": "PITALITO"
					}, {
						"cityCode": "41615",
						"cityName": "RIVERA"
					}, {
						"cityCode": "41660",
						"cityName": "SALADOBLANCO"
					}, {
						"cityCode": "41668",
						"cityName": "SAN AGUSTÍN"
					}, {
						"cityCode": "41676",
						"cityName": "SANTA MARÍA"
					}, {
						"cityCode": "41770",
						"cityName": "SUAZA"
					}, {
						"cityCode": "41791",
						"cityName": "TARQUI"
					}, {
						"cityCode": "41799",
						"cityName": "TELLO"
					}, {
						"cityCode": "41801",
						"cityName": "TERUEL"
					}, {
						"cityCode": "41797",
						"cityName": "TESALIA"
					}, {
						"cityCode": "41807",
						"cityName": "TIMANÁ"
					}, {
						"cityCode": "41872",
						"cityName": "VILLAVIEJA"
					}, {
						"cityCode": "41885",
						"cityName": "YAGUARÁ"
					}]
				},
				"44": {
					"deptName": "La Guajira",
					"cities": [{
						"cityCode": "44035",
						"cityName": "ALBANIA"
					}, {
						"cityCode": "44078",
						"cityName": "BARRANCAS"
					}, {
						"cityCode": "44090",
						"cityName": "DIBULLA"
					}, {
						"cityCode": "44098",
						"cityName": "DISTRACCIÓN"
					}, {
						"cityCode": "44110",
						"cityName": "EL MOLINO"
					}, {
						"cityCode": "44279",
						"cityName": "FONSECA"
					}, {
						"cityCode": "44378",
						"cityName": "HATONUEVO"
					}, {
						"cityCode": "44420",
						"cityName": "LA JAGUA DEL PILAR"
					}, {
						"cityCode": "44430",
						"cityName": "MAICAO"
					}, {
						"cityCode": "44560",
						"cityName": "MANAURE"
					}, {
						"cityCode": "44001",
						"cityName": "RIOHACHA"
					}, {
						"cityCode": "44650",
						"cityName": "SAN JUAN DEL CESAR"
					}, {
						"cityCode": "44847",
						"cityName": "URIBIA"
					}, {
						"cityCode": "44855",
						"cityName": "URUMITA"
					}, {
						"cityCode": "44874",
						"cityName": "VILLANUEVA"
					}]
				},
				"47": {
					"deptName": "Magdalena",
					"cities": [{
						"cityCode": "47030",
						"cityName": "ALGARROBO"
					}, {
						"cityCode": "47053",
						"cityName": "ARACATACA"
					}, {
						"cityCode": "47058",
						"cityName": "ARIGUANÍ"
					}, {
						"cityCode": "47161",
						"cityName": "CERRO DE SAN ANTONIO"
					}, {
						"cityCode": "47170",
						"cityName": "CHIVOLO"
					}, {
						"cityCode": "47189",
						"cityName": "CIÉNAGA"
					}, {
						"cityCode": "47205",
						"cityName": "CONCORDIA"
					}, {
						"cityCode": "47245",
						"cityName": "EL BANCO"
					}, {
						"cityCode": "47258",
						"cityName": "EL PIÑÓN"
					}, {
						"cityCode": "47268",
						"cityName": "EL RETÉN"
					}, {
						"cityCode": "47288",
						"cityName": "FUNDACIÓN"
					}, {
						"cityCode": "47318",
						"cityName": "GUAMAL"
					}, {
						"cityCode": "47460",
						"cityName": "NUEVA GRANADA"
					}, {
						"cityCode": "47541",
						"cityName": "PEDRAZA"
					}, {
						"cityCode": "47545",
						"cityName": "PIJIÑO DEL CARMEN"
					}, {
						"cityCode": "47551",
						"cityName": "PIVIJAY"
					}, {
						"cityCode": "47555",
						"cityName": "PLATO"
					}, {
						"cityCode": "47570",
						"cityName": "PUEBLOVIEJO"
					}, {
						"cityCode": "47605",
						"cityName": "REMOLINO"
					}, {
						"cityCode": "47660",
						"cityName": "SABANAS DE SAN ÁNGEL"
					}, {
						"cityCode": "47675",
						"cityName": "SALAMINA"
					}, {
						"cityCode": "47692",
						"cityName": "SAN SEBASTIÁN DE BUENAVISTA"
					}, {
						"cityCode": "47703",
						"cityName": "SAN ZENÓN"
					}, {
						"cityCode": "47707",
						"cityName": "SANTA ANA"
					}, {
						"cityCode": "47720",
						"cityName": "SANTA BÁRBARA DE PINTO"
					}, {
						"cityCode": "47001",
						"cityName": "SANTA MARTA"
					}, {
						"cityCode": "47745",
						"cityName": "SITIONUEVO"
					}, {
						"cityCode": "47798",
						"cityName": "TENERIFE"
					}, {
						"cityCode": "47960",
						"cityName": "ZAPAYÁN"
					}, {
						"cityCode": "47980",
						"cityName": "ZONA BANANERA"
					}]
				},
				"50": {
					"deptName": "Meta",
					"cities": [{
						"cityCode": "50006",
						"cityName": "ACACÍAS"
					}, {
						"cityCode": "50110",
						"cityName": "BARRANCA DE UPÍA"
					}, {
						"cityCode": "50124",
						"cityName": "CABUYARO"
					}, {
						"cityCode": "50150",
						"cityName": "CASTILLA LA NUEVA"
					}, {
						"cityCode": "50226",
						"cityName": "CUMARAL"
					}, {
						"cityCode": "50245",
						"cityName": "EL CALVARIO"
					}, {
						"cityCode": "50251",
						"cityName": "EL CASTILLO"
					}, {
						"cityCode": "50270",
						"cityName": "EL DORADO"
					}, {
						"cityCode": "50287",
						"cityName": "FUENTE DE ORO"
					}, {
						"cityCode": "50313",
						"cityName": "GRANADA"
					}, {
						"cityCode": "50318",
						"cityName": "GUAMAL"
					}, {
						"cityCode": "50350",
						"cityName": "LA MACARENA"
					}, {
						"cityCode": "50400",
						"cityName": "LEJANÍAS"
					}, {
						"cityCode": "50325",
						"cityName": "MAPIRIPÁN"
					}, {
						"cityCode": "50330",
						"cityName": "MESETAS"
					}, {
						"cityCode": "50450",
						"cityName": "PUERTO CONCORDIA"
					}, {
						"cityCode": "50568",
						"cityName": "PUERTO GAITÁN"
					}, {
						"cityCode": "50577",
						"cityName": "PUERTO LLERAS"
					}, {
						"cityCode": "50573",
						"cityName": "PUERTO LÓPEZ"
					}, {
						"cityCode": "50590",
						"cityName": "PUERTO RICO"
					}, {
						"cityCode": "50606",
						"cityName": "RESTREPO"
					}, {
						"cityCode": "50680",
						"cityName": "SAN CARLOS DE GUAROA"
					}, {
						"cityCode": "50683",
						"cityName": "SAN JUAN DE ARAMA"
					}, {
						"cityCode": "50686",
						"cityName": "SAN JUANITO"
					}, {
						"cityCode": "50223",
						"cityName": "SAN LUIS DE CUBARRAL"
					}, {
						"cityCode": "50689",
						"cityName": "SAN MARTÍN"
					}, {
						"cityCode": "50370",
						"cityName": "URIBE"
					}, {
						"cityCode": "50001",
						"cityName": "VILLAVICENCIO"
					}, {
						"cityCode": "50711",
						"cityName": "VISTAHERMOSA"
					}]
				},
				"52": {
					"deptName": "Nariño",
					"cities": [{
						"cityCode": "52019",
						"cityName": "ALBÁN"
					}, {
						"cityCode": "52022",
						"cityName": "ALDANA"
					}, {
						"cityCode": "52036",
						"cityName": "ANCUYÁ"
					}, {
						"cityCode": "52051",
						"cityName": "ARBOLEDA"
					}, {
						"cityCode": "52079",
						"cityName": "BARBACOAS"
					}, {
						"cityCode": "52083",
						"cityName": "BELÉN"
					}, {
						"cityCode": "52110",
						"cityName": "BUESACO"
					}, {
						"cityCode": "52240",
						"cityName": "CHACHAGÜÍ"
					}, {
						"cityCode": "52203",
						"cityName": "COLÓN"
					}, {
						"cityCode": "52207",
						"cityName": "CONSACÁ"
					}, {
						"cityCode": "52210",
						"cityName": "CONTADERO"
					}, {
						"cityCode": "52215",
						"cityName": "CÓRDOBA"
					}, {
						"cityCode": "52224",
						"cityName": "CUASPÚD"
					}, {
						"cityCode": "52227",
						"cityName": "CUMBAL"
					}, {
						"cityCode": "52233",
						"cityName": "CUMBITARA"
					}, {
						"cityCode": "52250",
						"cityName": "EL CHARCO"
					}, {
						"cityCode": "52254",
						"cityName": "EL PEÑOL"
					}, {
						"cityCode": "52256",
						"cityName": "EL ROSARIO"
					}, {
						"cityCode": "52258",
						"cityName": "EL TABLÓN DE GÓMEZ"
					}, {
						"cityCode": "52260",
						"cityName": "EL TAMBO"
					}, {
						"cityCode": "52520",
						"cityName": "FRANCISCO PIZARRO"
					}, {
						"cityCode": "52287",
						"cityName": "FUNES"
					}, {
						"cityCode": "52317",
						"cityName": "GUACHUCAL"
					}, {
						"cityCode": "52320",
						"cityName": "GUAITARILLA"
					}, {
						"cityCode": "52323",
						"cityName": "GUALMATÁN"
					}, {
						"cityCode": "52352",
						"cityName": "ILES"
					}, {
						"cityCode": "52354",
						"cityName": "IMUÉS"
					}, {
						"cityCode": "52356",
						"cityName": "IPIALES"
					}, {
						"cityCode": "52378",
						"cityName": "LA CRUZ"
					}, {
						"cityCode": "52381",
						"cityName": "LA FLORIDA"
					}, {
						"cityCode": "52385",
						"cityName": "LA LLANADA"
					}, {
						"cityCode": "52390",
						"cityName": "LA TOLA"
					}, {
						"cityCode": "52399",
						"cityName": "LA UNIÓN"
					}, {
						"cityCode": "52405",
						"cityName": "LEIVA"
					}, {
						"cityCode": "52411",
						"cityName": "LINARES"
					}, {
						"cityCode": "52418",
						"cityName": "LOS ANDES"
					}, {
						"cityCode": "52427",
						"cityName": "MAGÜÍ"
					}, {
						"cityCode": "52435",
						"cityName": "MALLAMA"
					}, {
						"cityCode": "52473",
						"cityName": "MOSQUERA"
					}, {
						"cityCode": "52480",
						"cityName": "NARIÑO"
					}, {
						"cityCode": "52490",
						"cityName": "OLAYA HERRERA"
					}, {
						"cityCode": "52506",
						"cityName": "OSPINA"
					}, {
						"cityCode": "52001",
						"cityName": "PASTO"
					}, {
						"cityCode": "52540",
						"cityName": "POLICARPA"
					}, {
						"cityCode": "52560",
						"cityName": "POTOSÍ"
					}, {
						"cityCode": "52565",
						"cityName": "PROVIDENCIA"
					}, {
						"cityCode": "52573",
						"cityName": "PUERRES"
					}, {
						"cityCode": "52585",
						"cityName": "PUPIALES"
					}, {
						"cityCode": "52612",
						"cityName": "RICAURTE"
					}, {
						"cityCode": "52621",
						"cityName": "ROBERTO PAYÁN"
					}, {
						"cityCode": "52678",
						"cityName": "SAMANIEGO"
					}, {
						"cityCode": "52835",
						"cityName": "SAN ANDRÉS DE TUMACO"
					}, {
						"cityCode": "52685",
						"cityName": "SAN BERNARDO"
					}, {
						"cityCode": "52687",
						"cityName": "SAN LORENZO"
					}, {
						"cityCode": "52693",
						"cityName": "SAN PABLO"
					}, {
						"cityCode": "52694",
						"cityName": "SAN PEDRO DE CARTAGO"
					}, {
						"cityCode": "52683",
						"cityName": "SANDONÁ"
					}, {
						"cityCode": "52696",
						"cityName": "SANTA BÁRBARA"
					}, {
						"cityCode": "52699",
						"cityName": "SANTACRUZ"
					}, {
						"cityCode": "52720",
						"cityName": "SAPUYES"
					}, {
						"cityCode": "52786",
						"cityName": "TAMINANGO"
					}, {
						"cityCode": "52788",
						"cityName": "TANGUA"
					}, {
						"cityCode": "52838",
						"cityName": "TÚQUERRES"
					}, {
						"cityCode": "52885",
						"cityName": "YACUANQUER"
					}]
				},
				"54": {
					"deptName": "Norte de Santander",
					"cities": [{
						"cityCode": "54003",
						"cityName": "ÁBREGO"
					}, {
						"cityCode": "54051",
						"cityName": "ARBOLEDAS"
					}, {
						"cityCode": "54099",
						"cityName": "BOCHALEMA"
					}, {
						"cityCode": "54109",
						"cityName": "BUCARASICA"
					}, {
						"cityCode": "54128",
						"cityName": "CÁCHIRA"
					}, {
						"cityCode": "54125",
						"cityName": "CÁCOTA"
					}, {
						"cityCode": "54172",
						"cityName": "CHINÁCOTA"
					}, {
						"cityCode": "54174",
						"cityName": "CHITAGÁ"
					}, {
						"cityCode": "54206",
						"cityName": "CONVENCIÓN"
					}, {
						"cityCode": "54001",
						"cityName": "CÚCUTA"
					}, {
						"cityCode": "54223",
						"cityName": "CUCUTILLA"
					}, {
						"cityCode": "54239",
						"cityName": "DURANIA"
					}, {
						"cityCode": "54245",
						"cityName": "EL CARMEN"
					}, {
						"cityCode": "54250",
						"cityName": "EL TARRA"
					}, {
						"cityCode": "54261",
						"cityName": "EL ZULIA"
					}, {
						"cityCode": "54313",
						"cityName": "GRAMALOTE"
					}, {
						"cityCode": "54344",
						"cityName": "HACARÍ"
					}, {
						"cityCode": "54347",
						"cityName": "HERRÁN"
					}, {
						"cityCode": "54385",
						"cityName": "LA ESPERANZA"
					}, {
						"cityCode": "54398",
						"cityName": "LA PLAYA"
					}, {
						"cityCode": "54377",
						"cityName": "LABATECA"
					}, {
						"cityCode": "54405",
						"cityName": "LOS PATIOS"
					}, {
						"cityCode": "54418",
						"cityName": "LOURDES"
					}, {
						"cityCode": "54480",
						"cityName": "MUTISCUA"
					}, {
						"cityCode": "54498",
						"cityName": "OCAÑA"
					}, {
						"cityCode": "54518",
						"cityName": "PAMPLONA"
					}, {
						"cityCode": "54520",
						"cityName": "PAMPLONITA"
					}, {
						"cityCode": "54553",
						"cityName": "PUERTO SANTANDER"
					}, {
						"cityCode": "54599",
						"cityName": "RAGONVALIA"
					}, {
						"cityCode": "54660",
						"cityName": "SALAZAR"
					}, {
						"cityCode": "54670",
						"cityName": "SAN CALIXTO"
					}, {
						"cityCode": "54673",
						"cityName": "SAN CAYETANO"
					}, {
						"cityCode": "54680",
						"cityName": "SANTIAGO"
					}, {
						"cityCode": "54720",
						"cityName": "SARDINATA"
					}, {
						"cityCode": "54743",
						"cityName": "SILOS"
					}, {
						"cityCode": "54800",
						"cityName": "TEORAMA"
					}, {
						"cityCode": "54810",
						"cityName": "TIBÚ"
					}, {
						"cityCode": "54820",
						"cityName": "TOLEDO"
					}, {
						"cityCode": "54871",
						"cityName": "VILLA CARO"
					}, {
						"cityCode": "54874",
						"cityName": "VILLA DEL ROSARIO"
					}]
				},
				"63": {
					"deptName": "Quindio",
					"cities": [{
						"cityCode": "63001",
						"cityName": "ARMENIA"
					}, {
						"cityCode": "63111",
						"cityName": "BUENAVISTA"
					}, {
						"cityCode": "63130",
						"cityName": "CALARCÁ"
					}, {
						"cityCode": "63190",
						"cityName": "CIRCASIA"
					}, {
						"cityCode": "63212",
						"cityName": "CÓRDOBA"
					}, {
						"cityCode": "63272",
						"cityName": "FILANDIA"
					}, {
						"cityCode": "63302",
						"cityName": "GÉNOVA"
					}, {
						"cityCode": "63401",
						"cityName": "LA TEBAIDA"
					}, {
						"cityCode": "63470",
						"cityName": "MONTENEGRO"
					}, {
						"cityCode": "63548",
						"cityName": "PIJAO"
					}, {
						"cityCode": "63594",
						"cityName": "QUIMBAYA"
					}, {
						"cityCode": "63690",
						"cityName": "SALENTO"
					}]
				},
				"66": {
					"deptName": "Risaralda",
					"cities": [{
						"cityCode": "66045",
						"cityName": "APÍA"
					}, {
						"cityCode": "66075",
						"cityName": "BALBOA"
					}, {
						"cityCode": "66088",
						"cityName": "BELÉN DE UMBRÍA"
					}, {
						"cityCode": "66170",
						"cityName": "DOSQUEBRADAS"
					}, {
						"cityCode": "66318",
						"cityName": "GUÁTICA"
					}, {
						"cityCode": "66383",
						"cityName": "LA CELIA"
					}, {
						"cityCode": "66400",
						"cityName": "LA VIRGINIA"
					}, {
						"cityCode": "66440",
						"cityName": "MARSELLA"
					}, {
						"cityCode": "66456",
						"cityName": "MISTRATÓ"
					}, {
						"cityCode": "66001",
						"cityName": "PEREIRA"
					}, {
						"cityCode": "66572",
						"cityName": "PUEBLO RICO"
					}, {
						"cityCode": "66594",
						"cityName": "QUINCHÍA"
					}, {
						"cityCode": "66682",
						"cityName": "SANTA ROSA DE CABAL"
					}, {
						"cityCode": "66687",
						"cityName": "SANTUARIO"
					}]
				},
				"68": {
					"deptName": "Santander",
					"cities": [{
						"cityCode": "68013",
						"cityName": "AGUADA"
					}, {
						"cityCode": "68020",
						"cityName": "ALBANIA"
					}, {
						"cityCode": "68051",
						"cityName": "ARATOCA"
					}, {
						"cityCode": "68077",
						"cityName": "BARBOSA"
					}, {
						"cityCode": "68079",
						"cityName": "BARICHARA"
					}, {
						"cityCode": "68081",
						"cityName": "BARRANCABERMEJA"
					}, {
						"cityCode": "68092",
						"cityName": "BETULIA"
					}, {
						"cityCode": "68101",
						"cityName": "BOLÍVAR"
					}, {
						"cityCode": "68001",
						"cityName": "BUCARAMANGA"
					}, {
						"cityCode": "68121",
						"cityName": "CABRERA"
					}, {
						"cityCode": "68132",
						"cityName": "CALIFORNIA"
					}, {
						"cityCode": "68147",
						"cityName": "CAPITANEJO"
					}, {
						"cityCode": "68152",
						"cityName": "CARCASÍ"
					}, {
						"cityCode": "68160",
						"cityName": "CEPITÁ"
					}, {
						"cityCode": "68162",
						"cityName": "CERRITO"
					}, {
						"cityCode": "68167",
						"cityName": "CHARALÁ"
					}, {
						"cityCode": "68169",
						"cityName": "CHARTA"
					}, {
						"cityCode": "68176",
						"cityName": "CHIMA"
					}, {
						"cityCode": "68179",
						"cityName": "CHIPATÁ"
					}, {
						"cityCode": "68190",
						"cityName": "CIMITARRA"
					}, {
						"cityCode": "68207",
						"cityName": "CONCEPCIÓN"
					}, {
						"cityCode": "68209",
						"cityName": "CONFINES"
					}, {
						"cityCode": "68211",
						"cityName": "CONTRATACIÓN"
					}, {
						"cityCode": "68217",
						"cityName": "COROMORO"
					}, {
						"cityCode": "68229",
						"cityName": "CURITÍ"
					}, {
						"cityCode": "68235",
						"cityName": "EL CARMEN DE CHUCURÍ"
					}, {
						"cityCode": "68245",
						"cityName": "EL GUACAMAYO"
					}, {
						"cityCode": "68250",
						"cityName": "EL PEÑÓN"
					}, {
						"cityCode": "68255",
						"cityName": "EL PLAYÓN"
					}, {
						"cityCode": "68264",
						"cityName": "ENCINO"
					}, {
						"cityCode": "68266",
						"cityName": "ENCISO"
					}, {
						"cityCode": "68271",
						"cityName": "FLORIÁN"
					}, {
						"cityCode": "68276",
						"cityName": "FLORIDABLANCA"
					}, {
						"cityCode": "68296",
						"cityName": "GALÁN"
					}, {
						"cityCode": "68298",
						"cityName": "GÁMBITA"
					}, {
						"cityCode": "68307",
						"cityName": "GIRÓN"
					}, {
						"cityCode": "68318",
						"cityName": "GUACA"
					}, {
						"cityCode": "68320",
						"cityName": "GUADALUPE"
					}, {
						"cityCode": "68322",
						"cityName": "GUAPOTÁ"
					}, {
						"cityCode": "68324",
						"cityName": "GUAVATÁ"
					}, {
						"cityCode": "68327",
						"cityName": "GÜEPSA"
					}, {
						"cityCode": "68344",
						"cityName": "HATO"
					}, {
						"cityCode": "68368",
						"cityName": "JESÚS MARÍA"
					}, {
						"cityCode": "68370",
						"cityName": "JORDÁN"
					}, {
						"cityCode": "68377",
						"cityName": "LA BELLEZA"
					}, {
						"cityCode": "68397",
						"cityName": "LA PAZ"
					}, {
						"cityCode": "68385",
						"cityName": "LANDÁZURI"
					}, {
						"cityCode": "68406",
						"cityName": "LEBRIJA"
					}, {
						"cityCode": "68418",
						"cityName": "LOS SANTOS"
					}, {
						"cityCode": "68425",
						"cityName": "MACARAVITA"
					}, {
						"cityCode": "68432",
						"cityName": "MÁLAGA"
					}, {
						"cityCode": "68444",
						"cityName": "MATANZA"
					}, {
						"cityCode": "68464",
						"cityName": "MOGOTES"
					}, {
						"cityCode": "68468",
						"cityName": "MOLAGAVITA"
					}, {
						"cityCode": "68498",
						"cityName": "OCAMONTE"
					}, {
						"cityCode": "68500",
						"cityName": "OIBA"
					}, {
						"cityCode": "68502",
						"cityName": "ONZAGA"
					}, {
						"cityCode": "68522",
						"cityName": "PALMAR"
					}, {
						"cityCode": "68524",
						"cityName": "PALMAS DEL SOCORRO"
					}, {
						"cityCode": "68533",
						"cityName": "PÁRAMO"
					}, {
						"cityCode": "68547",
						"cityName": "PIEDECUESTA"
					}, {
						"cityCode": "68549",
						"cityName": "PINCHOTE"
					}, {
						"cityCode": "68572",
						"cityName": "PUENTE NACIONAL"
					}, {
						"cityCode": "68573",
						"cityName": "PUERTO PARRA"
					}, {
						"cityCode": "68575",
						"cityName": "PUERTO WILCHES"
					}, {
						"cityCode": "68615",
						"cityName": "RIONEGRO"
					}, {
						"cityCode": "68655",
						"cityName": "SABANA DE TORRES"
					}, {
						"cityCode": "68669",
						"cityName": "SAN ANDRÉS"
					}, {
						"cityCode": "68673",
						"cityName": "SAN BENITO"
					}, {
						"cityCode": "68679",
						"cityName": "SAN GIL"
					}, {
						"cityCode": "68682",
						"cityName": "SAN JOAQUÍN"
					}, {
						"cityCode": "68684",
						"cityName": "SAN JOSÉ DE MIRANDA"
					}, {
						"cityCode": "68686",
						"cityName": "SAN MIGUEL"
					}, {
						"cityCode": "68689",
						"cityName": "SAN VICENTE DE CHUCURÍ"
					}, {
						"cityCode": "68705",
						"cityName": "SANTA BÁRBARA"
					}, {
						"cityCode": "68720",
						"cityName": "SANTA HELENA DEL OPÓN"
					}, {
						"cityCode": "68745",
						"cityName": "SIMACOTA"
					}, {
						"cityCode": "68755",
						"cityName": "SOCORRO"
					}, {
						"cityCode": "68770",
						"cityName": "SUAITA"
					}, {
						"cityCode": "68773",
						"cityName": "SUCRE"
					}, {
						"cityCode": "68780",
						"cityName": "SURATÁ"
					}, {
						"cityCode": "68820",
						"cityName": "TONA"
					}, {
						"cityCode": "68855",
						"cityName": "VALLE DE SAN JOSÉ"
					}, {
						"cityCode": "68861",
						"cityName": "VÉLEZ"
					}, {
						"cityCode": "68867",
						"cityName": "VETAS"
					}, {
						"cityCode": "68872",
						"cityName": "VILLANUEVA"
					}, {
						"cityCode": "68895",
						"cityName": "ZAPATOCA"
					}]
				},
				"70": {
					"deptName": "Sucre",
					"cities": [{
						"cityCode": "70110",
						"cityName": "BUENAVISTA"
					}, {
						"cityCode": "70124",
						"cityName": "CAIMITO"
					}, {
						"cityCode": "70230",
						"cityName": "CHALÁN"
					}, {
						"cityCode": "70204",
						"cityName": "COLOSÓ"
					}, {
						"cityCode": "70215",
						"cityName": "COROZAL"
					}, {
						"cityCode": "70221",
						"cityName": "COVEÑAS"
					}, {
						"cityCode": "70233",
						"cityName": "EL ROBLE"
					}, {
						"cityCode": "70235",
						"cityName": "GALERAS"
					}, {
						"cityCode": "70265",
						"cityName": "GUARANDA"
					}, {
						"cityCode": "70400",
						"cityName": "LA UNIÓN"
					}, {
						"cityCode": "70418",
						"cityName": "LOS PALMITOS"
					}, {
						"cityCode": "70429",
						"cityName": "MAJAGUAL"
					}, {
						"cityCode": "70473",
						"cityName": "MORROA"
					}, {
						"cityCode": "70508",
						"cityName": "OVEJAS"
					}, {
						"cityCode": "70523",
						"cityName": "PALMITO"
					}, {
						"cityCode": "70670",
						"cityName": "SAMPUÉS"
					}, {
						"cityCode": "70678",
						"cityName": "SAN BENITO ABAD"
					}, {
						"cityCode": "70702",
						"cityName": "SAN JUAN DE BETULIA"
					}, {
						"cityCode": "70742",
						"cityName": "SAN LUIS DE SINCÉ"
					}, {
						"cityCode": "70708",
						"cityName": "SAN MARCOS"
					}, {
						"cityCode": "70713",
						"cityName": "SAN ONOFRE"
					}, {
						"cityCode": "70717",
						"cityName": "SAN PEDRO"
					}, {
						"cityCode": "70820",
						"cityName": "SANTIAGO DE TOLÚ"
					}, {
						"cityCode": "70001",
						"cityName": "SINCELEJO"
					}, {
						"cityCode": "70771",
						"cityName": "SUCRE"
					}, {
						"cityCode": "70823",
						"cityName": "TOLÚ VIEJO"
					}]
				},
				"73": {
					"deptName": "Tolima",
					"cities": [{
						"cityCode": "73024",
						"cityName": "ALPUJARRA"
					}, {
						"cityCode": "73026",
						"cityName": "ALVARADO"
					}, {
						"cityCode": "73030",
						"cityName": "AMBALEMA"
					}, {
						"cityCode": "73043",
						"cityName": "ANZOÁTEGUI"
					}, {
						"cityCode": "73055",
						"cityName": "ARMERO GUAYABAL"
					}, {
						"cityCode": "73067",
						"cityName": "ATACO"
					}, {
						"cityCode": "73124",
						"cityName": "CAJAMARCA"
					}, {
						"cityCode": "73148",
						"cityName": "CARMEN DE APICALÁ"
					}, {
						"cityCode": "73152",
						"cityName": "CASABIANCA"
					}, {
						"cityCode": "73168",
						"cityName": "CHAPARRAL"
					}, {
						"cityCode": "73200",
						"cityName": "COELLO"
					}, {
						"cityCode": "73217",
						"cityName": "COYAIMA"
					}, {
						"cityCode": "73226",
						"cityName": "CUNDAY"
					}, {
						"cityCode": "73236",
						"cityName": "DOLORES"
					}, {
						"cityCode": "73268",
						"cityName": "ESPINAL"
					}, {
						"cityCode": "73270",
						"cityName": "FALAN"
					}, {
						"cityCode": "73275",
						"cityName": "FLANDES"
					}, {
						"cityCode": "73283",
						"cityName": "FRESNO"
					}, {
						"cityCode": "73319",
						"cityName": "GUAMO"
					}, {
						"cityCode": "73347",
						"cityName": "HERVEO"
					}, {
						"cityCode": "73349",
						"cityName": "HONDA"
					}, {
						"cityCode": "73001",
						"cityName": "IBAGUÉ"
					}, {
						"cityCode": "73352",
						"cityName": "ICONONZO"
					}, {
						"cityCode": "73408",
						"cityName": "LÉRIDA"
					}, {
						"cityCode": "73411",
						"cityName": "LÍBANO"
					}, {
						"cityCode": "73449",
						"cityName": "MELGAR"
					}, {
						"cityCode": "73461",
						"cityName": "MURILLO"
					}, {
						"cityCode": "73483",
						"cityName": "NATAGAIMA"
					}, {
						"cityCode": "73504",
						"cityName": "ORTEGA"
					}, {
						"cityCode": "73520",
						"cityName": "PALOCABILDO"
					}, {
						"cityCode": "73547",
						"cityName": "PIEDRAS"
					}, {
						"cityCode": "73555",
						"cityName": "PLANADAS"
					}, {
						"cityCode": "73563",
						"cityName": "PRADO"
					}, {
						"cityCode": "73585",
						"cityName": "PURIFICACIÓN"
					}, {
						"cityCode": "73616",
						"cityName": "RIOBLANCO"
					}, {
						"cityCode": "73622",
						"cityName": "RONCESVALLES"
					}, {
						"cityCode": "73624",
						"cityName": "ROVIRA"
					}, {
						"cityCode": "73671",
						"cityName": "SALDAÑA"
					}, {
						"cityCode": "73675",
						"cityName": "SAN ANTONIO"
					}, {
						"cityCode": "73678",
						"cityName": "SAN LUIS"
					}, {
						"cityCode": "73443",
						"cityName": "SAN SEBASTIÁN DE MARIQUITA"
					}, {
						"cityCode": "73686",
						"cityName": "SANTA ISABEL"
					}, {
						"cityCode": "73770",
						"cityName": "SUÁREZ"
					}, {
						"cityCode": "73854",
						"cityName": "VALLE DE SAN JUAN"
					}, {
						"cityCode": "73861",
						"cityName": "VENADILLO"
					}, {
						"cityCode": "73870",
						"cityName": "VILLAHERMOSA"
					}, {
						"cityCode": "73873",
						"cityName": "VILLARRICA"
					}]
				},
				"76": {
					"deptName": "Valle del Cauca",
					"cities": [{
						"cityCode": "76020",
						"cityName": "ALCALÁ"
					}, {
						"cityCode": "76036",
						"cityName": "ANDALUCÍA"
					}, {
						"cityCode": "76041",
						"cityName": "ANSERMANUEVO"
					}, {
						"cityCode": "76054",
						"cityName": "ARGELIA"
					}, {
						"cityCode": "76100",
						"cityName": "BOLÍVAR"
					}, {
						"cityCode": "76109",
						"cityName": "BUENAVENTURA"
					}, {
						"cityCode": "76113",
						"cityName": "BUGALAGRANDE"
					}, {
						"cityCode": "76122",
						"cityName": "CAICEDONIA"
					}, {
						"cityCode": "76001",
						"cityName": "CALI"
					}, {
						"cityCode": "76126",
						"cityName": "CALIMA"
					}, {
						"cityCode": "76130",
						"cityName": "CANDELARIA"
					}, {
						"cityCode": "76147",
						"cityName": "CARTAGO"
					}, {
						"cityCode": "76233",
						"cityName": "DAGUA"
					}, {
						"cityCode": "76243",
						"cityName": "EL ÁGUILA"
					}, {
						"cityCode": "76246",
						"cityName": "EL CAIRO"
					}, {
						"cityCode": "76248",
						"cityName": "EL CERRITO"
					}, {
						"cityCode": "76250",
						"cityName": "EL DOVIO"
					}, {
						"cityCode": "76275",
						"cityName": "FLORIDA"
					}, {
						"cityCode": "76306",
						"cityName": "GINEBRA"
					}, {
						"cityCode": "76318",
						"cityName": "GUACARÍ"
					}, {
						"cityCode": "76111",
						"cityName": "GUADALAJARA DE BUGA"
					}, {
						"cityCode": "76364",
						"cityName": "JAMUNDÍ"
					}, {
						"cityCode": "76377",
						"cityName": "LA CUMBRE"
					}, {
						"cityCode": "76400",
						"cityName": "LA UNIÓN"
					}, {
						"cityCode": "76403",
						"cityName": "LA VICTORIA"
					}, {
						"cityCode": "76497",
						"cityName": "OBANDO"
					}, {
						"cityCode": "76520",
						"cityName": "PALMIRA"
					}, {
						"cityCode": "76563",
						"cityName": "PRADERA"
					}, {
						"cityCode": "76606",
						"cityName": "RESTREPO"
					}, {
						"cityCode": "76616",
						"cityName": "RIOFRÍO"
					}, {
						"cityCode": "76622",
						"cityName": "ROLDANILLO"
					}, {
						"cityCode": "76670",
						"cityName": "SAN PEDRO"
					}, {
						"cityCode": "76736",
						"cityName": "SEVILLA"
					}, {
						"cityCode": "76823",
						"cityName": "TORO"
					}, {
						"cityCode": "76828",
						"cityName": "TRUJILLO"
					}, {
						"cityCode": "76834",
						"cityName": "TULUÁ"
					}, {
						"cityCode": "76845",
						"cityName": "ULLOA"
					}, {
						"cityCode": "76863",
						"cityName": "VERSALLES"
					}, {
						"cityCode": "76869",
						"cityName": "VIJES"
					}, {
						"cityCode": "76890",
						"cityName": "YOTOCO"
					}, {
						"cityCode": "76892",
						"cityName": "YUMBO"
					}, {
						"cityCode": "76895",
						"cityName": "ZARZAL"
					}]
				},
				"81": {
					"deptName": "Arauca",
					"cities": [{
						"cityCode": "81001",
						"cityName": "ARAUCA"
					}, {
						"cityCode": "81065",
						"cityName": "ARAUQUITA"
					}, {
						"cityCode": "81220",
						"cityName": "CRAVO NORTE"
					}, {
						"cityCode": "81300",
						"cityName": "FORTUL"
					}, {
						"cityCode": "81591",
						"cityName": "PUERTO RONDÓN"
					}, {
						"cityCode": "81736",
						"cityName": "SARAVENA"
					}, {
						"cityCode": "81794",
						"cityName": "TAME"
					}]
				},
				"85": {
					"deptName": "Casanare",
					"cities": [{
						"cityCode": "85010",
						"cityName": "AGUAZUL"
					}, {
						"cityCode": "85015",
						"cityName": "CHÁMEZA"
					}, {
						"cityCode": "85125",
						"cityName": "HATO COROZAL"
					}, {
						"cityCode": "85136",
						"cityName": "LA SALINA"
					}, {
						"cityCode": "85139",
						"cityName": "MANÍ"
					}, {
						"cityCode": "85162",
						"cityName": "MONTERREY"
					}, {
						"cityCode": "85225",
						"cityName": "NUNCHÍA"
					}, {
						"cityCode": "85230",
						"cityName": "OROCUÉ"
					}, {
						"cityCode": "85250",
						"cityName": "PAZ DE ARIPORO"
					}, {
						"cityCode": "85263",
						"cityName": "PORE"
					}, {
						"cityCode": "85279",
						"cityName": "RECETOR"
					}, {
						"cityCode": "85300",
						"cityName": "SABANALARGA"
					}, {
						"cityCode": "85315",
						"cityName": "SÁCAMA"
					}, {
						"cityCode": "85325",
						"cityName": "SAN LUIS DE PALENQUE"
					}, {
						"cityCode": "85400",
						"cityName": "TÁMARA"
					}, {
						"cityCode": "85410",
						"cityName": "TAURAMENA"
					}, {
						"cityCode": "85430",
						"cityName": "TRINIDAD"
					}, {
						"cityCode": "85440",
						"cityName": "VILLANUEVA"
					}, {
						"cityCode": "85001",
						"cityName": "YOPAL"
					}]
				},
				"86": {
					"deptName": "Putumayo",
					"cities": [{
						"cityCode": "86219",
						"cityName": "COLÓN"
					}, {
						"cityCode": "86001",
						"cityName": "MOCOA"
					}, {
						"cityCode": "86320",
						"cityName": "ORITO"
					}, {
						"cityCode": "86568",
						"cityName": "PUERTO ASÍS"
					}, {
						"cityCode": "86569",
						"cityName": "PUERTO CAICEDO"
					}, {
						"cityCode": "86571",
						"cityName": "PUERTO GUZMÁN"
					}, {
						"cityCode": "86573",
						"cityName": "PUERTO LEGUÍZAMO"
					}, {
						"cityCode": "86755",
						"cityName": "SAN FRANCISCO"
					}, {
						"cityCode": "86757",
						"cityName": "SAN MIGUEL"
					}, {
						"cityCode": "86760",
						"cityName": "SANTIAGO"
					}, {
						"cityCode": "86749",
						"cityName": "SIBUNDOY"
					}, {
						"cityCode": "86865",
						"cityName": "VALLE DEL GUAMUEZ"
					}, {
						"cityCode": "86885",
						"cityName": "VILLAGARZÓN"
					}]
				},
				"88": {
					"deptName": "Archipiélago de San Andrés, Providencia y Santa Catalina",
					"cities": [{
						"cityCode": "88564",
						"cityName": "PROVIDENCIA"
					}, {
						"cityCode": "88001",
						"cityName": "SAN ANDRÉS"
					}]
				},
				"91": {
					"deptName": "Amazonas",
					"cities": [{
						"cityCode": "91263",
						"cityName": "EL ENCANTO"
					}, {
						"cityCode": "91405",
						"cityName": "LA CHORRERA"
					}, {
						"cityCode": "91407",
						"cityName": "LA PEDRERA"
					}, {
						"cityCode": "91430",
						"cityName": "LA VICTORIA"
					}, {
						"cityCode": "91001",
						"cityName": "LETICIA"
					}, {
						"cityCode": "91460",
						"cityName": "MIRITÍ - PARANÁ"
					}, {
						"cityCode": "91530",
						"cityName": "PUERTO ALEGRÍA"
					}, {
						"cityCode": "91536",
						"cityName": "PUERTO ARICA"
					}, {
						"cityCode": "91540",
						"cityName": "PUERTO NARIÑO"
					}, {
						"cityCode": "91669",
						"cityName": "PUERTO SANTANDER"
					}, {
						"cityCode": "91798",
						"cityName": "TARAPACÁ"
					}]
				},
				"94": {
					"deptName": "Guainía",
					"cities": [{
						"cityCode": "94343",
						"cityName": "BARRANCO MINAS"
					}, {
						"cityCode": "94886",
						"cityName": "CACAHUAL"
					}, {
						"cityCode": "94001",
						"cityName": "INÍRIDA"
					}, {
						"cityCode": "94885",
						"cityName": "LA GUADALUPE"
					}, {
						"cityCode": "94663",
						"cityName": "MAPIRIPANA"
					}, {
						"cityCode": "94888",
						"cityName": "MORICHAL"
					}, {
						"cityCode": "94887",
						"cityName": "PANA PANA"
					}, {
						"cityCode": "94884",
						"cityName": "PUERTO COLOMBIA"
					}, {
						"cityCode": "94883",
						"cityName": "SAN FELIPE"
					}]
				},
				"95": {
					"deptName": "Guaviare",
					"cities": [{
						"cityCode": "95015",
						"cityName": "CALAMAR"
					}, {
						"cityCode": "95025",
						"cityName": "EL RETORNO"
					}, {
						"cityCode": "95200",
						"cityName": "MIRAFLORES"
					}, {
						"cityCode": "95001",
						"cityName": "SAN JOSÉ DEL GUAVIARE"
					}]
				},
				"97": {
					"deptName": "Vaupés",
					"cities": [{
						"cityCode": "97161",
						"cityName": "CARURÚ"
					}, {
						"cityCode": "97001",
						"cityName": "MITÚ"
					}, {
						"cityCode": "97511",
						"cityName": "PACOA"
					}, {
						"cityCode": "97777",
						"cityName": "PAPUNAUA"
					}, {
						"cityCode": "97666",
						"cityName": "TARAIRA"
					}, {
						"cityCode": "97889",
						"cityName": "YAVARATÉ"
					}]
				},
				"99": {
					"deptName": "Vichada",
					"cities": [{
						"cityCode": "99773",
						"cityName": "CUMARIBO"
					}, {
						"cityCode": "99524",
						"cityName": "LA PRIMAVERA"
					}, {
						"cityCode": "99001",
						"cityName": "PUERTO CARREÑO"
					}, {
						"cityCode": "99624",
						"cityName": "SANTA ROSALÍA"
					}]
				},
				"05": {
					"deptName": "Antioquia",
					"cities": [{
						"cityCode": "05002",
						"cityName": "ABEJORRAL"
					}, {
						"cityCode": "05004",
						"cityName": "ABRIAQUÍ"
					}, {
						"cityCode": "05021",
						"cityName": "ALEJANDRÍA"
					}, {
						"cityCode": "05030",
						"cityName": "AMAGÁ"
					}, {
						"cityCode": "05031",
						"cityName": "AMALFI"
					}, {
						"cityCode": "05034",
						"cityName": "ANDES"
					}, {
						"cityCode": "05036",
						"cityName": "ANGELÓPOLIS"
					}, {
						"cityCode": "05038",
						"cityName": "ANGOSTURA"
					}, {
						"cityCode": "05040",
						"cityName": "ANORÍ"
					}, {
						"cityCode": "05044",
						"cityName": "ANZÁ"
					}, {
						"cityCode": "05045",
						"cityName": "APARTADÓ"
					}, {
						"cityCode": "05051",
						"cityName": "ARBOLETES"
					}, {
						"cityCode": "05055",
						"cityName": "ARGELIA"
					}, {
						"cityCode": "05059",
						"cityName": "ARMENIA"
					}, {
						"cityCode": "05079",
						"cityName": "BARBOSA"
					}, {
						"cityCode": "05088",
						"cityName": "BELLO"
					}, {
						"cityCode": "05086",
						"cityName": "BELMIRA"
					}, {
						"cityCode": "05091",
						"cityName": "BETANIA"
					}, {
						"cityCode": "05093",
						"cityName": "BETULIA"
					}, {
						"cityCode": "05107",
						"cityName": "BRICEÑO"
					}, {
						"cityCode": "05113",
						"cityName": "BURITICÁ"
					}, {
						"cityCode": "05120",
						"cityName": "CÁCERES"
					}, {
						"cityCode": "05125",
						"cityName": "CAICEDO"
					}, {
						"cityCode": "05129",
						"cityName": "CALDAS"
					}, {
						"cityCode": "05134",
						"cityName": "CAMPAMENTO"
					}, {
						"cityCode": "05138",
						"cityName": "CAÑASGORDAS"
					}, {
						"cityCode": "05142",
						"cityName": "CARACOLÍ"
					}, {
						"cityCode": "05145",
						"cityName": "CARAMANTA"
					}, {
						"cityCode": "05147",
						"cityName": "CAREPA"
					}, {
						"cityCode": "05150",
						"cityName": "CAROLINA"
					}, {
						"cityCode": "05154",
						"cityName": "CAUCASIA"
					}, {
						"cityCode": "05172",
						"cityName": "CHIGORODÓ"
					}, {
						"cityCode": "05190",
						"cityName": "CISNEROS"
					}, {
						"cityCode": "05101",
						"cityName": "CIUDAD BOLÍVAR"
					}, {
						"cityCode": "05197",
						"cityName": "COCORNÁ"
					}, {
						"cityCode": "05206",
						"cityName": "CONCEPCIÓN"
					}, {
						"cityCode": "05209",
						"cityName": "CONCORDIA"
					}, {
						"cityCode": "05212",
						"cityName": "COPACABANA"
					}, {
						"cityCode": "05234",
						"cityName": "DABEIBA"
					}, {
						"cityCode": "05237",
						"cityName": "DONMATÍAS"
					}, {
						"cityCode": "05240",
						"cityName": "EBÉJICO"
					}, {
						"cityCode": "05250",
						"cityName": "EL BAGRE"
					}, {
						"cityCode": "05148",
						"cityName": "EL CARMEN DE VIBORAL"
					}, {
						"cityCode": "05697",
						"cityName": "EL SANTUARIO"
					}, {
						"cityCode": "05264",
						"cityName": "ENTRERRÍOS"
					}, {
						"cityCode": "05266",
						"cityName": "ENVIGADO"
					}, {
						"cityCode": "05282",
						"cityName": "FREDONIA"
					}, {
						"cityCode": "05284",
						"cityName": "FRONTINO"
					}, {
						"cityCode": "05306",
						"cityName": "GIRALDO"
					}, {
						"cityCode": "05308",
						"cityName": "GIRARDOTA"
					}, {
						"cityCode": "05310",
						"cityName": "GÓMEZ PLATA"
					}, {
						"cityCode": "05313",
						"cityName": "GRANADA"
					}, {
						"cityCode": "05315",
						"cityName": "GUADALUPE"
					}, {
						"cityCode": "05318",
						"cityName": "GUARNE"
					}, {
						"cityCode": "05321",
						"cityName": "GUATAPÉ"
					}, {
						"cityCode": "05347",
						"cityName": "HELICONIA"
					}, {
						"cityCode": "05353",
						"cityName": "HISPANIA"
					}, {
						"cityCode": "05360",
						"cityName": "ITAGÜÍ"
					}, {
						"cityCode": "05361",
						"cityName": "ITUANGO"
					}, {
						"cityCode": "05364",
						"cityName": "JARDÍN"
					}, {
						"cityCode": "05368",
						"cityName": "JERICÓ"
					}, {
						"cityCode": "05376",
						"cityName": "LA CEJA"
					}, {
						"cityCode": "05380",
						"cityName": "LA ESTRELLA"
					}, {
						"cityCode": "05390",
						"cityName": "LA PINTADA"
					}, {
						"cityCode": "05400",
						"cityName": "LA UNIÓN"
					}, {
						"cityCode": "05411",
						"cityName": "LIBORINA"
					}, {
						"cityCode": "05425",
						"cityName": "MACEO"
					}, {
						"cityCode": "05440",
						"cityName": "MARINILLA"
					}, {
						"cityCode": "05001",
						"cityName": "MEDELLÍN"
					}, {
						"cityCode": "05467",
						"cityName": "MONTEBELLO"
					}, {
						"cityCode": "05475",
						"cityName": "MURINDÓ"
					}, {
						"cityCode": "05480",
						"cityName": "MUTATÁ"
					}, {
						"cityCode": "05483",
						"cityName": "NARIÑO"
					}, {
						"cityCode": "05495",
						"cityName": "NECHÍ"
					}, {
						"cityCode": "05490",
						"cityName": "NECOCLÍ"
					}, {
						"cityCode": "05501",
						"cityName": "OLAYA"
					}, {
						"cityCode": "05541",
						"cityName": "PEÑOL"
					}, {
						"cityCode": "05543",
						"cityName": "PEQUE"
					}, {
						"cityCode": "05576",
						"cityName": "PUEBLORRICO"
					}, {
						"cityCode": "05579",
						"cityName": "PUERTO BERRÍO"
					}, {
						"cityCode": "05585",
						"cityName": "PUERTO NARE"
					}, {
						"cityCode": "05591",
						"cityName": "PUERTO TRIUNFO"
					}, {
						"cityCode": "05604",
						"cityName": "REMEDIOS"
					}, {
						"cityCode": "05607",
						"cityName": "RETIRO"
					}, {
						"cityCode": "05615",
						"cityName": "RIONEGRO"
					}, {
						"cityCode": "05628",
						"cityName": "SABANALARGA"
					}, {
						"cityCode": "05631",
						"cityName": "SABANETA"
					}, {
						"cityCode": "05642",
						"cityName": "SALGAR"
					}, {
						"cityCode": "05647",
						"cityName": "SAN ANDRÉS"
					}, {
						"cityCode": "05649",
						"cityName": "SAN CARLOS"
					}, {
						"cityCode": "05652",
						"cityName": "SAN FRANCISCO"
					}, {
						"cityCode": "05656",
						"cityName": "SAN JERÓNIMO"
					}, {
						"cityCode": "05658",
						"cityName": "SAN JOSÉ DE LA MONTAÑA"
					}, {
						"cityCode": "05659",
						"cityName": "SAN JUAN DE URABÁ"
					}, {
						"cityCode": "05660",
						"cityName": "SAN LUIS"
					}, {
						"cityCode": "05664",
						"cityName": "SAN PEDRO"
					}, {
						"cityCode": "05665",
						"cityName": "SAN PEDRO DE URABÁ"
					}, {
						"cityCode": "05667",
						"cityName": "SAN RAFAEL"
					}, {
						"cityCode": "05670",
						"cityName": "SAN ROQUE"
					}, {
						"cityCode": "05674",
						"cityName": "SAN VICENTE FERRER"
					}, {
						"cityCode": "05679",
						"cityName": "SANTA BÁRBARA"
					}, {
						"cityCode": "05042",
						"cityName": "SANTA FÉ DE ANTIOQUIA"
					}, {
						"cityCode": "05686",
						"cityName": "SANTA ROSA DE OSOS"
					}, {
						"cityCode": "05690",
						"cityName": "SANTO DOMINGO"
					}, {
						"cityCode": "05736",
						"cityName": "SEGOVIA"
					}, {
						"cityCode": "05756",
						"cityName": "SONSÓN"
					}, {
						"cityCode": "05761",
						"cityName": "SOPETRÁN"
					}, {
						"cityCode": "05789",
						"cityName": "TÁMESIS"
					}, {
						"cityCode": "05790",
						"cityName": "TARAZÁ"
					}, {
						"cityCode": "05792",
						"cityName": "TARSO"
					}, {
						"cityCode": "05809",
						"cityName": "TITIRIBÍ"
					}, {
						"cityCode": "05819",
						"cityName": "TOLEDO"
					}, {
						"cityCode": "05837",
						"cityName": "TURBO"
					}, {
						"cityCode": "05842",
						"cityName": "URAMITA"
					}, {
						"cityCode": "05847",
						"cityName": "URRAO"
					}, {
						"cityCode": "05854",
						"cityName": "VALDIVIA"
					}, {
						"cityCode": "05856",
						"cityName": "VALPARAÍSO"
					}, {
						"cityCode": "05858",
						"cityName": "VEGACHÍ"
					}, {
						"cityCode": "05861",
						"cityName": "VENECIA"
					}, {
						"cityCode": "05873",
						"cityName": "VIGÍA DEL FUERTE"
					}, {
						"cityCode": "05885",
						"cityName": "YALÍ"
					}, {
						"cityCode": "05887",
						"cityName": "YARUMAL"
					}, {
						"cityCode": "05890",
						"cityName": "YOLOMBÓ"
					}, {
						"cityCode": "05893",
						"cityName": "YONDÓ"
					}, {
						"cityCode": "05895",
						"cityName": "ZARAGOZA"
					}]
				},
				"08": {
					"deptName": "Atlántico",
					"cities": [{
						"cityCode": "08078",
						"cityName": "BARANOA"
					}, {
						"cityCode": "08001",
						"cityName": "BARRANQUILLA"
					}, {
						"cityCode": "08137",
						"cityName": "CAMPO DE LA CRUZ"
					}, {
						"cityCode": "08141",
						"cityName": "CANDELARIA"
					}, {
						"cityCode": "08296",
						"cityName": "GALAPA"
					}, {
						"cityCode": "08372",
						"cityName": "JUAN DE ACOSTA"
					}, {
						"cityCode": "08421",
						"cityName": "LURUACO"
					}, {
						"cityCode": "08433",
						"cityName": "MALAMBO"
					}, {
						"cityCode": "08436",
						"cityName": "MANATÍ"
					}, {
						"cityCode": "08520",
						"cityName": "PALMAR DE VARELA"
					}, {
						"cityCode": "08549",
						"cityName": "PIOJÓ"
					}, {
						"cityCode": "08558",
						"cityName": "POLONUEVO"
					}, {
						"cityCode": "08560",
						"cityName": "PONEDERA"
					}, {
						"cityCode": "08573",
						"cityName": "PUERTO COLOMBIA"
					}, {
						"cityCode": "08606",
						"cityName": "REPELÓN"
					}, {
						"cityCode": "08634",
						"cityName": "SABANAGRANDE"
					}, {
						"cityCode": "08638",
						"cityName": "SABANALARGA"
					}, {
						"cityCode": "08675",
						"cityName": "SANTA LUCÍA"
					}, {
						"cityCode": "08685",
						"cityName": "SANTO TOMÁS"
					}, {
						"cityCode": "08758",
						"cityName": "SOLEDAD"
					}, {
						"cityCode": "08770",
						"cityName": "SUAN"
					}, {
						"cityCode": "08832",
						"cityName": "TUBARÁ"
					}, {
						"cityCode": "08849",
						"cityName": "USIACURÍ"
					}]
				}
			})
		.decorator('geoCities', function ($delegate, geoDepartments) {
			var geoCities = $delegate,
				cities = [];

			_.each(geoCities, function (v, k) {
				var dName = (_.find(geoDepartments, { departmentCode: k })).departmentName;
				_.each(v.cities, function (vv) {
					var city = {
						cityCode: vv.cityCode,
						cityName: vv.cityName,
						deptCode: k,
						deptName: dName
					};
					cities.push(city);
				});

			});
			return cities;
		})

		.factory('BlankFactory', [function () {

		}])

		.provider('geoProvider', function ($cacheFactoryProvider) {
			var $cacheFactory = $cacheFactoryProvider.$get(),
				geoProvider   = this,
				geoCache      = $cacheFactory('geoCache');

            geoProvider.setCities = function (cities) {
            	geoCache.put('cities', cities);
			};
            geoProvider.getCities = function () {
            	return geoCache.get('cities');
			};

            geoProvider.setDepartments = function (departments) {
                geoCache.put('departments', departments);
            };
            geoProvider.getDepartments = function () {
                return geoCache.get('departments');
            };

            geoProvider.forceReload = function () {
            	geoCache.removeAll();
			};

			return {
				$get: function () {
					return geoProvider;
				}
			};

		})

		.service('geoService', function (geoProvider, geoCities, geoDepartments) {
			return {
				getCities: function () {
					var cities = geoProvider.getCities();
					if (!!!cities) {
						console.log('Get city values from angular.variable and set cache');
						cities = geoCities;
						geoProvider.setCities(cities);
					}
					return cities;
				},
				getDepartments: function () {
                    var departments = geoProvider.getDepartments();
                    if (!!!departments) {
                        console.log('Get department values from angular.variable and set cache');
                        departments = geoDepartments;
                        geoProvider.setDepartments(departments);
                    }
					return departments;
				}
			};

		});
}(window.angular));
