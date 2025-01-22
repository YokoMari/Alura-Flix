const videos = [
    {
        id: 1,
        titulo: "¿Cuándo usar let, var y const?",
        categoria: "FRONT-END",
        imagen: "https://i.ytimg.com/an_webp/PztCEdIJITY/mqdefault_6s.webp?du=3000&sqp=CKymwLwG&rs=AOn4CLAQmZ-2iCNcfu58Vi2sifPlO_4dBQ",
        link: "https://www.youtube.com/embed/PztCEdIJITY?si=8Gj_IIah4vH1LSAl",
        descripcion: "¿A veces cuando estás programando sientes dificultades en saber en qué momento utilizar let, var o const para declarar una variable? En este video te sacamos estas dudas, además de explicarte lo que es escopo global y local en JavaScript."
    },
    {
        id: 2,
        titulo: "Spring Framework. ¿Qué es ?",
        categoria: "BACK-END",
        imagen: "https://i.ytimg.com/an_webp/t-iqt1b2qqk/mqdefault_6s.webp?du=3000&sqp=COz5v7wG&rs=AOn4CLA_Z3Q1NlrHgna7_oWrCcpkTiNrIQ",
        link: "https://www.youtube.com/embed/t-iqt1b2qqk?si=vfwGuXbIoifyMXNI",
        descripcion: "¿Busca un framework  para utilizar en sus proyectos? ¿Conoce Spring Framework? Spring es el framework más usado de Java. Nos ofrece herramientas que nos permiten crear proyectos más avanzados, con mejores prácticas y en menor tiempo. También posee una gran comunidad, lo que nos brinda muchísima documentación y ayuda.\n¿Quieres saber más?"
    },
    {
        id: 3,
        titulo: "¿Qué son las Soft Skills?",
        categoria: "INNOVACIÓN Y GESTIÓN",
        imagen: "https://i.ytimg.com/an_webp/vhwspfvI52k/mqdefault_6s.webp?du=3000&sqp=CP2ewLwG&rs=AOn4CLBveduA1tP_3L80fPuNajrrEAAwFg",
        link: "https://www.youtube.com/embed/vhwspfvI52k?si=FK6mER_0cyTO0l0E",
        descripcion: "¿Qué son las Softskills y por qué es tan importante desarrollarlas para posicionarse en el mercado laboral? En este video de Alura Tips, Pri Stuani nos habla de las habilidades más buscadas por las empresas en sus profesionales y cómo las Soft Skills te ayudan en el día a día."
    },
    {
        id: 4,
        titulo: "7 Soft Skills más deseadas por las empresas",
        categoria: "INNOVACIÓN Y GESTIÓN",
        imagen: "https://i.ytimg.com/an_webp/_-9grhDhxiU/mqdefault_6s.webp?du=3000&sqp=CIOGwLwG&rs=AOn4CLChuwNZ6RPgGkP9LBWJK1ENQqkVEQ",
        link: "https://www.youtube.com/embed/_-9grhDhxiU?si=lRH2b2Kr9ef5fdjb",
        descripcion: "Seguro que ya escuchaste hablar sobre las Soft Skills, pero ¿sabes cuáles son las 7 más buscadas por las empresas? Quédate en este video con nosotros que vamos a explicarte la importancia de estas habilidades y porque son tan requeridas en el mercado laboral."
    },
    {
        id: 5,
        titulo: "¿Qué es JavaScrip",
        categoria: "FRONT-END",
        imagen: "https://i.ytimg.com/an_webp/GJfOSoaXk4s/mqdefault_6s.webp?du=3000&sqp=CJ6uwLwG&rs=AOn4CLDacKcNkv40ODuJcqXjrwqSdECe6Q",
        link: "https://www.youtube.com/embed/GJfOSoaXk4s?si=BD86WBv_lqN0b2jH",
        descripcion: "JavaScript: ¿qué es y cómo se hizo este lenguaje que genera muchas discusiones y debates entre la gente del área de desarrollo? Genesys y Gabriela nos hablan exactamente de esto en este Alura Tips."
    },
    {
        id: 6,
        titulo: "Equipo Front End",
        categoria: "FRONT-END",
        imagen: "https://i.ytimg.com/an_webp/rpvrLaBQwgg/mqdefault_6s.webp?du=3000&sqp=CICuwLwG&rs=AOn4CLANN-4JXv_g7fntDzS5NlfUnpaNxQ",
        link: "https://www.youtube.com/embed/rpvrLaBQwgg?si=1mGOaVG8jgZOxEn3",
        descripcion: "¿Estás empezando tus estudios de Programación? ¿Te interesa todo lo que es la creación de Páginas Web Desarrollo de Softwares? ¿O estás pensando en cambiar de carrera y entrar a la maravillosa area de tecnología?"
    },
    {
        id: 7,
        titulo: "¿Qué es SQL y NoSQL?",
        categoria: "BACK-END",
        imagen: "https://i.ytimg.com/an_webp/cLLKVd5CNLc/mqdefault_6s.webp?du=3000&sqp=CIinwLwG&rs=AOn4CLBFIDzEVTBiFVoYbBcji9BgZ7aImw",
        link: "https://www.youtube.com/embed/cLLKVd5CNLc?si=K3IgPR7YSAD-ZUAY",
        descripcion: "¿Cuáles son las diferencias entre una estructura de datos relacional (SQL) y una no relacional (NoSQL) y cuáles son las principales ventajas de cada una? Álvaro Camacho lo explica en este vídeo."
    },
    {
        id: 8,
        titulo: "Simplificando tu código en Java: Conoce los enumerados",
        categoria: "BACK-END",
        imagen: "https://i.ytimg.com/an_webp/EoPvlE85XAQ/mqdefault_6s.webp?du=3000&sqp=CPiwwLwG&rs=AOn4CLA-mmoKJYdIuWbga6vRCajNl1UPww",
        link: "https://www.youtube.com/embed/EoPvlE85XAQ?si=lNv5NePxZ7UYo__F",
        descripcion: "¿Escribir muchas variables del tipo constantes en Java te parece un proceso tedioso y que genera muchas líneas de código? \nEn este Alura+ la instructora Génesys Rondón nos enseña a simplificar esta tarea usando un tipo de dato especial llamado enum."
    },
    {
        id: 9,
        titulo: "¿Qué son las metodologías ágiles?",
        categoria: "INNOVACIÓN Y GESTIÓN",
        imagen: "https://i.ytimg.com/an_webp/6N3OkLCfK-0/mqdefault_6s.webp?du=3000&sqp=CILCwLwG&rs=AOn4CLAi_17-BjC8tzsAn3mqMgAalI20Sg",
        link: "https://www.youtube.com/embed/6N3OkLCfK-0?si=gFpun7ftfgN0zIbu",
        descripcion: "En este video nuestra invitada, Andyara, nos explicará que són las muy conocidas hoy en día metodologías ágiles y nos comentará un poco sobre como aplicarlas y cuáles son los beneficios de utilizarlas en su equipo o empresa."
    }
];

export default videos;

