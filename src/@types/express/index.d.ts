// indicando a biblioteca que quero sobrescrever
// pegando tudo que tem dentro de Request + o user_id

declare namespace Express {
export interface Request {

    user_id: string;
}


}