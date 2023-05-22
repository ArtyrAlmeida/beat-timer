import { ReactNode } from 'react';
import '@styles/globals.css';

export const metadata = {
    title: 'Beat Timer',
    description: 'Gerencie seus workouts musicais!',
};

const RootLayout = ({ 
  children 
}: { 
  children: ReactNode 
}) => {
  return (
    <html lang='pt-br'>
        <body>
            <main className='app'>
                { children }
            </main>
        </body>
    </html>
  );
};

export default RootLayout;