import React from 'react'
import { Header } from '../components/Header'
import { ListaProyectos } from '../components/ListaProyectos'
import { SobreMi } from '../components/SobreMi'
import { Ilustracion } from '../components/Ilustracion'

export const Home = () => {
  return (
    <div>
      <section id='inicio'>
        <Header/>
      </section>
      <section id='proyectos'>
        <ListaProyectos/>
      </section>
      <section id='sobremi'>
        <SobreMi/>
      </section>
      <section id='ilustracion'>
        <Ilustracion/>
      </section>
    </div>
  )
}
