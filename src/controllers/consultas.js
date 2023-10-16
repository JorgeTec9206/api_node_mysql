
import { pool } from '../conexion.js';

export const Consultas = async (req, res) => {
    console.log("xxx");
    try {
        
        const [result] = await pool.query('SELECT * FROM bnte_calificaciones')
    
        res.status(200).json({
            producto: result
        });
        
    } catch (error) {

        return res.status(402).json({
            message: 'Paso algo !',
            error: error
        })
        
    }
}

export const ConsultasCursos = async (req, res) => {
    const {status} = req.body
    try {
        
        const [result] = await pool.query('SELECT * FROM bnte_cursos WHERE status=?',[status])
    
        res.status(200).json({
            producto: result
        });
        
    } catch (error) {

        return res.status(402).json({
            message: 'Paso algo !',
            error: error
        })
        
    }
}