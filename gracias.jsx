
import Link from "next/link";
import Image from "next/image";

export default function Gracias() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-blue-50 p-8 text-center text-gray-800 flex flex-col justify-center items-center">
      <Image
        src="/logo-los-esp.png"
        alt="Logo Método LOS"
        width={100}
        height={100}
        className="mb-6"
      />
      <h1 className="text-4xl font-bold text-blue-700 mb-4">¡Gracias por unirte!</h1>
      <p className="text-lg max-w-xl mb-6">
        Has dado el primer paso para aprender español con el método más natural y emocional que existe. Pronto recibirás materiales especiales en tu correo. ¡Estamos felices de tenerte aquí!
      </p>
      <p className="text-base text-gray-600 mb-8 italic">
        Du hast den ersten Schritt gemacht – bald bekommst du exklusive Inhalte und Tipps für deinen Spanischweg. Willkommen!
      </p>
      <Link href="/" className="bg-blue-600 text-white px-6 py-2 rounded-xl hover:bg-blue-700 transition">
        Volver al inicio / Zurück zur Startseite
      </Link>
    </main>
  );
}
