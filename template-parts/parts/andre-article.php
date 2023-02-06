<?php 

$postID = get_the_ID();
$post_count = 3;
$args = array( 
    'post_type' 			=> 'post',
	'posts_per_page' 		=> 3,
    'post_status' 			=> 'publish',
	'order'					=> 'DESC',
	'orderby'				=> 'date',
	'ignore_sticky_posts'	=> true,
	'post__not_in'			=> array($postID)
);
$query = new WP_Query( $args ); 

if ( $query->have_posts() ): ?>
	<div class="andreWrap">
		<div class="container">
			<div class="row">
				<div class="col-12">
					<h3>Andre artikler</h3>
				</div>
			</div>
			<div class="row row-cols-lg-3 row-cols-md-2">
				<?php while ( $query->have_posts() ): $query->the_post();

					?>
					<div class="col-12">
						<a href="<?php the_permalink(); ?>" class="singleAndre">
							<div class="singleAndre__image">
					            <?php printf(
					                    '<img data-src="%s" class="lazyload" alt="%s" />',
					                    get_the_post_thumbnail_url(get_the_ID(), 'large'),
					                    get_the_title()
					                );
					            ?>
							</div>
							<span class="singleAndre__content">
								<h4><?php the_title(); ?></h4>
								<div class="postPreviewContent__time">
									<span class="postPreviewContent__time__date"><?php echo get_the_date( 'j. F Y', get_the_ID() ); ?></span>
									<span class="postPreviewContent__time__reading"><?php the_field( 'reading_time', get_the_ID() ); ?></span>
								</div>
							</span>	
						</a>
					</div>
				<?php endwhile; ?>
			</div>
		</div>
	</div>
<?php 
endif;
wp_reset_postdata();
?>