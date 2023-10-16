import { pool } from '../conexion.js';

export const Alta = async (req, res) => {
    const {calificacion, clavealumno} = req.body
    try {
        
        const [rows] = await pool.query('INSERT INTO bnte_calificaciones (calificacion, clave) VALUES (?,?)',[calificacion,clavealumno])
        res.status(200).send({
            id: rows.insertId,
            message: "Dato ingresado correctamente"
        })
        
    } catch (error) {

        return res.status(402).json({
            error: error
        })
        
    }
}