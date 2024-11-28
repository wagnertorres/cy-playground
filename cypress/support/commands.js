// facilita a importação dinâmica de arquivos em um projeto
const contextModules = require.context('./commands', true, /\.js$/);
contextModules.keys().forEach(contextModules);