import Head from "next/head";
import { Check, ThumbsUp } from 'lucide-react';

export default function MissionsConseilsRH() {
    return (
        <>
            <Head>
              <title>MissionsConseilsRH</title>
              <meta name="MissionsConseilsRH" content="La page qui présente les missions et les conseils en RH pour les professionnels" />
            </Head>
            <div className="bg-white py-6 sm:py-8">
                <div className="mx-auto max-w-7xl text-justify">

                    {/* Top */} 
                    <div className="max-w-auto mx-auto px-6">
                        <h1 className="mt-2 text-4xl font-semibold tracking-tight text-left text-pretty text-gray-900 sm:text-5xl">
                            Missions Ressources Humaines et Conseils RH
                        </h1>
                        <p className="mt-6 text-xl/8 text-gray-700">
                            Et si votre capital humain devenait enfin un levier de performance plutôt qu'un casse tête au quotidien ?
                        </p>
                    </div>

                    {/* Main */} 
                    <div className="flex flex-col md:flex-row h-full">
                        
                        {/* Colonne gauche */}                        
                        <div className="md:basis-7/10 p-6 text-justify">
                            <div className="text-gray-700 text-lg space-y-8">
                                <p className="mt-4 text-justify">
                                    Ponctuel ou régulier, sur site ou à distance, selon vos besoins du moment. Pas de RH à temps plein ?
                                    Je vous accompagne dans la gestion opérationnelle et stratégique de vos ressources humaines, avec une approche 
                                    pragmatique, sur mesure et orientée résultats, en conformité avec la législation du travail :
                                </p>
                                <ul role="list" className="mt-4 space-y-4 text-gray-600">
                                    <li className="flex gap-x-3">   
                                        <Check aria-hidden="true" className="mt-1 size-5 flex-none text-indigo-600" />
                                        <span>
                                            Recrutement
                                        </span>
                                    </li>
                                    <li className="flex gap-x-3">   
                                        <Check aria-hidden="true" className="mt-1 size-5 flex-none text-indigo-600" />
                                        <span>
                                            Intégration
                                        </span>
                                    </li>                                    
                                    <li className="flex gap-x-3">
                                        <Check aria-hidden="true" className="mt-1 size-5 flex-none text-indigo-600" />               
                                        <span>
                                            Gestion des contrats et des obligations liées à l'embauche
                                        </span>
                                    </li>
                                    <li className="flex gap-x-3">
                                        <Check aria-hidden="true" className="mt-1 size-5 flex-none text-indigo-600" />               
                                        <span>
                                            Gestion des absences
                                        </span>
                                    </li>
                                    <li className="flex gap-x-3">
                                        <Check aria-hidden="true" className="mt-1 size-5 flex-none text-indigo-600" />               
                                        <span>
                                            Paies et déclarations sociales
                                        </span>
                                    </li>
                                    <li className="flex gap-x-3">
                                        <Check aria-hidden="true" className="mt-1 size-5 flex-none text-indigo-600" />               
                                        <span>
                                            Veille sociale
                                        </span>
                                    </li>
                                    <li className="flex gap-x-3">
                                        <Check aria-hidden="true" className="mt-1 size-5 flex-none text-indigo-600" />               
                                        <span>
                                            Entretiens annuels, professionnels
                                        </span>
                                    </li>
                                    <li className="flex gap-x-3">
                                        <Check aria-hidden="true" className="mt-1 size-5 flex-none text-indigo-600" />               
                                        <span>
                                            Disciplinaire
                                        </span>
                                    </li>
                                    <li className="flex gap-x-3">   
                                        <Check aria-hidden="true" className="mt-1 size-5 flex-none text-indigo-600" />
                                        <span>
                                            Mise en place de procédures RH
                                        </span>
                                    </li>
                                    <li className="flex gap-x-3">   
                                        <Check aria-hidden="true" className="mt-1 size-5 flex-none text-indigo-600" />
                                        <span>
                                            Conseils RH : organisation, fidélisation des équipes, en droit du travail, santé et sécurité, 
                                            franchissement de seuils...
                                        </span>
                                    </li>
                                </ul>
                                <div className="flex items-start gap-4 text-gray-700 mt-8">
                                    <div className="flex size-10 flex-shrink-0 items-center justify-center rounded-lg bg-indigo-600">
                                        <ThumbsUp aria-hidden="true" className="size-6 text-white" />
                                    </div>
                                    <p >
                                        Une expertise à la fois juridique, opérationnelle et humaine, vous apportant un regard extérieur objectif 
                                        pour prendre les bonnes décisions et effectuer les missions liées aux ressources humaines conformes au droit 
                                        du travail. 
                                        <a href="/contact" className="text-indigo-600"> Discutons </a>
                                        ensemble de vos enjeux RH, je suis à votre écoute pour identifier vos besoins et vous proposer 
                                        des solutions concrètes.
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
                                    src="/images/RH.jpg"
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
