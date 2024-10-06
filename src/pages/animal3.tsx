import { useState } from 'react';
import Slider from 'react-slick';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

// Dados do slider
const sliderData = [
  {
    text: 'Esse animal muito conhecido por sua visão, sua força e por gostar de ver tudo pelo alto que é a águia a famosa mascote dos Estados Unidos da América e a caçadora mortal de cobras. Era bem previsível ser a águia por você ter os olhos de águia haha. Mas não pude deixar ela de fora por ter comportamentos muito interessantes ao seu perfil.',
    bgImage: '/images/slide18.webp', // Substitua pelo caminho correto da imagem
  },
  {
    text: 'De ser inteligente e analisar tudo ao ser redor de forma calma tomar a melhor decisão para situação, isso é de longe para mim a característica mais braba da águia, que se encaixa e muito com você. Por ser fria e calculista no que faz e ver as coisas que a maioria das pessoas não vê, "tudo por cima".',
    bgImage: '/images/slide19.webp', // Substitua pelo caminho correto da imagem
  },
  {
    text: 'A Águia tem vários fatos curiosos e que me lembra muito de você em relação a sua renovação e superação com as suas trocas de penas que depois possam voar ainda mais alto e mais fortes. Você já passou por vários ciclos difíceis como Senai, seu primeiro e segundo emprego e problemas relacionados a saúde. Você passou por tudo isso e superou ficando ainda mais forte do que era e conseguiu ainda alcançar voos ainda mais altos do que antes.',
    bgImage: '/images/slide20.webp', // Substitua pelo caminho correto da imagem
  },
  {
    text: 'Nesse mesmo período de renovação mostra a coragem da águia em relação à caça, e isso é algo que de longe foi o que mais mostrou o quão corajosa você foi enfrentado esses obstáculos.',
    bgImage: '/images/slide21.webp', // Substitua pelo caminho correto da imagem
  },
  {
    text: 'E por fim outra característica fundamental é o foco dela em conseguir o que quer de alimento, por mais difícil que seja ela consegue isso. Demonstra a sua sabedoria em como lidar e conseguir isso por alizar toda a situação. Hoje você onde está graças a seu foco e persistência, além de sua sabedoria em sempre analisar e pensar muito antes de tomar uma decisão para não ser precipitada e realmente chegue mais perto de conseguir algo melhor. O que você mostrou muito no seu serviço atual e está alcançado a área de desenvolvimento.',
    bgImage: '/images/slide22.webp', // Substitua pelo caminho correto da imagem
  },
  {
    text: 'Um fator que acho diferencial em você é em sua inteligente em analisar as situações e conseguir resolver problemas extremantes complexos de forma muito rápida e eficaz observando e tomando a melhor decisão.',
    bgImage: '/images/slide23.webp', // Substitua pelo caminho correto da imagem
  },
  {
    text: 'Um anime que eu sei que você curte é cavaleiro do Zodíaco e tem um personagem em específico que tem como símbolo a águia que é o “marin” a mentora de seyian mostrando símbolo de uma guerreira habilidosa e sábia a ponto de poder orientar outras pessoas também.',
    bgImage: '/images/slide24.jpg', // Substitua pelo caminho correto da imagem
  },
  {
    text: 'Também a águia é mostrando muito por mostrar força e poder. Em Roma tinha muito esse símbolo e na mitologia grega tinha Zeus que usa a águia como mensageira.',
    bgImage: '/images/slide25.webp', // Substitua pelo caminho correto da imagem
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
