import pkg from 'pg'
import config from './../configs/db-config.js';      // Traigo la configuracion de la base de datos.
import LogHelper from './../helpers/log-helper.js'

const { Pool }  = pkg;

export default class CalificacionesRepository {
    constructor() {
        // Se ejecuta siempre, (al instanciar la clase)
        console.log('Estoy en: CalificacionesRepository.constructor()');
        this.DBPool     = null;
    }

    getDBPool = () => {
        if (this.DBPool == null){
            this.DBPool = new Pool(config);
        }
        return this.DBPool;
    }

    getByMateriasIdAsync = async (fk) => {
        console.log(`CalificacionesRepository.getByMateriasIdAsync(${fk})`);
        let returnArray = null;
        
        try {
            const sql = `SELECT * FROM calificaciones WHERE id_materia=$1`;
            const values = [fk];
            const resultPg = await this.getDBPool().query(sql, values);
            returnArray = resultPg.rows;
        } catch (error) {
            LogHelper.logError(error);
        }
        return returnArray;
    }
}