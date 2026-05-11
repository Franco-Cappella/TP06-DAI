import MateriasRepository from '../repositories/materias-repository.js';

export default class MateriasService {
    constructor() {
        this.MateriasRepository = new MateriasRepository();
    }
    
    getAllAsync() {
        console.log('BUSCANDO TODO: MateriasService.getAllAsync()');
        return this.MateriasRepository.getAllAsync();
    }
    
    getByIdAsync = async (id) => {
        console.log(`BUSCANDO POR ID: MateriasService.getByIdAsync(${id})`);
        return  await this.MateriasRepository.getByIdAsync(id);
    }
    
     createAsync = async (entity) => {
        console.log(`CREANDO MATERIA: MateriasService.createAsync(${JSON.stringify(entity)})`);
        const newId = await this.MateriasRepository.createAsync(entity);
        return newId;
    }

    updateAsync = async (entity) => {
        console.log(`MODIFICANDO MATERIA: MateriasService.updateAsync(${JSON.stringify(entity)})`);
        const rowsAffected = await this.MateriasRepository.updateAsync(entity);
        return rowsAffected;
    }
}