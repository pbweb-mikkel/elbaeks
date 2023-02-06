<div class="categoriesPreviewWrap">
    <div class="container">
        <div class="row">
            <div class="col-12">
                <div class="categoriesPreviewContent">
                    <h2><?php the_field( 'title' ); ?></h2>
                    <?php if ( have_rows( 'categories' ) ) : ?>
                        <div class="row row-cols-lg-3 row-cols-sm-2">
                            <?php while ( have_rows( 'categories' ) ) : the_row(); ?>
                                <?php
                                // $id = get_sub_field( 'category' );
                                $link = get_sub_field( 'link' );
                                // $term = get_term( $id );
                                // $acfField = 'types_' . $term->term_id;
                                // 			$title = (get_field( 'archive_page_title', $acfField ))? get_field( 'archive_page_title', $acfField ) : $term->name;
                                $image = get_sub_field( 'image' );
                                ?>
                                <div class="col-12">
                                    <a href="<?php echo $link['url']; ?>" class="categoriesPreview" target="<?php echo $link['target']; ?>">
                                        <div class="categoriesPreview__image">
                                            <?php
                                            if($image)
                                                printf(
                                                    '<img data-src="%s" class="lazyload" alt="%s" />',
                                                    $image['sizes']['large'],
                                                    $image['alt']
                                                );
                                            ?>
                                        </div>
                                        <div class="categoriesPreview__title">
                                            <span><?php echo $link['title']; ?></span>
                                            <svg id="icon" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><polygon fill="#9B7250" points="18 6 16.57 7.393 24.15 15 4 15 4 17 24.15 17 16.57 24.573 18 26 28 16 18 6"/></svg>
                                        </div>
                                    </a>
                                </div>
                            <?php endwhile; ?>
                        </div>
                    <?php endif; ?>
                    <div class="buttonCenter">
                        <?php if(get_field( 'link' ))
                            printf(
                                '<a href="%s" class="button button--brown button--arrow" target="%s"><span>%s</span></a>',
                                get_field( 'link' )['url'],
                                get_field( 'link' )['target'],
                                get_field( 'link' )['title'],
							);
                        ?>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>