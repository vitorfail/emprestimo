import { useState } from 'react';
import './App.css';
import axios from 'axios';

function App(){
	const [UF, setUF ] = useState()
	const [IDADE, setIDADE ] = useState()
	const [ESCOLARIDADE, setESCOLARIDADE ] = useState()
	const [ESTADO_CIVIL, setESTADO_CIVIL ] = useState()
	const [QT_FILHOS, setQT_FILHOS ] = useState()
	const [CASA_PROPRIA, setCASA_PROPRIA ] = useState()
	const [QT_IMOVEIS, setQT_IMOVEIS ] = useState()
	const [VL_IMOVEIS, setVL_IMOVEIS ] = useState()
	const [OUTRA_RENDA_VALOR, setOUTRA_RENDA_VALOR ] = useState()
	const [TEMPO_ULTIMO_EMPREGO_MESES, setTEMPO_ULTIMO_EMPREGO_MESES ] = useState()
	const [TRABALHANDO_ATUALMENTE, setTRABALHANDO_ATUALMENTE ] = useState()
	const [ULTIMO_SALARIO, setULTIMO_SALARIO ] = useState()
	const [QT_CARROS, setQT_CARROS ] = useState()
	const [VALOR_TABELA_CARROS, setVALOR_TABELA_CARROS ] = useState()
	const [SCORE_CREDITO, setSCORE_CREDITO ] = useState()

	function analise(){
		axios.post('', {UF: UF,
			IDADE: IDADE,
			ESCOLARIDADE: ESCOLARIDADE,
			ESTADO_CIVIL: ESTADO_CIVIL,
			QT_FILHOS: QT_FILHOS,
			CASA_PROPRIA: CASA_PROPRIA,
			QT_IMOVEIS: QT_IMOVEIS,
			VL_IMOVEIS: VL_IMOVEIS,
			OUTRA_RENDA_VALOR: OUTRA_RENDA_VALOR,
			TEMPO_ULTIMO_EMPREGO_MESES: TEMPO_ULTIMO_EMPREGO_MESES,
			TRABALHANDO_ATUALMENTE: TRABALHANDO_ATUALMENTE,
			ULTIMO_SALARIO: ULTIMO_SALARIO,
			QT_CARROS: QT_CARROS,
			VALOR_TABELA_CARROS: VALOR_TABELA_CARROS,
			SCORE_CREDITO: SCORE_CREDITO}
		).then( res => {
			console.log(res.data)
		})
		.catch(error => {
			console.log('deu errado')
		})
	}

	return(
		<div className='app'>
			<div>
				<div className='box-input'>
					<h3>UF</h3>
					<select onChange={(event) => setUF(event.currentTarget.value)}>
						<option value={0}>MG</option>
						<option value={1}>PR</option>
						<option value={2}>RJ</option>
						<option value={3}>SC</option>
						<option value={4}>SP</option>
					</select>
				</div>
				<div className='box-input'>
					<h3>Idade</h3>
					<input value={IDADE}  placeholder='12 anos'></input>
				</div>
				<div className='box-input'>
					<h3>Escolaridade</h3>
					<select value={ESCOLARIDADE} ></select>
				</div>
				<div className='box-input'>
					<h3>Estado civil</h3>
					<select value={ESTADO_CIVIL} ></select>
				</div>
				<div className='box-input'>
					<h3>Quantidade de filhos</h3>
					<input value={QT_FILHOS}  placeholder='0'></input>
				</div>
				<div className='box-input'>
					<h3>Casa própria</h3>
					<select onChange={(event) => setCASA_PROPRIA(event.currentTarget.value)}>
						<option value={0}>Não</option>
						<option value={1}>Sim</option>
					</select>
				</div>
				<div className='box-input'>
					<h3>Quantidade imóveis</h3>
					<input value={QT_IMOVEIS}  placeholder='0'></input>
				</div>
				<div className='box-input'>
					<h3>Valor imóveis</h3>
					<input value={VL_IMOVEIS}  placeholder='R$ 000,00'>R$ </input>
				</div>
				<div className='box-input'>
					<h3>Rendas extras</h3>
					<input value={OUTRA_RENDA_VALOR}  placeholder='R$ 000,00'>R$ </input>
				</div>
				<div className='box-input'>
					<h3>Tempo do último emprego</h3>
					<input value={TEMPO_ULTIMO_EMPREGO_MESES}  placeholder='0 anos'></input>
				</div>
				<div className='box-input'>
					<h3>Trabalhando atualmente</h3>
					<select onChange={(event) => setTRABALHANDO_ATUALMENTE(event.currentTarget.value)}>
						<option value={1}>Sim</option>
						<option value={0}>Não</option>
					</select>
				</div>
				<div className='box-input'>
					<h3>Último salário</h3>
					<input value={ULTIMO_SALARIO}  placeholder='R$ 000,00'>R$ </input>
				</div>
				<div className='box-input'>
					<h3>Quanidade de carros</h3>
					<input value={QT_CARROS}  placeholder='0'></input>
				</div>
				<div className='box-input'>
					<h3>Valor de mercado dos carros</h3>
					<input value={VALOR_TABELA_CARROS}  placeholder='R$ 000,00'>R$ </input>
				</div>
				<div className='box-input'>
					<h3>Score(Crédito)</h3>
					<input  value={SCORE_CREDITO} placeholder='000'></input>
				</div>
			</div>
		</div>
	)
}

export default App;
