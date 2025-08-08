import Head from "next/head";
import { Check, ThumbsUp, MapPin } from 'lucide-react';

export default function DemandeursEmploi() {
    return (
        <>
            <Head>
              <title>DemandeursEmploi</title>
              <meta name="DemandeursEmploi" content="La page qui présente les services  pour les demanderus d'emploi" />
            </Head>
            <div className="bg-white py-6 sm:py-8">
                <div className="mx-auto max-w-7xl text-justify">

                    {/* Top */} 
                    <div className="max-w-auto mx-auto px-6">
                        <h1 className="mt-2 text-4xl font-semibold tracking-tight text-left text-pretty text-gray-900 sm:text-5xl">
                            Demandeurs d'emploi
                        </h1>
                        <p className="mt-6 text-xl/8 text-gray-700">
                            Demandeur d'emploi ? Donnez un coup de boost à votre recherche !
                        </p>
                    </div>

                    {/* Main */} 
                    <div className="flex flex-col md:flex-row h-full">
                        
                        {/* Colonne gauche */}                        
                        <div className="md:basis-7/10 p-6 text-justify">
                            <div className="text-gray-700 text-lg space-y-8">
                                <p className="mt-4 text-justify">
                                    Vous cherchez un emploi mais ne savez pas par où commencer ?<br/>
                                    Votre CV ne vous ressemble plus ? Vous redoutez les entretiens ?<br/>
                                    Les démarches en ligne vous semblent compliquées ?
                                </p>
                                <p className="mt-4 text-justify">
                                    Je vous propose un accompagnement personnalisé, concret et efficace pour vous aider à décrocher un poste. 
                                    Mes services pour vous (liste non exhaustive) :
                                </p>
                                <ul role="list" className="mt-4 space-y-4 text-gray-600">
                                    <li className="flex gap-x-3">   
                                        <Check aria-hidden="true" className="mt-1 size-5 flex-none text-indigo-600" />
                                        <span>
                                            Aide aux démarches en ligne : aide sur votre dossier France Travail et actualisation
                                        </span>
                                    </li>
                                    <li className="flex gap-x-3">   
                                        <Check aria-hidden="true" className="mt-1 size-5 flex-none text-indigo-600" />
                                        <span>
                                            Création ou refonte de CV professionnel et moderne
                                        </span>
                                    </li>                                    
                                    <li className="flex gap-x-3">
                                        <Check aria-hidden="true" className="mt-1 size-5 flex-none text-indigo-600" />               
                                        <span>
                                           Création et complétude de compte sur les sites d'emploi (indeed, météojob...)
                                        </span>
                                    </li>
                                    <li className="flex gap-x-3">
                                        <Check aria-hidden="true" className="mt-1 size-5 flex-none text-indigo-600" />               
                                        <span>
                                            Rédaction de lettres de motivation adaptées à chaque offre
                                        </span>
                                    </li>
                                    <li className="flex gap-x-3">
                                        <Check aria-hidden="true" className="mt-1 size-5 flex-none text-indigo-600" />               
                                        <span>
                                            Préparation aux entretiens : entraînement, posture, confiance
                                        </span>
                                    </li>
                                </ul>
                                <div className="flex items-start gap-4 text-gray-700 mt-8">
                                    <div className="flex size-10 flex-shrink-0 items-center justify-center rounded-lg bg-indigo-600">
                                        <ThumbsUp aria-hidden="true" className="size-6 text-white" />
                                    </div>
                                    <p >
                                        Vous rendre autonome, organisé(e) et confiant(e) dans votre parcours vers l'emploi.<br/>
                                        Un accompagnement humain, bienveillant, et adapté à votre rythme.
                                    </p>
                                </div>
                                <div className="flex items-center gap-4 text-gray-700 mt-8">
                                    <div className="flex size-10 flex-shrink-0 items-center justify-center rounded-lg bg-indigo-600">
                                        <MapPin aria-hidden="true" className="size-6 text-white" />
                                    </div>
                                    <p >
                                        Prestations à la carte — à distance ou en présentiel. N'hésitez pas à
                                        <a href="/contact" className="text-indigo-600"> me contacter</a>.                                      
                                    </p>
                                </div>
                            </div>                                                  
                        </div>

                        {/* Colonne droite */}
                        <div className="hidden md:basis-3/10 p-6 mt-4 md:flex rounded-xl shadow-lg bg-gray-100">
                            <div className="flex flex-1 items-stretch">
                                <div className="relative isolate overflow-hidden bg-gray-900 rounded-xl w-full">
                                <img
                                    alt=""
                                    src="/images/CV.jpg"
                                    className="absolute inset-0 -z-10 h-full w-full object-cover object-center rounded-xl"
                                />
                                </div>
                            </div>
                        </div>                        
                    </div>                        
                </div>
            </div>
        </>
    );
}
