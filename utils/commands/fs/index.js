import fs from 'fs-extra';

export const checkHasDir = (folderName) => {
    if (!fs.existsSync(folderName)) {
        console.log(`La carpeta "${folderName}" no existe. Creándola...`);
        fs.mkdirSync(folderName);
    }
}

export const checkHasFile = (fileName) => {
    if (fs.existsSync(fileName)) {
        console.error(`El archivo del modelo "${fileName}.js" ya existe.`);
        process.exit(1);
    }
}

export const writeContentOfFile = (fileName, fileContent) => {
    fs.writeFile(
        fileName,
        fileContent
    )
        .then(() => {
            console.log(`El archivo del modelo "${fileName}" ha sido creado.`);
        })
        .catch((err) => {
            console.error(`Se produjo un error al crear el archivo del modelo: ${err}`);
        });
}