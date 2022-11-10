/**
 * GET      => Buscar uma informação
 * POST     => Inserir (Criar) uma informação 
 * PUT      => Alterar uma informação
 * DELETE   => Deletar um dado
 * PATCH    => Alterar uma informação específica
 */

/**
 * Tipos de parâmetros 
 * Routes Params => http://localhost:3000/produtos/7879879875464
 * Query Params => http://localhost:3000/produtos?name=teclado&description=tecladonom&
 * 
 * Body Params => {
 *  "name": "teclado",
 *  "description": "teclado bom"m
 * }
 */

app.get("/test", (request, response) => {
    //Request => Entrando
    //Response => Saindo
    return response.send("Olá NLW");
});

app.post("/test-post", (request, response) => {
    return response.send("Olá NLW método POST");
});