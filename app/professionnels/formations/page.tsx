import Head from "next/head";
import { Check, ThumbsUp, MapPin } from 'lucide-react';

export default function Formations() {
    return (
        <>
            <Head>
              <title>Formations</title>
              <meta name="Formations" content="La page qui présente les formations pour les professionnels" />
            </Head>
            <div className="bg-white py-6 sm:py-8">
                <div className="mx-auto max-w-7xl text-justify">

                    {/* Top */} 
                    <div className="max-w-auto mx-auto px-6">
                        <h1 className="mt-2 text-4xl font-semibold tracking-tight text-left text-pretty text-gray-900 sm:text-5xl">
                            Formations
                        </h1>
                        <p className="mt-6 text-xl/8 text-gray-700">
                            Boostez les compétences RH et bureautiques de vos équipes.
                        </p>
                    </div>

                    {/* Main */} 
                    <div className="flex flex-col md:flex-row h-full">
                        
                        {/* Colonne gauche */}                        
                        <div className="md:basis-7/10 p-6 text-justify">
                            <div className="text-gray-700 text-lg space-y-8">
                                <p className="mt-4 text-justify">
                                    Je vous propose des formations courtes, concrètes, immédiatement applicables et adaptées à vos besoins opérationnels :
                                </p>
                                <ul role="list" className="mt-4 space-y-4 text-gray-600">
                                    <li className="flex gap-x-3">   
                                        <Check aria-hidden="true" className="mt-1 size-5 flex-none text-indigo-600" />
                                        <span>
                                            Maîtriser l'essentiel du droit du travail : comprendre les bases légales pour sécuriser ses pratiques 
                                            RH (2 jours). 
                                        </span>
                                    </li>
                                    <li className="flex gap-x-3">   
                                        <Check aria-hidden="true" className="mt-1 size-5 flex-none text-indigo-600" />
                                        <span>
                                            Droit du travail au quotidien : savoir gérer les cas concrets (contrats, absences, sanctions...) (2 jours)
                                        </span>
                                    </li>                                    
                                    <li className="flex gap-x-3">
                                        <Check aria-hidden="true" className="mt-1 size-5 flex-none text-indigo-600" />               
                                        <span>
                                           Recruter : de la définition du besoin à la conduite d'entretien structuré (2 jours)
                                        </span>
                                    </li>
                                    <li className="flex gap-x-3">
                                        <Check aria-hidden="true" className="mt-1 size-5 flex-none text-indigo-600" />               
                                        <span>
                                            Réussir l'intégration d'un nouveau collaborateur : Onboarding fluide, fidélisation rapide (1 jour)
                                        </span>
                                    </li>Formations
                                    <li className="flex gap-x-3">
                                        <Check aria-hidden="true" className="mt-1 size-5 flex-none text-indigo-600" />               
                                        <span>
                                            Devenir un nouveau manager : Poser ses bases, adopter la posture et les bons réflexes (2 jours)
                                        </span>
                                    </li>
                                    <li className="flex gap-x-3">
                                        <Check aria-hidden="true" className="mt-1 size-5 flex-none text-indigo-600" />               
                                        <span>
                                            Conduire l'entretien professionnel : Valoriser les parcours, répondre aux obligations légales (1 jour)
                                        </span>
                                    </li>
                                    <li className="flex gap-x-3">
                                        <Check aria-hidden="true" className="mt-1 size-5 flex-none text-indigo-600" />               
                                        <span>
                                            Mener un entretien de recadrage : Savoir poser un cadre sans générer de tensions (1 jour)
                                        </span>
                                    </li>
                                    <li className="flex gap-x-3">
                                        <Check aria-hidden="true" className="mt-1 size-5 flex-none text-indigo-600" />               
                                        <span>
                                            Formation Excel (initiation 2 jours)
                                        </span>
                                    </li>
                                </ul>
                                <div className="flex items-start gap-4 text-gray-700 mt-8">
                                    <div className="flex size-10 flex-shrink-0 items-center justify-center rounded-lg bg-indigo-600">
                                        <ThumbsUp aria-hidden="true" className="size-6 text-white" />
                                    </div>
                                    <p >
                                        Faites monter en compétences durablement  vos équipes pour qu'elles soient à la fois plus autonomes, 
                                        performantes et confiantes dans leur quotidien professionnel. 
                                        <a href="/contact" className="text-indigo-600"> Discutons </a>
                                        ensemble de vos besoins spécifiques pour créer un parcours 100 % sur mesure. Liste non exhaustive.                                        
                                    </p>
                                </div>
                                <div className="flex items-center gap-4 text-gray-700 mt-8">
                                    <div className="flex size-10 flex-shrink-0 items-center justify-center rounded-lg bg-indigo-600">
                                        <MapPin aria-hidden="true" className="size-6 text-white" />
                                    </div>
                                    <p >
                                        Intervention en intra, en inter ou à distance — selon votre préférence.                                       
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
                                    src="/images/Formations.jpg"
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
