import path from 'path';
import { createMongoModel } from './create.js';
import { checkHasDir, checkHasFile, writeContentOfFile } from './fs/index.js';

export const execCommand = (command, param, execFromCurrentDirectory) => {
    if (command.includes('model:mongo')) {
        // Comprobar si el nombre del modelo está vacío.
        if (!param) {
            console.error('Por favor, proporciona un nombre de modelo.');
            process.exit(1);
        }
    
        // Obtener la ruta absoluta de la carpeta "models".
        const modelsDir = path.resolve(execFromCurrentDirectory, 'models');
    
        // Comprobar si la carpeta "models" existe.
       checkHasDir(modelsDir)
    
        // Obtener la ruta absoluta del archivo del modelo.
        const modelFile = path.join(modelsDir, `${param}.js`);
    
        // Comprobar si el archivo del modelo ya existe.
       checkHasFile(modelFile)
    
        // Crear el archivo del modelo.
        const fileContent = createMongoModel(param)
    
        writeContentOfFile(modelFile, fileContent)
     
    } else {
        console.error('Invalid command', {command});
        process.exit(1);
    }
    
}