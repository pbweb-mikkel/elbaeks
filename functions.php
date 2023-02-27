<?php
/**
 * elbaeks functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package elbaeks
 */

require 'inc/class-pb-log.php';
require 'inc/class-flexyapress-api.php';
require 'inc/class-flexyapress-helpers.php';
require 'inc/pb_updater.php';

if ( ! defined( '_S_VERSION' ) ) {
    // Replace the version number of the theme on each release.
    define( '_S_VERSION', '1.0.0' );
}

if ( ! function_exists( 'elbaeks_setup' ) ) :
    /**
     * Sets up theme defaults and registers support for various WordPress features.
     *
     * Note that this function is hooked into the after_setup_theme hook, which
     * runs before the init hook. The init hook is too late for some features, such
     * as indicating support for post thumbnails.
     */
    function elbaeks_setup() {
        /*
         * Make theme available for translation.
         * Translations can be filed in the /languages/ directory.
         * If you're building a theme based on elbaeks, use a find and replace
         * to change 'elbaeks' to the name of your theme in all the template files.
         */
        load_theme_textdomain( 'elbaeks', get_template_directory() . '/languages' );

        // Add default posts and comments RSS feed links to head.
        add_theme_support( 'automatic-feed-links' );

        /*
         * Let WordPress manage the document title.
         * By adding theme support, we declare that this theme does not use a
         * hard-coded <title> tag in the document head, and expect WordPress to
         * provide it for us.
         */
        add_theme_support( 'title-tag' );

        /*
         * Enable support for Post Thumbnails on posts and pages.
         *
         * @link https://developer.wordpress.org/themes/functionality/featured-images-post-thumbnails/
         */
        add_theme_support( 'post-thumbnails' );

        // This theme uses wp_nav_menu() in one location.
        register_nav_menus(
            array(
                'menu-1' => esc_html__( 'Primary', 'elbaeks' ),
            )
        );

        /*
         * Switch default core markup for search form, comment form, and comments
         * to output valid HTML5.
         */
        add_theme_support(
            'html5',
            array(
                'search-form',
                'comment-form',
                'comment-list',
                'gallery',
                'caption',
                'style',
                'script',
            )
        );

        // Set up the WordPress core custom background feature.
        add_theme_support(
            'custom-background',
            apply_filters(
                'elbaeks_custom_background_args',
                array(
                    'default-color' => 'ffffff',
                    'default-image' => '',
                )
            )
        );

        // Add theme support for selective refresh for widgets.
        add_theme_support( 'customize-selective-refresh-widgets' );

        /**
         * Add support for core custom logo.
         *
         * @link https://codex.wordpress.org/Theme_Logo
         */
        add_theme_support(
            'custom-logo',
            array(
                'height'      => 250,
                'width'       => 250,
                'flex-width'  => true,
                'flex-height' => true,
            )
        );
    }
endif;
add_action( 'after_setup_theme', 'elbaeks_setup' );

add_action( 'admin_menu','pb_add_plugin_admin_menu' );
function pb_add_plugin_admin_menu() {

    /*
     * Add a settings page for this plugin to the Settings menu.
     *
     * NOTE:  Alternative menu locations are available via WordPress administration menu functions.
     *
     *        Administration Menus: http://codex.wordpress.org/Administration_Menus
     *
     */
    add_menu_page(__( 'Log', 'elbaeks' ), __( 'Log', 'elbaeks' ), 'manage_options', 'pb_log', 'pb_log_page_contents', 'dashicons-schedule', 3);

}

function pb_log_page_contents() {
    global $wpdb;
    $logs = $wpdb->get_results( "SELECT * FROM {$wpdb->prefix}pb_log ORDER BY id");

    ?>
    <h1>
        <?php esc_html_e( 'Log', 'flexyapress' ); ?>

    </h1>
    <table id="log-table">
        <thead>
        <tr>
            <th align="left">ID</th>
            <th align="left">Type</th>
            <th align="left">Input</th>
            <th align="left">Output</th>
            <th align="rigth">Time</th>
        </tr>
        </thead>
        <tbody>
        <?php
        foreach ($logs as $log){
            ?>
            <tr>
                <td align="left"><?= $log->id ?></td>
                <td align="left"><?= $log->type ?></td>
                <td align="left"><?= $log->input ?></td>
                <td align="left"><?= esc_html($log->response) ?></td>
                <td align="right"><?= $log->time ?></td>
            </tr>
            <?php
        }
        ?>
        </tbody>
    </table>

    <link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/v/dt/dt-1.10.23/datatables.min.css"/>
    <script type="text/javascript" src="https://cdn.datatables.net/v/dt/dt-1.10.23/datatables.min.js"></script>
    <script>
        jQuery(document).ready(function($) {
            $('#log-table').DataTable({
                "order": [0, 'desc'],
                "pageLength": 100,
            });
        } );
    </script>
    <style>
        tr.even{
            background:#f1f1f1 !important;
        }
    </style>
    <?php
}

/**
 * Set the content width in pixels, based on the theme's design and stylesheet.
 *
 * Priority 0 to make it available to lower priority callbacks.
 *
 * @global int $content_width
 */
function elbaeks_content_width() {
    $GLOBALS['content_width'] = apply_filters( 'elbaeks_content_width', 640 );
}
add_action( 'after_setup_theme', 'elbaeks_content_width', 0 );

/**
 * Register widget area.
 *
 * @link https://developer.wordpress.org/themes/functionality/sidebars/#registering-a-sidebar
 */
function elbaeks_widgets_init() {
    register_sidebar(
        array(
            'name'          => esc_html__( 'Sidebar', 'elbaeks' ),
            'id'            => 'sidebar-1',
            'description'   => esc_html__( 'Add widgets here.', 'elbaeks' ),
            'before_widget' => '<section id="%1$s" class="widget %2$s">',
            'after_widget'  => '</section>',
            'before_title'  => '<h2 class="widget-title">',
            'after_title'   => '</h2>',
        )
    );
}
add_action( 'widgets_init', 'elbaeks_widgets_init' );

/**
 * Enqueue scripts and styles.
 */
function elbaeks_scripts() {
    wp_enqueue_style( 'fancybox', get_stylesheet_directory_uri().'/sass/jquery.fancybox.min.css', time() );
    wp_enqueue_style( 'elbaeks-style', get_stylesheet_uri(), array(), time() );
    wp_enqueue_script('bundle', get_stylesheet_directory_uri() . '/js/build/bundle.min.js', array(), time(), true);
    wp_enqueue_script('elbaeks', get_stylesheet_directory_uri() . '/js/build/production.js', array('bundle', 'jquery'), time(), true);

    $nonce = wp_create_nonce("calendar");

    wp_localize_script( 'elbaeks', 'admin', array(
        'ajaxUrl'   => admin_url('admin-ajax.php'),
        'nonce'		=>	$nonce
    ) );

}
add_action( 'wp_enqueue_scripts', 'elbaeks_scripts' );

function elbaeks_admin_scripts( $hook ) {

    if ( $hook == 'post-new.php' || $hook == 'post.php' ) {
        wp_enqueue_style( 'elbaeks-style', get_stylesheet_uri(), array(), time() );
    }
}
add_action('admin_enqueue_scripts', 'elbaeks_admin_scripts');

/**
 * Implement the Custom Header feature.
 */
require get_template_directory() . '/inc/custom-header.php';

/**
 * Custom template tags for this theme.
 */
require get_template_directory() . '/inc/template-tags.php';

/**
 * Functions which enhance the theme by hooking into WordPress.
 */
require get_template_directory() . '/inc/template-functions.php';

/**
 * Customizer additions.
 */
require get_template_directory() . '/inc/customizer.php';

/**
 * Load Jetpack compatibility file.
 */
if ( defined( 'JETPACK__VERSION' ) ) {
    require get_template_directory() . '/inc/jetpack.php';
}


add_filter('show_admin_bar', '__return_false');
add_action( 'admin_init', 'my_remove_admin_menus' );
include_once( get_stylesheet_directory() . '/block-types-function.php');

function my_remove_admin_menus() {
    remove_menu_page( 'edit-comments.php' );
}

function my_block_category( $categories, $post ) {
    return array_merge(
        $categories,
        array(
            array(
                'slug' => 'elbaeks-blocks',
                'title' => __( 'Elbaeks Blocks', 'elbaeks-blocks' ),
            ),
        )
    );
}
add_filter( 'block_categories_all', 'my_block_category', 10, 2);


if( function_exists('acf_add_options_page') ) {

    acf_add_options_page(array(
        'page_title'    => 'Options',
        'menu_title'    => 'Options',
        'menu_slug'     => 'options',
        'position'      => 36.5,
    ));

}


function acf_iris_palette(){
    ?>
    <script type="text/javascript">
        jQuery(function($){
            acf.add_filter('color_picker_args', function( args, $field ){

                args.palettes = [
                    '#03331E',
                    '#9C7250',
                    '#111111',
                    '#212121',
                    '#E4D5B9',
                    '#666666',
                    '#F5EDDD',
                    '#FEF9F4',
                    '#FCF2E5',
                ]

                return args;

            });
        });
    </script>
    <?php
}
add_action( 'admin_print_scripts', 'acf_iris_palette', 90 );

class Custom_post_type{

    function __construct( $name, $singular, $icon, $archive, $tax, $supports, $public, $permalink, $exclude) {

        $this->name = $name;
        $this->singular = $singular;
        $this->icon = $icon;
        $this->archive = $archive;
        $this->tax = $tax;
        $this->supports = $supports;
        $this->public = $public;
        $this->permalink = $permalink;
        $this->exclude = $exclude;
        add_action( 'init', array( $this, 'create_post_type' ) );

    }

    function create_post_type() {

        $name = $this->name;
        $permalink = $this->permalink;
        $singular_name = $this->singular;
        $exclude = $this->exclude;
        $taxonomy_name = '';
        $labels =
            array(
                'name'               => _x( $name, 'post type general name' ),
                'singular_name'      => _x( $singular_name, 'post type singular name'),
                'menu_name'          => _x( $name, 'admin menu' ),
                'name_admin_bar'     => _x( $singular_name, 'add new on admin bar' ),
                'add_new'            => _x( 'Add New', strtolower( $name ) ),
                'add_new_item'       => __( 'Add New ' . $singular_name ),
                'new_item'           => __( 'New ' . $singular_name ),
                'edit_item'          => __( 'Edit ' . $singular_name ),
                'view_item'          => __( 'View ' . $singular_name ),
                'all_items'          => __( 'All ' . $name ),
                'search_items'       => __( 'Search ' . $name ),
                'parent_item_colon'  => __( 'Parent :' . $name ),
                'not_found'          => __( 'No ' . strtolower( $name ) . ' found.'),
                'not_found_in_trash' => __( 'No ' . strtolower( $name ) . ' found in Trash.' )
            );
        register_post_type(
            strtolower( $permalink ),
            array(
                'labels'             => $labels,
                'public'             => true,
                'publicly_queryable' => $this->public,
                'has_archive'        => $this->archive,
                'taxonomies'         => $this->tax,
                'hierarchical'       => false,
                'show_in_menu' 		 => true,
                'show_in_nav_menus'  => true,
                'rewrite'            => array('with_front' => false),
                'menu_icon'          => $this->icon,
                'show_in_rest'       => true,
                'supports' 			 => $this->supports,
                'exclude_from_search'=> $exclude
            )
        );

    }
}

function create_taxonomy($name, $singular, $cpt, $hier, $public, $slug) {

    $name = $name;
    $singular = $singular;

    // if($slug != '') $slug = strtolower(preg_replace('/\s+/', '_', $singular));

    $domain = 'koncert';
    $custom_post = $cpt;
    $labels = array(
        'name'              => _x( $name, 'taxonomy general name', $domain ),
        'singular_name'     => _x( $singular, 'taxonomy singular name', $domain ),
        'search_items'      => __( 'Search '. $name, $domain ),
        'all_items'         => __( 'All ' . $name, $domain ),
        'parent_item'       => __( 'Parent ' . $singular, $domain ),
        'parent_item_colon' => __( 'Parent '. $singular . ':', $domain ),
        'edit_item'         => __( 'Edit ' . $singular, $domain ),
        'update_item'       => __( 'Update ' . $singular, $domain ),
        'add_new_item'      => __( 'Add New ' . $singular, $domain ),
        'new_item_name'     => __( 'New ' . $singular, $domain ),
        'menu_name'         => __( $name, $domain ),
    );

    $args = array(
        'hierarchical'      => $hier,
        'labels'            => $labels,
        'show_ui'           => true,
        'show_admin_column' => true,
        'public'            => true,
        'publicly_queryable'=> true,
        'query_var'         => true,
        'show_in_rest'      => true,
        'rewrite'           => array( 'slug' => $slug ),
        'public'            => $public,
        'has_archive'       => true
    );
    register_taxonomy( $slug, $custom_post, $args );
}

$bolig_CPT = new Custom_post_type('Bolig', 'Bolig', 'dashicons-admin-home', true, array(''), array( 'title', 'excerpt', 'revisions', 'thumbnail' ), true, 'sag', false);

$type = create_taxonomy('Types', 'Type', array('sag'), false, true, 'types');

add_image_size( 'post-featured', 1900, 1080, false );
add_image_size( 'post-large', 2200, 1400, false );


add_action('acf/save_post', 'setReadingTime');

function setReadingTime( $post_id ) {

    $post_type = get_post_type($post_id);

    if ($post_type == 'post') {

        $getPost = get_post( $post_id );
        $content = parse_blocks( $getPost->post_content );
        $words = '';

        foreach ($content as $block) {
            if($block['attrs']['data']){
                foreach ($block['attrs']['data'] as $key => $value) {
                    if(
                        (strpos($key, 'text') !== false) ||
                        (strpos($key, 'content') !== false) ||
                        (strpos($key, 'caption') !== false) ||
                        (strpos($key, 'title') !== false)
                    ){
                        $words .= $value;
                    }
                }
            }else if($block['innerHTML']){
                $words .= $block['innerHTML'];
            }
        }
        $length = str_word_count($words);

        $m = floor($length / 210);
        if($m == 0) $m = 1;
        $estimate = $m . ' min.';

        update_field('reading_time', $estimate, $post_id);

    }

}

function format_bolig_number( $price ){
    return number_format($price, 0, ".",".");

}

function generate_featured_image( $file, $post_id, $desc ){
    require_once( ABSPATH . 'wp-admin/includes/post.php' );
    require_once( ABSPATH . 'wp-admin/includes/image.php' );
    require_once( ABSPATH . 'wp-admin/includes/file.php' );
    require_once( ABSPATH . 'wp-admin/includes/media.php' );

    preg_match( '/[^\?]+\.(jpe?g|jpe|gif|png)\b/i', $file, $matches );
    if ( ! $matches ) {
        return new WP_Error( 'image_sideload_failed', __( 'Invalid image URL' ) );
    }

    $file_array = array();
    $file_array['name'] = basename( $matches[0] );

    // Download file to temp location.
    $file_array['tmp_name'] = download_url( $file );

    // If error storing temporarily, return the error.
    if ( is_wp_error( $file_array['tmp_name'] ) ) {
        return $file_array['tmp_name'];
    }

    // Do the validation and storage stuff.
    $id = media_handle_sideload( $file_array, $post_id, $desc );

    // If error storing permanently, unlink.
    if ( is_wp_error( $id ) ) {
        @unlink( $file_array['tmp_name'] );
        return $id;
    }
    return set_post_thumbnail( $post_id, $id );

}


function get_updated_json(){

    $path = ABSPATH . 'json/list.json';
    $response = file_get_contents('https://services.boligsystem.flexya.dk/service/v20/list?orgKey=204ec3a9-7595-42e0-8d28-1a81defda977');
    $file = file_put_contents($path, $response);
}

function update_bolig($force = false){
    // if(!isset($_GET['houses'])) return;
    //get_updated_json();

    //$path = ABSPATH . 'json/list.json';
    //$file = fopen( $path, "r" ) or die( "Unable to open file!" );
    //$boligFile = fread( $file, filesize($path) );
    //$boligFile = file_get_contents('https://services.boligsystem.flexya.dk/service/v20/list?orgKey=204ec3a9-7595-42e0-8d28-1a81defda977');
    //$bolig = json_decode( $boligFile, true );

    $api = new Flexyapress_API();
    $start = microtime(true);
    $bolig = $api->get_all_cases($force);

    $terms = get_terms( 'types', array(
        'hide_empty' => false,
    ) );

    $excludes = [
      'MW15-DK-67',
      'MW15-DK-19',
      'MW15-DK-17',
      'MW16-DK-1',
      'MW16-DK-2',
      'MW16-DK-3',
    ];

    $includes = [
        '99HV-001039',
        '99HV-001035',
        '99FE-001119',
        '99HV-001086',
        '99FE-001050',
        '99FE-001006',
        '99FE-000897',
        '99HV-000966',
        '99HV-000964',
        '99FE-001093',
        '99HV-001052',
        '99HV-000906',
        '99FE-000295',
        '99HV-001012',
        '99FE-000641',
        '99FE-000836',
        '99FE-001003',
        '99FE-001004',
        '99HV-001005',
        '99FE-000739',
        '99FE-000896',
        '99FE-000956',
    ];

    $boligIDs = array();
    $count = 0;
    $is_change = [];

    $api->update_lead_types();

    if($bolig) {

        foreach ($bolig as $item) {

            /*if(!in_array($item['caseNumber'], $includes)){
                continue;
            }*/


            switch ($item->__typename) {
                case 'SalesCase':
                    $item = (array)$api->get_case($item->id);
                    break;
                case 'BusinessSalesCase':
                    $item = (array)$api->get_business_case($item->id);
                    break;
                case 'RentalCase':
                    $item = (array)$api->get_rental_case($item->id);
                    break;
                case 'BusinessRentalCase':
                    $item = (array)$api->get_business_rental_case($item->id);
                    break;
                default:
                    echo 'No valid type: ' . $item->__typename . '. Skipping<br>';

                    return false;
            }


            set_time_limit(0);
            //flush();
            //ob_flush();
            $count++;
            $hash       = hash('md5', json_encode($item));
            $post_title = $item['caseNumber'];
            array_push($boligIDs, $post_title);
            $id = get_page_by_title($post_title, OBJECT, 'sag');

            var_dump($id);

            echo '<br><br>' . $item['caseNumber'] . '<br>';
            if ($id) {

                $id      = $id->ID;
                $oldHash = get_post_meta($id, 'bolig_hash', true);

                if ($hash === $oldHash && ! $force && has_post_thumbnail($id)) {
                    echo 'no changes. Skipping<br>';
                    continue;
                }

                // if($item['timestamp'] == get_field( 'timestamp', $id )) continue; LATER

            } else {

                $boligPost = array(
                    'import_id'   => $id,
                    'post_title'  => $post_title,
                    'post_type'   => 'sag',
                    'post_status' => 'publish'
                );

                $id = wp_insert_post($boligPost);

            }


            $saleType = 'PRIVATESALE';

            switch ($item['__typename']) {
                case 'SalesCase':
                    $saleType = 'PRIVATESALE';
                    break;
                case 'BusinessSalesCase':
                    $saleType = 'BUSINESSSALE';
                    break;
                case 'RentalCase':
                    $saleType = 'PRIVATERENTAL';
                    break;
                case 'BusinessRentalCase':
                    $saleType = 'BUSINESSRENTAL';
                    break;
            }

            $announceText1 = null;
            $announceText2 = null;
            $announceText3 = null;
            $announceText4 = null;
            $announceText5 = null;

            if ( ! empty($item['announceTexts'])) {
                foreach ($item['announceTexts'] as $t) {
                    switch ($t->textNumber) {
                        case 1:
                            $announceText1 = $t->text;
                            break;
                        case 2:
                            $announceText2 = $t->text;
                            break;
                        case 3:
                            $announceText3 = $t->text;
                            break;
                        case 4:
                            $announceText4 = $t->text;
                            break;
                        case 5:
                            $announceText5 = $t->text;
                            break;
                    }
                }
            }

            $statuses = [
                'ForSale'      => 'ACTIVE',
                'UnderSale'    => 'ACTIVE',
                'BeforeSale'   => 'ACTIVE',
                'FinallyTrade' => 'SOLD',
                'ForRent'      => 'ACTIVE',
                'Sold'         => 'SOLD',
                'Rented'       => 'SOLD'
            ];

            if (array_key_exists($item['status'], $statuses)) {
                $status = $statuses[$item['status']];
            }

            $openhouses = Flexyapress_Helpers::format_openhouse_dates($item['openHouses']);
            $broker     = Flexyapress_Helpers::get_broker((object)$item);

            $is_change[] = $id;
            $oldThumb    = get_post_meta($id, 'bolig_thumb', true);

            $images     = [];
            $floorplans = [];
            $videos     = [];

            Flexyapress_Helpers::sort_case_media((object)$item, $images, $floorplans, $videos);

            if ( ! has_post_thumbnail($id) || ( ! empty($oldThumb) && $oldThumb !== $images[0]['url'])) {
                $featured = generate_featured_image($images[0]['url'], $id, '');
            } else {
                echo 'no change in photo<br>';
            }

            if ($item['floor'] !== "") {
                $address = $item['addressRoadName'] . " " . $item['houseNumber'] . ", " . $item['floor'] . "\n" . $item['zipCode'] . " " . $item['addressCityName'];
            } else {
                $address = $item['addressRoadName'] . " " . $item['houseNumber'] . "\n" . $item['zipCode'] . " " . $item['addressCityName'];
            }

            if (isset($item['yearRenovated'])) {
                $year = $item['yearBuilt'] . ' / ' . $item['yearRenovated'];
            } elseif (isset($item['yearBuilt'])) {
                $year = $item['yearBuilt'];
            }

            if (isset($item['cashPrice'])) {
                if (is_numeric($item['cashPrice'])) {
                    $price = format_bolig_number($item['cashPrice']) . ' kr.';
                } else {
                    $price = $item['cashPrice'];
                }
            } elseif (isset($item['soldPrice'])) {
                $price = format_bolig_number($item['soldPrice']) . ' kr.';
            }

            $monthlyPrice = '';

            if (isset($item['ownerCostsTotalMonthlyAmount'])) {
                if (is_numeric($item['ownerCostsTotalMonthlyAmount'])) {
                    $monthlyPrice = format_bolig_number($item['ownerCostsTotalMonthlyAmount']) . ' kr.';
                } else {
                    $monthlyPrice = $item['ownerCostsTotalMonthlyAmount'];
                }
            }

            $video = ( ! empty($videos)) ? $videos[0]['url'] : '';

            $grund = format_bolig_number($item['plotArea']);

            if (empty($item['announceHeadlineInternet'])) {
                $item['announceHeadlineInternet'] = '';
            }

            wp_update_post(['ID' => $id, 'post_status' => 'publish']);

            update_field('title', $item['announceHeadlineInternet'], $id);
            update_field('text', $item['announceTextInternet'], $id);
            update_field('case_key', $item['id'], $id);
            update_field('address', $address, $id);
            update_field('boligtype', Flexyapress_Helpers::property_type_nice_name($item['propertyType']), $id);
            update_field('antal_rum', $item['roomCount'], $id);
            update_field('byggear', $year, $id);
            update_field('kontant', $price, $id);
            update_field('ejerudgift_pr_md', $monthlyPrice, $id);
            update_field('sagsnummer', $item['caseNumber'], $id);
            update_field('energimaerkning', $item['energyMark'], $id);
            update_field('case_realtor', (! empty($broker) ? $broker->email : null), $id);
            if ( ! empty($openhouses)) {
                $oh = array_shift($openhouses);

                $day = Flexyapress_Helpers::get_pretty_day_name(date('w',
                    strtotime($oh['dateStart'])));
                //$openHouseDate = $day.' d. '.date('d/m', strtotime($sorted_appointments[0]['dateStart'])).' kl. '.date('H:i', strtotime($sorted_appointments[0]['dateStart'])).(!empty($sorted_appointments[0]['dateEndUnix']) ? ' - '.date('H:i', $sorted_appointments[0]['dateEndUnix']) : '');
                $openHouseDate           = $day . ' d. ' . date('d/m',
                        strtotime($oh['dateStart'])) . ' kl. ' . date('H:i',
                        strtotime($oh['dateStart'])) . (! empty($oh['dateEndUnix']) ? ' - ' . date('H:i',
                            $oh['dateEndUnix']) : '');
                update_field('open_house', ( ! empty($oh)), $id);
                update_field('open_house_date', (! empty($openHouseDate) ? $openHouseDate : ''), $id);
                update_field('open_house_signup', $oh['signupRequired'], $id);
                update_field('open_house_signup_date', $oh['dateStart'], $id);
                update_field('open_house_id', (! empty($oh['id']) ? $oh['id'] : ''), $id);
                update_field('open_house_start_time',
                    (! empty($oh['dateStartUnix']) ? date('c', $oh['dateStartUnix']) : ''), $id);
            } else {
                update_field('open_house', false, $id);
                update_field('open_house_date', null, $id);
                update_field('open_house_signup', false, $id);
                update_field('open_house_id', null, $id);
                update_field('open_house_start_time', null, $id);
            }

            update_post_meta($id, 'bolig_hash', $hash);
            update_post_meta($id, 'bolig_thumb', $images[0]['url']);
            // update_field('tjek_boliglan', $item[''], $id);

            if (isset($item['gpsCoordinatesLat'])) {
                update_field('latitude', $item['gpsCoordinatesLat'], $id);
            }
            if (isset($item['gpsCoordinatesLong'])) {
                update_field('longitude', $item['gpsCoordinatesLong'], $id);
            }

            if ($item['status'] == 'UnderSale') {
                update_field('status', 'RESERVED', $id);
            } else {
                update_field('status', $status, $id);
            }

            //update_field('timestamp', $item['timestamp'], $id);

            update_field('bolig__kld__grund', $item['totalLivableArea'], $id);
            update_field('kld', $item['basementArea'], $id);
            update_field('grund', $grund, $id);
            update_field('video', $video, $id);

            if (isset($item['publicDocuments'])) {
                foreach ($item['publicDocuments'] as $key => $file) {
                    if (strpos(strtolower($file->documentName), 'salgsopstilling') !== false) {
                        update_field('salgsopstilling_pdf', $file->downloadUrl, $id);
                    }
                }
            }

            $typesArr = array();

            foreach ($terms as $singleTerm) {
                if ($singleTerm->name == Flexyapress_Helpers::property_type_nice_name($item['propertyType'])) {
                    array_push($typesArr, $singleTerm->term_id);
                }
            }

            $item['propertyClass'] = Flexyapress_Helpers::format_property_class_from_type($item['propertyType']);

            //If the propertyclass is HOUSE but the type isn't Villa, then insert Villa as category also.
            if ($item['propertyClass'] == 'HOUSE' && ! in_array(17, $typesArr)) {
                $typesArr[] = 17;
            }

            if (empty($typesArr) && $item['propertyType'] == 'VacationHousing') {
                $typesArr = [19];
            }

            if ($item['caseNumber'] == '99FE-000739') {
                $typesArr[] = 34;
            } elseif ($item['caseNumber'] == '99FE-000896') {
                $typesArr[] = 34;
            } elseif ($item['caseNumber'] == '99FE-001119') {
                $typesArr[] = 18;
            }

            echo $item['propertyType'] . '<br>';

            wp_set_object_terms($id, $typesArr, 'types', true);

            if (isset($images)) {

                $imageArr = array();

                foreach ($images as $media) {
                    $temp = array(
                        'image' => $media['url'],
                        'image_tablet' => $media['url_tablet'],
                        'image_mobile' => $media['url_mobile'],
                    );
                    array_push($imageArr, $temp);
                }

                update_field('gallery', $imageArr, $id);
            }

            $plansJSON = getHomePlans($post_title);
            $plans     = json_decode($plansJSON, true);
            $pictures  = $plans['result']['floorPlans'];

            if (sizeof($pictures) > 0) {

                $imageArr = array();

                foreach ($pictures as $key => $value) {

                    $order = $value['listOrder'];

                    foreach ($value['assets'] as $media) {
                        if ($media['resizeRule'] == 'ORIGINAL') {
                            $temp = array(
                                'image' => $media['url'],
                                'order' => $order
                            );
                            array_push($imageArr, $temp);
                        }
                    }

                }

                update_field('plantegninger', $imageArr, $id);

            }
            //       elseif(isset($item['urlDrawings'])){

            // 	$imageArr = array();

            // 	foreach ($item['urlDrawings'] as $media) {
            // 		$temp = array('image' => $media);
            // 		array_push($imageArr, $temp);
            // 	}

            // 	update_field('plantegninger', $imageArr, $id);
            // }

            $property_url = get_the_permalink($id);
            if (function_exists('sg_cachepress_purge_cache')) {
                sg_cachepress_purge_cache($property_url);

            }

        }
    }

    if(count($is_change) > 0 && function_exists('sg_cachepress_purge_cache')){
        echo 'purgin caches';
        $ids_to_purge = [
            1146, //Fritidshuse
            1142, //Gods
            1135, //Villa
            101, //Solgte
            97, //Ejendomme til salg
        ];

        foreach ($ids_to_purge as $purge_id){
            sg_cachepress_purge_cache(get_the_permalink($purge_id));
        }

    }

    if($force) {
        // $boligIDs
        $args = array(
            'post_type'      => 'sag',
            'posts_per_page' => -1
        );

        $the_query = new WP_Query($args);

        if ($the_query->have_posts()) :
            while ($the_query->have_posts()) : $the_query->the_post();
                $title = get_the_title();
                if ( ! in_array($title, $boligIDs)) {
                    echo 'deleting ' . $title . '<br>';
                    wp_delete_post(get_the_ID());
                }
            endwhile;
        endif;
    }
    if($is_change){
        $log = new PB_Log('flexya_sync','Changes in: '.implode(',',$is_change));
    }else{
        $log = new PB_Log('flexya_sync','no changes');
    }
}

add_action( 'wp_footer', 'register_cronjob_jfm');
function register_cronjob_jfm() {
    if( !wp_next_scheduled( 'update_bolig_cronjob' ) ) {
        wp_schedule_event( time(), 'hourly', 'update_bolig_cronjob' );
    }
}

add_filter('cron_schedules','my_cron_schedules');
function my_cron_schedules($schedules){
    if(!isset($schedules["hourly"])){
        $schedules["hourly"] = array(
            'interval' => 60*60,
            'display' => __('Hourly'));
    }
    return $schedules;
}

add_action ( 'update_bolig_cronjob', 'update_bolig' );



// add_action('wp_footer', 'update_bolig');


function getHomePlans( $reference ){
    // if(!is_user_logged_in()) return false;
    // if($_GET['homes']){

    $curl = curl_init();

    curl_setopt_array($curl, array(
        CURLOPT_URL => 'https://m2.esoftsystems.com/ewarp/',
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_ENCODING => '',
        CURLOPT_MAXREDIRS => 10,
        CURLOPT_TIMEOUT => 0,
        CURLOPT_FOLLOWLOCATION => true,
        CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
        CURLOPT_CUSTOMREQUEST => 'POST',
        CURLOPT_POSTFIELDS =>'{
			"id": 1,
			"method": "getAssets",
			"params": {
			    "reference": "'. $reference .'",
			    "clientId": "10101545"
			},
			"jsonrpc": "2.0"
			}',
        CURLOPT_HTTPHEADER => array(
            'Authorization: EWS elbaeks:MWdhS2RUeURPbVExUlBVWHhZNUIwMzlK',
            'Content-Type: application/json'
        ),
    ));

    $response = curl_exec($curl);

    curl_close($curl);
    // file_put_contents(ABSPATH . '/homeData.json', $response);
    return $response;

    // }
}

// add_action('wp_footer', 'getHomePlans');

/*function getCalendar() {

	$curl = curl_init();

	curl_setopt_array($curl, array(
		CURLOPT_URL => 'https://services.boligsystem.flexya.dk/service/v20/calendar/list?orgKey=204ec3a9-7595-42e0-8d28-1a81defda977&caseKey=59b30815-0b78-417b-be04-3f85d17b8e3a&startTime=1483228800000&endTime=1484438400000',
		CURLOPT_RETURNTRANSFER => true,
		CURLOPT_ENCODING => '',
		CURLOPT_MAXREDIRS => 10,
		CURLOPT_TIMEOUT => 0,
		CURLOPT_FOLLOWLOCATION => true,
		CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
		CURLOPT_CUSTOMREQUEST => 'GET',
		CURLOPT_HTTPHEADER => array(
			'flx-orgtoken: 5afae76c-d07f-4064-901d-0a7ecaba8c61',
			'Cookie: JSESSIONID=8D78F1233FD3EEDCB4B29548A6A2E832'
		),
	));

	$response = curl_exec($curl);

	curl_close($curl);
	echo $response;

}*/

// add_action('wp_footer', 'getCalendar');

function get_available_times( $startTime, $endTime, $caseKey, $realtor = '' ){

    $curl = curl_init();
    $url = "https://services.boligsystem.flexya.dk/service/v20/calendar/list?orgKey=204ec3a9-7595-42e0-8d28-1a81defda977&caseKey={$caseKey}&startTime={$startTime}000&endTime={$endTime}000";
    if($realtor){
        $url .= "&realtors={$realtor}";
    }
    curl_setopt_array($curl, array(
        CURLOPT_URL => $url,
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_ENCODING => '',
        CURLOPT_MAXREDIRS => 10,
        CURLOPT_TIMEOUT => 0,
        CURLOPT_FOLLOWLOCATION => true,
        CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
        CURLOPT_CUSTOMREQUEST => 'GET',
        CURLOPT_HTTPHEADER => array(
            'flx-orgtoken: 5afae76c-d07f-4064-901d-0a7ecaba8c61',
            'Cookie: JSESSIONID=015D064B5BF53212994264403CAB8D17'
        ),
    ));

    $response = curl_exec($curl);
    curl_close($curl);

    // $path = ABSPATH . 'json/cal.json';
    // $file = file_put_contents($path, $response);

    return $response;

}
/*
function getStartAndEndDate( $dateString, $week, $year ){

	$result = array();

	$dateTime = date_create($dateString);
	$dateTime->setTimezone(new DateTimeZone('Europe/Copenhagen'));
	$dateTime->setISODate( $year, $week );

	$result['start_date'] = $dateTime->format('U');

	$dateTime->modify('+7 days');
	$dateTime->modify('-1 minute');

	$result['end_date'] = $dateTime->format('U');
	return $result;

}*/

function getStartAndEndDate( $dateString, $dateVar, $year ){

    $result = array();

    // $dateTime = date_create($dateString);
    // $dateTime->setTimezone(new DateTimeZone('Europe/Copenhagen'));
    // $dateTime->setISODate( $year, $week );

    // $result['start_date'] = $dateTime->format('U');

    // $dateTime->modify('+7 days');
    // $dateTime->modify('-1 minute');

    // $result['end_date'] = $dateTime->format('U');
    $result['start_date'] = strtotime($dateVar . '05:00:00');
    $result['end_date'] = strtotime($dateVar . '22:00:00');
    return $result;

}

add_action('wp_ajax_calendar_times', 'calendar_times');
add_action('wp_ajax_nopriv_calendar_times', 'calendar_times');

function calendar_times(){

    $nonce = sanitize_text_field($_POST['nonce']);

    if ( ! wp_verify_nonce( $nonce, 'calendar' ) )
        die ( 'Busted!');

    if ( wp_doing_ajax() ){

        $caseKey = sanitize_text_field($_POST['caseKey']);

        $dateString = sanitize_text_field($_POST['date']);
        $weekNumber = date('W', strtotime($dateString));
        $year = date('Y', strtotime($dateString));

        // $dates = getStartAndEndDate( $dateString, $weekNumber, $year );
        $dates = getStartAndEndDate( $dateString, $dateString, $year );
        $realtor = $_POST['realtor'];
        $startTime = $dates['start_date'];
        $endTime = $dates['end_date'];

        $calendarFile = get_available_times( $startTime, $endTime, $caseKey, '' );

        // $path = ABSPATH . 'json/calendar.json';
        // $file = fopen( $path, "r" ) or die( "Unable to open file!" );
        // $calendarFile = fread( $file, filesize($path) );
        $calendar = json_decode( $calendarFile, true );
        $selectedDay = date('N', strtotime($dateString));
        $hours = calculate_timeslots($calendar, $selectedDay);

        if(!$hours){
            $calendarFile = get_available_times( $startTime, $endTime, $caseKey, '');
            $calendar = json_decode( $calendarFile, true );
            $hours = calculate_timeslots($calendar, $selectedDay);
        }

        wp_send_json_success($hours);
    }
    wp_die();

}

function calculate_timeslots($calendar, $selectedDay){
    $hours = array();

    foreach($calendar['openHours'] as $openHours){

        if($selectedDay == $openHours['dayOfWeek']){
            $openStart = substr($openHours['startTime'], 0, -3) / 3600;
            $openEnd = substr($openHours['endTime'], 0, -3) / 3600;

            $hours = range($openStart, $openEnd);
            array_pop($hours);
        }
    }

    foreach ($calendar['unavailable'] as $item) {

        $dateStart = date_create();
        $dateStart->setTimezone(new DateTimeZone('Europe/Copenhagen'));
        date_timestamp_set($dateStart, substr($item['startTime'], 0, -3));
        $dayStart = date_format($dateStart, 'N');

        $dateEnd = date_create();
        $dateEnd->setTimezone(new DateTimeZone('Europe/Copenhagen'));
        date_timestamp_set($dateEnd, substr($item['endTime'], 0, -3));
        $dayEnd = date_format($dateEnd, 'N');

        if($dayStart == $selectedDay){

            $hourStart = date_format($dateStart, 'G');
            $hourEnd = date_format($dateEnd, 'G');
            $hourRange = range($hourStart, $hourEnd);

            $hours = array_diff($hours, $hourRange);
        }

    }
    if(sizeof($hours) > 0){
        foreach ($hours as $key => $item) {
            $hours[$key] = gmdate("H:i", $item * 3600);
        }
        arsort($hours);
    }

    return $hours;
}

function book_cal($orgKey, $caseKey, $date = '', $email, $name, $realtor = '', $phone, $comment, $address = ''){

    //$url = "https://services.boligsystem.flexya.dk/service/v20/calendar/book?orgKey={$orgKey}&caseKey={$caseKey}&startTime={$startTime}&email={$email}&name={$name}&type=presentation&phone={$phone}&message={$comment}";

    if($date){
        $comment .= "<br>Ønsket dato: {$date}";
    }

    if($address){
        $comment .= "<br>Adresse: {$address}";
    }

    $url = "https://services.boligsystem.flexya.dk/service/v20/order?orgKey={$orgKey}&caseKey={$caseKey}&buyerActionType=PRESENTATION_ORDER&name={$name}&email={$email}&phone={$phone}&message={$comment}";

    $response = wp_remote_post($url, array(
        'headers' => array(
            'flx-orgtoken' => '5afae76c-d07f-4064-901d-0a7ecaba8c61',
        ),
        'timeout' => 30
    ));

    if(!is_wp_error($response) && $response['response']['code'] == 200){
        $log = new PB_Log('fremvisning_submit', $url, $response['body']);
        wp_send_json_success();
    }else{
        $log = new PB_Log('fremvisning_submit_fail', $url, $response);
        wp_send_json_error();
    }

    wp_die();
}

function setPropertyUri($case_key, $property_url){

    if(!defined('FLEXYA_PRODUCTION') || FLEXYA_PRODUCTION !== true){
        $log = new PB_Log('setPropertyUri_skip', $property_url);
        return false;
    }

    $url = "https://services.boligsystem.flexya.dk/service/v20/setPropertyUri";
    $args = [
        'method' => 'POST',
        'body' => [
            'orgKey' => '204ec3a9-7595-42e0-8d28-1a81defda977',
            'caseKey' => $case_key,
            'uri' => $property_url
        ],
        'headers' => array(
            'flx-orgtoken' => '5afae76c-d07f-4064-901d-0a7ecaba8c61',
        ),
    ];
    $response = wp_remote_post($url, $args);
    if(!is_wp_error($response) && $response['response']['code'] == 200){
        $log = new PB_Log('setPropertyUri', $args, $response['body']);
        return true;
    }else{
        $log = new PB_Log('setPropertyUri_fail', $args, $response);
        return false;
    }


}

add_action('wp_ajax_fremvisning_submit', 'fremvisning_submit');
add_action('wp_ajax_nopriv_fremvisning_submit', 'fremvisning_submit');

function fremvisning_submit(){

    $nonce = sanitize_text_field($_POST['nonce']);

    if ( ! wp_verify_nonce( $nonce, 'calendar' ) )
        die ( 'Busted!');

    if ( wp_doing_ajax() ){
        $data = sanitize_text_field($_POST['data']);
        $json = json_decode( html_entity_decode( stripslashes ($data ) ), true );
        $orgKey = '204ec3a9-7595-42e0-8d28-1a81defda977';
        date_default_timezone_set('Europe/Copenhagen');
        $caseNo = $json['caseNo'];
        $name = $json['name'];
        $phone = $json['area'] . $json['mobile'];
        $email = $json['email'];
        $comment = $json['komentar'];
        $address = $json['address'];
        //$startTime = gmdate('U',strtotime($json['date'])) . '000';
        $date = $json['date'];
        //$realtor = $json['realtor'];
        $realtor = '';

        if($date){
            $comment .= " Ønsket dato: {$date}. ";
        }

        if($address){
            $comment .= " Adresse: {$address}. ";
        }

        //book_cal($orgKey, $caseKey, $date, $email, $name, $realtor, $phone, $comment, $address);

        $api = new Flexyapress_API();

        $input = [
            'name' => $name,
            'caseNo' => $caseNo,
            'email' => $email,
            'phone' => $phone,
            'message' => $comment,
            'buyerActionType' => 'PRESENTATION_ORDER',
            'consentIdGlobal' => $json['consentIdGlobal'],
            'shopNo' => $json['shopNo']
        ];

        $response = $api->order($input);

        if(is_array($response)){
            wp_send_json_success($response);
        }

    }
    wp_die();
}

add_action('wp_ajax_givbud_submit', 'givbud_submit');
add_action('wp_ajax_nopriv_givbud_submit', 'givbud_submit');

function givbud_submit(){

    $nonce = sanitize_text_field($_POST['nonce']);

    if ( ! wp_verify_nonce( $nonce, 'calendar' ) )
        die ( 'Busted!');

    if ( wp_doing_ajax() ){
        $data = sanitize_text_field($_POST['data']);
        $json = json_decode( html_entity_decode( stripslashes ($data ) ), true );

        $orgKey = '204ec3a9-7595-42e0-8d28-1a81defda977';

        $caseKey = $json['caseKey'];
        $name = $json['name'];
        $phone = $json['area'] . $json['mobile'];
        $email = $json['email'];
        $bid = str_replace('.', '', $json['bid']);
        $comment = $json['komentar'];
        $url = "https://services.boligsystem.flexya.dk/service/v20/order?orgKey={$orgKey}&caseKey={$caseKey}&buyerActionType=MAKEABID_ORDER&name={$name}&email={$email}&phone={$phone}&makeABid={$bid}&message={$comment}";
        /*$curl = curl_init();
		curl_setopt_array($curl, array(
		  CURLOPT_URL => $url,
		  CURLOPT_RETURNTRANSFER => true,
		  CURLOPT_ENCODING => '',
		  CURLOPT_MAXREDIRS => 10,
		  CURLOPT_TIMEOUT => 0,
		  CURLOPT_FOLLOWLOCATION => true,
		  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
		  CURLOPT_CUSTOMREQUEST => 'GET',
		  CURLOPT_HTTPHEADER => array(
		    'flx-orgtoken: 5afae76c-d07f-4064-901d-0a7ecaba8c61',
		    'Cookie: JSESSIONID=015D064B5BF53212994264403CAB8D17'
		  ),
		));

		$response = curl_exec($curl);
		curl_close($curl);
        $log = new PB_Log('givbud_submit', $url, $response);
		echo $response;

        */
        /*
        $response = wp_remote_post($url, array(
            'headers' => array(
                'flx-orgtoken' => '5afae76c-d07f-4064-901d-0a7ecaba8c61'
            )
        ));

        if($response['response']['code'] == 200){
            $log = new PB_Log('givbud_submit', $url, $response['body']);
            echo $response['body'];
        }else{
            $log = new PB_Log('givbud_submit_fail', $url, $response);
        }
*/

        $api = new Flexyapress_API();

        $input = [
            'name' => $name,
            'caseNo' => $json['caseNo'],
            'email' => $email,
            'phone' => $phone,
            'message' => $comment,
            'makeABid' => $json['makeABid'],
            'buyerActionType' => 'MAKEABID_ORDER',
            'consentIdGlobal' => $json['consentIdGlobal'],
            'shopNo' => $json['shopNo']
        ];

        $response = $api->order($input);

        if(is_array($response)){
            wp_send_json_success($response);
        }

    }
    wp_die();
}

add_action('wp_ajax_salgsopstilling_submit', 'salgsopstilling_submit');
add_action('wp_ajax_nopriv_salgsopstilling_submit', 'salgsopstilling_submit');

function salgsopstilling_submit(){

    $nonce = sanitize_text_field($_POST['nonce']);

    if ( ! wp_verify_nonce( $nonce, 'calendar' ) )
        die ( 'Busted!');

    if ( wp_doing_ajax() ){
        $data = sanitize_text_field($_POST['data']);
        $json = json_decode( html_entity_decode( stripslashes ($data ) ), true );

        $orgKey = '204ec3a9-7595-42e0-8d28-1a81defda977';

        $caseKey = $json['caseKey'];
        $name = $json['name'];
        $phone = $json['area'] . $json['mobile'];
        $email = $json['email'];
        $bestil_agree = $json['bestil_agree'] ?: false;

        $url = "https://services.boligsystem.flexya.dk/service/v20/order?orgKey={$orgKey}&caseKey={$caseKey}&buyerActionType=DOCUMENTS_ORDER&name={$name}&email={$email}&phone={$phone}&contactAccepted={$bestil_agree}&sendEmail={$bestil_agree}";
        /*$curl = curl_init();
		curl_setopt_array($curl, array(
		  CURLOPT_URL => $url,
		  CURLOPT_RETURNTRANSFER => true,
		  CURLOPT_ENCODING => '',
		  CURLOPT_MAXREDIRS => 10,
		  CURLOPT_TIMEOUT => 0,
		  CURLOPT_FOLLOWLOCATION => true,
		  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
		  CURLOPT_CUSTOMREQUEST => 'GET',
		  CURLOPT_HTTPHEADER => array(
		    'flx-orgtoken: 5afae76c-d07f-4064-901d-0a7ecaba8c61',
		    'Cookie: JSESSIONID=015D064B5BF53212994264403CAB8D17'
		  ),
		));

		$response = curl_exec($curl);
        $log = new PB_Log('salgsopstilling_submit', $url, $response);
		curl_close($curl);
*/

        $api = new Flexyapress_API();

        $input = [
            'name' => $name,
            'caseNo' => $json['caseNo'],
            'email' => $email,
            'phone' => $phone,
            'contactAccepted' => $bestil_agree,
            'buyerActionType' => 'DOCUMENTS_ORDER',
            'consentIdGlobalWithContact' => $json['consentIdGlobalWithContact'],
            'consentIdGlobalWithoutContact' => $json['consentIdGlobalWithoutContact'],
            'shopNo' => $json['shopNo']
        ];

        $response = $api->order($input);

        if(is_array($response)){
            wp_send_json_success($response);
        }


    }
    wp_die();
}


add_action('wp_ajax_openhouse_submit', 'openhouse_submit');
add_action('wp_ajax_nopriv_openhouse_submit', 'openhouse_submit');

function openhouse_submit(){

    $nonce = sanitize_text_field($_POST['nonce']);

    if ( ! wp_verify_nonce( $nonce, 'calendar' ) )
        die ( 'Busted!');

    if ( wp_doing_ajax() ){
        $data = sanitize_text_field($_POST['data']);
        $json = json_decode( html_entity_decode( stripslashes ($data ) ), true );

        $orgKey = '204ec3a9-7595-42e0-8d28-1a81defda977';

        $caseKey = $json['caseKey'];
        $name = $json['name'];
        $phone = $json['area'] . $json['mobile'];
        $email = $json['email'];
        $comment = $json['komentar'];
        $address = $json['address'];

        if($address){
            $comment .= " Adresse: {$address}. ";
        }


        $api = new Flexyapress_API();

        $input = [
            'name' => $name,
            'caseNo' => $json['caseNo'],
            'email' => $email,
            'phone' => $phone,
            'message' => $comment,
            'buyerActionType' => 'OPENHOUSE_SIGNUP',
            'consentIdGlobal' => $json['consentIdGlobal'],
            'openHouseId' => $json['openHouseId'],
            'openHouseStartTime' => $json['openHouseStartTime'],
            'shopNo' => $json['shopNo']
        ];

        $response = $api->order($input);

        if(is_array($response)){
            wp_send_json_success($response);
        }
    }
    wp_die();
}

add_action('wp_ajax_kobertkartotek_submit', 'kobertkartotek_submit');
add_action('wp_ajax_nopriv_kobertkartotek_submit', 'kobertkartotek_submit');

function kobertkartotek_submit(){

    $nonce = sanitize_text_field($_POST['nonce']);

    if ( ! wp_verify_nonce( $nonce, 'calendar' ) )
        die ( 'Busted!');

    if ( wp_doing_ajax() ){
        $data = sanitize_text_field($_POST['data']);
        $json = json_decode( html_entity_decode( stripslashes ($data ) ), true );
        $orgKey = '204ec3a9-7595-42e0-8d28-1a81defda977';

        $name = $json['name'];
        $phone = $json['area'] . $json['mobile'];
        $email = $json['email'];
        $onsker = $json['fortal'];
        $storrelse = explode('-', $json['storrelse']);
        $landSize = explode('-', $json['grundstorrelse']);
        //$rooms = $json['rooms'];
        $minSize = 0;
        $maxSize = 0;
        $minLandSize = 0;
        $maxLandSize = 0;
        $minPrice = 0;
        $maxPrice = 0;

        $landSize = explode(',', str_replace(' ','', $json['grundstorrelse']));
        $storrelse = explode(',', str_replace(' ','', $json['storrelse']));
        $prices = explode(',', str_replace(' ','', $json['kontaktpris']));


        foreach ($landSize as $l){
            $tempSize = explode('-', $l);
            if($tempSize[0] < $minLandSize){
                $minLandSize = (int) $tempSize[0];
            }
            if($tempSize[1] > $maxLandSize){
                $maxLandSize = (int) $tempSize[1];
            }
        }

        foreach ($storrelse as $l){
            $tempSize = explode('-', $l);
            if($tempSize[0] < $minSize){
                $minSize = (int) $tempSize[0];
            }
            if($tempSize[1] > $maxSize){
                $maxSize = (int) $tempSize[1];
            }
        }

        foreach ($prices as $price){
            $tempPrice = explode('-', $price);
            if($tempPrice[0] < $minPrice){
                $minPrice = (int) $tempPrice[0];
            }
            if($tempPrice[1] > $maxPrice){
                $maxPrice = (int) $tempPrice[1];
            }
        }

        $maxPrice *= 1000000;
        $minPrice *= 1000000;


        $beliggenhed = rtrim(trim($json['beliggenhed']), ',');
        $beliggenhed = explode(',', $beliggenhed);
        $address = $json['address'];
        $propertyTypes = http_build_query(['propertyTypes' => $json['ejendomstyper']]); // checkboxes
        $propertyTypes = '';
        $locations = '';

        if($json['ejendomstyper']){
            foreach ($json['ejendomstyper'] as $p){
                $propertyTypes .= '&propertyTypes='.$p;
            }
        }

        if($beliggenhed){
            foreach ($beliggenhed as $b){
                $locations .= '&locations='.$b;
            }
        }

        $url = "https://services.boligsystem.flexya.dk/service/v20/setSearchAgent?orgKey={$orgKey}&name={$name}&email={$email}&phone={$phone}&message={$onsker}&minPrice={$minPrice}&maxPrice={$maxPrice}&minLandSize={$minLandSize}&maxLandSize={$maxLandSize}&minPropertySize={$minSize}&maxPropertySize={$maxSize}&minRooms=0&address={$address}{$locations}{$propertyTypes}&customerAddress={$address}";
        /*
        $response = wp_remote_post($url, array(
            'headers' => array(
                'flx-orgtoken' => '5afae76c-d07f-4064-901d-0a7ecaba8c61'
            )
        ));*/

        $reciever = "info@elbaeks.dk";
        //$reciever = "mikkel@pbweb.dk";

        ob_start();
        include get_stylesheet_directory() .'/template-parts/emails/koberkartotek-admin.php';
        $message = ob_get_clean();
        //echo $message;
        $headers[] = "From: Elbæks <info@elbaeks.dk>";
        $headers[] = "Content-Type: text/html; charset=UTF-8";
        $send = wp_mail($reciever, 'Tilmelding til køberkartotek', $message, $headers);

        ob_start();
        include get_stylesheet_directory() .'/template-parts/emails/koberkartotek-customer.php';
        $message = ob_get_clean();
        //echo $message;
        $headers[] = "From: Elbæks <info@elbaeks.dk>";
        $headers[] = "Content-Type: text/html; charset=UTF-8";
        $send = wp_mail($email, 'Tilmelding til køberkartotek', $message, $headers);

        $response = [
            'response' => [
                'code' => 0
            ],
            'body' => ''
        ];

        if($send){
            $response = [
                'response' => [
                    'code' => 200
                ],
                'body' => '{"success":"ok"}'
            ];
        }

        if($response['response']['code'] == 200){
            $log = new PB_Log('kobertkartotek_submit', $url, $response['body']);
            echo $response['body'];
        }else{
            $log = new PB_Log('kobertkartotek_submit_fail', $url, $send);
        }
    }
    wp_die();
}

function pb_get_address_parts($address_string){
    $address = [
        'roadname' => '',
        'zipcode' => '',
        'city' => ''
    ];

    $address_parts = explode(',', $address_string);
    $address['roadname'] = trim($address_parts[0]);
    $zip_parts = explode(' ', trim($address_parts[1]));

    if(count($address_parts) == 3){
        $address['roadname'] .= ', '.trim($address_parts[1]);
        $zip_parts = explode(' ', $address_parts[2]);
    }

    $address['zipcode'] = trim(array_shift($zip_parts));
    if(count($zip_parts) === 1){
        $address['city'] = trim($zip_parts[0]);
    }else{
        $address['city'] = trim(implode(' ', $zip_parts));
    }


    return $address;
}

add_action('wp_ajax_vurdering_submit', 'vurdering_submit');
add_action('wp_ajax_nopriv_vurdering_submit', 'vurdering_submit');

function vurdering_submit(){

    $nonce = sanitize_text_field($_POST['nonce']);

    if ( ! wp_verify_nonce( $nonce, 'calendar' ) )
        die ( 'Busted!');

    if ( wp_doing_ajax() ){
        $data = sanitize_text_field($_POST['data']);
        $json = json_decode( html_entity_decode( stripslashes ($data ) ), true );

        $orgKey = '204ec3a9-7595-42e0-8d28-1a81defda977';

        $name = $json['name'];
        $address = $json['address'];
        $dawa_id = !empty($json['addressID']) ? $json['addressID'] : null;
        $phone = $json['area'] . $json['mobile'];
        $email = $json['email'];
        $realtor = $json['realtor'];

        $realtor = $json['realtor'];
        $message = "";

        $address_arr = pb_get_address_parts($json['address']);

        $message .= "Valgt mægler: ".($realtor ?: 'Ingen præferencer').". ";

        $message .= "Adresse: ".$address.". ";

        $message .= $json['onsker'];

        //$message = trim(preg_replace('/\s\s+/', ' ', $message));

        $message = urldecode($message);

        //$message = urlencode($message);

        $curl = curl_init();
        $url = "https://services.boligsystem.flexya.dk/service/v20/order?orgKey={$orgKey}&name={$name}&email={$email}&phone={$phone}&message={$message}&address={$address}&buyerActionType=VALUATION_ORDER";
        /*curl_setopt_array($curl, array(
          CURLOPT_URL => $url,
          CURLOPT_RETURNTRANSFER => true,
          CURLOPT_ENCODING => '',
          CURLOPT_MAXREDIRS => 10,
          CURLOPT_TIMEOUT => 0,
          CURLOPT_FOLLOWLOCATION => true,
          CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
          CURLOPT_CUSTOMREQUEST => 'POST',
          CURLOPT_HTTPHEADER => array(
            'flx-orgtoken: 5afae76c-d07f-4064-901d-0a7ecaba8c61',
            'Cookie: JSESSIONID=015D064B5BF53212994264403CAB8D17'
          ),
        ));

        $response = curl_exec($curl);
        curl_close($curl);
*/
        /*
        $response = wp_remote_post($url, array(
            'headers' => array(
                'flx-orgtoken' => '5afae76c-d07f-4064-901d-0a7ecaba8c61'
            )
        ));*/


        $api = new Flexyapress_API();

        $input = [
            'name' => $name,
            'email' => $email,
            'phone' => $phone,
            'message' => $message,
            'dawa-address-id' => $dawa_id,
            'addressRoadName' => $address_arr['roadname'],
            'addressZipCode' => $address_arr['zipcode'],
            'addressZipCodeCity' => $address_arr['city'],
            'buyerActionType' => 'VALUATION_ORDER',
            'consentIdGlobal' => $json['consentIdGlobal'],
            'shopNo' => $json['shopNo']
        ];

        $response = $api->order($input);

        if(is_array($response)){
            wp_send_json_success($response);
        }
/*
        $response = pb_order_sales_valuation(null, '', $name, '', $phone, $email, $message, true, $dawa_id, $address_arr['roadname'], $address_arr['zipcode'], $address_arr['city']);

        //$log = new PB_Log('vurdering_submit', $url, $response);

        if($response['response']['code'] == 200){
            $log = new PB_Log('vurdering_submit', $url, $response['body']);
            echo $response['body'];
        }else{
            $log = new PB_Log('vurdering_submit_fail', $url, $response);
        }
*/
    }
    wp_die();
}

add_action('wp_ajax_skuffesalg_submit', 'skuffesalg_submit');
add_action('wp_ajax_nopriv_skuffesalg_submit', 'skuffesalg_submit');

function skuffesalg_submit(){

    $nonce = sanitize_text_field($_POST['nonce']);

    if ( ! wp_verify_nonce( $nonce, 'calendar' ) )
        die ( 'Busted!');

    if ( wp_doing_ajax() ){
        $data = sanitize_text_field($_POST['data']);
        $json = json_decode( html_entity_decode( stripslashes ($data ) ), true );

        $orgKey = '204ec3a9-7595-42e0-8d28-1a81defda977';

        $name = $json['name'];
        $email = $json['email'];
        $dawa_id = !empty($json['addressID']) ? $json['addressID'] : null;
        $phone = $json['area'] . $json['mobile'];
        $address = $json['address'];
        $realtor = $json['realtor'];
        $message = "";

        $message .= "Valgt mægler: ".($realtor ?: 'Ingen præferencer').". ";

        $message .= "Adresse: ".$address.". ";

        $message .= $json['onsker'];

        $address_arr = pb_get_address_parts($json['address']);

        //$message = trim(preg_replace('/\s\s+/', ' ', $message));

        $message = $message;

        //$message = urlencode($message);

        $url = "https://services.boligsystem.flexya.dk/service/v20/order?orgKey={$orgKey}&buyerActionType=VALUATION_ORDER&name={$name}&email={$email}&phone={$phone}&address={$address}&message={$message}";
        /*
        $response = wp_remote_post($url, array(
            'headers' => array(
                'flx-orgtoken' => '5afae76c-d07f-4064-901d-0a7ecaba8c61'
            )
        ));*/


        $api = new Flexyapress_API();

        $input = [
            'name' => $name,
            'email' => $email,
            'phone' => $phone,
            'message' => $message,
            'dawa-address-id' => $dawa_id,
            'addressRoadName' => $address_arr['roadname'],
            'addressZipCode' => $address_arr['zipcode'],
            'addressZipCodeCity' => $address_arr['city'],
            'buyerActionType' => 'VALUATION_ORDER',
            'consentIdGlobal' => $json['consentIdGlobal'],
            'shopNo' => $json['shopNo']
        ];

        $response = $api->order($input);

        if(is_array($response)){
            wp_send_json_success($response);
        }

    }

    wp_die();
}


add_action('wp_ajax_get_locations', 'get_locations');
add_action('wp_ajax_nopriv_get_locations', 'get_locations');

function get_locations(){
    //echo 'test';

    if ( wp_doing_ajax() ){
        $data = $_GET;
        $json = json_decode( html_entity_decode( stripslashes ($data ) ), true );

        $orgKey = '204ec3a9-7595-42e0-8d28-1a81defda977';
        $term = urlencode($_GET['search']);
        $url = "https://services.boligsystem.flexya.dk/service/v20/getLocations?term={$term}";

        $response = wp_remote_get($url, array(
            'headers' => array(
                'flx-orgtoken' => '5afae76c-d07f-4064-901d-0a7ecaba8c61',
                'Access-Control-Allow-Origin' => '*'
            )
        ));

        if($response['response']['code'] == 200){
            //$log = new PB_Log('get_locations', $url, $response['body']);
            if($response['body']){
                $results = json_decode($response['body']);
                $results_arr = [];
                foreach ($results as $r){
                    //if($r->type == 'ZIPCODE'){
                    $results_arr[] = $r;
                    //}
                }
                echo json_encode($results_arr);
            }else{
                echo $response['body'];
            }

        }else{
            $log = new PB_Log('get_locations_fail', $url, $response);
        }

    }

    wp_die();
}


function pb_manual_update(){
    if(is_user_logged_in() && isset($_GET['flexya_update']) && $_GET['flexya_update'] == '1'){
        update_bolig(!empty($_GET['force']));
        die();
    }
}
add_action('init', 'pb_manual_update');


function my_acf_load_value( $value, $post_id, $field ) {

    // vars
    $order = array();

    // bail early if no value
    if( empty($value) ) {

        return $value;

    }

    // populate order
    foreach( $value as $i => $row ) {

        $order[ $i ] = $row['field_627264e939563'];

    }

    // multisort
    array_multisort( $order, SORT_ASC, $value );
    // return
    return $value;

}

add_filter('acf/load_value/name=plantegninger', 'my_acf_load_value', 10, 3);



function pb_seotitle($e){
    if(get_post_type() == 'sag'){

        return str_replace(['<br>', '<br/>', "\n", "\r"], ' ', get_field('address'));

    }else{
        return $e;
    }

}

function pb_meta_desc($e){
    if(get_post_type() == 'sag'){

        return substr(html_entity_decode(str_replace(['<br>', '<br/>', "\n", "\r"], ' ', strip_tags(get_field('text')))), 0, 155);

    }else{
        return $e;
    }
}

add_filter( 'wpseo_title', 'pb_seotitle');
add_filter( 'wpseo_opengraph_title', 'pb_seotitle');
add_filter( 'wpseo_metadesc', 'pb_meta_desc');



function pb_get_access_token(){

    if(get_transient('flexyapress_auth_token')){
        return get_transient('flexyapress_auth_token');
    }

    $response = wp_remote_post('https://iam.mindworking.eu/auth/realms/elbaeks/protocol/openid-connect/token',['body' => ['grant_type' => 'client_credentials', 'client_id' => 'mw-service-external-client-website', 'client_secret' => MW_CLIENT_SECRET]]);
    $body     = json_decode( wp_remote_retrieve_body( $response ) );

    if(!empty($body->access_token)){
        set_transient('flexyapress_auth_token', $body->access_token, 200);
        return $body->access_token;
    }else{
        return false;
    }
}

define('MW_LEADS_URL', 'https://elbaeks.mindworking.eu/api/integrations/leads/graphql/');


function pb_get_header_args(){
    $args = array(
        'headers' => array(
            'Content-Type' => 'application/json',
            'Authorization' => 'Bearer '.pb_get_access_token()
        )
    );

    return $args;
}

function pb_get_lead_types(){


    $args = pb_get_header_args();

    $args['timeout'] = 300;

    $args['body'] = wp_json_encode([
        'query' => '
            {
                      leadTypes {
                        name
                        id
                        displayName
                      }
                    }
            ']);
    $resp = wp_remote_post( MW_LEADS_URL, $args);

    if(!is_wp_error( $resp )){
        $lead_types = json_decode($resp['body']);

        if(empty($lead_types->errors)){
            $lead_types = $lead_types->data->leadTypes;
            if(is_array($lead_types) && count($lead_types) > 0){
                return $lead_types;
            }else{
                return array();
            }
        }else{
            var_dump($lead_types->errors);
            return [];
        }
        return [];
    }else{
        return $resp;
    }
}

function pb_get_lead_consents_by_typeid($id){
    $args = pb_get_header_args();

    $args['timeout'] = 300;

    $args['body'] = wp_json_encode([
        'query' => '
            {
                  leadConsents(LeadTypeId: "'.$id.'") {
                    id
                    isCurrent
                    heading
                    purposeText
                    leadType {
                      name
                      id
                      displayName
                    }
                  }
              }
            ']);
    $resp = wp_remote_post( MW_LEADS_URL, $args);
    if(!is_wp_error( $resp )){

        if(empty($resp['response']['code']) || $resp['response']['code'] != 200){
            var_dump($resp);
            die();
        }

        $lead_consents = json_decode($resp['body']);

        if(empty($lead_consents->errors)){
            $lead_consents = $lead_consents->data->leadConsents;
            if(is_array($lead_consents) && count($lead_consents) > 0){
                return $lead_consents;
            }else{
                return array();
            }
        }else{
            var_dump($lead_consents->errors);
            return [];
        }
        return [];
    }else{
        return $resp;
    }
}

function pb_get_consent_id($type){

    if(get_transient('flexyapress_lead_types')){
        $formatted_lead_types = get_transient('flexyapress_lead_types');
        return $formatted_lead_types[$type]['id'];
    }


    $lead_types = pb_get_lead_types();

    if(!empty($lead_types)) {
        $formatted_lead_types = [];
        foreach ($lead_types as $lt) {

            if (empty($lt->id)) {
                continue;
            }
            $consents = pb_get_lead_consents_by_typeid($lt->id);

            if ( ! empty($consents)) {
                foreach ($consents as $c) {

                    if (empty($c->isCurrent) || empty($c->leadType)) {
                        continue;
                    }

                    $formatted_lead_types[$c->leadType->name] = [
                        'heading' => $c->heading,
                        'id'      => $c->id,
                        'text'    => $c->purposeText
                    ];

                }
            }

        }

        set_transient('flexyapress_lead_types', $formatted_lead_types, 3600);

        return $formatted_lead_types[$type]['id'];
    }
}

function pb_order_sales_valuation($consent_id = '', $shopNo = '', $firstName, $lastName = '', $phone, $email, $message = '', $lives_on_address = false, $dawa_guid = '', $roadname = '', $zipcode = '', $city = ''){

    $args = pb_get_header_args();
    $shopNo = 99;

    if(!$consent_id){
        $consent_id = pb_get_consent_id('SalesValuation');
    }


    $args['timeout'] = 300;
    $args['body'] = json_encode(
        ['query' => 'mutation{
                          createSalesValuation(
                            input: {
                              firstName: "'.$firstName.'"
                              lastName: "'.$lastName.'"
                              phoneNumber: "'.$phone.'"
                              consentIdGlobal: "'.$consent_id.'"
                              livesOnAddress: '.($lives_on_address ? 'true' : 'false').'
                              '.($email ? 'email: "'.$email.'"' : '').'
                              '.($message ? 'comment: "'.$message.'"' : '').'
                              '.($dawa_guid ? 'awsAddressGuid: "'.$dawa_guid.'"' : '').'
                              '.($shopNo ? 'responsibleShopNo: "'.$shopNo.'"' : '').'
                              '.($roadname ? 'addressRoadName: "'.$roadname.'"' : '').'
                              '.($zipcode ? 'addressZipCode: "'.$zipcode.'"' : '').'
                              '.($city ? 'addressZipCodeCity: "'.$city.'"' : '').'
                            }
                          ){
                        id
                        errors {
                          id
                          message
                          path
                          type
                        }
                      }
                      }
            ']);

    return wp_remote_post( MW_LEADS_URL, $args);
}