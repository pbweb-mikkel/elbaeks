<div class="imageTextWrap">
	<?php if ( have_rows( 'block' ) ) : ?>
		<?php while ( have_rows( 'block' ) ) : the_row(); ?>
			<div class="imageTextBlockWrap">
				<div class="container">
					<div class="row">
						<div class="col-lg-6 col-12">
							<div class="imageTextImage">
								<?php 
									if(get_sub_field( 'image' ))
										printf(
											'<img  data-src="%s" class="lazyload" alt="%s" />',
											get_sub_field( 'image' )['sizes']['large'],
											get_sub_field( 'image' )['alt']
										);
								?>
							</div>
						</div>
						<div class="col-12 col-lg-6">
							<div class="imageTextText">
								<h3><?php the_sub_field( 'title' ); ?></h3>
								<?php the_sub_field( 'text' ); ?>
								<?php 
									if(get_sub_field( 'button' ))
										printf(
											'<a href="%s" class="button button--arrow button--brown" target="%s"><span>%s</span></a>',
											get_sub_field( 'button' )['url'],
											get_sub_field( 'button' )['target'],
											get_sub_field( 'button' )['title'],
										);
								?>
							</div>
						</div>
					</div>
				</div>
			</div>
		<?php endwhile; ?>
	<?php endif; ?>
</div>