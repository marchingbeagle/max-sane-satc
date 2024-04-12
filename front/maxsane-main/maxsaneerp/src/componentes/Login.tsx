import React, { useState } from 'react';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPasswordRecovery, setShowPasswordRecovery] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Aqui você pode adicionar a lógica para fazer a autenticação
    console.log('Email:', email);
    console.log('Password:', password);
  };

  const handleForgotPasswordClick = () => {
    setShowPasswordRecovery(true);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`flex flex-col lg:flex-row h-screen transition-colors duration-500 ${darkMode ? 'bg-gray-800 text-white' : 'bg-gray-100 text-gray-900'}`}>
      <div className={`lg:w-1/2 h-screen flex flex-col justify-center items-center p-8 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
        <div className="max-w-md w-full space-y-8 py-8 px-6 rounded-md">
          <div className="flex justify-center">
            <img src="#" alt="Logo da Empresa" className="mb-8 w-24 h-24" />
          </div>
          <h2 className="mt-2 text-center text-3xl font-extrabold">{darkMode ? 'Dark Mode' : 'Logue em sua conta'}</h2>
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="email-address" className="sr-only">Email</label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border placeholder-gray-400 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Email"
                  value={email}
                  onChange={handleEmailChange}
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">Senha</label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border placeholder-gray-400 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Senha"
                  value={password}
                  onChange={handlePasswordChange}
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm">
                  Lembrar
                </label>
              </div>

              <div className="text-sm">
                <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500" onClick={handleForgotPasswordClick}>
                  Esqueceu sua senha?
                </a>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border text-sm font-medium rounded-md bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Sign in
              </button>
            </div>
          </form>
        </div>
        {showPasswordRecovery && (
          <div className="max-w-md w-full space-y-8 mt-8">
            <div className="text-center text-sm">
              <p className="text-gray-600">Recuperar sua senha</p>
            </div>
          </div>
        )}
      </div>
      <div className={`lg:w-1/2 h-screen flex flex-col justify-center items-center p-8 ${darkMode ? 'bg-gray-800 text-white' : 'bg-blue-800 text-white'}`}>
        <div className="text-center">
          <h2 className="mt-0 text-3xl font-extrabold">Sobre o ERP</h2>
          <p className="mt-4 text-lg leading-relaxed">Este sistema ERP foi desenvolvido por alunos da SATC, do curso de Engenharia de Software, com o objetivo de melhorar o ambiente de trabalho.</p>
        </div>
      </div>
      <div className={`fixed bottom-0 right-0 p-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
        <button onClick={toggleDarkMode}>{darkMode ? 'Light Mode' : 'Dark Mode'}</button>
      </div>
    </div>
  );
};

export default Login;
