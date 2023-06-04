export interface Actividad {
    fecha: Date;
    hora: string;
    texto: string;
    detalle?: string;
    estado: 'pendiente' | 'realizada' | 'cancelada';
}