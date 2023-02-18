import { Categories } from "../types/Categories";

export const categories: Categories = {
    food: { title: 'Alimentação', color: 'blue', expense: true },
    rent: { title: 'Aluguel', color: 'yellow', expense: true },
    supermarket: { title: 'Mercado', color: 'green', expense: true },
    salary: { title: 'Salario', color: 'violet', expense: false },
    extra: { title: 'Por fora', color: 'grey', expense: false },
    house: { title: 'Casa', color: 'red', expense: true },
    mobile: { title: 'Uber', color: 'orange', expense: true }

}