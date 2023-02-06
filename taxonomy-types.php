<?php
/**
 * The template for displaying archive pages
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package elbaeks
 */

get_header();
?>
<?php 
    $id = get_queried_object()->term_id;
    $term = get_term( $id );
    $acfField = 'types_' . $id;
    $title = $term->name;
    // $title = (get_field( 'archive_page_title', $acfField ))? get_field( 'archive_page_title', $acfField ) : $term->name;

    $args = array(
        'post_type'         => 'sag',
        'posts_per_page'    => -1,
        // 'meta_key'          => 'kontant',
        // 'orderby'           => 'meta_value_num',
        // 'order'             => 'DESC',
        'meta_query'        => array(
            'relation' => 'AND',
            array(
                'key'       => 'status',
                'value'     => 'ACTIVE',
                'compare'   => '='
            ),
        ),
        'tax_query' => array(
            array(
                'taxonomy'      => 'types',
                'field'         => 'id',
                'terms'         => $id
            ),
        ),
    );

    $the_query = new WP_Query( $args );

    usort($the_query->posts, function ($a, $b) {
        $aPrice = str_replace('.', '', get_field( 'kontant', $a->ID ));
        $bPrice = str_replace('.', '', get_field( 'kontant', $b->ID ));

        $aPrice = str_replace(' kr', '', $aPrice);
        $bPrice = str_replace(' kr', '', $bPrice);

        if ($aPrice === $bPrice) {
            return 0;
        }
        return $aPrice > $bPrice ? -1 : 1;
    });

?>
<main id="primary" class="site-main" data-barba="container" data-barba-namespace="default">

    <div class="taxonomyTypesWrap">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="taxonomyTypes">
                        <h1>Ejendomme til salg: <span><?php echo $title; ?></span></h1>
                        <!-- <div class="taxonomyTypes__results">Resultater i alt: <span><?php //echo $the_query->post_count; ?></span></div> -->
                    </div>
                </div>
            </div>
            <div class="row row-cols-md-2 propertiesRow">
                <?php if ( $the_query->have_posts() ) : ?>
                    <?php while ( $the_query->have_posts() ) : $the_query->the_post(); ?>
                        <?php get_template_part('template-parts/parts/bolig', 'card'); ?>
                    <?php endwhile; ?>
                <?php endif; ?>
            </div>  
        </div>
    </div>
    <div id="noInstaBlock"></div>

</main><!-- #main -->

<?php
get_footer();

