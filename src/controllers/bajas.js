import { pool } from '../conexion.js';

export const Baja = async (req, res) => {
    const {clavealumno} = req.body
    try {
        
        const [result] = await pool.query("DELETE FROM bnte_alumnos WHERE clave=?", [clavealumno])

        if (result.affectedRows <= 0) return res.status(402).json({
            message: 'Estudiante no encontrado'  
        })
    
        res.status(200).json({
            message:"Estudiante eliminado"
        })
        
    } catch (error) {

        return res.status(402).json({
            error: error
        })
        
    }
}