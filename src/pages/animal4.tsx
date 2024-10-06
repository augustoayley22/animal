import { useState } from 'react';
import Slider from 'react-slick';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const sliderData = [
  {
    text: 'Um animal extremante misterioso e enigmático. Esse foi extremamente difícil e não sei se é bem previsível, mais quando analisei observei que de cara que se encaixa e muito com você. Acho esse de longe o que mais se encaixa com você, é esse e te torna diferente de tudo. Eu não lembro se já comentou antes sobre esse animal, mas se já digita F no chat senão ele é genial haha. O animal que estou falando é a coruja.',
    bgImage: '/images/slide26.webp', 
  },
  {
    text: 'É um encaixe perfeito com você, pois quando penso em coruja penso em mistérios, em algo intrigante, penso muito naquelas bruxas doidas em descobrir coisas novas ou aquelas cientistas malucas em sempre descobrir algo novo, você ainda não é cientista ainda, mas maluca talvez haha.',
    bgImage: '/images/slide27.webp', 
  },
  {
    text: 'Recentemente você me mostrou sobre seu Pinterest e lá mostrou várias imagens e artes conceituais mais voltadas ao dark e ao espaço e principalmente ao mistério. Em que nas imagens tinham um significado muito daora por trás. A coruja traz isso com ambiente noturno e com ser mistérios além da cultura.',
    bgImage: '/images/slide28.webp', 
  },
  {
    text: 'Agora entro em umas características bem interessantes em relação à coruja é em relação a seu censo de proteção e cuidado com seus filhotes e como ela tem essa atenção com filhotes. Foi algo que pude ver um pouco de você, a preocupação e o cuidado que tem em pequenas coisas com pessoas importantes para você. Por mais que não eu não seja muito bom em observar. Eu consegui ver muito bem em você esse cuidado e preocupação que inclusive é algo bem fofo haha. ',
    bgImage: '/images/slide29.webp', 
  },
  {
    text: 'A coruja tem também um ato mais silencioso e independente, ou seja, ela vive e caça muitas das vezes sozinha e faz várias coisas independentes dos outros, além de fazer as coisas extremamente silenciosas, principalmente com seus voos. O qual isso fica claro em você, pois muito momentos você gosta bem de ficar em silêncio e mais sozinha para conseguir evoluir e resolver os problemas que esta enfrentando. Por fim, algo que também encaixa um pouco com a característica da águia, mas algo que acredito que encaixa muito mais do que da águia é a característica de observação silenciosa, ou seja, ela consegue observar e tomar uma decisão muito sabiá de forma que ninguém geralmente vê.',
    bgImage: '/images/slide30.webp', 
  },
  {
    text: 'Isso foi algo que aconteceu muito comigo, você consegue observar muitas situações e fazer que muitas ações que muitas pessoas não veem, mas que fazem muita diferença no final. Além de ser um enigma, o que nem preciso também falar muito de você, por muitas das vezes fazer ser uma pessoa enigmática.',
    bgImage: '/images/slide31.webp', 
  },
  {
    text: 'Por fim tem um filme que lembro é a lenda das guardiãs, esse filme trata de corujas em desenho e mostrar a sua justiça e principalmente a sabedoria delas que elas trazem. A coruja para mim é a que mais completa e a que mais te representa.',
    bgImage: '/images/slide32.avif', 
  },
  
];

const PrevArrow = ({ currentSlide, onClick }: { currentSlide: number; onClick?: () => void }) => (
    <button
      onClick={onClick}
      style={{ left: '-2.5rem' }} // Move mais para a esquerda
      className={`absolute top-1/2 transform -translate-y-1/2 bg-white text-blue-500 p-2 rounded-full shadow-md transition ${
        currentSlide === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-500 hover:text-white cursor-pointer'
      }`}
      disabled={currentSlide === 0} // Desabilita a seta se estiver no primeiro slide
    >
      <FaArrowLeft className="w-6 h-6" />
    </button>
  );
  
  const NextArrow = ({ onClick }: { onClick?: () => void }) => (
    <button
      onClick={onClick}
      style={{ right: '-2.5rem' }} // Move mais para a direita
      className="absolute top-1/2 transform -translate-y-1/2 bg-white text-blue-500 p-2 rounded-full shadow-md hover:bg-blue-500 hover:text-white cursor-pointer transition"
    >
      <FaArrowRight className="w-6 h-6" />
    </button>
  );
  
  

export default function Page1() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const router = useRouter();

  // Configurações do slider
  const settings = {
    dots: false, // Remover os dots
    infinite: true, // Agora é infinito: volta para o primeiro slide no último slide
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true, // Habilita as setas
    prevArrow: <PrevArrow currentSlide={currentSlide} />, // Define a seta anterior
    nextArrow: <NextArrow />, // Define a próxima seta
    swipe: false, // Desabilita o swipe (arrastar para mudar)
    afterChange: (index: number) => setCurrentSlide(index), // Atualiza o slide ativo
  };

  // Função para navegar de volta ao mapa
  const handleBackToMap = () => {
    router.push('/mapa'); // Redireciona para a página do mapa
  };

  return (
    <div className="relative h-screen w-full bg-black">
      {/* Imagem de fundo dinâmica */}
      <div className="absolute inset-0 z-0">
        <Image
          src={sliderData[currentSlide].bgImage}
          alt="Background Image"
          layout="fill"
          objectFit="cover"
          className="transition-opacity duration-500 opacity-50 "
        />
      </div>

      {/* Slider de Texto */}
      <div className="relative z-10 h-full  flex items-start justify-center">
        <Slider {...settings} className="w-1/2 mt-16 text-center">
          {sliderData.map((slide, index) => (
            <div key={index}>
              <h1 className="text-white text-3xl font-bold">{slide.text}</h1>
            </div>
          ))}
        </Slider>
      </div>

      {/* Botão "Voltar ao Mapa" quando chegar no último slide */}
      {currentSlide === sliderData.length - 1 && (
        <div className="absolute bottom-10 w-full flex justify-center z-10 ">
          <button
            onClick={handleBackToMap}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition duration-300"
          >
            Voltar ao Mapa
          </button>
        </div>
      )}
    </div>
  );
}
