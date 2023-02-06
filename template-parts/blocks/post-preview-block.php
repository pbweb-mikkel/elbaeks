<?php 
	$postID = get_field( 'post' );
	$image = get_the_post_thumbnail_url($postID, 'post-featured');
	$title = get_the_title( $postID );
	$url = get_the_permalink( $postID );
	$excerpt = get_the_excerpt( $postID );
	$date = get_the_date( 'j. F Y', $postID );
	$readTime = get_field( 'reading_time', $postID );
?>
<div class="postPreviewBlock">
	<div class="container">
		<div class="row">
			<div class="col-12 col-lg-6">
				<div class="postPreviewBlockImage">
					<img data-src="<?php echo $image; ?>" class="lazyload" alt="<?php echo $title; ?>" data-expand="400" />
				</div>
			</div>
			<div class="col-12 col-lg-6">
				<div class="postPreviewContent">
					<h2><?php echo $title; ?></h2>
					<div class="postPreviewContent__time">
						<span class="postPreviewContent__time__date"><?php echo $date; ?></span>
						<span class="postPreviewContent__time__reading"><?php echo $readTime; ?></span>
					</div>
					<p><?php echo $excerpt; ?></p>
					<a href="<?php echo $url; ?>" class="button button--green button--arrow"><span>Læs artikel</span></a>
				</div>
			</div>
		</div>
	</div>
</div>