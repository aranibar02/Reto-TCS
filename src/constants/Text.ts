type healthPlans = {
    name: string,
    price: Number,
    period: string,
};

const healthPlans : healthPlans[] = [
    {name: "BASICO", price: 160, period: "mensual"},
    {name: "AVANZADO", price: 200, period: "mensual"},
    {name: "PREMIUM", price: 250, period: "mensual"},
    {name: "FULL", price: 500, period: "mensual"},
]


export {
    healthPlans,
}