import { useState } from 'react';
import './App.css';

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


	return(
		<div className='app'>
			<div>
				<div className='box-input'>
					<h3>UF</h3>
					<select value={UF} ></select>
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
					<select value={CASA_PROPRIA} ></select>
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
					<select value={TRABALHANDO_ATUALMENTE} ></select>
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
