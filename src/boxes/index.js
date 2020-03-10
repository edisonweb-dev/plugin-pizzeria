const { registerBlockType } = wp.blocks;
const {
  RichText,
  InspectorControls,
  ColorPalette,
  BlockControls,
  AlignmentToolbar
} = wp.editor;

// Logo para el bloque
import { ReactComponent as Logo } from "../pizzeria-icon.svg";

/**  
    7 Pasos para crear un Bloque en Gutenberg 
    1.- Importar el componente(s) que utilizarás
    2.- Coloca el componente donde deseas utilizarlo.
    3.- Crea una función que lea los contenidos
    4.- Registra un atributo
    5.- Extraer el contenido desde props
    6.- Guarda el contenido con setAttributes
    7.- Lee los contenidos guardados en save()
*/

registerBlockType("lapizzeria/boxes", {

  title: "Pizzeria Cajas",
  icon: { src: Logo },
  category: "lapizzeria",
  attributes: {
    headingBox: {
        type: 'string', 
        source: 'html',
        selector: '.box h2'
    }
  },
  edit: (props) => {

    // console.log(props)

    // Extraer el contenido desde props
    const { attributes: { headingBox }, setAttributes } = props;

    const onChangeHeadingBox = (nuevoHeading) =>{
      // console.log(nuevoHeading)
      setAttributes({ headingBox : nuevoHeading })
    }

    return (
      <div className="box">
        <h2>
          <RichText
            placeholder="Agrega el Encabezado"
            onChange={onChangeHeadingBox}
            value={headingBox}
          />
        </h2>
      </div>
    );
  },
  save: (props) => {
    // console.log(props)

    const { attributes: { headingBox } } = props;

    return (
      <div className="box">
        <h2>
          <RichText.Content value={headingBox} />
        </h2>
      </div>
    );

  }
});
