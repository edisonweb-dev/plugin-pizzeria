<?php


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

}  
add_action('init', 'lapizzeria_registrar_bloques');