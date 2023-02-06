<div class="aboutUsWrap">
	<div class="container">
		<div class="row">
			<div class="col-12">
				<div class="aboutUsTitle">
					<h1><?php the_field( 'title' ); ?></h1>
					<h2><?php the_field( 'subtitle' ); ?></h2>
				</div>
			</div>
		</div>
	</div>
	<div class="aboutUsImageWrap">
		<div class="container--large">
			<div class="row">
				<div class="col-12">
					<div class="aboutUsImage">
						<?php 
							if(get_field( 'image' ))
								printf(
									'<img data-src="%s" class="lazyload" alt="%s" />',
									get_field( 'image' )['sizes']['post-featured'],
									get_field( 'image' )['alt']
								);
						?>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="aboutUsContent">
		<div class="container">
			<div class="row">
				<div class="col-12">
					<div class="aboutUsText">
						<?php the_field( 'text' ); ?>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>