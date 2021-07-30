import React from 'react'
import { Cat } from "./Cat";
import { LocalItems } from "./LocalItems";
import { Todos } from "./Todos";

export const Home = () => {
    return (
        <section className="main" >
			<LocalItems/>
			<Cat/>
			<Todos/>
		</section>
    )
}
