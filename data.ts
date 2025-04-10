import next from "./assets/images/nextjs.svg";
import nuxt from "./assets/images/nuxt.svg";
import craftcms from "./assets/images/craft-cms.svg";
import astro from "./assets/images/astro.svg";
import react from "./assets/images/react.svg";
import vue from "./assets/images/vue.svg";
import strapi from "./assets/images/strapi.svg";
import wordpress from "./assets/images/wordpress.svg";
import livewire from "./assets/images/livewire.svg";
import laravel from "./assets/images/laravel.svg";
// partners
import trio from "./assets/images/trio.svg";
import details from "./assets/images/details-sa.jpg";
import sleeps from "./assets/images/sleeps.png";
import tissot from "./assets/images/tissot.svg";
import mercredi from "./assets/images/mercredi.png";
import ircam from "./assets/images/ircam.svg";
import cvsevrier from "./assets/images/cvsevrier.svg";
import mouss from "./assets/images/mouss.svg";
import ideative from "./assets/images/ideative.png";
import coteDecouvertes from "./assets/images/cote-decouvertes.png";
import bart from "./assets/images/bart.svg";
import yourLogo from "./assets/images/your-logo.png";

export default {
  titleHome: "Sites web éco-conçus et performants ! Genève, Lausanne, Annecy",
  metaTitleHome:
    "Développement de sites web éco-conçus et performants ! Genève, Lausanne, Annecy",
  descriptionHome:
    "Développement de site web et d'applications web modernes. Optimisation de la vitesse et réduction de l'impact environnemental des sites web.",
  baseline: "Sites web éco-responsables et performants",
  heroText:
    'Micro agence spécialisée dans le développement de sites web modernes, performants et éco-conçus.<br /><span class="text-primary-700">Optimisation de la vitesse et réduction de l\'impact des sites webs, pour offrir une expérience utilisateur rapide et durable.</span>',
  place: "Annecy, Genève, Lausanne",
  place_ch: "Genève, Lausanne, Annecy",
  socials: [
    {
      label: "GitHub",
      link: "https://github.com/ipatate",
      icon: "github",
    },
    {
      label: "Blue Sky",
      link: "https://bsky.app/profile/patrickfaramaz.bsky.social",
      icon: "bluesky",
    },
    {
      label: "LinkedIn",
      link: "https://www.linkedin.com/in/patrickfaramaz/",
      icon: "linkedin",
    },
    {
      label: "Twitter",
      link: "https://twitter.com/PatrickFaramaz",
      icon: "twitter",
    },
  ],
  navigations: [
    {
      label: "Accueil",
      link: "/",
      isHome: true,
    },
    {
      label: "Services",
      link: "#",
      subMenu: [
        {
          label: "Développement de sites web modernes",
          link: "/services/developpement-de-web-applications-et-sites-web-modernes",
        },
        {
          label: "Développement WordPress avancé",
          link: "/services/developpement-wordpress-avance",
        },
        {
          label: "Développement sous Craft CMS",
          link: "/services/developpement-sous-craft-cms",
        },
        {
          label: "Consultant technique pour vos projets web",
          link: "/services/consultant-technique-web",
        },
        {
          label: "Maintenance WordPress",
          link: "/services/maintenance-wordpress",
        },
      ],
    },
    {
      label: "IA",
      link: "/intelligence-artificielle",
    },
    {
      label: "WordPress",
      link: "/agence-wordpress",
    },
    {
      label: "A propos",
      link: "/about",
    },
    {
      label: "Podcast",
      link: "/podcast",
    },
    {
      label: "Contact",
      link: "/contact",
    },
  ],
  tools: [
    {
      title: "Next.js",
      image: next,
      class: "w-40",
    },
    {
      title: "Astro.js",
      image: astro,
      class: "w-24",
    },
    {
      title: "Nuxt",
      image: nuxt,
      class: "w-40",
    },
    {
      title: "React.js",
      image: react,
      class: "w-24",
    },
    {
      title: "Vue.js",
      image: vue,
      class: "w-24",
    },
    {
      title: "WordPress",
      image: wordpress,
      class: "w-24",
    },
    {
      title: "Craft CMS",
      image: craftcms,
      class: "w-50",
    },
    {
      title: "Strapi",
      image: strapi,
      class: "w-48",
    },
    {
      title: "Laravel",
      image: laravel,
      class: "w-48",
    },
    {
      title: "Livewire",
      image: livewire,
      class: "w-48",
    },
  ],
  partners: [
    {
      title: "Agence Trio",
      image: trio,
      place: "Lausanne, Suisse",
      details: "WordPress, Craft CMS, React.js, Nuxt.js",
      class: "w-28",
    },
    {
      title: "Agence Details SA",
      image: details,
      place: "Genève, Suisse",
      details: "Expertise React.js",
      class: "w-16",
    },
    {
      title: "Agence Idéative",
      image: ideative,
      place: "Genève, Suisse",
      details: "Expertise Frontend",
      class: "w-28",
    },
    {
      title: "Éditions Tissot",
      image: tissot,
      place: "Annecy, France",
      details: "Expertise Next.js et Craft CMS",
      class: "w-28",
    },
    {
      title: "Sleeps",
      image: sleeps,
      place: "Paris, France",
      details: "Maintenance & développement WordPress",
      class: "w-32",
    },
    {
      title: "Mercredi Biscuiterie",
      image: mercredi,
      place: "Lyon, France",
      details: "Maintenance & développement WordPress",
      class: "w-20",
    },
    {
      title: "Ircam",
      image: ircam,
      place: "Paris, France",
      details: "Expertise Strapi et Nuxt.js",
      class: "w-32",
    },
    {
      title: "CV Sevrier",
      image: cvsevrier,
      place: "Sevrier, France",
      details: "Maintenance & développement WordPress",
      class: "w-24",
    },
    {
      title: "Mouss Films",
      image: mouss,
      place: "Annecy, France",
      details: "Maintenance & développement WordPress",
      class: "w-20",
    },
    {
      title: "La Fondation St-Barthélemy",
      image: bart,
      place: "Lausanne, Suisse",
      details: "Maintenance & développement WordPress",
      class: "w-48",
    },
    {
      title: "Côté et Découvertes",
      image: coteDecouvertes,
      place: "Thônes, France",
      details: "Maintenance & développement WordPress",
      class: "w-36 mb-2",
    },
    {
      title: "Votre logo ici ?",
      image: yourLogo,
      place: "Votre ville, votre pays",
      details: "Votre description",
      class: "w-20",
    },
  ],
  services: [
    {
      title: "Développement WordPress avancé",
      link: "/services/developpement-wordpress-avance",
      intro:
        "Développement de sites WordPress optimisés pour la performance et éco-conçus.",
      class: "lg:col-span-2 bg-casper-800",
    },
    {
      title: "Maintenance WordPress",
      link: "/services/maintenance-wordpress",
      intro:
        "Maintenance et évolution de votre site WordPress pour dormir sur vos deux oreilles.",
      class: "bg-summer-green-800",
    },
    {
      title: "Développement sous Craft CMS",
      link: "/services/developpement-sous-craft-cms",
      intro:
        "Développement de sites web avec Craft CMS, un CMS PHP moderne et performant.",
      class: "bg-secondary-800",
    },
    {
      title: "Développement web applications et sites web modernes",
      link: "/services/developpement-de-web-applications-et-sites-web-modernes",
      intro:
        "Développement d'applications web avec NuxtJS ou NextJS, ainsi que de sites web statiques avec Astro.",
      class: "lg:col-span-2 bg-alto-800",
    },
    {
      title: "Consultant technique pour vos projets web",
      link: "/services/consultant-technique-web",
      intro:
        "Fort de plus de 15 ans d'expérience dans le développement web, je vous accompagne dans la réalisation de vos projets web. Que ce soit pour le choix des technologies, l'architecture ou la performance, je vous aide à prendre les bonnes décisions.",
      class: "lg:col-span-3 bg-primary-800",
    },
  ],
};
