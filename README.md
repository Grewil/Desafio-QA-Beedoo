# Desafio-QA-Beedoo
Esse projeto é um teste E2E da aplicação BEEDOO QA Chalenge "https://creative-sherbet-a51eac.netlify.app/" onde foi executado os testes de criar e excluir a lista de cursos.  

# História de usuário:

- **História do usuário 01** - Como usuário eu quero ter os botões de "LISTA DE CURSOS" e "CADASTRAR CURSO" na tela inicial.
- **História do usuário 02** - Como usuário eu quero poder visualizar na tela inicial a lista de todos os cursos cadastrados na plataforma e com as informações "Nome do curso, Descrição do curso, Instrutor,Imagem da capa do curso, Data de início, Data de fim, Números de vagas disponíveis e se o curso é Online ou presencial" todas as informações visíveis na tela de lista de cursos.
- **História do usuário 03** - Como administrador na tela de cadastrar curso eu quero que tenha os campos  "Nome do curso, Descrição do curso, Instrutor,URL da Imagem da capa do curso, Data de início, Data de fim, Números de vagas disponíveis e se o curso é Online ou presencial" para preencher e que todas as informações seja obrigatórias o preenchimento.
- **História do usuário 04** - Como administrador na tela de "Lista de cursos" eu quero ter a opção de excluir os cursos da lista.
- **História do usuário 05** - Como adminstrador na tela de "CADASTRAR CURSO" eu quero que não permita o cadastro de cursos com a quantidade de vagas <=0 e data já expirada.
- **História do usuário 06** - Como administrador na tela de "Lista de cursos" eu não quero que tenha cursos repetidos.

  # Casos de testes manuais
 Os testes manuais está documentado em .XLSX no  Google Sheets no link (https://docs.google.com/spreadsheets/d/1BYNnjCUcQVCfEDDa4JRikeC_RedazD85/edit?usp=drive_link&ouid=106437964310882198040&rtpof=true&sd=true) :

 - **HISTÓRIA DE USUÁRIO:** Levantamento das necessidades de um administrador e de um usuário.
 - PLANEJAMENTO: Levantamento de toas as telas e suas funcionalidades.
 - **MAPEAMENTO DOS CASOS DE TESTE:** Mapear todos os testes necessários e controlar algumas informações como (Nº Caso de Teste,	Nome do Caso de Teste,	Complexidade,	Tipo de Teste, 	Necessidade de massa de Teste,	Funcionalidade associada ao CT,	Passível de automação,	Regressivo Obrigatório,	Prioridade,	Versão)
 - **CASOS DE TESTE GHERKIN:** Informações dos casos de testes e a execução dos teses (Nº do Caso de Teste,	Nome do Caso de Teste,	Casos de teste Gherkin,	Execução,	Pré-Requisitos,	Massa de Testes,	Status,	Tela,	Observação).
 - **CONTROLE DE EXECUÇÃO:** O controle para esses testes foi realizado através de de planilha mas também pode ser realizado com outras ferramentas como exemplo Jira, trello e testlink facilitando a comunicação com o time.
 - **CONTROLE DE BUG:** Controle e histórico com os bug.
 - **MASSA DE DADOS:** Massa de dados utilizado nos tetes.

# Evidências dos testes
Evidenêncas da execução dos testes foi realizada no formato MP4 e se encontra no link (https://drive.google.com/drive/folders/14UDH3KXzhLei9Ng8gwCyirYO_J27F7oA?usp=drive_link) 

# Melhorias no sistema.

**Tela de Lista de Cursos:**
- 1º Criar uma coampo para localizar os cursos pelo nome.
- 2º Criar uma opção para o administrado editar as informações do curso.
  
**Tela de Cadastrar curso:**
- 1º Criar um campo de categoria de curso EX. Tecnologia, culinária ...
- 2º No campo Endereço do curso presencial acrescentar mais detalhes como Cidade, CEP e Bairro.
- 3º Mensagens de alerta para os campos obrigatórios.

# Testes de regressão automatizados com "CYPRESS"
  
 Foi selecionado 5 testes para executar os testes de regressão sendo os testes que cobre o fluxo de ponta a ponta e para isso foi utilizado o Cypress.
 Na pasta Cypress encontra os teste E2E, devido a rota "https://creative-sherbet-a51eac.netlify.app/new-course" esta acusando o erro "If this is your site, and you weren't expecting a 404 for this path, please visit Netlify's "page not found" support guide for troubleshooting tips" seguindo evidência do teste gravado em MP4  com os testes "https://drive.google.com/drive/folders/1whSeoS_qadDuNVzPe9ZKEXjQJShSiSMm?usp=drive_link" .

- CT-0001	Validar o botão "Cadastrar curso"
- CT 0016 - Validar o botão "LISTAR CURSOS" 
- CT-0002	Cadastrar um curso oline com todas as informações obrigatórias.
- CT 0016 - Validar o botão "LISTAR CURSOS"
- CT-0017	Excluir um curso da lista.

  

