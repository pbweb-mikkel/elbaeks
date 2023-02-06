<?php 

	$btn = (get_field( 'size' ) == 'default')? 'button--green' : 'button--brown';

?>
<div class="pagePreviewWrap pagePreviewWrap--<?php the_field( 'size' ); ?>">
	<div class="container">
		<div class="row row--reverse">
			<div class="col-12 col-lg-6">
				<div class="pagePreviewImage">
					<?php if(get_field( 'image' ))
							printf(
								'<img data-sizes="auto" data-srcset="%s %sw, %s %sw" class="lazyload" alt="%s" />',
								get_field( 'image' )['sizes']['medium'],
								get_field( 'image' )['sizes']['medium-width'],
								get_field( 'image' )['sizes']['large'],
								get_field( 'image' )['sizes']['large-width'],
								get_field( 'image' )['alt']
							);
					?>
				</div>
			</div>
			<div class="col-12 col-lg-6">
				<div class="pagePreviewContent">
					<?php 
						if(get_field( 'size' ) == 'default'){
							printf('<h2>%s</h2>', get_field( 'title' ));
						}else{
							printf('<h1>%s</h1>', get_field( 'title' ));
						}
						the_field( 'text' );
						if(get_field( 'show_popup' ))
							printf(
								'<a href="#" data-target="vurdering" class="button %s button--arrow openPopup"><span>%s</span></a>',
								$btn,
								get_field( 'button_text' )
							);
					?>
				</div>	
			</div>
		</div>
	</div>
</div>

<?php if(get_field( 'show_popup' )): ?>
	<?php get_template_part('template-parts/parts/vurdering', 'template'); ?>
<?php endif; ?>