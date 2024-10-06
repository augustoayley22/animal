import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { FaQuestionCircle, FaArrowLeft } from 'react-icons/fa';

export default function Home() {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [clickedAnimals, setClickedAnimals] = useState({
    animal1: false,
    animal2: false,
    animal3: false,
    animal4: false,
  });

  // Verifica o localStorage e atualiza o estado ao carregar a página
  useEffect(() => {
    const storedState = {
      animal1: localStorage.getItem('animal1') === 'true',
      animal2: localStorage.getItem('animal2') === 'true',
      animal3: localStorage.getItem('animal3') === 'true',
      animal4: localStorage.getItem('animal4') === 'true',
    };
    setClickedAnimals(storedState);
  }, []);

  // Função para lidar com o clique e salvar o estado no localStorage
  const handleClick = (animal: string, page: string) => {
    const updatedState = { ...clickedAnimals, [animal]: true };
    setClickedAnimals(updatedState);
    localStorage.setItem(animal, 'true'); // Armazena a escolha no localStorage
    router.push(page); // Redireciona para a página
  };

 const handleGoBack = () => {
    router.push('/'); // Redireciona para a página inicial
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="relative h-screen">
      {/* Imagem de fundo */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/mapa.webp"
          alt="Background Image"
          layout="fill"
          objectFit="cover"
          className="opacity-80"
        />
      </div>

      {/* Texto centralizado */}
      <div className="relative flex flex-col items-center h-full space-y-4 z-10">
        <h1 className="text-white text-5xl font-bold mt-12">
          Explore o mapa
        </h1>
      </div>

      {/* Botão 1 */}
      <button
        className="absolute top-96 left-96 bg-white rounded-full p-1 w-12 h-12 flex items-center justify-center shadow-md hover:shadow-lg transition duration-300 z-20 cursor-pointer"
        onClick={() => handleClick('animal1', '/animal1')}
      >
        {clickedAnimals.animal1 ? (
          <Image src="/images/leao.webp" alt="Leão" width={32} height={32} className="rounded-full" />
        ) : (
          <FaQuestionCircle className="w-12 h-12 text-blue-500" />
        )}
      </button>

      {/* Botão 2 */}
      <button
        className="absolute inset-y-2/4 inset-x-3/4 bg-white rounded-full p-1 w-12 h-12 flex items-center justify-center shadow-md hover:shadow-lg transition duration-300 z-20 cursor-pointer"
        onClick={() => handleClick('animal2', '/animal2')}
      >
        {clickedAnimals.animal2 ? (
          <Image src="/images/lobo.webp" alt="Tigre" width={32} height={32} className="rounded-full" />
        ) : (
          <FaQuestionCircle className="w-12 h-12 text-blue-500" />
        )}
      </button>

      {/* Botão 3 */}
      <button
        className="absolute bottom-72 inset-x-2/4 bg-white rounded-full p-1 w-12 h-12 flex items-center justify-center shadow-md hover:shadow-lg transition duration-300 z-20 cursor-pointer"
        onClick={() => handleClick('animal3', '/animal3')}
      >
        {clickedAnimals.animal3 ? (
          <Image src="/images/aguia.webp" alt="Urso" width={32} height={32} className="rounded-full" />
        ) : (
          <FaQuestionCircle className="w-12 h-12 text-blue-500" />
        )}
      </button>

      {/* Botão 4 */}
      <button
        className="absolute top-24 inset-x-3/4 bg-white rounded-full p-1 w-12 h-12 flex items-center justify-center shadow-md hover:shadow-lg transition duration-300 z-20 cursor-pointer"
        onClick={() => handleClick('animal4', '/animal4')}
      >
        {clickedAnimals.animal4 ? (
          <Image src="/images/coruja.webp" alt="Águia" width={32} height={32} className="rounded-full" />
        ) : (
          <FaQuestionCircle className="w-12 h-12 text-blue-500" />
        )}
      </button>

            {/* Botão de interrogação no canto superior direito */}
      <button
        className="absolute top-4 right-4  text-white rounded-full p-2 flex items-center justify-center shadow-md hover:bg-gray-700 hover:text-white transition z-20 cursor-pointer"
        onClick={toggleModal}
      >
        <FaQuestionCircle className="w-7 h-7" />
      </button>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-30">
          <div className="bg-white p-8 rounded-lg shadow-lg w-1/2">
            <h2 className="text-xl font-bold mb-4">Informação Importante</h2>
            <p className="mb-6">
            Como falado na quinta-feira da semana passada, eu fiz os animais que você se assemelha. Não coloquei no chat-gpt, mas obviamente pesquisei sobre cada animal para entender melhor e fazer as semelhanças de cada um. Na minha opinião ficou bom, mas a escrita não é meu forte, vamos ver como vai ficar, se ficar ruim paciência.
            </p>
            <button
              onClick={toggleModal}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition cursor-pointer"
            >
              Fechar
            </button>
          </div>
        </div>
      )}
      {/* Botão de voltar no canto superior esquerdo */}
      <button
        className="absolute top-4 left-4 bg-white text-blue-500 rounded-full p-2 flex items-center justify-center shadow-md hover:bg-blue-500 hover:text-white transition z-20 cursor-pointer"
        onClick={handleGoBack}
      >
        <FaArrowLeft className="w-5 h-5" />
      </button>
    </div>
  );
}
