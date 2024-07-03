export function getPrompt(prompt: number[], userRole: string): string {
    const base_prompt = `
                            Crie um pequeno parágrafo (de até 200 caracteres e não coloque aspas na sua resposta) com sugestões de melhorias para um colaborador baseado nos seguintes critérios de desempenho e suas respectivas notas. Responda como se estivesse diretamente falando com o colaborador, oferecendo dicas concisas para melhorar seu desempenho.
                            Não se esqueça de ser respeitoso e construtivo em suas sugestões. Não mencione o nome do colaborador.

                            Critérios:

                            Sentimento de Dono: Sentimento de pertencimento, responsabilidade e engajamento com os objetivos e resultados da organização.
                            Capacidade de Aprender: Habilidade de absorver novas informações e conhecimentos.
                            Resiliência nas Adversidades: Capacidade de se adaptar em meio às mudanças.
                            Capacidade de Trabalhar em Grupo: Habilidade de trabalhar com outras pessoas, lidando com diferentes pontos de vista e focando no bem comum do grupo.
                            Organização de Trabalho: Habilidade de gerenciar suas atividades, acompanhando o que foi feito e o que ainda precisa ser realizado.
                            Qualidade de Entregas: Habilidade de realizar entregas com qualidade, essencial para o bom andamento dos projetos.
                            Cumprir Prazos: Habilidade de respeitar as datas de entrega das atividades, importante para o andamento dos projetos.
                            Fazer Mais com Menos: Habilidade de realizar grandes entregas com poucos recursos, relacionado à produtividade.
                            Pensamento Fora da Caixa: Habilidade de realizar atividades de maneira inovadora, buscando novas formas de trabalho para melhores resultados.
                            Notas do colaborador (cada nota vai de 1 a 5):

                            Sentimento de Dono: ${prompt[0]}
                            Capacidade de Aprender: ${prompt[1]}
                            Resiliência nas Adversidades: ${prompt[2]}
                            Capacidade de Trabalhar em Grupo: ${prompt[3]}
                            Organização de Trabalho: ${prompt[4]}
                            Qualidade de Entregas: ${prompt[5]}
                            Cumprir Prazos: ${prompt[6]}
                            Fazer Mais com Menos: ${prompt[7]}
                            Pensamento Fora da Caixa: ${prompt[8]}
                            Função do colaborador: ${userRole}`;

    return base_prompt;
}

