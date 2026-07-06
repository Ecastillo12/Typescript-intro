interface Product {
    description: string;
    price: number;
}

const phone: Product = {
    description: 'Nokia A1',
    price: 150.0
}

const tablet: Product = {
    description: 'iPad Air',
    price: 850.0
}

interface TaxCalculationOptions {
    tax: number;
    products: Product[]
}

function taxCalculation( { tax, products }: TaxCalculationOptions ): number[] {
    let total = 0;

    products.forEach( product => {
        total += product.price;
    });

    return [total, total*tax];
}

const shoppingCart = [ phone, tablet ];
const tax = 0.15;


const [ total, taxes ] = taxCalculation({
    products: shoppingCart,
    tax,
});

console.log('Total', total);
console.log('Tax',taxes);



