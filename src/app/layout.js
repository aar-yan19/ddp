import "./globals.css";


export default function RootLayout({ children }) {
  
  return (
    <html lang="en">
      <head>
 
          <link
            href="https://fonts.googleapis.com/icon?family=Material+Icons"
            rel="stylesheet"
          />
        </head>
      <body className="bg-ddpgradient capitalize">

    
        {children}
      

      </body>
    </html>
  );
}
