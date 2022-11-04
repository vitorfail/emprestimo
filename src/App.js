import './App.css';

function App(){
	return(
		<div className='app'>
			<div>
				<div className='box-input'>
					<h3>UF</h3>
					<select></select>
				</div>
				<div className='box-input'>
					<h3>Idade</h3>
					<input placeholder='12 anos'></input>
				</div>
				<div className='box-input'>
					<h3>Escolaridade</h3>
					<select></select>
				</div>
				<div className='box-input'>
					<h3>Estado civil</h3>
					<select></select>
				</div>
				<div className='box-input'>
					<h3>Escolaridade</h3>
					<select></select>
				</div>
				<div className='box-input'>
					<h3>Quantidade de filhos</h3>
					<input placeholder='0'></input>
				</div>
				<div className='box-input'>
					<h3>Último salário</h3>
					<input placeholder='R$ 000,00'>R$ </input>
				</div>
			</div>
		</div>
	)
}

export default App;
