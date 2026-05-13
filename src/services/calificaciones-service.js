import CalificacionesRepository from '../repositories/calificaciones-repository.js';
import CalificacionesService from './calificaciones-service.js';
export default class CalificacionesService {
    constructor() { 
        this.CalificacionesRepository = new CalificacionesRepository();
    }

    getByMateriasIdAsync = async (fk) => {
        console.log(`BUSCANDO POR ID MATERIA: MateriasService.getByFkAsync(${fk})`);
        return  await this.CalificacionesRepository.getByMateriasIdAsync(fk);
    }
}   