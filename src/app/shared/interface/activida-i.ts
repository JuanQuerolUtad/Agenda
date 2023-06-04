export interface ActividaI {
    fecha: string;
    hora: string;
    texto: string;
    detalle?: string;
    estado: 'pendiente' | 'realizada' | 'cancelada';
}
