export const NotFound: React.FC = () => {
  return (
    <section className='sectionNotFound container p-5 text-center'>
      <h1
        className='p-4  fw-bold'
        style={{ fontSize: "10rem", color: "#ff0000" }}>
        404
      </h1>
      <p className='p-2  fs-2' style={{ color: "#ff0000" }}>
        Oups ! La page que vous demandez n'existe pas
      </p>
      <a
        href='https://alexiafroment.github.io/'
        className='p-2 fs-3 '
        style={{ color: "#ff0000" }}>
        Retourner sur la page accueil
      </a>
    </section>
  )
}
