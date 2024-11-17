import React from "react";
import Image from "next/image";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex min-h-screen">
      <section className="bg-brand text-white flex-col justify-center items-center p-10 w-1/2 hidden lg:flex xl:w-[40%]">
        <div className="flex flex-col space-y-12 justify-center">
          <div>
            <Image
              src="\assets\icons\logo-full.svg"
              alt="Logo"
              width={224}
              height={82}
              className="h-auto"
            />
          </div>
          <div className="max-w-[450px] max-h-[800px] space-y-4">
            <h1 className="h1">Manage your files the best way</h1>
            <p className="body-1">
              Awesome, we've created the perfect place for you to store all your
              documents.
            </p>
          </div>
          <Image
            src="/assets/images/files.png"
            alt="Files"
            width={280}
            height={280}
            className="transition-all hover:-rotate-3 hover:scale-105"
          />
        </div>
      </section>
      <section className="flex flex-1 flex-col items-center justify-center px-8 bg-white lg:items-center lg:p-10">
        <div className="mb-16 lg:hidden">
          <Image
            src="\assets\icons\logo-full-brand.svg"
            alt="Logo"
            width={224}
            height={82}
            className="h-auto"
          />
        </div>
        {children}
      </section>
    </div>
  );
};

export default Layout;
