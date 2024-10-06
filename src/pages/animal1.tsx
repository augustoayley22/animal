import { useState } from 'react';
import Slider from 'react-slick';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

// Dados do slider
const sliderData = [
  {
    text: 'O primeiro é um animal muito conhecido na região das savanas e com sua presença bem marcante o qual é o leão, o famoso "Rei da Selva". Vamos lá vou explicar porque eu escolhi ele. Obviamente o símbolo do leão é bem famoso e lembra várias coisas até do cotidiano como, por exemplo, filmes, series, vestimentos entre outros.',
    bgImage: '/images/slide1.webp', // Substitua pelo caminho correto da imagem
  },
  {
    text: 'Exemplo disso, é um dos filmes mais famosos da Disney, O Rei leão, que marcou minha infância. Ele mostra como um filhote se tornou líder. Nesse filme deixa claro uma característica que deixar marcante para o leão e que vejo em você também que é a liderança.',
    bgImage: '/images/slide2.jpg', // Substitua pelo caminho correto da imagem
  },
  {
    text: 'Muitas vezes que já conversei com você com outras pessoas juntos e nesse ambiente você tomou atitude de uma líder e tenho que admitir que a maioria foram ótimas, exemplos disso foi no Senai quando precisou liderar vários grupos e se destacou neles e também nas várias partidas que jogamos principalmente clash, mas infelizmente faltava qualidade no time para ganhar kkkkkk. Acredito muito que no futuro você se torne uma líder tanto profissionalmente quanto pessoal na sua vida.',
    bgImage: '/images/slide3.webp', 
  },
  {
    text: 'Outra característica muito presente em você é a independência que o leão possui, muitas das vezes ele antes de se tornar um líder ele se afasta e fica mais solitário por um período, mas ele não é autossuficiente, ele também anda em alcateia e em grupos. Isso é perceptível em momentos que você precisou se afastar, mas manteve seus princípios e sua índole que vejo muito de sua família também o que mostra a similaridade com o animal.',
    bgImage: '/images/slide4.webp', 
  },
  {
    text: 'Além disso, o leão possui uma determinação em alcançar seu objetivo na caça, ele vai até o fim para conseguir sua presa. Um fator que é muito perceptível em você é sua determinação e que ninguém pode negar o quão determinada você é para conseguir seus objetivos.',
    bgImage: '/images/slide5.webp', 
  },
  {
    text: 'Ao longo do tempo que te conheço consegui notar que no seu primeiro emprego, mesmo com todas as dificuldades você se manteve no propósito de continuar a se esforçar mais e mais a fim de melhorar e isso te trouxe vários frutos depois, pois conseguiu evoluir muito. E hoje está entrando no mundo da programação.',
    bgImage: '/images/slide6.webp', 
  },
  {
    text: 'Um das coisas mais marcantes do leão é sua forma de impor, ele é considerado "O Rei da Selva", mas não é o animal mais forte, pois há animais mais forte que ele como o urso e hipopótamo, mas o fator principal é como ele se impõe em relação ao outros que é pelo seu rugido e pela sua juba.',
    bgImage: '/images/slide7.webp', 
  },
  {
    text: 'Lembro muito bem a introdução de uma produtora de filmes que tinha o rugido do leão e aparecia com foco no seu rugido, não sei se já viu, mas algo marcante nos filmes.',
    bgImage: '/images/slide8.jpg', 
  },
  {
    text: 'Uma das características que mais acho diferenciada em você é sua forma de mostrar o quão habilidosa você é. Além de como você consegue se impor com relação as suas habilidade, ganhando repeito com várias pessoas ao seu redor. Principalmente o que vem mostrando no seu serviço atualmente com mais autoridade sobre suas tarefas.',
    bgImage: '/images/slide9.webp', 
  },
  {
    text: 'Enfim, o leão hoje em dia se destaca muito como líder e com muito respeito. Isso é demonstrado tanto antigamente por Reis e também em filmes por usar a manta da juba do leão mostrando poder, o que vi em você nesses 4 anos e o que acredito que você se tornará no futuro é uma grande líder.',
    bgImage: '/images/slide10.webp', 
  },
  {
    text: 'Outro fato que seu nome significa estrela e como você gosta do espaço. Existe uma estrela do leão que seria a estrela constelação do leão como curiosidade.',
    bgImage: '/images/slide11.webp', 
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
          className="transition-opacity duration-500 opacity-80 "
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
