// PRODUCTS LIST

const produtos = [
  {
    imagem: './assets/products/futebol-chuteira-bravo.svg',
    titulo: 'Chuteira Penalty Bravo',
    estrelas: 5,
    precoCartao: 159.90
  },
  {
    imagem: './assets/products/futebol-chuteira-max-500.svg',
    titulo: 'Chuteira Penalty Max 500',
    estrelas: 5,
    precoCartao: 385.00
  },
  {
    imagem: './assets/products/futebol-chuteira-penalty-s11.svg',
    titulo: 'Chuteira Penalty S11',
    estrelas: 5,
    precoCartao: 239.90
  },
  {
    imagem: './assets/products/futebol-chuteira-viento.svg',
    titulo: 'Chuteira Penalty Viento',
    estrelas: 5,
    precoCartao: 239.90
  },
  {
    imagem: './assets/products/futebol-bola-de-futebol-de-campo-s11-torneio.svg',
    titulo: 'Bola de Futebol de campo S11 Torneio',
    estrelas: 5,
    precoCartao: 229.90
  },
  {
    imagem: './assets/products/futebol-bola-de-futebol-de-campo.svg',
    titulo: 'Bola de futebol de campo Penalty S',
    estrelas: 5,
    precoCartao: 165.00
  },
  {
    imagem: './assets/products/futebol-bola-de-futebol-society-bola-8.svg',
    titulo: 'Bola de Futebol Society Penalty Bola 8',
    estrelas: 5,
    precoCartao: 229.90
  },
  {
    imagem: './assets/products/futebol-bola-de-futsal-max-1000.svg',
    titulo: 'Bola de Futebol Penalty Max 1000',
    estrelas: 5,
    precoCartao: 425.00
  },
  {
    imagem: './assets/products/futebol-bola-de-futsal-penalty-500.svg',
    titulo: 'Bola Penalty Futsal 500 Matis',
    estrelas: 5,
    precoCartao: 209.00
  },
  {
    imagem: './assets/products/futebol-bola-society-lider-penalty.svg',
    titulo: 'Bola de Futebol Society Penalty Líder',
    estrelas: 5,
    precoCartao: 145.00
  },
  {
    imagem: './assets/products/futebol-bola-society-sete-penalty.svg',
    titulo: 'Bola de Futebol Society Penalty Se7e',
    estrelas: 5,
    precoCartao: 229.00
  },
  {
    imagem: './assets/products/futebol-bola-futsal-500-bola-8.svg',
    titulo: 'Bola Penalty Futsal 500 Bola 8',
    estrelas: 5,
    precoCartao: 219.90
  },
  {
    imagem: './assets/products/handbol-bola-de-handbol-iniciacao-10-penalty.svg',
    titulo: 'Bola Iniciação 10 Penalty',
    estrelas: 5,
    precoCartao: 59.90
  },
  {
    imagem: './assets/products/handbol-bola-de-handbol-iniciacao-12-penalty.svg',
    titulo: 'Bola Iniciação 12 Penalty',
    estrelas: 5,
    precoCartao: 65.00
  },
  {
    imagem: './assets/products/handbol-bola-de-handbol-iniciacao-8-penalty.svg',
    titulo: 'Bola Iniciação 08 Penalty',
    estrelas: 5,
    precoCartao: 55.00
  },
  {
    imagem: './assets/products/handbol-bola-iniciacao-14-penalty.svg',
    titulo: 'Bola Iniciação 14 Penalty',
    estrelas: 5,
    precoCartao: 76.00
  },
  {
    imagem: './assets/products/basket-bola-de-basket-penalty.svg',
    titulo: 'Bola de Basquete Oficial Penalty',
    estrelas: 5,
    precoCartao: 129.90
  },
  {
    imagem: './assets/products/volei-bola-de-voley-mg-3600.svg',
    titulo: 'Bola de Vôlei Oficial Penalty MG 3600',
    estrelas: 5,
    precoCartao: 154.90
  },
  {
    imagem: './assets/products/volei-bola-de-voley-vp-5000.svg',
    titulo: 'Bola de Vôlei Oficial Penalty VP 5000',
    estrelas: 5,
    precoCartao: 179.90
  },
  {
    imagem: './assets/products/diverso-agulha-penalty.svg',
    titulo: 'Agulha Penalty',
    estrelas: 5,
    precoCartao: 49.90
  },
  {
    imagem: './assets/products/diverso-agulha.svg',
    titulo: 'Agulhas Para Encher Bola (Por Unidade)',
    estrelas: 5,
    precoCartao: 5.00
  },
  {
    imagem: './assets/products/diverso-agulha.svg',
    titulo: 'Agulhas Para Encher Bola (Por Unidade)',
    estrelas: 5,
    precoCartao: 5.00
  },
  {
    imagem: './assets/products/diverso-bomba-big.svg',
    titulo: 'Bomba Big',
    estrelas: 5,
    precoCartao: 87.00
  },
  {
    imagem: './assets/products/fitness-barra-de-exercícios-hidrolight.svg',
    titulo: 'Barra de Exercícios Hidrolight',
    estrelas: 5,
    precoCartao: 125.00
  },
  {
    imagem: './assets/products/fitness-bola-de-exercícios-75cm-hidrolight.svg',
    titulo: 'Bola de Exercícios 75cm Hidrolight',
    estrelas: 5,
    precoCartao: 149.90
  },
  {
    imagem: './assets/products/fitness-chapeu-chines-hidrolight.svg',
    titulo: 'Chapéu Chines de Exercícios Hidrolight (Por Unidade)',
    estrelas: 5,
    precoCartao: 8.00
  },
  {
    imagem: './assets/products/fitness-colchonete-hidrolight.svg',
    titulo: 'Colchonete Diversar Cores Hidrolight',
    estrelas: 5,
    precoCartao: 99.90
  },
  {
    imagem: './assets/products/fitness-corda.svg',
    titulo: 'Corda de Pular Para Exercícios',
    estrelas: 5,
    precoCartao: 29.90
  },
  {
    imagem: './assets/products/fitness-escada-de-agilidade-hidrolight.svg',
    titulo: 'Escada de Agilidade Hidrolight',
    estrelas: 5,
    precoCartao: 209.90
  },
  {
    imagem: './assets/products/fitness-faixa-elastica-hidrolight.svg',
    titulo: 'Faixa Elástica Hidrolight',
    estrelas: 5,
    precoCartao: 35.00
  },
  {
    imagem: './assets/products/fitness-kit-mini-band-hidrolight.svg',
    titulo: 'Kit Mini Band Hidrolight',
    estrelas: 5,
    precoCartao: 55.00
  },
  {
    imagem: './assets/products/fitness-power-band-hidrolight.svg',
    titulo: 'Power Band Hidrolight',
    estrelas: 5,
    precoCartao: 119.90
  },
  {
    imagem: './assets/products/fitness-roda-de-exercicio-hidrolight.svg',
    titulo: 'Roda de Exercícios Hidrolight',
    estrelas: 5,
    precoCartao: 92.00
  },
  {
    imagem: './assets/products/fitness-rolo-de-liberacao-miosfacial-hidrolight.svg',
    titulo: 'Rolo de Liberação Hidrolight',
    estrelas: 5,
    precoCartao: 135.00
  },
  {
    imagem: './assets/products/diverso-bota-ortopedica-hidrolight.svg',
    titulo: 'Bota Ortopédica Hidrolight',
    estrelas: 5,
    precoCartao: 129.90
  },
  {
    imagem: './assets/products/diverso-colete-penalty.svg',
    titulo: 'Colete Penalty',
    estrelas: 5,
    precoCartao: 22.00
  },
  {
    imagem: './assets/products/diverso-corretor-postural-lean-hidrolight.svg',
    titulo: 'Corretor Postural Hidrolight',
    estrelas: 5,
    precoCartao: 75.00
  },
  {
    imagem: './assets/products/diverso-joelheira-relieve-hidrolight.svg',
    titulo: 'Joelheira Relieve Hidrolight',
    estrelas: 5,
    precoCartao: 129.90
  },
  {
    imagem: './assets/products/diverso-splint-bilateral-hidrolight.svg',
    titulo: 'Splint Bilateral Hidrolight',
    estrelas: 5,
    precoCartao: 69.90
  },
  {
    imagem: './assets/products/diverso-tapete-de-exercicio-hidrolight.svg',
    titulo: 'Tapete de Exercícios Hidrolight',
    estrelas: 5,
    precoCartao: 89.90
  },
];

const produtosContainer = document.getElementById('produtos');
produtos.forEach(produto => {
  const precoPix = (produto.precoCartao * 0.97).toFixed(2);
  const produtoHtml = `
                <div class="flex flex-col justify-items-start bg-blue-100 p-0 rounded-lg">
                  <img src="${produto.imagem}" alt="${produto.titulo}" class="rounded-lg mb-2 max-w-lg">
                  <p class="font-medium mb-2 px-4">${produto.titulo}</p>
                  <div class="flex items-center mb-4 px-4">
                    ${Array.from({ length: produto.estrelas }).map(() => '<i class="fa-solid fa-star" style="color: #daa81d;"></i>').join('')}
                  </div>
                  <p class="mb-1 px-4">R$${precoPix} no Pix ou Boleto</p>
                  <p class="font-thin text-sm mb-4 px-4">ou R$${produto.precoCartao.toFixed(2)} no cartão de crédito</p>
                  <button class="border mx-4 mb-4 rounded-lg px-10 py-4 bg-green-600 text-white font-medium hover:bg-green-800 md:max-lg:px-4 max-sm:px-1">SAIBA MAIS</button>
                </div>
              `;
  produtosContainer.insertAdjacentHTML('beforeend', produtoHtml);
});