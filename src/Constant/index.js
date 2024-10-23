import forks from '../assets/forks.png';
import alien from '../assets/alien.png';
import infinity from '../assets/infinity.png';
import Macbook from '../assets/Macbook.png';
import Boards from '../assets/Boards.png';


export const navlinks =[
    {
        name: "Home",
        title: "Home",
        url: '#'

    },
    {
        name: "Product",
        title: "Product",
        url: '/product',
    },
    {
        name: "About",
        title: "About",
        url: '/about'

    },
    {
        name: "Contact",
        title: "Contact",
        url: '/contact',
    },
    
]
//Features
export const features = [
    {
        icon: forks,
        title: 'A single source of truth',
        text: 'When you add work to your Slate calendar we automatically calculate useful insights',
    },
    {
        icon: alien,
        title: 'Intuitive interface',
        text: 'When you add work to your Slate calendar we automatically calculate useful insights',
    },
    {
        icon: infinity,
        title: 'Or with rules',
        text: 'When you add work to your Slate calendar we automatically calculate useful insights',
    }
]
export const footer = [
    {
        name: "Company",
        links: [
            "Home",
            "Examples",
            "Pricing",
            'Updates',
        ]
    },
    {
        name: "Resources",
        links: [
            "Home",
            "Examples",
            "Pricing",
            'Updates',
        ]
    },
    {
        name: "About",
        links: [
            "Home",
            "Examples",
            "Pricing",
            'Updates',
        ]
    }
]
export const content = [
    {
        name: 'Work',
        text: "Ever wondered if you're too reliant on a client for work? Slate helps you identify.",
        button: 'Sign Up',
        icon: Macbook,
    },
    {
        name: 'Design with real data',
        text: "Ever wondered if you're too reliant on a client for work? Slate helps you identify.",
        button: 'Try For Free',
        icon: Boards,
    }
]

