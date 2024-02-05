<?php
/**
 * Plugin Name:       Rating Plugin
 * Description:       Example block scaffolded with Create Block tool.
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       rating_plugin
 *
 * @package           create-block
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function rating_plugin_rating_plugin_block_init() {
	register_block_type( __DIR__ . '/build/star-rating' );
	register_block_type( __DIR__ . '/build/tab-bar');
	register_block_type( __DIR__ . '/build/cover-block');
	
	
}
add_action( 'init', 'rating_plugin_rating_plugin_block_init' );