import Head from "next/head";
import { Check, ThumbsUp, MapPin, User, Laptop, FileSpreadsheet } from 'lucide-react';

export default function AdministratifNumerique() {
    return (
        <>
            <Head>
              <title>AdministratifNumerique</title>
              <meta name="AdministratifNumerique" content="La page qui présente les services administratif et numérique pour les particuliers" />
            </Head>
            <div className="bg-white py-6 sm:py-8">
                <div className="mx-auto max-w-7xl text-justify">

                    {/* Top */} 
                    <div className="max-w-auto mx-auto px-6">
                        <h1 className="mt-2 text-4xl font-semibold tracking-tight text-left text-pretty text-gray-900 sm:text-5xl">
                            Administratif et numérique
                        </h1>
                        <p className="mt-6 text-xl/8 text-gray-700">
                            Simplifiez votre quotidien, vos démarches administratives et  maîtrisez le numérique !
                        </p>
                        <p className="mt-6 text-lg text-gray-700">
                            Vous êtes débordé(e) par les démarches administratives ? Vous avez du mal à utiliser l'ordinateur pour vos documents 
                            ou vos formalités en ligne ?<br/>
                            Je suis là pour vous accompagner, pas à pas, dans toutes vos démarches personnelles et informatiques.
                        </p>
                    </div>

                    {/* Main 1 */} 
                    <div className="flex flex-col md:flex-row h-full">
                        {/* Colonne gauche */}                        
                        <div className="md:basis-1/2 p-6 text-justify">
                            <div className="text-gray-700 text-lg space-y-8">
                                <div className="flex items-center gap-4 text-gray-700 mt-8">
                                    <div className="flex size-10 flex-shrink-0 items-center justify-center rounded-lg bg-indigo-600">
                                        <FileSpreadsheet aria-hidden="true" className="size-6 text-white" />
                                    </div>
                                    <p >
                                        Prestations administratives :
                                    </p>
                                </div>
                                <ul role="list" className="mt-4 space-y-4 text-gray-600">
                                    <li className="flex gap-x-3">   
                                        <Check aria-hidden="true" className="mt-1 size-5 flex-none text-indigo-600" />
                                        <span>
                                            Rédaction et envoi de courriers officiels (employeur, assurance, etc.)
                                        </span>
                                    </li>
                                    <li className="flex gap-x-3">   
                                        <Check aria-hidden="true" className="mt-1 size-5 flex-none text-indigo-600" />
                                        <span>
                                            Apprentissage de la gestion de budget simple et efficace
                                        </span>
                                    </li>                                    
                                    <li className="flex gap-x-3">
                                        <Check aria-hidden="true" className="mt-1 size-5 flex-none text-indigo-600" />               
                                        <span>
                                           Montage de dossiers (CAF, retraite, sécurité sociale...)
                                        </span>
                                    </li>
                                    <li className="flex gap-x-3">
                                        <Check aria-hidden="true" className="mt-1 size-5 flex-none text-indigo-600" />               
                                        <span>
                                            Optimisation de vos contrats (assurance, téléphonie, énergie...)
                                        </span>
                                    </li>
                                </ul>
                            </div>                                                  
                        </div>

                        {/* Colonne droite */}
                        <div className="hidden md:basis-1/2 p-6 mt-4 md:flex rounded-xl shadow-lg bg-gray-100">
                            <div className="flex flex-1 items-stretch">
                                <div className="relative isolate overflow-hidden bg-gray-900 rounded-xl w-full">
                                <img
                                    alt=""
                                    src="/images/Courrier.jpg"
                                    className="absolute inset-0 -z-10 h-full w-full object-cover object-center rounded-xl"
                                />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Main 2 */} 
                    <div className="flex flex-col md:flex-row h-full">
                        {/* Colonne gauche */}
                        <div className="hidden md:basis-1/2 p-6 mt-4 md:flex rounded-xl shadow-lg bg-gray-100">
                            <div className="flex flex-1 items-stretch">
                                <div className="relative isolate overflow-hidden bg-gray-900 rounded-xl w-full">
                                <img
                                    alt=""
                                    src="/images/Laptop_2.jpg"
                                    className="absolute inset-0 -z-10 h-full w-full object-cover object-center rounded-xl"
                                />
                                </div>
                            </div>
                        </div>

                        {/* Colonne droite */}                        
                        <div className="md:basis-1/2 p-6 text-justify">
                            <div className="text-gray-700 text-lg space-y-8">
                                <div className="flex items-center gap-4 text-gray-700 mt-8">
                                    <div className="flex size-10 flex-shrink-0 items-center justify-center rounded-lg bg-indigo-600">
                                        <Laptop aria-hidden="true" className="size-6 text-white" />
                                    </div>
                                    <p >
                                        Services bureautiques & informatiques : 
                                    </p>
                                </div>
                                <ul role="list" className="mt-4 space-y-4 text-gray-600">
                                    <li className="flex gap-x-3">   
                                        <Check aria-hidden="true" className="mt-1 size-5 flex-none text-indigo-600" />
                                        <span>
                                            Initiation à l'ordinateur (Windows, tableur, traitement de textes...)
                                        </span>
                                    </li>
                                    <li className="flex gap-x-3">   
                                        <Check aria-hidden="true" className="mt-1 size-5 flex-none text-indigo-600" />
                                        <span>
                                            Création et mise en forme de tableaux de bord (suivi personnel...)
                                        </span>
                                    </li>                                    
                                    <li className="flex gap-x-3">
                                        <Check aria-hidden="true" className="mt-1 size-5 flex-none text-indigo-600" />               
                                        <span>
                                           Accompagnement personnalisé pour vos démarches en ligne : impôts, retraite, CAF, Ameli...
                                        </span>
                                    </li>
                                    <li className="flex gap-x-3">
                                        <Check aria-hidden="true" className="mt-1 size-5 flex-none text-indigo-600" />               
                                        <span>
                                            Aide ponctuelle ou formation à la carte, selon vos besoins
                                        </span>
                                    </li>
                                </ul>                                
                            </div>                                                  
                        </div>
                    </div>

                    {/* Bottom */}
                    <div className="flex items-center gap-4 text-gray-700 text-lg p-6 mt-6">
                        <div className="flex size-10 flex-shrink-0 items-center justify-center rounded-lg bg-indigo-600">
                            <ThumbsUp aria-hidden="true" className="size-6 text-white" />
                        </div>
                        <p >
                            Vous rendre autonome, vous faire gagner du temps et de la sérénité.                                       
                        </p>
                    </div>
                    <div className="flex items-center gap-4 text-gray-700 text-lg p-6">
                        <div className="flex size-10 flex-shrink-0 items-center justify-center rounded-lg bg-indigo-600">
                            <MapPin aria-hidden="true" className="size-6 text-white" />
                        </div>
                        <p >
                            Intervention à domicile ou à distance — selon votre préférence.
                        </p>
                    </div>
                    <div className="flex items-center gap-4 text-gray-700 text-lg p-6">
                        <div className="flex size-10 flex-shrink-0 items-center justify-center rounded-lg bg-indigo-600">
                            <User aria-hidden="true" className="size-6 text-white" />
                        </div>
                        <p >
                            particuliers, débutants, seniors, ou toute personne ayant besoin d'un coup de pouce administratif ou numérique.
                        </p>
                    </div>
                    <p className="p-6 text-justify text-gray-700 text-lg">
                        Liste non exhaustive. N'hésitez pas à
                        <a href="/contact" className="text-indigo-600"> me contacter</a>
                        . Ensemble, nous définirons la nature exacte de vos besoins et je vous proposerai une solution adaptée.
                    </p>
                </div>
            </div>
        </>
    );
}
