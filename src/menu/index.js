const { registerBlockType } = wp.blocks;
const { withSelect } = wp.data;
const { RichText, InspectorControls } = wp.editor;
const { PanelBody, RangeControl, SelectControl, TextControl } = wp.components;

import { ReactComponent as Logo } from "../pizzeria-icon.svg";

/**  
        ---7 Pasos para crear un Bloque en Gutenberg ---
    1.- Importar el componente(s) que utilizarás
    2.- Coloca el componente donde deseas utilizarlo.
    3.- Crea una función que lea los contenidos
    4.- Registra un atributo
    5.- Extraer el contenido desde props
    6.- Guarda el contenido con setAttributes
    7.- Lee los contenidos guardados en save()
*/

registerBlockType("lapizzeria/menu", {
  // JSON

  title: "La Pizzeria Menu",
  icon: { src: Logo },
  category: "lapizzeria",
  attributes: {
    cantidadMostrar: {
      type: 'number'
    }
  },

  edit: withSelect( (select,props) => {

    // extraer los valores
    const { attributes: { cantidadMostrar }, setAttributes} = props;

    const onChangeCantidadMostrar = nuevaCantidad => {
      setAttributes({ cantidadMostrar : parseInt(  nuevaCantidad ) })
    } 

    return {
      especialidades: select("core").getEntityRecords(
        "postType",
        "especialidades", 
        {per_page: cantidadMostrar || 4}
      ),
      onChangeCantidadMostrar,
      props
    };
    
  })(({ especialidades, onChangeCantidadMostrar, props }) => {
    console.log(especialidades);

    // extraer los props
    const { attributes: { cantidadMostrar } } = props;

    // Verificar especialidades
    if (!especialidades) {
      return "Cargando...";
    }

    // Si no hay especialidades
    if(especialidades && especialidades.length === 0) {
      return 'No hay resultados';
    }

    // codigo react
    return (
      <>
        <InspectorControls>
          <PanelBody title={"Cantidad a Mostrar"} initialOpen={true}>
            <div className="components-base-control">
              <div className="components-base-control__field">
                <label className="components-base-control__label">
                  Cantidad a Mostrar
                </label>
                <RangeControl
                  onChange={onChangeCantidadMostrar}
                  min={2}
                  max={10}
                  value={cantidadMostrar || 4}
                />
              </div>
            </div>
          </PanelBody>
        </InspectorControls>

        <h2 className="titulo-menu">prueba</h2>
        <ul className="nuestro-menu">
          {especialidades.map(especialidad => (
            <li>
              <img src={especialidad.imagen_destacada} />
              <div className="platillo">
                <div className="precio-titulo">
                  <h3>{especialidad.title.rendered}</h3>
                  <p>$ {especialidad.precio}</p>
                </div>
                <div className="contenido-platillo">
                  <p>
                    <RichText.Content
                      value={especialidad.content.rendered.substring(0, 180)}
                    />
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </>
    );
  }),

  save: () => {
    return null;
  }
});
