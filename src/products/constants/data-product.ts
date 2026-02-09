import { Product } from "../entities/product.entity";

export const Products: Product[] = [
    {
        id: '1',
        name: 'Cuenta Amiga',
        description: 'Cuenta de ahorros sin cuota de manejo',
        type: 'SAVINGS'
    },
    {
        id: '2',
        name: 'Tarjeta Visa Gold',
        description: 'Para tus compras internacionales',
        type: 'CREDIT_CARD'
    },
    {
        id: '3',
        name: 'Tarjeta Visa Platinum',
        description: 'Para tus compras internacionales',
        type: 'CREDIT_CARD'
    },
]