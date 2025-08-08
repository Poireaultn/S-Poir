import Head from "next/head";
import { Check, ThumbsUp } from 'lucide-react';

export default function Comptabilite() {
    return (
        <>
             <Head>
              <title>Comptabilite</title>
              <meta name="Comptabilite" content="La page qui présente les services de comptabilité pour les professionnels" />
            </Head>
            <div className="bg-white py-6 sm:py-8">
                <div className="mx-auto max-w-7xl text-justify">

                    {/* Top */} 
                    <div className="max-w-auto mx-auto px-6">
                        <h1 className="mt-2 text-4xl font-semibold tracking-tight text-left text-pretty text-gray-900 sm:text-5xl">
                            Comptabilité
                        </h1>
                        <p className="mt-6 text-xl/8 text-gray-700">
                            Externalisez votre gestion comptable, gagnez du temps, réduisez les risques d'erreurs, et sécurisez vos finances. 
                        </p>
                    </div>

                    {/* Main */} 
                    <div className="flex flex-col md:flex-row h-full">
                        
                        {/* Colonne gauche */}                        
                        <div className="md:basis-7/10 p-6 text-justify">
                            <div className="text-gray-700 text-lg space-y-8">
                                <p className="mt-4 text-justify">
                                    Je vous propose un service de comptabilité sur mesure, pensé pour vous entrepreneurs, artisans, professions 
                                    libérales ou dirigeants de TP/PME, afin de gagner du temps, être en conformité, piloter avec clarté et éviter 
                                    les mauvaises surprises :
                                </p>
                                <ul role="list" className="mt-4 space-y-4 text-gray-600">
                                    <li className="flex gap-x-3">   
                                        <Check aria-hidden="true" className="mt-1 size-5 flex-none text-indigo-600" />
                                        <span>
                                            Etablissement prévisionnels et budgets
                                        </span>
                                    </li>
                                    <li className="flex gap-x-3">   
                                        <Check aria-hidden="true" className="mt-1 size-5 flex-none text-indigo-600" />
                                        <span>
                                            Saisie des opérations comptables jusqu'au bilan
                                        </span>
                                    </li>                                    
                                    <li className="flex gap-x-3">
                                        <Check aria-hidden="true" className="mt-1 size-5 flex-none text-indigo-600" />               
                                        <span>
                                            Gestion des notes de frais
                                        </span>
                                    </li>
                                    <li className="flex gap-x-3">
                                        <Check aria-hidden="true" className="mt-1 size-5 flex-none text-indigo-600" />               
                                        <span>
                                            Suivi de la trésorerie
                                        </span>
                                    </li>
                                    <li className="flex gap-x-3">
                                        <Check aria-hidden="true" className="mt-1 size-5 flex-none text-indigo-600" />               
                                        <span>
                                            Rapprochements bancaires
                                        </span>
                                    </li>
                                    <li className="flex gap-x-3">
                                        <Check aria-hidden="true" className="mt-1 size-5 flex-none text-indigo-600" />               
                                        <span>
                                            Relance clients
                                        </span>
                                    </li>
                                    <li className="flex gap-x-3">
                                        <Check aria-hidden="true" className="mt-1 size-5 flex-none text-indigo-600" />               
                                        <span>
                                            Pointage des comptes et justifications
                                        </span>
                                    </li>
                                    <li className="flex gap-x-3">
                                        <Check aria-hidden="true" className="mt-1 size-5 flex-none text-indigo-600" />               
                                        <span>
                                            Liaison avec votre expert comptable
                                        </span>
                                    </li>
                                    <li className="flex gap-x-3">   
                                        <Check aria-hidden="true" className="mt-1 size-5 flex-none text-indigo-600" />
                                        <span>
                                            Classement de vos documents comptables
                                        </span>
                                    </li>
                                </ul>
                                <div className="flex items-start gap-4 text-gray-700 mt-8">
                                    <div className="flex size-10 flex-shrink-0 items-center justify-center rounded-lg bg-indigo-600">
                                        <ThumbsUp aria-hidden="true" className="size-6 text-white" />
                                    </div>
                                    <p >
                                        Une proximité, de la réactivité, et un accompagnement humain, loin des solutions impersonnelles ou automatisées. 
                                        Les prestations sont modulables selon vos besoins. Envie d'en discuter ?
                                        <a href="/contact" className="text-indigo-600"> Contactez moi</a>
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
                                    src="/images/Compta.jpg"
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
