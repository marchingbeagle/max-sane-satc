function IntroComponent(){

    const a = 5, b = 2, nome = 'rodrigo';
    const aluno = {
        nome: 'João',
        email: 'joão@email.com'
    }
    return( 
        <div>
            <h2>Componente de Introdução</h2>
            <h3> Template expression</h3>
            <p>{nome}, o produto entre {a} e {b} é {a * b}</p>
            <p>Aluno {aluno.nome}<br/> E-mail: {aluno.email} </p>
        </div>
    )
}

export default IntroComponent