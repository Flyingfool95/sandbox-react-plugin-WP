<?php

/**
 * Plugin.
 * @package Sandbox Plugin
 * @wordpress-plugin
 *
 * Plugin Name: A React Sandbox Plugin
 * Description: Custom React plugin
 * Author: Dexera
 * Author URL: https://dexera.se
 * Version: 1.0
 *
 */

if (!defined('ABSPATH')) {
    exit;
}
// Exit if accessed directly

/**********************
 *******React app*******
 **********************/

function top_reactshort()
{
    return '<div id="react-sandbox-plugin"></div>';
}
// register shortcode
add_shortcode('react-sandbox-plugin', 'top_reactshort');

add_action('wp_enqueue_scripts', 'top_enq_react');
function top_enq_react()
{
    wp_enqueue_script(
        'top_plugin-react',
        plugin_dir_url(__FILE__) . 'build/index.js',
        ['wp-element'],
        rand(), // Change this to null for production
        true
    );

    wp_enqueue_style(
        'top_plugin-react-styles',
        plugin_dir_url(__FILE__) . 'build/index.css',
        array(),
        rand() // Change this to null for production
    );
};
