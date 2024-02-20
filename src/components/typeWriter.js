import React from "react";
import Typewriter from "typewriter-effect";

const Type = () => {
    return (
        <div className=" mt-10 text-xl font-bold text-justify p-4">
        <p>En mi mundo:</p>
        <Typewriter
          options={{
            strings: [
              "Tango, asado, campo, guitarra, fogones: Mis raíces y la esencia de mi cultura.",
              "El fulbo, una buena milanga con fritas: Momentos de diversión y disfrute.",
              "Mar y cielo, mi esencia.",
              "Bienvenid@ a mi perfil, donde la pasión por el desarrollo web se encuentra con la autenticidad.",
              "¡Explora mi trabajo y descubre cómo la tecnología se encuentra con la pasión!"
            ],
            autoStart: true,
            loop: true,
            deleteSpeed: 50,
          }}
        />
        </div>
      )
}

export default Type