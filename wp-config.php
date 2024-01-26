<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * Localized language
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'local' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', 'root' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',          'LmJ1x#zP96ZD1rp j:yQSjHa,g6a(J`s0PI6T;fJFW$>3$8|&zo`3H}a=upo}3*i' );
define( 'SECURE_AUTH_KEY',   '^2Ua7i]<1u5S3>R%YrE?W6:kA^&R@[@n1r].F5k3==a!Yrts>|+?2j)Q_P>o#~b!' );
define( 'LOGGED_IN_KEY',     '#]US3wrE+Zh)R1in{^j=30Cl4NMSrp(kH_V&c*CPJO4w=m#mzpGF[D1)n$1.zt*2' );
define( 'NONCE_KEY',         'FMc9kbz[C CSM1 -;&oE .z934?2I5mr9psbe~b%o</DU~K0HCj(/@`,FQ_9hlJz' );
define( 'AUTH_SALT',         '{C~f$lTp!e&{lB>Gw`/w[Rj6A`g[(atY-M2@z>J@PtDgseM;!(b:B =BF[(8<YXH' );
define( 'SECURE_AUTH_SALT',  '!F.T/=3D.{z!f>j2Zpa9fgn`/}FQCd(aYX?R)|Cf/<c! Lv=J%Gg1Lp~8?<9Q!R-' );
define( 'LOGGED_IN_SALT',    ':h5dBy3v!8tkO^OuFbZ;Zi R*-_W(WPGD sz*nRLPTuD9*>nejP*Gzo#p,CH2-;U' );
define( 'NONCE_SALT',        'Y|/}Z dq;ox*bqFYsY]L~[5C%[TsprmhROpaT&8I&S$4IsRd3zHUc`_+]NS+^Q)}' );
define( 'WP_CACHE_KEY_SALT', 'ZHt$-a%(Y:boeTc1yp{f[N-jaO!gz4WQgxeIf,<udo.kb/eL&FJw|0n1 V{/K-C;' );


/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';


/* Add any custom values between this line and the "stop editing" line. */



/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
if ( ! defined( 'WP_DEBUG' ) ) {
	define( 'WP_DEBUG', false );
}

define( 'WP_ENVIRONMENT_TYPE', 'local' );
/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
