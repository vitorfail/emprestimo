import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import X from './icons/x.png'
import V from './icons/v.png'
import Data from './icons/datasets.PNG'

function App(){
	const [inicio, setinicio] = useState(false) 
	const [aprovado, setaprovado] = useState(false) 
	const [UF, setUF ] = useState(0)
	const [IDADE, setIDADE ] = useState(10)
	const [ESCOLARIDADE, setESCOLARIDADE ] = useState(0)
	const [ESTADO_CIVIL, setESTADO_CIVIL ] = useState(0)
	const [QT_FILHOS, setQT_FILHOS ] = useState(0)
	const [CASA_PROPRIA, setCASA_PROPRIA ] = useState(0)
	const [QT_IMOVEIS, setQT_IMOVEIS ] = useState(0)
	const [VL_IMOVEIS, setVL_IMOVEIS ] = useState(0)
	const [OUTRA_RENDA_VALOR, setOUTRA_RENDA_VALOR ] = useState(0)
	const [TEMPO_ULTIMO_EMPREGO_MESES, setTEMPO_ULTIMO_EMPREGO_MESES ] = useState(0)
	const [TRABALHANDO_ATUALMENTE, setTRABALHANDO_ATUALMENTE ] = useState(0)
	const [ULTIMO_SALARIO, setULTIMO_SALARIO ] = useState(0)
	const [QT_CARROS, setQT_CARROS ] = useState(0)
	const [VALOR_TABELA_CARROS, setVALOR_TABELA_CARROS ] = useState(0)
	const [SCORE_CREDITO, setSCORE_CREDITO ] = useState(0)

	function analise(){
		axios.post('https://ia-emprestimo.herokuapp.com/', {dados:[ UF, IDADE, ESCOLARIDADE, ESTADO_CIVIL, QT_FILHOS, CASA_PROPRIA,
			QT_IMOVEIS,  VL_IMOVEIS, OUTRA_RENDA_VALOR, TEMPO_ULTIMO_EMPREGO_MESES,
			TRABALHANDO_ATUALMENTE, ULTIMO_SALARIO,
			QT_CARROS, VALOR_TABELA_CARROS, SCORE_CREDITO]}
		).then( res => {
			if(res.data === 'NAO'){
				setinicio(false)
				setaprovado(false)
			}
			if(res.data === 'SIM'){
				setinicio(false)
				setaprovado(true)
			}
		})
		.catch(error => {
			console.log('deu errado')
		})
	}
	useEffect(() => {
		setinicio(true)
	},[setinicio])
	return(
		<div className='app'>
			
			<div className='emprestimo'>
				<div className='entradas'>
					<div className='box-input'>
						<h3>UF</h3>
						<select onChange={(event) => setUF(event.target.value)}>
							<option value={0}>MG</option>
							<option value={1}>PR</option>
							<option value={2}>RJ</option>
							<option value={3}>SC</option>
							<option value={4}>SP</option>
						</select>
					</div>
					<div className='box-input'>
						<h3>Idade</h3>
						<input value={IDADE} onChange={(event) => setIDADE(event.target.value)} placeholder='12 anos'></input>
					</div>
					<div className='box-input'>
						<h3>Escolaridade</h3>
						<select onChange={(event) => setESCOLARIDADE(event.target.value)}>
							<option value={0}>Segundo grau completo</option>
							<option value={1}>Superior completo</option>
							<option value={2}>Superior cursando</option>
						</select>
					</div>
					<div className='box-input'>
						<h3>Estado civil</h3>
						<select onChange={(event) => setESTADO_CIVIL(event.target.value)}>
							<option value={0}>Casado</option>
							<option value={1}>Divorciado</option>
							<option value={2}>Solterio</option>
							<option value={3}>Viuvo</option>
						</select>
					</div>
					<div className='box-input'>
						<h3>Quantidade de filhos</h3>
						<input value={QT_FILHOS} onChange={(event) => setQT_FILHOS(event.target.value)} placeholder='0'></input>
					</div>
					<div className='box-input'>
						<h3>Casa pr??pria</h3>
						<select onChange={(event) => setCASA_PROPRIA(event.target.value)}>
							<option value={0}>N??o</option>
							<option value={1}>Sim</option>
						</select>
					</div>
					<div className='box-input'>
						<h3>Quantidade im??veis</h3>
						<input value={QT_IMOVEIS} onChange={(event) => setQT_IMOVEIS(event.target.value)}  placeholder='0'></input>
					</div>
					<div className='box-input'>
						<h3>Valor im??veis</h3>
						<input value={VL_IMOVEIS} onChange={(event) => setVL_IMOVEIS(event.target.value)}  placeholder='R$ 000,00'></input>
					</div>
					<div className='box-input'>
						<h3>Rendas extras</h3>
						<input value={OUTRA_RENDA_VALOR} onChange={(event) => setOUTRA_RENDA_VALOR(event.target.value)}  placeholder='R$ 000,00'></input>
					</div>
					<div className='box-input'>
						<h3>Tempo do ??ltimo emprego</h3>
						<input value={TEMPO_ULTIMO_EMPREGO_MESES} onChange={(event) => setTEMPO_ULTIMO_EMPREGO_MESES(event.target.value)}  placeholder='0 anos'></input>
					</div>
					<div className='box-input'>
						<h3>Trabalhando atualmente</h3>
						<select onChange={(event) => setTRABALHANDO_ATUALMENTE(event.target.value)}>
							<option value={1}>Sim</option>
							<option value={0}>N??o</option>
						</select>
					</div>
					<div className='box-input'>
						<h3>??ltimo sal??rio</h3>
						<input value={ULTIMO_SALARIO} onChange={(event) => setULTIMO_SALARIO(event.target.value)}  placeholder='R$ 000,00'></input>
					</div>
					<div className='box-input'>
						<h3>Quanidade de carros</h3>
						<input value={QT_CARROS} onChange={(event) => setQT_CARROS(event.target.value)}  placeholder='0'></input>
					</div>
					<div className='box-input'>
						<h3>Valor de mercado dos carros</h3>
						<input value={VALOR_TABELA_CARROS} onChange={(event) => setVALOR_TABELA_CARROS(event.target.value)}  placeholder='R$ 000,00'></input>
					</div>
					<div className='box-input'>
						<h3>Score(Cr??dito)</h3>
						<input  value={SCORE_CREDITO} onChange={(event) => setSCORE_CREDITO(event.target.value)} placeholder='000'></input>
					</div>
				</div>
				<div className='resultado'>
					{inicio? <div className='inicio'>
						<h2>Teste sua aprova????o</h2>
					</div>: false}
					{aprovado? <div className='positivo'>
						<img src={V}/>
						<h2>Aprovado</h2>
						<h3>Voc?? passou na simula????o</h3>
					</div>: <div className='negativo'>
						<img src={X}/>
						<h2>Reprovado</h2>
						<h3>Seu empr??stimo n??o passou an siluma????o</h3>
					</div>}
				</div>
			</div>
			<button onClick={() => analise()}>Simular</button>
			<div className='info'>
				<h2>Como funciona?</h2>
				<h3>A simula????o funciona atrav??s do m??todo de predi????o, esse que por sua vez acontece quando ensinamos a m??quina. 
					O processo de aprendizagem da m??quina, ou machine learning, acontece quando passamos informa????es, seja por tabelas, excel e etc. Chamamos esse conjuntos de dados de <strong>dataset</strong>
					e a maquina entende a propor????o desses dados como em uma regra de 3. Depois que a m??quina aprende, passamos para ela a informa????es para que ela responda uma informa????o es espec??fica
				</h3>
				<img src={Data}/>
				<h3>A imagem acima ?? o cabe??alho do dataset ultilizado para esse projeto. Ele contem
					 15 colunas e mais de 40 mill linhas</h3>
			</div>
		</div>
	)
}
export default App;
