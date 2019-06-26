import React from 'react'

export default class NetworkPage extends React.Component {
  render() {
    return (
      <main className='red'>
        <section className='red__hero'>
          <div className='container'>
            <div className='row'>
              <div className='col-24 col-md-20 offset-md-2'>
                <div className='red__hero__container'>
                  <h2 className='red__hero__title'>¿Qué es RELIS?</h2>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='red__mision'>
          <div className='container'>
            <div className='row'>
              <div className='col-24 col-md-8 offset-md-2'>
                <div className='red__mision__container'>
                  <h4 className='red__mision__subtitle -subtitle'>LA RED</h4>
                  <h3 className='red__mision__title -title'>Misión</h3>
                  <p className='red__mision__text -text'>
                    Promover la innovación social desde y con el sector público
                    en América Latina, así­ como fomentar la cooperación entre
                    los miembros de la red, mediante la articulación de actores,
                    mecanismos, conocimiento y mejores prácticas, que reconozcan
                    a la innovación social como una herramienta para construir
                    cambios positivos en la región.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className='red__mision__image'>
            <div className='red__mision__wrapper'>
              <img src='/images/red/mision.jpg' />
            </div>
          </div>
        </section>
        <section className='red__vision'>
          <div className='red__vision__ripped-background'>
            <img src='/images/red/ripped-top.png' />
          </div>
          <div className='container'>
            <div className='row'>
              <div className='col-24 col-md-20 offset-md-2'>
                <div className='red__vision__container'>
                  <h3 className='red__vision__title -title -title--white'>
                    Visión
                  </h3>
                  <p className='red__vision__text -text -text--white'>
                    Consolidarse en una plataforma reconocida de innovación
                    social con la participación de diferentes actores
                    (Académicos, Privados, entre otros) para el intercambio de
                    conocimiento y la <b>construcción colectiva</b> de proyectos
                    que contribuyan con el avance de los{' '}
                    <b>Objetivos de Desarrollo Sostenible</b>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='red__objetivos'>
          <div className='container'>
            <div className='row'>
              <div className='col-24 col-md-8 offset-md-14'>
                <div className='red__objetivos__container'>
                  <h3 className='red__objetivos__title -title'>Objetivos</h3>
                  <div className='red__objetivos__tabs'>
                    <p data-target='general' className='red__objetivos__tab'>
                      GENERAL
                    </p>
                    <p
                      data-target='especificos'
                      className='red__objetivos__tab'
                    >
                      ESPECIFICOS
                    </p>
                  </div>
                  <div
                    data-content='general text-left'
                    className='red__objetivos__text -text text-left'
                  >
                    <div>
                      <h4>GENERAR SENTIDO DE PERTENENCIA A LA RED ELIS</h4>
                      <p>- Definir los roles de los miembros de la RED ELIS </p>
                      <p>
                        - Identificar nuevos actores públicos, privados y tercer
                        sector que fortalezcan la Red.
                      </p>
                      <p>
                        - Consensuar los principios y reglas de juego de los
                        participantes de la Red ELIS
                      </p>
                    </div>

                    <div>
                      <h4>GENERAR PROYECTOS REGIONALES DE INNOVACIÓN SOCIAL</h4>
                      <p>
                        - Validar problemáticas comunes entre actores Nodo País
                      </p>
                      <p>
                        - Generar alternativas de solución de manera conjunta a
                        las problemáticas validadas
                      </p>
                      <p>
                        - Poner a prueba y evaluar las alternativas de solución
                      </p>
                      <p>- Sistematizar el (los) proyecto (s) del Nodo País</p>
                    </div>

                    <div>
                      <h4>
                        FOMENTAR Y PROMOVER BUENAS PRÁCTICAS DE INNOVACIÓN
                        SOCIAL
                      </h4>
                      <p>
                        - Generar espacios periódicos de socialización de los
                        proyectos de innovación de los Nodos País (eventual
                        anual ELIS)
                      </p>
                      <p>
                        - Generar espacios de transferencia de conocimiento y
                        acompañamiento para replicar los proyectos de los Nodos
                        País
                      </p>
                      <p>
                        - Generar un repositorio de información que facilite la
                        implementación de proyectos.
                      </p>
                    </div>
                  </div>
                  <div
                    data-content='especificos'
                    className='red__objetivos__text -text'
                  >
                    <p>
                      1- Gestionar y aplicar conocimiento vinculado a la
                      innovación social desde sector público, así como compartir
                      buenas prácticas, a través de un observatorio regional.
                    </p>
                    <p>
                      2- Articular esfuerzos, fortalecer alianzas e intercambiar
                      experiencias con el fin de co-crear mecanismos para
                      incentivar la innovación social desde sector público en
                      America latina.
                    </p>
                    <p>
                      3- Facilitar la comunicación y difusión de fondos,
                      herramientas, u otros recursos ya existentes a nivel
                      público o privado, destinados a promover la innovación
                      social
                    </p>
                    <p>
                      4-Fomentar el desarrollo de proyectos colaborativos, así
                      como el intercambio de experiencias y habilidades,
                      conectando problemas en común entre los miembros de la
                      red.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='red__objetivos__image'>
            <img src='/images/red/objetivos.png' />
          </div>
        </section>
        <section className='red__valor'>
          <div className='container'>
            <div className='row'>
              <div className='col-24 col-md-20 offset-md-2'>
                <div className='red__valor__container'>
                  <h3 className='red__valor__title -title'>
                    Propuesta de valor
                  </h3>
                  <p className='red__valor__text -text -text--purple'>
                    Somos la primera red a nivel América Latina que ofrece una
                    oportunidad de vinculación y soporte horizontal a
                    emprendedores en los gobiernos para desarrollar mejores
                    prácticas de innovación social desde y con el sector
                    público, en conjunto con actores multi-sectoriales. La
                    innovación es un concepto novedoso para el sector público,
                    pero qué podrá ayudar a los gobiernos a acrecentar el
                    impacto de sus planes, programas y polí­ticas.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='red__historia'>
          <img src='/images/red/ripped-bottom.png' />
          <div className='container'>
            <div className='row'>
              <div className='col-24 col-md-20 offset-md-2'>
                <h3 className='red__historia__title -title -title--white'>
                  Historia
                </h3>
              </div>
              <div className='col-24 col-md-8 offset-md-2'>
                <p className='red__historia__text -text -text--white'>
                  Tras cinco años de la creación de la RED ELIS resulta
                  interesante redefinir nuestra visión a 2024, con el objetivo
                  de potenciar los beneficios de esta alianza regional, unificar
                  expectativas y planificar una agenda de trabajo conjunta, que
                  nos permita alinear los ejercicios
                </p>
              </div>
              <div className='col-24 col-md-8 offset-md-4'>
                <p className='red__historia__text -text -text--white'>
                  propuestos desde la RED con los resultados que como miembros
                  requerimos para impulsar acciones que contribuyan a generar
                  valor para nuestras instituciones y las comunidades vinculadas
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    )
  }
}
