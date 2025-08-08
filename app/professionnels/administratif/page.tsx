import Head from "next/head";
import { Check, ThumbsUp } from 'lucide-react';

export default function Administratif() {
    return (
        <>
            <Head>
              <title>Administratif</title>
              <meta name="Administratif" content="La page qui présente les services administratif pour les professionnels" />
            </Head>
            <div className="bg-white py-6 sm:py-8">
                <div className="mx-auto max-w-7xl text-justify">

                    {/* Top */} 
                    <div className="max-w-auto mx-auto px-6">
                        <h1 className="mt-2 text-4xl font-semibold tracking-tight text-left text-pretty text-gray-900 sm:text-5xl">
                            Administratif
                        </h1>
                        <p className="mt-6 text-xl/8 text-gray-700">
                            Libérez vous des tâches chronophages et concentrez-vous sur votre croissance. 
                        </p>
                    </div>

                    {/* Main */} 
                    <div className="flex flex-col md:flex-row">
                        
                        {/* Colonne gauche */}                        
                        <div className="md:basis-7/10 p-6 text-justify">
                            <div className="text-gray-700 text-lg space-y-8">
                                <ul role="list" className="mt-4 space-y-4 text-gray-600">
                                    <li className="flex gap-x-3">   
                                        <Check aria-hidden="true" className="mt-1 size-5 flex-none text-indigo-600" />
                                        <span>
                                            Domiciliation de votre entreprise
                                        </span>
                                    </li>
                                    <li className="flex gap-x-3">   
                                        <Check aria-hidden="true" className="mt-1 size-5 flex-none text-indigo-600" />
                                        <span>
                                            Gestion de vos courriers entrants / sortants
                                        </span>
                                    </li>
                                    <li className="flex gap-x-3">
                                        <Check aria-hidden="true" className="mt-1 size-5 flex-none text-indigo-600" />               
                                        <span>
                                            Classement de vos documents, archivage
                                        </span>
                                    </li>
                                    <li className="flex gap-x-3">
                                        <Check aria-hidden="true" className="mt-1 size-5 flex-none text-indigo-600" />               
                                        <span>
                                            Rédaction, mise en forme et correction de vos courriers, relances, procédures, rapports...
                                        </span>
                                    </li>
                                    <li className="flex gap-x-3">
                                        <Check aria-hidden="true" className="mt-1 size-5 flex-none text-indigo-600" />               
                                        <span>
                                            La saisie de données
                                        </span>
                                    </li>
                                    <li className="flex gap-x-3">
                                        <Check aria-hidden="true" className="mt-1 size-5 flex-none text-indigo-600" />               
                                        <span>
                                            Tableaux de bord : création, mise en forme, modification
                                        </span>
                                    </li>
                                    <li className="flex gap-x-3">
                                        <Check aria-hidden="true" className="mt-1 size-5 flex-none text-indigo-600" />               
                                        <span>
                                            Les démarches administratives
                                        </span>
                                    </li>
                                    <li className="flex gap-x-3">
                                        <Check aria-hidden="true" className="mt-1 size-5 flex-none text-indigo-600" />               
                                        <span>
                                            Enquêtes de satisfaction clients
                                        </span>
                                    </li>
                                </ul>
                                <div className="flex items-start gap-4 text-gray-700 mt-8">
                                    <div className="flex size-10 flex-shrink-0 items-center justify-center rounded-lg bg-indigo-600">
                                        <ThumbsUp aria-hidden="true" className="size-6 text-white" />
                                    </div>
                                    <p >
                                        Chaque mission est personnalisée en fonction de vos besoins. Liste non exhaustive.
                                        N'hésitez pas à me <a href="/contact" className="text-indigo-600">contacter</a> afin de définir ensemble vos besoins et les solutions adaptées.
                                    </p>
                                </div>
                            </div>                                                  
                        </div>

                        {/* Colonne droite */}
                        <div className="hidden md:basis-3/10 p-6 md:flex flex-col h-full">
                            <div className="flex-grow flex items-center justify-center rounded-xl shadow-lg bg-gray-100">
                                <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32 m-4 rounded-xl w-full">
                                <img
                                    alt=""
                                    src="/images/Administratif.jpg"
                                    className="absolute inset-0 -z-10 w-full h-full object-cover object-center rounded-xl"
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
