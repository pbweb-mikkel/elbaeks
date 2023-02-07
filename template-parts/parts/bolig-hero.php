<?php 
	$title = get_the_title();
	$video = get_field( 'video' );
    $slide_count = 0;
	$status = get_field( 'status' );
    $floorplans = get_field('plantegninger');

    if($floorplans){
        usort($floorplans, function($a, $b){
            return $a['order'] - $b['order'];
        });
    }

    $boligHero = 'boligHero';
    $boligHero .= ($status == 'RESERVED')? ' boligHero--reserved' : '';
    $gallery = get_field('gallery');
?>
<div class="boligHeroWrap">
	<div class="<?= $boligHero; ?>">

		<?php if($status == 'SOLD'): ?>
			<div class="container container--sold">
				<div class="row">
					<div class="col-12">
						<span class="soldHeader">SOLGT</span>
					</div>
				</div>
			</div>
		<?php endif; ?>
		<?php if(have_rows( 'gallery' ) ) : ?>
			<div class="splide boligHeroItem boligGallery boligPhotoGallery activeMainSlider">
				<div class="splide__arrows">
					<button class="splide__arrow splide__arrow--prev">
						<svg version="1.1" id="icon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
							 viewBox="0 0 32 32" style="enable-background:new 0 0 32 32;" xml:space="preserve">
						<polygon points="22,16 12,26 10.6,24.6 19.2,16 10.6,7.4 12,6 " fill="#DDC2AC" />
						</svg>
					</button>
					<button class="splide__arrow splide__arrow--next">
						<svg version="1.1" id="icon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
							 viewBox="0 0 32 32" style="enable-background:new 0 0 32 32;" xml:space="preserve">
						<polygon points="22,16 12,26 10.6,24.6 19.2,16 10.6,7.4 12,6 " fill="#DDC2AC" />
						</svg>
					</button>
				</div>
				<div class="splide__track">
					<ul class="splide__list">
						<?php if($status !== 'SOLD'): ?>
							<?php while ( have_rows( 'gallery' ) ) : the_row(); $slide_count++; ?>
								<li class="splide__slide">
                                    <?php
                                    printf(
                                        '<img data-src="%s" alt="%s" class="lazyload" />',
                                        get_sub_field( 'image' ),
                                        $title
                                    );
                                    /*$image = wp_is_mobile() ? str_replace('/Assets/', '/Presentation/', get_sub_field( 'image' )) : get_sub_field( 'image' );
                                    printf(
                                        '<img data-src="%s" alt="%s" class="" />',
                                        $image,
                                        $title,
                                    );*/
                                    if($slide_count == 1 && get_field('open_house') && get_field('open_house_date')){
                                        echo '<div class="flags">';
                                        echo '<div class="flag flag-open-house openPopup '.(get_field('open_house_signup') ? 'signup' : '').'" data-target="openHouseSignup"><span>Åbent hus'.(get_field('open_house_signup') ? ' med tilmelding' : '').'</span><br><strong>'.get_field('open_house_date').' '.(get_field('open_house_signup') ? '</strong><br><span>Tilmeld dig her</span>' : '').'</div>';
                                        echo '</div>';
                                    }else if($slide_count == 1 && $status == 'RESERVED'){
                                        echo '<div class="flags">';
                                        echo '<div class="flag">RESERVERET</div>';
                                        echo '</div>';
                                    }
                                    ?>
								</li>
							<?php endwhile; ?>
						<?php else: ?>
							<li class="splide__slide">
								<?php printf(
									'<img data-src="%s" alt="%s" class="lazyload" />',
                                    $gallery[0]['image'],
									$title
								); ?>
							</li>
						<?php endif; ?>
					</ul>
				</div>
			</div>

            <div id="property-gallery">
            <?php
            $count = 0;
            while (have_rows('gallery')) : the_row(); $count++;

                $item_id = ' id="image-item-' . $count . '"';
                $item_class = ' class="property-gallery__item image"';

                ?>
            <a href="<?php echo get_sub_field( 'image' ); ?>" data-fancybox="property-gallery" data-type="image"<?php echo $item_id; ?><?php echo $item_class; ?>></a><?php
                $count++;
            endwhile;

            if($floorplans){
                foreach($floorplans as $f){
                    $count = 1;
                    $item_id = ' id="drawing-item-' . $count . '"';
                    $item_class = ' class="property-gallery__item drawing"';
                    $count++;
                    ?>
                <a href="<?php echo $f['image']; ?>" data-fancybox="property-gallery" data-type="image"<?php echo $item_id; ?><?php echo $item_class; ?>></a><?php
                }
            }
            ?>
            </div>
            <div class="property-intro">
                <?php printf(
                    '<img data-src="%s" alt="%s" class="lazyload" />',
                    $gallery[0]['image'],
                    $title
                ); ?>
                <a class="launch-gallery round-btn flex flex-cy flex-cx rel" data-fancybox-trigger="property-gallery"><div class="enlarge-btn rel"></div></a>
            </div>

		<?php endif; ?>

		<?php if ($floorplans && ($status !== 'SOLD') ) : ?>
			<div class="splide boligHeroItem boligGallery boligPlanGallery">
				<div class="splide__arrows">
					<button class="splide__arrow splide__arrow--prev">
						<svg version="1.1" id="icon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
							 viewBox="0 0 32 32" style="enable-background:new 0 0 32 32;" xml:space="preserve">
						<polygon points="22,16 12,26 10.6,24.6 19.2,16 10.6,7.4 12,6 " fill="#DDC2AC" />
						</svg>
					</button>
					<button class="splide__arrow splide__arrow--next">
						<svg version="1.1" id="icon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
							 viewBox="0 0 32 32" style="enable-background:new 0 0 32 32;" xml:space="preserve">
						<polygon points="22,16 12,26 10.6,24.6 19.2,16 10.6,7.4 12,6 " fill="#DDC2AC" />
						</svg>
					</button>
				</div>
				<div class="splide__track">
					<ul class="splide__list">
						<?php foreach ( $floorplans as $f ): ?>
							<li class="splide__slide">
								<?php printf(
									'<img data-src="%s" alt="%s" class="lazyload zoomD" />',
									$f['image'],
									$title
								); ?>
							</li>
						<?php endforeach; ?>
					</ul>
				</div>
			</div>
			<div id="lightbox"></div>
		<?php endif; ?>

		<?php if($video && ($status !== 'SOLD')): ?>
			<div class="boligHeroItem boligGallery boligVideoMain">
				<video width="100%" height="100%" id="boligVideo" controls>
					<source src="<?php echo $video; ?>" type="video/mp4">
					Your browser does not support the video tag.
				</video>
			</div>
		<?php endif; ?>
	</div>

	<?php //if ( have_rows( 'gallery' ) ) : ?>
<!-- 		<div class="boligHeroImageNav boligHeroGalleryNav">
			<div class="container">
				<div class="row">
					<div class="col-12">
						<div class="closeBoligNavigation">
							<svg version="1.1" id="icon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
								 viewBox="0 0 32 32" style="enable-background:new 0 0 32 32;" xml:space="preserve">
							<polygon points="22,16 12,26 10.6,24.6 19.2,16 10.6,7.4 12,6 " fill="#F9F7F5" />
							</svg>
						</div>
						<div class="splide boligGalleryNavigation boligPhotoGalleryNavigation">
							<div class="splide__track">
								<ul class="splide__list">
									<?php while ( have_rows( 'gallery' ) ) : the_row(); ?>
										<li class="splide__slide">
											<?php printf(
												'<img data-src="%s" alt="%s" class="lazyload" />',
												get_sub_field( 'image' ),
												$title
											); ?>
										</li>
									<?php endwhile; ?>
									<?php if($video): ?>
										<li class="splide__slide splideVideoNav">
											<video width="100%" height="100%" id="boligVideo" muted paused>
												<source src="<?php echo $video; ?>" type="video/mp4">
												Your browser does not support the video tag.
											</video>
										</li>
									<?php endif; ?>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div> -->
	<?php //endif; ?>

	<?php //if ( have_rows( 'plantegninger' ) ) : ?>
<!-- 		<div class="boligHeroImageNav boligHeroPlanNav">
			<div class="container">
				<div class="row">
					<div class="col-12">
						<div class="closeBoligNavigation">
							<svg version="1.1" id="icon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
								 viewBox="0 0 32 32" style="enable-background:new 0 0 32 32;" xml:space="preserve">
							<polygon points="22,16 12,26 10.6,24.6 19.2,16 10.6,7.4 12,6 " fill="#F9F7F5" />
							</svg>
						</div>
						<div class="splide boligGalleryNavigation boligPlanGalleryNavigation">
							<div class="splide__track">
								<ul class="splide__list">
									<?php while ( have_rows( 'plantegninger' ) ) : the_row(); ?>
										<li class="splide__slide">
											<?php printf(
												'<img data-src="%s" alt="%s" class="lazyload" />',
												get_sub_field( 'image' ),
												$title
											); ?>
										</li>
									<?php endwhile; ?>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div> -->
	<?php //endif; ?>

	<div id="boligMap" class="boligHeroItem">
		<div id="map"></div>
	</div>

	<div class="boligHeroNavWrap">
		<div class="container">
			<div class="row">
				<div class="col-12">
					<div class="bigHeroNav">
						<?php 
							if(get_field( 'gallery' ))
								echo '<a href="#" id="singleNavBilleder" class="singleNav singleNav--chevron singleNav--active"><span>Billeder</span><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"viewBox="0 0 32 32" style="enable-background:new 0 0 32 32;" xml:space="preserve"><polygon points="22,16 12,26 10.6,24.6 19.2,16 10.6,7.4 12,6" /></svg></a>';

							if($video && ($status !== 'SOLD'))
								echo '<a href="#" id="singleNavVideo" class="singleNav singleNav--chevron singleNav--active"><span>Video</span><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"viewBox="0 0 32 32" style="enable-background:new 0 0 32 32;" xml:space="preserve"><polygon points="22,16 12,26 10.6,24.6 19.2,16 10.6,7.4 12,6" /></svg></a>';

							if(get_field( 'plantegninger' ) && ($status !== 'SOLD'))
								echo '<a href="#" id="singleNavPlan" class="singleNav singleNav--chevron"><span>Plantegninger</span><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"viewBox="0 0 32 32" style="enable-background:new 0 0 32 32;" xml:space="preserve"><polygon points="22,16 12,26 10.6,24.6 19.2,16 10.6,7.4 12,6" /></svg></a>';

							if(get_field( 'longitude' ) && get_field( 'latitude' ))
								echo '<a href="#" id="seeMap" class="singleNav singleNav--map"><span>Vis på kort</span><svg id="icon" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><path d="M16,18a5,5,0,1,1,5-5A5.0057,5.0057,0,0,1,16,18Zm0-8a3,3,0,1,0,3,3A3.0033,3.0033,0,0,0,16,10Z"/><path d="M16,30,7.5645,20.0513c-.0479-.0571-.3482-.4515-.3482-.4515A10.8888,10.8888,0,0,1,5,13a11,11,0,0,1,22,0,10.8844,10.8844,0,0,1-2.2148,6.5973l-.0015.0025s-.3.3944-.3447.4474ZM8.8125,18.395c.001.0007.2334.3082.2866.3744L16,26.9079l6.91-8.15c.0439-.0552.2783-.3649.2788-.3657A8.901,8.901,0,0,0,25,13,9,9,0,1,0,7,13a8.9054,8.9054,0,0,0,1.8125,5.395Z"/></svg></a>';

							if(get_field( 'status' ) !== 'SOLD' && !get_field( 'pris_pa_foresporgsel'))
							echo '<a href="#" class="singleNav singleNav--center openPopup" data-target="salgsopstilling"><span>Bestil salgsopstilling</span></a>';
						?>
					</div>
				</div>
			</div>
		</div>
	</div>
	
</div>