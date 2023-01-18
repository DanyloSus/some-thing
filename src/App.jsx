import React from "react"
import Tutorial from "./components/Tutorial"
import Texts from "./components/Texts"

export default function App() {
  const [tutorial, setTutorial] = React.useState(false)
  const [images, setImages] = React.useState()
  const [page, setPage] = React.useState(1)

  React.useEffect(() => {
    fetch('https://picsum.photos/v2/list')
      .then(res => res.json())
      .then(data => setImages(data))
  }, [])

  function handleChangeTut() {
    setTutorial(oldValue => !oldValue)
    console.log(images)
  }

  function handleNext() {
    setPage(oldValue => oldValue += 1)
  }

  function handlePrev() {
    setPage(oldValue => oldValue -= 1)
  }

  return (
    <main>
      {
        tutorial ?
          <div>
            <h1 align="center">Lorem Ipsum</h1>
            <hr />
            <header style={
              { justifyContent: page === 1 ? "right" : "space-between" }
            }>
              {page !== 1 &&
                <div className="changers" onClick={handlePrev}>&lt;</div>
              }
              {page !== 3 &&
                <div className="changers" onClick={handleNext}>&gt;</div>
              }
            </header>
            <hr />
            <Texts
              page={page}
              handleNext={handleNext}
              handlePrev={handlePrev}
              images={images}
            />
            <hr />
            <h3 align="center">{page}/3</h3>
          </div>
          :
          <Tutorial
            handleChangeTut={handleChangeTut}
          />
      }
    </main>
  )
}
