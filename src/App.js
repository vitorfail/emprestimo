import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import X from './icons/x.png'
import V from './icons/v.png'
import Data from './icons/datasets.PNG'
import Caindo from './componentes/Caindo';
import C1 from "./icons/c1.png"
import C2 from "./icons/c2.png"
import C3 from "./icons/c3.png"
import C4 from "./icons/c4.png"
import Loading from './componentes/Loading';
import Negado from './componentes/Negado';
import Aprovado from './componentes/Aprovado';


function App(){
	const [status, setstatus] = useState("Fazer Análise")
	const [ resultado, setresultado] = useState(0)
	const imagens = [C1, C2, C3,C1, C4, C3,C1, C2, C3,C1, C4, C3, C1, C4, C3, C1, C2, C3, C1, C4, C3]
	const [comecar, setcomecar] = useState(false)	
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
		setresultado(0)
		setcomecar(true)
		setstatus("Aguarde.....")
		axios.post('https://ia-emprestimo-git-master-vitorfail.vercel.app/', {dados:[ UF, IDADE, ESCOLARIDADE, ESTADO_CIVIL, QT_FILHOS, CASA_PROPRIA,
			QT_IMOVEIS,  VL_IMOVEIS, OUTRA_RENDA_VALOR, TEMPO_ULTIMO_EMPREGO_MESES,
			TRABALHANDO_ATUALMENTE, ULTIMO_SALARIO,
			QT_CARROS, VALOR_TABELA_CARROS, SCORE_CREDITO]}
		).then( res => {
			if(res.data === 'NAO'){
				setTimeout(function(){
					let html = document.querySelector('html');
					html.className = "reprovado";
					setcomecar(false); 
					setresultado(2)
					setstatus("Fazer Análise")
				}, 4000)	
				setinicio(false)
				setaprovado(false)
			}
			if(res.data === 'SIM'){
				setTimeout(function(){
					let html = document.querySelector('html');
					html.className = "aprovado";
					setcomecar(false); 
					setresultado(1)
					setstatus("Fazer Análise")
				}, 4000)	
				setinicio(false)
				setaprovado(true)
			}
		})
		.catch(error => {
			setTimeout(function(){
				let html = document.querySelector('html');
                html.className = "reprovado";
				setcomecar(false); 
				setresultado(2)
				setstatus("Fazer Análise")
			}, 4000)
		})
	}
	useEffect(() => {
		setinicio(true)
		let btn = document.querySelector('.info');
		btn.addEventListener('mouseover', e => {
			let rect = e.target.getBoundingClientRect();
			let x = e.clientX - rect.left;
			let y = e.clientY - rect.top;
			btn.style.setProperty('--x', x + 'px');
			btn.style.setProperty('--y', y + 'px');
			console.log(x)
		});
	},[setinicio])
	return(
		<div className='app'>
			<div className='dinheiro'>
				<Caindo img={imagens} ></Caindo>
			</div>
			<div className='titulo'>
				<h2>Quer tentar?</h2>
				<h3>Preencha os campos</h3>
			</div>
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
						<h3>Casa própria</h3>
						<select onChange={(event) => setCASA_PROPRIA(event.target.value)}>
							<option value={0}>Não</option>
							<option value={1}>Sim</option>
						</select>
					</div>
					<div className='box-input'>
						<h3>Quantidade imóveis</h3>
						<input value={QT_IMOVEIS} onChange={(event) => setQT_IMOVEIS(event.target.value)}  placeholder='0'></input>
					</div>
					<div className='box-input'>
						<h3>Valor imóveis</h3>
						<input value={VL_IMOVEIS} onChange={(event) => setVL_IMOVEIS(event.target.value)}  placeholder='R$ 000,00'></input>
					</div>
					<div className='box-input'>
						<h3>Rendas extras</h3>
						<input value={OUTRA_RENDA_VALOR} onChange={(event) => setOUTRA_RENDA_VALOR(event.target.value)}  placeholder='R$ 000,00'></input>
					</div>
					<div className='box-input'>
						<h3>Tempo do último emprego</h3>
						<input value={TEMPO_ULTIMO_EMPREGO_MESES} onChange={(event) => setTEMPO_ULTIMO_EMPREGO_MESES(event.target.value)}  placeholder='0 anos'></input>
					</div>
					<div className='box-input'>
						<h3>Trabalhando atualmente</h3>
						<select onChange={(event) => setTRABALHANDO_ATUALMENTE(event.target.value)}>
							<option value={1}>Sim</option>
							<option value={0}>Não</option>
						</select>
					</div>
					<div className='box-input'>
						<h3>Último salário</h3>
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
						<h3>Score(Crédito)</h3>
						<input  value={SCORE_CREDITO} onChange={(event) => setSCORE_CREDITO(event.target.value)} placeholder='000'></input>
					</div>
				</div>
				<div className='result'>
					<h3>Aperter o  botão apenas depois de ter preenchido os campos</h3>
					<button onClick={() => analise()}>{status} </button>
					<Loading show={comecar?"flex":"none"} largura={200} ></Loading>
					{resultado==2?<Negado show={"flex"} largura={200}></Negado>:<div></div>}
					{resultado==1?<Aprovado show={"flex"} largura={200}></Aprovado>:<div></div>}
					
				</div>
			</div>
						<div className='info'>
				<h2>Como funciona?</h2>
				<h3>A simulação funciona através do método de predição, esse que por sua vez acontece quando ensinamos a máquina. 
					O processo de aprendizagem da máquina, ou machine learning, acontece quando passamos informações, seja por tabelas, excel e etc. Chamamos esse conjuntos de dados de <strong>dataset</strong>
					e a maquina entende a proporção desses dados como em uma regra de 3. Depois que a máquina aprende, passamos para ela a informações para que ela responda uma informação es específica
				</h3>
				<img src={Data}/>
				<h3>A imagem acima é o cabeçalho do dataset ultilizado para esse projeto. Ele contem
					 15 colunas e mais de 40 mill linhas</h3>
			</div>
		</div>
	)
}
export default App;
