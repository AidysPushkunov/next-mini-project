import A from '../components/A';
import Head from 'next/head';


function MainContainer({ children, keywords }) {
    return (
        <>
            <Head>
                <meta keywords={"temircode, nextjs, " + keywords}></meta>
                <title>Главная страница</title>
            </Head >
            <div className='navbar'>
                <A href={'/'} text='Главная' />
                <A href={'/users'} text='Пользователи' />
            </div>
            <div>
                {children}
            </div>
            <style jsx>
                {`
                    .navbar {
                        background-color: orange;
                        padding: 15px; 
                    }
                `}
            </style>
        </>
    );
}

export default MainContainer;