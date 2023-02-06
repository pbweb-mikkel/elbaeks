<?php  /* Template name: Property list view */ ?>
<?php
    get_header();

    $types = get_field( 'categories' );

    $args = array(
        'post_type' => 'sag',
        'posts_per_page' => -1,
        'meta_query'    => array(
            array(
                'key'       => 'status',
                'value'     => 'SOLD',
                'compare'   => '!=',
            ),
        ),
        'tax_query' => array(
            array(
                'taxonomy' => 'types',
                'terms'    => $types,
            ),
        )
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
                <div class="col-12 col-md-6">
                    <div class="taxonomyTypes">
                        <h1>Ejendomme til salg: <span><?php the_field( 'title' ); ?></span></h1>
                    </div>
                </div>
                <div class="col-12 col-md-6 searchPropertyBlockWrap">
                    <div class="searchPropertyBlock">
                        <input id="propertySearch" type="text" placeholder="Søg adresse eller by" class="searchPropertyBlock__input">
                        <svg id="icon" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><path fill="#9B7250" d="M29,27.5859l-7.5521-7.5521a11.0177,11.0177,0,1,0-1.4141,1.4141L27.5859,29ZM4,13a9,9,0,1,1,9,9A9.01,9.01,0,0,1,4,13Z" transform="translate(0 0)"/></svg>
                    </div>
                </div>
                <div id="searchPropertyNoMatches" class="col-12" style="display:none;">
                    <div class="h2" style="color:#9b7250;font-size:calc(1rem + 0.9230769231vw);margin:20px 0;">Ingen boliger matchede din søgning. Se her hvad vi ellers kan tilbyde af ejendomme:</div>
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
</main>
<?php get_footer(); ?>