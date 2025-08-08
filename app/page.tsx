import Head from "next/head";
import { Target, TrendingDown, HandCoins, Hourglass, Lock, ClockArrowDown, Leaf, ArrowDown } from 'lucide-react';

const features = [
    {
    name: 'Gain de temps et sérénité',
    description:
      "Vous me déléguez les tâches chronophages ou complexes, et vous vous concentrez sur ce que vous savez le mieux faire : Votre métier.",
    icon: Hourglass,
  },
  {
    name: 'Souplesse maximale',
    description:
      "Pas de contrat de travail, pas d'engagement à long terme. J'interviens quand vous avez besoin, pour la durée que vous décidez, en toute liberté.",
    icon: Leaf,
  },  
  {
    name: 'Expertise ciblée et immédiate',
    description:
      "Professionnelle autonome et expérimentée, je m'adapte à votre organisation et suis opérationnelle immédiatement.",
    icon: Target,
  },
  {
    name: 'Réduction des risques administratifs',
    description:
      "Pas de contrat CDD/CDI/intérim, pas de risque prud'homaux. Restez maître des délais, durées, et des modalités sans risque.",
    icon: TrendingDown,
  },
  {
    name: 'Agilité et réactivité',
    description:
      "Vous devez répondre rapidement à un pic d'activité, un besoin ponctuel ou récurent dont la durée ne justifie pas l'embauche d'un (e) salarié (e), un projet spécifique ? Réactive et proactive, je mets mes compétences à votre service, en restant adaptable et flexible. ",
    icon: ClockArrowDown,
  },
  {
    name: 'Maîtrise des coûts',
    description:
      "Je gère mes propres cotisations, vous ne payez pas de congés payés, maladie, pas de charges patronales, ou de coûts indirects liés aux procédures RH complexes... Vous payez pour un temps de travail effectif et gardez le contrôle sur votre budget.",
    icon: HandCoins,
  },
  {
    name: 'Confidentialité et professionnalisme',
    description:
      "Je traite vos informations avec rigueur et discrétion.",
    icon: Lock,
  },  
]

export default function Accueil() {
    return (
          <>
            <Head>
              <title>Accueil</title>
              <meta name="Accueil" content="La page d'acceuil du site" />
            </Head>
            <div className="relative isolate overflow-hidden bg-gray-900 py-12 sm:py-16 m-4 rounded-xl">
                <img
                    alt=""
                    src="/images/Desk.jpg"
                    className="absolute inset-0 -z-10 size-full object-cover object-right md:object-center"
                />
                <div
                    aria-hidden="true"
                    className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
                >
                    <div
                    style={{
                        clipPath:
                        'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }}
                    className="aspect-1097/845 w-274.25 bg-linear-to-tr from-[#ff4694] to-[#776fff] opacity-20"
                    />
                </div>
                <div
                    aria-hidden="true"
                    className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
                >
                    <div
                    style={{
                        clipPath:
                        'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }}
                    className="aspect-1097/845 w-274.25 bg-linear-to-tr from-[#ff4694] to-[#776fff] opacity-20"
                    />
                </div>
                <div className="mx-auto flex max-w-7xl items-center justify-center px-6 lg:px-8 text-center">
                    <div className="mx-auto max-w-2xl lg:mx-0">
                    <img src="/images/Logo.png"></img>
                    <p className="mt-8 text-lg font-medium text-pretty text-black sm:text-xl/8">
                        <strong>C'est allier performance, simplicité, maîtrise budgétaire, expertise 
                        et vous permettre de vous concentrer sur votre cœur de métier !</strong>
                    </p>
                    </div>
                </div>
            </div>
            <div className="bg-white py-6 sm:py-8">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl text-center">
                        <p className="mt-6 text-lg/8 text-black">
                            Pour un besoin ponctuel ou une compétence spécifique, c'est
                        </p>
                        <h2 className="text-base/7 font-semibold text-indigo-600">VOTRE SOLUTION PRO</h2>
                        <p className="text-lg/8 text-black">
                            rapide et sans contrainte. 
                        </p>
                        <div className="mt-4 flex justify-center items-center gap-4">
                          <ArrowDown aria-hidden="true" className="size-5 text-indigo-600" />
                          <ArrowDown aria-hidden="true" className="size-5 text-indigo-600" />
                          <ArrowDown aria-hidden="true" className="size-5 text-indigo-600" />
                        </div>
                    </div>
                    <div className="mx-auto mt-16 mb-12 max-w-2xl sm:mt-20 sm:mb-15 lg:mt-24 lg:mb-18 lg:max-w-4xl">
                        <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                            {features.map((feature) => (
                            <div key={feature.name} className="relative pl-16">
                                <dt className="text-base/7 font-semibold text-gray-900">
                                <div className="absolute top-0 left-0 flex size-10 items-center justify-center rounded-lg bg-indigo-600">
                                    <feature.icon aria-hidden="true" className="size-6 text-white" />
                                </div>
                                {feature.name}
                                </dt>
                                <dd className="mt-2 text-base/7 text-gray-600 text-justify">{feature.description}</dd>
                            </div>
                            ))}
                        </dl>
                    </div>
                    <div className="mx-auto max-w-3xl text-center">
                        <p className="mt-6 text-lg/8 text-black">
                            Faire appel à  S-POIR Multi-Prestations dans les fonctions support, c'est bénéficier d'un renfort expert, flexible et économique, 
                            sans les contraintes d'un recrutement. Une solution intelligente pour les structures agiles et les dirigeants qui veulent aller 
                            à l'essentiel.
                        </p>
                    </div>
                </div>
            </div>
          </>
    );
}
