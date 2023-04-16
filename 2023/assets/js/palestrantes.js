

let body = document.querySelector('.corpo-tabela');

let array = [
    {
        "NOME": "Débora Ruth da Silva Valentim ",
        "Sala": "Videoconferência",
        "HORÁRIO": "08:00-09:00",
        "ATIVIDADE": "Computação Forense no Ambito Criminal ",
        "DIA": "Terça-feira (18/04)",
        "DIVULGAÇÃO": "OK"
    },
    {
        "NOME": "Allan Wariss",
        "Sala": "Sala 7",
        "HORÁRIO": "08:00-10:00",
        "ATIVIDADE": "Minicurso de Python",
        "DIA": "Terça-feira (18/04)",
        "DIVULGAÇÃO": "OK"
    },
    {
        "NOME": "Anna Beatriz dos Santos Marques",
        "Sala": "Sala 2",
        "HORÁRIO": "08:00-11:00",
        "ATIVIDADE": "Modelando a interação e navegação do usuário com foco na usabilidade",
        "DIA": "Terça-feira (18/04)",
        "DIVULGAÇÃO": "OK"
    },
    {
        "NOME": "Liana Mara Carvalho de Menezes",
        "Sala": "Videoconferência",
        "HORÁRIO": "09:00-10:00",
        "ATIVIDADE": "Uma viagem ao mundo da Internet das Coisas",
        "DIA": "Terça-feira (18/04)",
        "DIVULGAÇÃO": "OK"
    },
    {
        "NOME": "Bárbara Gabrielle Silva Santos",
        "Sala": "Sala 1",
        "HORÁRIO": "09:00-10:00",
        "ATIVIDADE": "Mercado de trabalho e Diversidade e Inclusão",
        "DIA": "Terça-feira (18/04)"
    },
    {
        "NOME": "Rafael Evangelista Caminha Silva",
        "Sala": "Laboratório 4B",
        "HORÁRIO": "09:00-12:00",
        "ATIVIDADE": "Criando testes automatizados com Robot Framework",
        "DIA": "Terça-feira (18/04)",
        "DIVULGAÇÃO": "OK"
    },
    {
        "NOME": "Marcel Bastos Bleasby",
        "Sala": "LAB 2A",
        "HORÁRIO": "09:00-12:00",
        "ATIVIDADE": "Descomplicando o figma",
        "DIA": "Terça-feira (18/04)",
        "DIVULGAÇÃO": "OK"
    },
    {
        "NOME": "Israely Lima de Oliveira",
        "Sala": "LAB 2A",
        "HORÁRIO": "09:00-12:00",
        "ATIVIDADE": "Descomplicando o figma",
        "DIA": "Terça-feira (18/04)",
        "DIVULGAÇÃO": "OK"
    },
    {
        "NOME": "Diana Lara de Sousa Costa",
        "Sala": "Videoconferência",
        "HORÁRIO": "10:00-11:00",
        "ATIVIDADE": "“Diversificar e Incluir para Inovar: mercado de trabalho do mundo Tech”",
        "DIA": "Terça-feira (18/04)",
        "DIVULGAÇÃO": "OK"
    },
    {
        "NOME": "Karine Silva Sousa ",
        "Sala": "Sala 6",
        "HORÁRIO": "10:00-12:00",
        "ATIVIDADE": "Importância do design nas tecnologias do sistema de saúde pública",
        "DIA": "Terça-feira (18/04)",
        "DIVULGAÇÃO": "OK"
    },
    {
        "NOME": "Rhenara Alves Oliveira",
        "Sala": "Videoconferência",
        "HORÁRIO": "11:00 - 12:00",
        "ATIVIDADE": "Desafios da mulher na área da TI: Um relato de experiência ",
        "DIA": "Terça-feira(18/04)",
        "DIVULGAÇÃO": "OK"
    },
    {
        "NOME": "Ana Iza de Sousa Alencar",
        "Sala": "Videoconferência",
        "HORÁRIO": "11:00 - 12:00",
        "ATIVIDADE": "Desafios da mulher na área da TI: Um relato de experiência ",
        "DIA": "Terça-feira(18/04)",
        "DIVULGAÇÃO": "OK"
    },
    {
        "NOME": "Maria Elanne Mendes Rodrigues",
        "Sala": "Videoconferência",
        "HORÁRIO": "11:00 - 12:00",
        "ATIVIDADE": "Desafios da mulher na área da TI: Um relato de experiência ",
        "DIA": "Terça-feira(18/04)",
        "DIVULGAÇÃO": "OK"
    },
    {
        "NOME": "Karina da Silva Castelo Branco",
        "Sala": "Videoconferência",
        "HORÁRIO": "11:00-12:00",
        "ATIVIDADE": "Desafios da mulher na área da TI: Um relato de experiência ",
        "DIA": "Terça-feira(18/04)",
        "DIVULGAÇÃO": "OK"
    },
    {
        "NOME": "Gabriel Barros Aragão Silva",
        "Sala": "sala 2",
        "HORÁRIO": "11:00-12:00",
        "ATIVIDADE": "Soft e Hard skills: Potencializar a transição da universidade para o mercado de trabalho",
        "DIA": "Terça-feira (18/04)",
        "DIVULGAÇÃO": "OK"
    },
    {
        "NOME": "Wesley Santos",
        "Sala": "LAB1A",
        "HORÁRIO": "13:30 - 17:30",
        "ATIVIDADE": "Introdução ao Desenvolvimento de Jogos com Unity",
        "DIA": "Terça-feira (18/04)",
        "DIVULGAÇÃO": "OK"
    },
    {
        "NOME": "Sara Girão Guimarães",
        "Sala": "sala 2",
        "HORÁRIO": "14:30-15:30",
        "ATIVIDADE": "Como me desenvolver na Área de Qualidade de Software?",
        "DIA": "Terça-feira (18/04)",
        "DIVULGAÇÃO": "OK"
    },
    {
        "NOME": "Lucinara Kecia Silva Fernandes",
        "Sala": "Sala 6",
        "HORÁRIO": "14:30-15:30",
        "ATIVIDADE": "Metodologias Ágeis no Desenvolvimento de Software",
        "DIA": "Terça-feira (18/04)",
        "DIVULGAÇÃO": "OK"
    },
    {
        "NOME": "Anna Victoria Ferreira da Silva",
        "Sala": "Videoconferência",
        "HORÁRIO": "14:30-15:30",
        "ATIVIDADE": "O que faz um Engenheiro de Software com foco em Testes? ",
        "DIA": "Terça-feira (18/04)",
        "DIVULGAÇÃO": "OK"
    },
    {
        "NOME": "Vinícius Soares Barbosa",
        "Sala": "Videoconferência",
        "HORÁRIO": "15:30 - 16:30",
        "ATIVIDADE": "O que é nano e como se envolver neste laboratório open source vivo",
        "DIA": "Terça-feira (18/04)",
        "DIVULGAÇÃO": "OK"
    },
    {
        "NOME": "Luiza Jorgiana Moura da Silva ",
        "Sala": "Sala 1",
        "HORÁRIO": "15:30-16:30",
        "ATIVIDADE": "O que saber sobre saúde mental e como posso cuidar de mim e ajudar aos outros.",
        "DIA": "Terça-feira(18/04)",
        "DIVULGAÇÃO": "OK"
    },
    {
        "NOME": "Lucinara Kecia Silva Fernandes",
        "Sala": "Laboratório 4B",
        "HORÁRIO": "15:30-17:30",
        "ATIVIDADE": "Kanban na prática",
        "DIA": "Terça-feira (18/04)",
        "DIVULGAÇÃO": "OK"
    },
    {
        "NOME": "Luiza Fernanda de Oliveira Albano Carvalho ",
        "Sala": "Sala 7",
        "HORÁRIO": "15:30-17:30",
        "ATIVIDADE": "Libras em Campus.",
        "DIA": "Terça-feira (18/04)",
        "DIVULGAÇÃO": "OK"
    },
    {
        "NOME": "Bianca Tiane de Carvalho dos Santos ",
        "Sala": "Sala 6",
        "HORÁRIO": "15:30-17:30",
        "ATIVIDADE": "Aplicacão prática de metodologias de UX Design",
        "DIA": "Terça-feira (18/04)",
        "DIVULGAÇÃO": "OK"
    },
    {
        "NOME": "Rebeca Alves Sousa",
        "Sala": "Sala 1",
        "HORÁRIO": "16:30-17:30",
        "ATIVIDADE": "Como conseguir seu primeiro emprego em tecnologia",
        "DIA": "Terça-feira (18/04)",
        "DIVULGAÇÃO": "OK"
    },
    {
        "NOME": "Mário Wedney de Lima Moreira",
        "Sala": "Sala 1",
        "HORÁRIO": "08:00 - 09:00",
        "ATIVIDADE": "Redes Neurais Convolucionais para Contagem Automática em Carcinicultura",
        "DIA": "Quarta-feira (19/04)",
        "DIVULGAÇÃO": "OK"
    },
    {
        "NOME": "Rubens Abraão da Silva Sousa",
        "Sala": "sala 2",
        "HORÁRIO": "08:00 - 10:00",
        "ATIVIDADE": "Gestão hibrida e suas diferentes formas de aplicações",
        "DIA": "Quarta-feira (19/04)",
        "DIVULGAÇÃO": "OK"
    },
    {
        "NOME": "Geovanna de Araújo Silva",
        "Sala": "sala 2",
        "HORÁRIO": "09:00 - 10:00",
        "ATIVIDADE": "Tecnologia e Sustentabilidade: a integração da TI no desenvolvimento sustentável",
        "DIA": "Quarta-feira (19/04)",
        "DIVULGAÇÃO": "OK"
    },
    {
        "NOME": "Lydiana Rodrigues de Oliveira",
        "Sala": "sala 2",
        "HORÁRIO": "09:00 - 12:00",
        "ATIVIDADE": "Tecnologia e Sustentabilidade: a integração da TI no Desenvolvimento Sustentávevl",
        "DIA": "Quarta-feira (19/04)",
        "DIVULGAÇÃO": "OK"
    },
    {
        "NOME": "Matheus Henrique Esteves Paixão",
        "Sala": "LAB1A",
        "HORÁRIO": "10:00 - 11:00",
        "ATIVIDADE": "MicroFrontEnds: Conceitos e Prática",
        "DIA": "Quarta-feira (19/04)",
        "DIVULGAÇÃO": "OK"
    },
    {
        "NOME": "Matheus Henrique Esteves Paixão(mudaram a atividade)",
        "Sala": "Sala 1",
        "HORÁRIO": "10:00 - 12:00",
        "ATIVIDADE": "Uso de IA no processo de software: ajuda ou ameaça?",
        "DIA": "Quarta-feira (19/04)",
        "DIVULGAÇÃO": "OK"
    },
    {
        "NOME": "Dayana Mazete Cordeiro",
        "Sala": "Videoconferência",
        "HORÁRIO": "10:00 - 12:00",
        "ATIVIDADE": "Indo além do técnico - A importância das soft skill no mundo tech",
        "DIA": "Quarta-feira (19/04)",
        "DIVULGAÇÃO": "OK"
    },
    {
        "NOME": "José Lassance de Castro Silva ",
        "Sala": "Sala 7",
        "HORÁRIO": "10:00- 11:00",
        "ATIVIDADE": "Infraestrutura de TIC do estado do Ceará ",
        "DIA": "Quarta-feira (19/04)",
        "DIVULGAÇÃO": "OK"
    },
    {
        "NOME": "Lucas Antônio Calixto Ferreira",
        "Sala": "Videoconferência",
        "HORÁRIO": "10:00-11:00",
        "ATIVIDADE": "Diversidade na prática: como a gestão de DE&I impacta positivamente os resultados",
        "DIA": "Quarta-feira (19/04)",
        "DIVULGAÇÃO": "OK"
    },
    {
        "NOME": "Andreza Fernandes de Oliveira",
        "Sala": "Videoconferência",
        "HORÁRIO": "10:00-12:00",
        "ATIVIDADE": "O Caminho das Pedras: da universidade ao Mercado de Trabalho. O que esperam de mim?",
        "DIA": "Quarta-feira (19/04)",
        "DIVULGAÇÃO": "OK"
    },
    {
        "NOME": "Pedro Lucas Luna Araujo Vieira",
        "Sala": "Auditório I",
        "HORÁRIO": "10:00-12:00",
        "ATIVIDADE": "Abri uma startup, e aí?",
        "DIA": "Quarta-feira (19/04)"
    },
    {
        "NOME": "Sandra Regina Rocha",
        "Sala": "Sala 6",
        "HORÁRIO": "11:00-12:00",
        "ATIVIDADE": "Inteligência emocional e roda da vida",
        "DIA": "Quarta-feira (19/04)",
        "DIVULGAÇÃO": "OK"
    },
    {
        "NOME": "Emilly Maryelle Xavier Pereira",
        "Sala": "Videoconferência",
        "HORÁRIO": "13:30  - 14:30",
        "ATIVIDADE": "Desenvolvimento de jogos e a qualidade de processos nos produtos de software",
        "DIA": "Quarta-feira (19/04)",
        "DIVULGAÇÃO": "OK"
    },
    {
        "NOME": "Sidevaldo Vinícius Paulino de Souza(junto com Emilly)",
        "Sala": "Videoconferência",
        "HORÁRIO": "13:30 - 14:30",
        "ATIVIDADE": "Desenvolvimento de jogos e a qualidade de processos nos produtos de software",
        "DIA": "Quarta-feira (19/04)",
        "DIVULGAÇÃO": "OK"
    },
    {
        "NOME": "Francisco Olavo do Nascimento Silva Melo(junto com Emilly)",
        "Sala": "Videoconferência",
        "HORÁRIO": "13:30 - 14:30",
        "ATIVIDADE": "Desenvolvimento de jogos e a qualidade de processos nos produtos de software",
        "DIA": "Quarta-feira (19/04)",
        "DIVULGAÇÃO": "OK"
    },
    {
        "NOME": "Lucas José Sousa Lima(junto com Emilly)",
        "Sala": "Videoconferência",
        "HORÁRIO": "13:30 - 14:30",
        "ATIVIDADE": "Desenvolvimento de jogos e a qualidade de processos nos produtos de software.",
        "DIA": "Quarta-feira (19/04)",
        "DIVULGAÇÃO": "OK"
    },
    {
        "NOME": "Mayk Jadam Salustiano dantas",
        "Sala": "Auditório 1",
        "HORÁRIO": "13:30 - 15:30",
        "ATIVIDADE": "Palestra sobre sua startup, Demonstração da sua startup, roda de conversa   ",
        "DIA": "Quarta-Feira(19/04)",
        "DIVULGAÇÃO": "OK"
    },
    {
        "NOME": "Carlos Gabriel Leite Barros",
        "Sala": "LAB 2A",
        "HORÁRIO": "13:30 - 15:30",
        "ATIVIDADE": "Criando suas próprias ferramentas no Vscode",
        "DIA": "Quarta-feira (19/04)",
        "DIVULGAÇÃO": "OK"
    },
    {
        "NOME": "Adriana Lopes Damian",
        "Sala": "Sala 2",
        "HORÁRIO": "13:30 - 15:30",
        "ATIVIDADE": "Análise da Experiência de Usuários por meio da Abordagem Dogfooding",
        "DIA": "Quarta-feira (22/03)",
        "DIVULGAÇÃO": "OK"
    },
    {
        "NOME": "Fernanda Ferreira do Nascimento",
        "Sala": "LAB 2A",
        "HORÁRIO": "13:30 - 16:30",
        "ATIVIDADE": "Nuances para o desenvolvimento Backend com NodeJS",
        "DIA": "Quarta-feira (19/04)",
        "DIVULGAÇÃO": "OK"
    },
    {
        "NOME": "DANIEL DIEGO LACERDA CIRILO",
        "Sala": "Sala 7",
        "HORÁRIO": "13:30 - 17:30",
        "ATIVIDADE": "Jornada do Desenvolvedor de Jogos Indie",
        "DIA": "Quarta-feira (19/04)",
        "DIVULGAÇÃO": "OK"
    },
    {
        "NOME": "Igor Mendes",
        "Sala": "Sala 2",
        "HORÁRIO": "14:30 - 16:30",
        "ATIVIDADE": "Programadores e a Síndrome do Impostor, um casamento indesejado",
        "DIA": "Quarta-feira (19/04)",
        "DIVULGAÇÃO": "OK"
    },
    {
        "NOME": "Williana Luzia Sousa Leite",
        "Sala": "Sala 1",
        "HORÁRIO": "14:30 - 16:30",
        "ATIVIDADE": "Ciência de dados no mercado de trabalho",
        "DIA": "Quarta-Feira (19/04)",
        "DIVULGAÇÃO": "OK"
    },
    {
        "NOME": "Katieli Bianca Dieter",
        "Sala": "Videoconferência",
        "HORÁRIO": "14:30 - 16:30",
        "ATIVIDADE": "Bate papo sobre mercado de trabalho e carreira em Data Science",
        "DIA": "Quarta-feira (19/04)",
        "DIVULGAÇÃO": "OK"
    },
    {
        "NOME": "Williana Luzia Sousa Leite",
        "Sala": "Videoconferência",
        "HORÁRIO": "14:30 - 16:30",
        "ATIVIDADE": "Bate papo sobre mercado de trabalho e carreira em Data Science",
        "DIA": "Quarta-feira (19/04)",
        "DIVULGAÇÃO": "OK"
    },
    {
        "NOME": "Veronica Vannini",
        "Sala": "Videoconferência",
        "HORÁRIO": "14:30 - 16:30",
        "ATIVIDADE": "Bate papo sobre mercado de trabalho e carreira em Data Science",
        "DIA": "Quarta-feira (19/04)",
        "DIVULGAÇÃO": "NO"
    },
    {
        "NOME": "Izequiel Pereira de Norões",
        "Sala": "Sala 6",
        "HORÁRIO": "14:30 - 16:30",
        "ATIVIDADE": "A WEB 3, o Metaverso e os Games",
        "DIA": "Quarta-feira (19/04)",
        "DIVULGAÇÃO": "ok"
    },
    {
        "NOME": "Jacilane de Holanda Rabelo",
        "Sala": "Sala 6",
        "HORÁRIO": "14:30 - 17:30",
        "ATIVIDADE": "Desbravando a Gestão do Conhecimento em Engenharia de Software: Vamos nessa?",
        "DIA": "Quarta-Feira(19/04)",
        "DIVULGAÇÃO": "OK"
    },
    {
        "NOME": "Luísa Souza Moura",
        "Sala": "Videoconferência",
        "HORÁRIO": "15:30 - 16:30",
        "ATIVIDADE": "Jornada além das fronteiras: um caminho pela carreira em tecnologia dentro e fora do Brasil",
        "DIA": "Quarta-Feira(19/04)",
        "DIVULGAÇÃO": "OK"
    },
    {
        "NOME": "Rafael Fernandes Ivo",
        "Sala": "Sala 2",
        "HORÁRIO": "15:30 - 17:30",
        "ATIVIDADE": "Aplicações de Renderização Não Fotorrealista",
        "DIA": "Quarta-Feira(19/04)",
        "DIVULGAÇÃO": "ok"
    },
    {
        "NOME": "Jordas Felipe da Silva",
        "Sala": "Sala 6",
        "HORÁRIO": "15:30 - 17:30",
        "ATIVIDADE": "Desbravando a Gestão do Conhecimento em Engenharia de Software: Vamos nessa?",
        "DIA": "Quarta-Feira(19/04)",
        "DIVULGAÇÃO": "OK"
    },
    {
        "NOME": "Ana Paula Assis Buosi",
        "Sala": "Auditório I",
        "HORÁRIO": "16:30 - 17:30",
        "ATIVIDADE": "Lei Geral de Proteção de Dados Pessoais e cibercrimes: impactos jurídicos no contexto tecnológico",
        "DIA": "Quarta-feira(19/04)",
        "DIVULGAÇÃO": "OK"
    },
    {
        "NOME": "Deborah Rabay Nogueira",
        "Sala": "Auditório I",
        "HORÁRIO": "16:30 - 17:30",
        "ATIVIDADE": "Lei Geral de Proteção de Dados Pessoais e cibercrimes: impactos jurídicos no contexto tecnológico",
        "DIA": "Quarta-feira(19/04)"
    },
    {
        "NOME": "Érika Alcântara Gondim Castro",
        "Sala": "Sala 1",
        "HORÁRIO": "16:30 - 17:30",
        "ATIVIDADE": "Descomplicando o Inglês - como perder o medo de conseguir uma vaga de emprego.",
        "DIA": "Quarta-feira(19/04)",
        "DIVULGAÇÃO": "OK"
    },
    {
        "NOME": "Carlos Renan Moreira",
        "Sala": "Sala 7",
        "HORÁRIO": "16:30 - 17:30",
        "ATIVIDADE": "Ainda vale a pena ser desenvolvedor PHP?",
        "DIA": "Quarta-feira (19/04)",
        "DIVULGAÇÃO": "OK"
    },
    {
        "NOME": "Dmontier Pinheiro Aragão Junior",
        "Sala": "Auditório 1",
        "HORÁRIO": "16:30-17:30",
        "ATIVIDADE": "Logistica 5.0",
        "DIA": "Quarta-feira (19/04)",
        "DIVULGAÇÃO": "OK"
    },
    {
        "NOME": "Rubens Abraão da Silva Sousa",
        "Sala": "AUDITÓRIO",
        "HORÁRIO": "08:00 - 10:00",
        "ATIVIDADE": "Gestão do Tradicional do ágil",
        "DIA": "Quinta-feira (20/04)"
    },
    {
        "NOME": "Dayana Mazete Cordeiro",
        "Sala": "Videoconferência",
        "HORÁRIO": "08:00 - 10:00",
        "ATIVIDADE": "Segurança psicológica e sua importância para a inovação.",
        "DIA": "Quinta-feira (20/04)",
        "DIVULGAÇÃO": "OK"
    },
    {
        "NOME": "Francisco Matheus Ricelly Pinto de Sena",
        "Sala": "Sala 7 ",
        "HORÁRIO": "08:00 - 10:00",
        "ATIVIDADE": "Introdução aos testes - desmistificando os testes automatizados em aplicações web",
        "DIA": "Quinta-feira (20/04)",
        "DIVULGAÇÃO": "OK"
    },
    {
        "NOME": "Ana Paula Lourenço dos Santos ",
        "Sala": "sala 2",
        "HORÁRIO": "08:00 - 10:00",
        "ATIVIDADE": "Phishing, você sabe identificar esta ameaça? ",
        "DIA": "Quinta-feira (20/04)",
        "DIVULGAÇÃO": "OK"
    },
    {
        "NOME": "Júlio César Silva Araújo",
        "Sala": "Sala 6",
        "HORÁRIO": "08:00 - 12:00",
        "ATIVIDADE": "Problemas de otimização em grafos: da teoria à prática",
        "DIA": "Quinta-feira (20/04)",
        "DIVULGAÇÃO": "OK"
    },
    {
        "NOME": "Thaís Gaudencio do Rêgo",
        "Sala": "Videoconferência",
        "HORÁRIO": "08:00- 09:00",
        "ATIVIDADE": "Introdução à Inteligência Artificial",
        "DIA": "Quinta-feira(20/04)",
        "DIVULGAÇÃO": "OK"
    },
    {
        "NOME": "Andreina Maria Mendes da Silva",
        "Sala": "Sala 1",
        "HORÁRIO": "09:00 - 10:00",
        "ATIVIDADE": "Processamento de Imagens e Visão Computacional: Conceitos e Cases",
        "DIA": "Quinta-feira (20/04)",
        "DIVULGAÇÃO": "OK"
    },
    {
        "NOME": "Hinessa Dantas Caminha",
        "Sala": "Videoconferência",
        "HORÁRIO": "10:00 - 11:00",
        "ATIVIDADE": "Um bate-papo sobre como a academia e o mercado embora sejam tratados como coisas antagonistas, suas experiências em ambas as áreas podem te ajudar a se tornar um profissional único e qualificado.",
        "DIA": "Quinta-feira (20/04)",
        "DIVULGAÇÃO": "OK"
    },
    {
        "NOME": "Carlos Gabriel Leite Barros",
        "Sala": "Sala 1",
        "HORÁRIO": "10:00 - 12:00",
        "ATIVIDADE": "Do inicio ao fim, como o desenvolvimento funciona na prática",
        "DIA": "Quinta-Fera(20/04)",
        "DIVULGAÇÃO": "OK"
    },
    {
        "NOME": "Pedro Lucas Alves de Lima",
        "Sala": "Sala 1",
        "HORÁRIO": "10:00 - 12:00",
        "ATIVIDADE": "Sinergia entre design, marketing e tecnologia: a chave para a diferenciação no mercado",
        "DIA": "Quinta-feira (20/04)"
    },
    {
        "NOME": "Reuber Regis de Melo",
        "Sala": "Sala 2",
        "HORÁRIO": "10:00-12:00",
        "ATIVIDADE": "Tecnologias para a Agricultura Inteligente",
        "DIA": "Quinta-feira (20/04)",
        "DIVULGAÇÃO": "OK"
    },
    {
        "NOME": "FRANCISCO FLAVIO VALENTIM DA SILVA FILHO",
        "Sala": "Lab 4B",
        "HORÁRIO": "13:30 - 14:30",
        "ATIVIDADE": "Mine Curso Desenvolvimento Minecraft",
        "DIA": "Quinta-feira (20/04)",
        "DIVULGAÇÃO": "OK"
    },
    {
        "NOME": "Ana Lara Silva Oliveira",
        "Sala": "Sala 6",
        "HORÁRIO": "13:30 - 15;30",
        "ATIVIDADE": "Fundamentos do SCRUM - Rápido e Prático",
        "DIA": "Quinta-feira (20/04)",
        "DIVULGAÇÃO": "OK"
    },
    {
        "NOME": "Yan Vancelis de Araújo Lima",
        "Sala": "Sala 2",
        "HORÁRIO": "13:30 15:30",
        "ATIVIDADE": "UX Design: Alinhando expectativas para construção do produto ideal",
        "DIA": "Quinta-feira (20/04)",
        "DIVULGAÇÃO": "OK"
    },
    {
        "NOME": "Carla Ilane Moreira Bezerra",
        "Sala": "Sala 7",
        "HORÁRIO": "13:30-14:30",
        "ATIVIDADE": "Quero ser pesquisador (a), e agora?",
        "DIA": "Quinta-feira(20/04)",
        "DIVULGAÇÃO": "OK"
    },
    {
        "NOME": "Karen Raiany Brito de Pinho",
        "Sala": "Videoconferência",
        "HORÁRIO": "13:30-15:30",
        "ATIVIDADE": "Empreender: o uso da tecnologia para inovação",
        "DIA": "Quinta-feira (20/04)",
        "DIVULGAÇÃO": "OK"
    },
    {
        "NOME": "Iury Lima Nogueira",
        "Sala": "Sala 2",
        "HORÁRIO": "14:30 - 15:30",
        "ATIVIDADE": "Desafios e benefícios da implementação de um Design System na Brisanet",
        "DIA": "Quinta-feira (20/04)",
        "DIVULGAÇÃO": "OK"
    },
    {
        "NOME": "Francisco Carlos de Mattos Brito Oliveira ",
        "Sala": "Sala 7",
        "HORÁRIO": "14:30-16:30",
        "ATIVIDADE": "Viabilizando protótipos de altissima qualidade com o Laum",
        "DIA": "Quinta-feira (20/04)",
        "DIVULGAÇÃO": "OK"
    },
    {
        "NOME": "Kelvia Viana - Coordenadora Geral da APAE/Russas",
        "Sala": "Hall Princial",
        "HORÁRIO": "15:30 - 16:30",
        "ATIVIDADE": " Educação Inclusiva para pessoas com TEA",
        "DIA": "Quinta-feira(20/04)",
        "DIVULGAÇÃO": "ok"
    },
    {
        "NOME": "Érika Alcântara Gondim Castro",
        "Sala": "Sala 6",
        "HORÁRIO": "15:30 - 16:30",
        "ATIVIDADE": "Inglês instrumental voltado para tecnologia",
        "DIA": "Quinta-feira(20/04)",
        "DIVULGAÇÃO": "OK"
    },
    {
        "NOME": "Thiago Amarantes",
        "Sala": "Auditório 1",
        "HORÁRIO": "15:30 - 17:30",
        "ATIVIDADE": "IA: Tendência ou realidade?",
        "DIA": "Quinta-feira(20/04)",
        "DIVULGAÇÃO": "OK"
    },
    {
        "NOME": "Alessandro Feitoza",
        "Sala": "Sala 7",
        "HORÁRIO": "16:30 - 17:30",
        "ATIVIDADE": "Como o chatGPT afeta minha vida como desenvolvedor",
        "DIA": "Quinta-feira (20/04)"
    }
]


for (const item of array) {
        let newItem = `<tr>
            <td>${item.HORÁRIO}</td>
            <td>${item.DIA}</td>
            <td>${item.ATIVIDADE}</td>
            <td>${item.NOME}</td>
            <td>${item.Sala}</td>
        </tr>`
    
        body.innerHTML += newItem;
    }
