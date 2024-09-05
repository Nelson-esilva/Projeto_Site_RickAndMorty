import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import './ViewItemById.css'

function ViewItemById() {

  const [item, setItem] = useState()

  const { itemId } = useParams()

  async function carregarDados() {
    const apiUrl = 'https://rickandmortyapi.com/api/character/' + itemId

    const response = await fetch(apiUrl)

    const body = await response.json()

    setItem(body)
  }

  useEffect(function () {
    carregarDados()
  }, [])

  if (!item) {
    return <div>Carregando...</div>
  }

  return (
    <>
      <div className="view_item">
        <Link to="/">Voltar para Home</Link>

        <h1>{item.name}</h1>


        <div class="content">

          <div>
            <img src={item.image}/>
          </div>

          <div className= "geralAttribute">

            <div className="attribute">
              <h2>STATUS</h2>
              <p>{item.status}</p>
            </div>

            <div className="attribute">
              <h2>SPECIES</h2>
              <p>{item.species}</p>
            </div>

            <div className="attribute">
              <h2>GENDER</h2>
              <p>{item.gender}</p>
            </div>

            <div className="attribute">
              <h2>GENDER</h2>
              <p>{item.gender}</p>
            </div>

            <div className="attribute">
              <h2>LOCATION</h2>
              <p>{item.location}</p>
            </div>

            <div className="attribute">
              <h2>GENDER</h2>
              <p>{item.gender}</p>
            </div>


          </div>
        </div>
      </div>
    </>
  )
}

export default ViewItemById
