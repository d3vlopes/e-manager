import { TableProps } from '.'

export const tableMock = {
  data: [
    {
      id: '1524d5s7',
      productName: 'Product Name 1',
      category: 'Categorie 1',
      inStock: true,
      price: 2.9,
      quantity: 10,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: '15d4s5da7a',
      productName: 'Product Name 2',
      category: 'Categorie 2',
      inStock: false,
      price: 100,
      quantity: 0,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: '5d4s87ddksjd',
      productName: 'Product Name 3',
      category: 'Categorie 3',
      inStock: true,
      price: 1.4,
      quantity: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ],
} as TableProps
