import tmdbImg from '../assets/projects/tmdb.png';
import lphLogo from '../assets/projects/lph-logo.png';
import securityLogo from '../assets/projects/security.png'
import xoLogo from '../assets/projects/tictactoe.png'


const data = [
    {
        heading: 'Los Pollos Hermanos',
        description: 'A Breaking Bad themed restaurant landing site',
        img: {
            src: lphLogo
        },
        link: 'https://selvam-18.github.io/los-pollos-hermanos',
        repoUrl: '',
        topics: ['Frontend', 'HTML', 'CSS', 'Bootstrap']
        
    },
    {
        heading: 'RiverSide Hospitals',
        description: 'A Hybrid-Cryptographic solution to security using Javascript',
        img: {
            src: securityLogo
        },
        link: '',
        repoUrl: 'https://github.com/Selvam-18/RiverSide-Hospitals',
        topics: ['Javascript','Cryptography', 'NPM', 'PostgreSQL', 'EJS', ]
    },
    {
        heading: 'Tic Tac Toe',
        description: 'Gameboard with interactive features for two players',
        img: {
            src: xoLogo
        },
        repoUrl: 'https://github.com/Selvam-18/Tic-Tac-Toe',
        link: '',
        topics: ['React', 'State Management']
    },
    {
        heading: 'WatchD',
        description: 'Site to read user-made reviews for movies',
        img: {
            src: tmdbImg
        },
        link: '',
        repoUrl: ' ',
        topics: ['On Progress']
    }
    // },
    // {
    //     heading: 'project1',
    //     description: 'asldfkaslkdfjakls',
    //     img: {
    //         src: randomImage
    //     },
    //     link: 'https://selvam-1.github.io/los-pollos-hermanos'
    // },
    // {
    //     heading: 'project1',
    //     description: 'asldfkaslkdfjakls',
    //     img: {
    //         src: randomImage
    //     },
    //     link: 'https://selvam-18.github.iolos-pollos-hermanos'
    // },
    // {
    //     heading: 'project1',
    //     description: 'asldfkaslkdfjakls',
    //     img: {
    //         src: randomImage
    //     },
    //     link: 'htps://selvam-18.github.io/los-pollos-hermanos'
    // },{
    //     heading: 'project1',
    //     description: 'asldfkaslkdfjakls',
    //     img: {
    //         src: randomImage
    //     },
    //     link: 'https//selvam-18.github.io/los-pollos-hermanos'
    // },{
    //     heading: 'project1',
    //     description: 'asldfkaslkdfjakls',
    //     img: {
    //         src: randomImage
    //     },
    //     link: 'https//selvam-18.github.io/los-pollos-hermanos'
    // },
    
]

export default data;
