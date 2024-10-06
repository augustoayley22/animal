import { useRouter } from 'next/router';
import Image from 'next/image';

export default function Home() {
  const router = useRouter();

  const handleButtonClick = () => {
    router.push('/mapa');
  };

  return (
    <div className="relative h-screen">
      <div className="absolute inset-0">
        <Image
          src="/images/animal.webp" 
          alt="Background Image"
          layout="fill"
          objectFit="cover"
          className="opacity-80" 
        />
      </div>

      {/* Texto centralizado */}
      <div className="relative flex flex-col items-center justify-center h-full space-y-4 z-10">
        <h1 className="text-white text-5xl font-bold">
          Características de humanos em animais
        </h1>

        {/* Botão "Explorar Mapa" */}
        <button
          onClick={handleButtonClick}
          className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition duration-300"
        >
          Explorar Mapa
        </button>
      </div>
    </div>
  );
}
