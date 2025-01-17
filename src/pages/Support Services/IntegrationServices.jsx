import React from "react";
import Content from "./TeacherManagement";
const integrationData = [
 {
        title: "Attendance & Tracking Solution",
        buttonText: "How It Works",
        imageSrc: "/supportservice_images/Frame 83.png",
},
{
    title: "Communication & Collabration",
    buttonText: "How It Works",
    imageSrc: "/supportservice_images/Frame 84.png",
}, 
{
        title: "Financial Integration",
        buttonText: "How It Works",
        imageSrc: "/supportservice_images/Frame 85.png",
},
  {
    title: "Process Integration",
    buttonText: "How It Works",
    imageSrc: "/supportservice_images/Frame 86.png",  
},
];

function IntegrationServices() {
  return (
    <main className="flex flex-col rounded-3xl">
          <Content />
    </main>
  );
}

export default IntegrationServices;