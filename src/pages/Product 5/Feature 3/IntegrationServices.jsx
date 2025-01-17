import React from "react";
import Content from './TeacherManagement';
function IntegrationServices() {
  return (
    <main className="flex flex-col rounded-3xl mt-20">
    <header className="self-center lg:text-3xl sm:text-sm font-bold text-center text-sky-500 max-md:max-w-full max-md:text-4xl">
      Features of School Management system
    </header>
    <Content />
    </main>
  );
}

export default IntegrationServices;