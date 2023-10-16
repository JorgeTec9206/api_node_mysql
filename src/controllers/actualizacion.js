import { pool } from '../conexion.js';

export const Actualizacion = async (req, res) => {
    const { materia, calificacion, clavealumno } = req.body

    try {
        
        const [result] = await pool.query("UPDATE bnte_calificaciones SET materia=?, calificacion=?  WHERE clavealumno=?", [materia,calificacion,clavealumno])
        if (result.affectedRows === 0) return res.status(404).json({
            message: 'Alumno no encomntrado para actualizaer'  
        })

        res.status(200).json({
            data: result
        })
    
    } catch (error) {

        return res.status(402).json({
            error: error
        })
        
    }
}