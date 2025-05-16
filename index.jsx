
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white p-8 text-gray-800">
      <section className="max-w-4xl mx-auto">
        <div className="bg-white p-6 rounded-2xl shadow-lg mb-10 text-center">
          <Image
            src="/logo-los-esp.png"
            alt="Logo del curso LOS"
            width={120}
            height={120}
            className="mx-auto mb-4"
          />
          <h1 className="text-5xl font-extrabold text-blue-800 mb-4">
            Aprende español como un bebé
          </h1>
          <p className="text-xl mb-6 text-gray-700">
            El Método LOS: Lenguaje, Oído y Sentido. <br />
            Spanisch lernen wie ein Baby – mit Gefühl, Klang und Kontext.
          </p>
          <Button className="text-lg px-6 py-2 rounded-xl shadow">
            Empieza ahora / Jetzt starten
          </Button>
        </div>
      </section>
    </main>
  );
}
