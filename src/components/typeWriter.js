import React from "react";
import Typewriter from "typewriter-effect";

const Type = () => {
    return (
        <Typewriter
          options={{
            strings: [
              "Especializado en Backend",
              "Coach facilitador en UDD Chile",
              "Node, Express, Typescript, Sql, NoSql",
              "Comprometido con la educación"
            ],
            autoStart: true,
            loop: true,
            deleteSpeed: 50,
          }}
        />
      )
}

export default Type