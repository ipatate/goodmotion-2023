import next from "./assets/images/nextjs.svg";
import nuxt from "./assets/images/nuxt.svg";
import craftcms from "./assets/images/craft-cms.svg";
import astro from "./assets/images/astro.svg";
import react from "./assets/images/react.svg";
import vue from "./assets/images/vue.svg";
import strapi from "./assets/images/strapi.svg";
import wordpress from "./assets/images/wordpress.svg";
// partners
import trio from "./assets/images/trio.svg";
import details from "./assets/images/details-sa.jpg";
import sleeps from "./assets/images/sleeps.png";
import tissot from "./assets/images/tissot.svg";
import mercredi from "./assets/images/mercredi.png";
import prism from "./assets/images/prism.webp";
import ircam from "./assets/images/ircam.svg";
import yourLogo from "./assets/images/your-logo.png";

export default {
  titleHome: "Sites web rapides et durables ! Genève, Lausanne, Annecy",
  metaTitleHome:
    "Développement de sites web rapides et durables ! Genève, Lausanne, Annecy",
  descriptionHome:
    "Développement de site web et d'applications web modernes. Optimisation de la vitesse et réduction de l'impact environnemental des sites web.",
  baseline: "Sites web rapides et durables !",
  heroText:
    "Micro agence spécialisée dans le développement de site web et d'applications web modernes.<br /><span class=\"text-primary-700\">Optimisation de la vitesse et réduction de l'impact des sites webs, pour offrir une expérience utilisateur rapide et durable.</span>",
  place: "Annecy, Genève, Lausanne",
  place_ch: "Genève, Lausanne, Annecy",
  socials: [
    {
      label: "GitHub",
      link: "https://github.com/ipatate",
      icon: "github",
    },
    {
      label: "Twitter",
      link: "https://twitter.com/PatrickFaramaz",
      icon: "twitter",
    },
    {
      label: "LinkedIn",
      link: "https://www.linkedin.com/in/patrickfaramaz/",
      icon: "linkedin",
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
  ],
  partners: [
    {
      title: "Trio",
      image: trio,
      place: "Lausanne, Suisse",
      details: "WordPress, Craft CMS, React.js, Nuxt.js",
      class: "w-28",
    },
    {
      title: "Details SA",
      image: details,
      place: "Genève, Suisse",
      details: "Expertise React.js",
      class: "w-16",
    },
    {
      title: "Editions Tissot",
      image: tissot,
      place: "Annecy, France",
      details: "Expertise Next.js et Craft CMS",
      class: "w-16",
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
      class: "w-16",
    },
    {
      title: "Prism-offrad",
      image: prism,
      place: "Annecy, France",
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
      title: "Votre logo ici ?",
      image: yourLogo,
      place: "Votre ville, votre pays",
      details: "Votre description",
      class: "w-20",
    },
  ],
  services: [
    {
      title: "Développement web applications et sites web modernes",
      link: "/services/developpement-de-web-applications-et-sites-web-modernes",
    },
    {
      title: "Développement WordPress avancé",
      link: "/services/developpement-wordpress-avance",
    },
    {
      title: "Développement sous Craft CMS",
      link: "/services/developpement-sous-craft-cms",
    },
    {
      title: "Consultant technique pour vos projets web",
      link: "/services/consultant-technique-web",
    },
    { title: "Maintenance WordPress", link: "/services/maintenance-wordpress" },
  ],
};
