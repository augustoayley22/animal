import { useState } from 'react';
import Slider from 'react-slick';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

// Dados do slider
const sliderData = [
  {
    text: 'Um animal mais popular em locais gerados é feroz e se assemelha ao cachorro é o lobo. Ele se tornou sua representação no Discord por muito tempo era previsível de colocar, mas essencial. Ele tem muitas caracterizas interessantes e pensei muito para colocar ele aqui, mas não apenas por você já considerar ele muito.',
    bgImage: '/images/slide12.webp', // Substitua pelo caminho correto da imagem
  },
  {
    text: 'Além de serem bem bonitos, eles têm uma das caracterizas mais legais que são muito demonstradas em filmes, livros e culturas que é a lealdade.',
    bgImage: '/images/slide13.webp', // Substitua pelo caminho correto da imagem
  },
  {
    text: 'Um filme que mostra isso é "Alfa" o qual mostra um menino preso com lobo em um tempo de muito frio em um local gelado. Mostra como o ser humano consegue se aproximar do lobo. Dessa forma conseguir sua lealdade. O menino mesmo em quase morte, o lobo continua ajudando o menino até o fim. Sei que é apenas um filme, mas mostra muito sobre essa característica.',
    bgImage: '/images/slide14.jpg', // Substitua pelo caminho correto da imagem
  },
  {
    text: 'Outra recomendação seria de um anime já que está assinando a Crunchyroll. Ele se chama "to your eternety". Resumindo a história, o início é bem clichê. Um meteoro cai em um local que um lobo está para morrer, uma substância viva entra nesse lobo e começa a viver a vida desse lobo até encontrar um humano e andar com ele, mas ele toma essa característica do lobo de lealdade. Entao ele fica ao lado do menino até sua morte. Esse anime se não assistiu ainda é bem intermeante.',
    bgImage: '/images/slide15.jpg', // Substitua pelo caminho correto da imagem
  },
  {
    text: 'Mas voltando para você, já é bem óbvio o quão leal você é principalmente aos seus princípios e sua base. Não há muito o que falar pelo que você já sabe, pois demonstrou muito isso nos últimos anos que te conheço. Outro fator é que o lobo sempre anda em grupo, ou seja, ele defender e atacar em bando priorizando sua "família" o que mostra muito isso em você pelo valor que você da à sua base que é sua família e a importância para você e sua vida.',
    bgImage: '/images/slide16.webp', // Substitua pelo caminho correto da imagem
  },
  {
    text: 'E por fim outra caracteriza muito importante é a inteligência do lobo na caça, o planejamento que ele tem até conseguir pegar sua presa e sem sobra de dúvidas umas das coisas que você mais faz na vida é planejá-la e quão inteligente você consegue ser ao fazer isso de forma tao simples e consistente.',
    bgImage: '/images/slide17.webp', // Substitua pelo caminho correto da imagem
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
