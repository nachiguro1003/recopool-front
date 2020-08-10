import React from 'https://dev.jspm.io/react';
// import Navbar from './Navbar.tsx';
// import Container from './Container.tsx';
// import About from './About.tsx';
// import PageNotFound from './PageNotFound.tsx';
// import Home from './Home.tsx';
// import FlowerContextProvider from './core/FlowerContext.tsx';
// import Shop from './Shop.tsx';
// import FlowerRoute from './core/FlowerRoute.tsx';
// import MainContextProvider from './MainContext.tsx';

declare global {
    namespace JSX {
        interface IntrinsicElements {
            h1: any;
            div: any;
            button: any;
            p: any;
        }
    }
}

// export interface AppProps {
//     url: string;
// }
//
// const getTitle = (url: string) => {
//     switch (url) {
//         case '/about':
//             return 'About Deno Flowers';
//         case '/shop':
//             return 'Flower Shop';
//         case '/':
//             return 'Deno Flowers';
//         default:
//             return 'Loading...';
//     }
// };

// @ts-ignore
const App = () => {
    const [count,setCount] = (React as any).useState(0);
    const increment = () => {setCount(count + 1)};
    return (
        <div>
            <h1>Hello DenoLand!</h1>
            <button onClick={increment}>Click the 🦕</button>
            <p>You clicked the 🦕 {count} times</p>
        </div>
    );
};

export default App;
