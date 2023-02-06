<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
	<div class="postWrap">
		<div class="container">
			<div class="row">
				<div class="col-12">
					<div class="postImage">
						<img src="<?php echo get_the_post_thumbnail_url(get_the_ID(), 'post-large'); ?>" alt="<?php the_title(); ?>" />
					</div>
				</div>
				<div class="col-12 col-md-1 offset-lg-1">
					<?php get_template_part('template-parts/parts/share', 'widgets'); ?>
				</div>
				<div class="col-12 col-md-11 col-lg-9">
					<div class="postContent">
						<h1><?php the_title(); ?></h1>
						<div class="postPreviewContent__time">
							<span class="postPreviewContent__time__date"><?php echo get_the_date( 'j. F Y', get_the_ID() ); ?></span>
							<span class="postPreviewContent__time__reading"><?php the_field( 'reading_time', get_the_ID() ); ?></span>
						</div>
						<div class="postContent__inner">
							<?php the_content(); ?>
						</div>
					</div>
				</div>		
			</div>
		</div>
	</div>
	<?php get_template_part('template-parts/parts/andre', 'article'); ?>
</article><!-- #post-<?php the_ID(); ?> -->
