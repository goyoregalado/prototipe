import './App.css'
import { Joaquin } from './components/Joaquin'
import { Goyo } from './components/Goyo'
import { Kevin } from './components/Kevin'
import { PersonalCard } from './components/PersonalCard'

function App() {
  const personList = [
    {
      fullName: 'Juan Gregorio Regalado Pacheco',
      jobPosition: 'Senior Software Developer',
      company: 'Appfire',
      summary:
        'Trabajo como desarrollador desde 2000, no había terminado la carrera y ya me tenían por ahí intentando desarrollar la siguiente gran app.',
    },
    {
      fullName: 'Kevin Jara',
      jobPosition: 'Estudiante de Programacion',
      summary: 'Estudiante de Programacion en la Universidad Tecnologica de Cordoba.',
    },
    {
      fullName: 'Joaquin',
      jobPosition: 'Estudiante de Programacion',
      summary: 'Estudiante de Programacion en la Universidad Tecnologica de Cordoba.',
    }
  ]

  return (
    <>
      <h1>This is the very beginning of SuperApps</h1>
      <p>Vamos a comenzar el plan de dominación mundial</p>

      <PersonalCard
        fullName={personList[0].fullName}
        jobPosition={personList[0].jobPosition}
        company={personList[0].company}
        summary={personList[0].summary}
      />


    <PersonalCard
        fullName={personList[1].fullName}
        jobPosition={personList[1].jobPosition}
        company={personList[1].company}
        summary={personList[1].summary}
      />


    <PersonalCard
        fullName={personList[2].fullName}
        jobPosition={personList[2].jobPosition}
        company={personList[2].company}
        summary={personList[2].summary}
      />

    </>
  )
}

export default App
