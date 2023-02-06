<?php 
	$args = array(
		'post_type' => 'post',
		'posts_per_page' => -1
	);

	$the_query = new WP_Query( $args );
?>
<div class="blogWrap">
	<div class="container">
		<div class="row">
			<div class="col-12">
				<div class="blogTitle">
					<h1><?php the_field('title') ?></h1>
					<?php the_field( 'text' ); ?>
				</div>
			</div>
		</div>
		<?php if ( $the_query->have_posts() ) : ?>
			<div class="row row-cols-md-2 row-cols-lg-3">
				<?php while ( $the_query->have_posts() ) : $the_query->the_post(); ?>
					<div class="col-12">
						<div class="singleArticle">
							<div class="singleArticle__content">
								<a href="<?php the_permalink(); ?>" class="singleArticle__content__image">
									<img data-src="<?php echo get_the_post_thumbnail_url(get_the_ID(), 'large'); ?>" class="lazyload" alt="<?php the_title(); ?>" />
								</a>
								<a href="<?php the_permalink(); ?>"><h2><?php the_title(); ?></h2></a>
								<div class="postPreviewContent__time">
									<span class="postPreviewContent__time__date"><?php echo get_the_date( 'j. F Y', get_the_ID() ); ?></span>
									<span class="postPreviewContent__time__reading"><?php the_field( 'reading_time', get_the_ID() ); ?></span>
								</div>
							</div>
							<div class="buttonCenter">
								<a href="<?php the_permalink(); ?>" class="button button--brown2 button--arrow">
									<span>Læs artikel</span>
								</a>
							</div>
						</div>
					</div>
				<?php endwhile; ?>
			</div>
		<?php endif; ?>
	</div>
</div>