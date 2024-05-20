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
  ];

  const holaMundo = (nombre: string) => (nombre)


  return (
    <>
      <h1>This is the very beginning of SuperApps</h1>
      <p>Vamos a comenzar el plan de dominación mundial</p>

      { personList.map((person, index) => (
        <PersonalCard
          key={index}
          fullName={person.fullName}
          jobPosition={person.jobPosition}
          company={person.company}
          summary={person.summary}
        />
      ))}
    </>
  )
}

export default App
