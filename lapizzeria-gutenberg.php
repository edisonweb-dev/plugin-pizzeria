<?php
/*
    Plugin Name: La Pizzeria Gutenberg Blocks
    Plugin URI: 
    Description: Agrega bloques de Gutenberg nativos
    Version: 1.0
    Author: Edison Perdomo
    Author URI: 
    License: GPL2
    License URI: https://www.gnu.org/licenses/gpl-2.0.html
*/



/** Categorias Personalizadas */
function lapizzeria_categoria_personalizada($categories, $post) {
  return array_merge(
      $categories,
      array(
          array(
              'slug' => 'lapizzeria', 
              'title' => 'La Pizzeria',
              'icon' => 'store'
          )
      )
  );
}
add_filter('block_categories', 'lapizzeria_categoria_personalizada', 10, 2);




/** Registrar bloques, scripts y CSS */

function lapizzeria_registrar_bloques() {

  // Si gutenberg no existe, salir
  if(!function_exists('register_block_type')) {
      return;
  }

  // Registrar los bloques en el editor
  wp_register_script(
      'lapizzeria-editor-script', // nombre unico
      plugins_url( 'build/index.js', __FILE__), // archivo con los bloques
      array('wp-blocks', 'wp-i18n', 'wp-element', 'wp-editor'), // dependencias
      filemtime( plugin_dir_path(__FILE__) . 'build/index.js') // versión que se ejecuto en el ultimo minuto
  );

  // Estilos para el editor (unicamente)
  wp_register_style(
    'lapizzeria-editor-styles', // nombre
    plugins_url( 'build/editor.css', __FILE__), // archivo css para el editor
    array('wp-edit-blocks'), // dependencias
    filemtime( plugin_dir_path(__FILE__) . 'build/editor.css')
  );

  // Estilos para los bloques (backend y front end)
  wp_register_style(
    'lapizzeria-frontend-styles', // nombre
    plugins_url( 'build/styles.css', __FILE__), // archivo css para el editor
    array(), // dependencias
    filemtime( plugin_dir_path(__FILE__) . 'build/styles.css')
  );

  // Arreglo de bloques
  $blocks = [
    'lapizzeria/boxes'
  ];


  // Recorrer bloques y agregar scripts y styles
  foreach($blocks as $block) {
    register_block_type($block, array(
        'editor_script' => 'lapizzeria-editor-script', // script principal para editor
        'editor_style' => 'lapizzeria-editor-styles', // estilos para el editor
        'style' => 'lapizzeria-frontend-styles' // estilos para el front end
    ));
}

}  
add_action('init', 'lapizzeria_registrar_bloques');