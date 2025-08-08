import Head from "next/head";
import GoogleMapIframe from '@/components/GoogleMapIframe';
import { Mail, Phone, MapPin, Clock, ArrowDown } from 'lucide-react';


export default function contact(){
  return (
    <>
        <Head>
            <title>Contact</title>
            <meta name="Contact" content="La page avec toutes les informations de contact" />
        </Head>
        <div className="bg-white py-6 sm:py-8">
            <div className="mx-auto max-w-7xl text-justify">

                {/* Top */} 
                <div className="max-w-auto mx-auto px-6">
                    <h1 className="mt-2 mb-8 text-4xl font-semibold tracking-tight text-center text-pretty text-gray-900 sm:text-5xl">
                        Une question ? Besoin d'un devis ? Parlons-en !
                    </h1>
                    <p className="mt-6 text-xl/8 text-gray-700">
                        Vous avez une question sur mes prestations ? Vous souhaitez obtenir un devis personnalisé ou discuter de vos besoins ? 
                        N'hésitez pas à compléter le formulaire ci-dessous ou contactez-moi directement.
                    </p>
                </div>
                
                <div className="flex flex-col md:flex-row h-full mt-6">

                    {/* Colonne gauche */}                        
                    <div className="md:basis-1/2 p-6">
                    <GoogleMapIframe />
                    </div>

                    {/* Colonne droite */}
                    <div className="md:basis-1/2 p-6 rounded-xl shadow-lg bg-gray-100">
                    <h1 className="mt-2 text-4xl font-semibold tracking-tight text-left text-pretty text-gray-900 sm:text-5xl">
                        S-POIR Multi-Prestations
                    </h1>
                    <p className="mt-6 text-xl/8 text-gray-700">
                        Basée à Saint-Vincent-de-Paul, proche de la ville de DAX.
                    </p>
                    <p className="mt-6 text-xl/8 text-gray-700">
                        Mes Coordonnées :
                    </p>
                    <div className="text-gray-700 text-lg space-y-8">
                        <ul role="list" className="mt-4 space-y-4 text-gray-600">
                        <li className="flex gap-x-3">   
                            <Mail aria-hidden="true" className="mt-1 size-5 flex-none text-indigo-600" />
                            <span>
                            Adresse email professionnelle
                            </span>
                        </li>
                        <li className="flex gap-x-3">   
                            <Phone aria-hidden="true" className="mt-1 size-5 flex-none text-indigo-600" />
                            <span>
                            Numéro de téléphone : 06 85 92 81 81 
                            </span>
                        </li>
                        <li className="flex gap-x-3">   
                            <MapPin aria-hidden="true" className="mt-1 size-5 flex-none text-indigo-600" />
                            <span>
                            Adresse postale : Saint Vincent de Paul (40990)
                            </span>
                        </li>
                        <li className="flex gap-x-3">   
                            <Clock   aria-hidden="true" className="mt-1 size-5 flex-none text-indigo-600" />
                            <span>
                            Horaires : Lundi au vendredi, 08h30 - 18 h 30 
                            </span>
                        </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
      </div>

      <div className="mx-auto max-w-2xl text-center">
        <div className="mt-4 flex justify-center items-center gap-4">
          <ArrowDown aria-hidden="true" className="size-5 text-indigo-600" />
          <ArrowDown aria-hidden="true" className="size-5 text-indigo-600" />
          <ArrowDown aria-hidden="true" className="size-5 text-indigo-600" />
        </div>
      </div>
      
      
    </>
  );
}
