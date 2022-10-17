// ! Object - Refactor Object to be easily accessible
const getDrinks = (type: string): string => {

    const drinks = {
        coke: 'Coke',
        pepsi: 'Pepsi',
        milk: 'Milk',
        mushroomboil: 'Mushroom'
    }
    const result = drinks[type.toLowerCase() as keyof typeof drinks] ?? 'Unknows Drinks';
    return result;
}
export {
    getDrinks
}